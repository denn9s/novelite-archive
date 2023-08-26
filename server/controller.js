require('dotenv').config()

const mongoose = require('mongoose');

const Story = require('./models/story');
const Count = require('./models/count');
const story = require('./models/story');

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
        { $sample: { size: 1 }}
    ]);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let story_object = aggregation[0];
    res.json({
        username: story_object.username,
        id: story_object.tweet_id,
        text: story_object.text,
        timestamp: story_object.timestamp.toLocaleDateString(),
        attached_images: story_object.attached_images,
    });
}

async function getReadStoryCount(req, res) {
    let count_object = await Count.findOne({})
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({
        count: count_object.count,
    })
}

async function incrementReadStoryCount(req, res) {
    let count_object = await Count.findOneAndUpdate({}, {$inc:{count:1}},{new:true});
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({
        count: count_object.count,
    })
}

async function getStories(req, res) {
    let stories = await Story.find().select(["-_id", "-__v"]);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(stories);
}

async function getSingleStory(req, res) {
    const { tweet_id } = req.params;
    const story_object = await Story.findOne({tweet_id: tweet_id});
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // TODO: return something to indicate story doesn't exist
    if (story_object == null) {
        return;
    }
    res.json({
        username: story_object.username,
        id: story_object.tweet_id,
        text: story_object.text,
        timestamp: story_object.timestamp.toLocaleDateString(),
        attached_images: story_object.attached_images,
    });
}

exports.getRandomStory = getRandomStory;
exports.getReadStoryCount = getReadStoryCount;
exports.incrementReadStoryCount = incrementReadStoryCount;
exports.getStories = getStories;
exports.getSingleStory = getSingleStory;
