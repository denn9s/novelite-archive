require('dotenv').config()

const mongoose = require('mongoose');

const Story = require('./models/story');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("MongoDB connection successful!");
    })
    .catch(err => {
        console.log("Error! MongoDB connection unsuccessful!");
        console.log(err);
    });

async function getRandomStory(req, res) {
    const aggregation = await Story.aggregate([
        { $sample: { size: 10 }}
    ]);
    story = aggregation[0];
    res.json({
        username: story.username,
        id: story.tweet_id,
        text: story.text,
        timestamp: story.timestamp,
        link: story.link,
        attached_images: story.attached_images,
    });
}

exports.getRandomStory = getRandomStory;