require('dotenv').config();

const mongoose = require('mongoose');
const fs = require('fs');

const { SearchMode } = require("@the-convocation/twitter-scraper");
const { scraper, login } = require('../services/scraper_login');

const Story = require('../models/story');

const file_name = 'config.json';
const file_dir = `../${file_name}`;
const config = require(file_dir);

async function _getTweets(last_updated_date_obj) {
    /**
     * searches Twitter to get any new tweets under the hashtag and cleans up the data for the DB
     * 
     * @param {Date} last_updated_date_obj - date obj for most recent db update
     * @returns {Array.<Story>} a list of Story objects
     */
    
    await login()

    // not the best approach here but i think it might be fine, should probably do something else lol
    story_hashtag = '#ShiorinStories';
    start_date = `since:${last_updated_date_obj.toISOString().split('T')[0]}`;
    exclude = 'exclude:replies';
    query = `${story_hashtag} ${start_date} ${exclude}`;
    let tweet_search_res = scraper.searchTweets(
        query=query, 
        maxTweets=10000, 
        includeReplies=false,
        searchMode=SearchMode.Latest);
    let story_objects = [];
    for await (const tweet of tweet_search_res) {
        let tweet_id = tweet.conversationId;
        const story = new Story({
            username: tweet.username,
            tweet_id: tweet_id,
            text: tweet.text,
            timestamp: tweet.timeParsed,
            link: `https://www.twitter.com/i/status/${tweet_id}`,
            attached_images: tweet.photos.map(link => link.url),
        });
        story_objects.push(story);
    }
    return story_objects;
}

async function _saveTweets(story_objects) {
    /**
     * saves tweets to MongoDB and updates config last updated timestamp
     * 
     * @param {Array.<Story>} story_objects - list of Story objects
     */
    await Story.insertMany(story_objects, {ordered: false}).then(function(res) {
        console.log(`successfully inserted ${res.length} entries to the DB`);
    }).catch(function(err) {
        console.log(err);
    })

    config.lastUpdated =  new Date(Date.now()).toISOString();
    fs.writeFile(file_name, JSON.stringify(config), function (err) {
        if (err) return console.log(err);
        console.log(`updated ${file_name} with latest run date: ${config.lastUpdated}`);
    });
}

async function updateDB() {
    /**
     * gets new tweets and pushes new tweets to DB (if any)
     */
    let last_updated_date_obj = new Date(config.lastUpdated);

    let story_objects = await _getTweets(last_updated_date_obj);
    if (story_objects) {
        await _saveTweets(story_objects);
    } else {
        console.log('no new stories to add to DB');
    }
    mongoose.connection.close();
}

module.exports = { updateDB };
