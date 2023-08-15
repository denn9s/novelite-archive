const mongoose = require('mongoose');

const StorySchema = mongoose.Schema({
    username: { 
        type: String, 
        required: true,
    },
    tweet_id: { 
        type: String, 
        required: true, 
        unique: true,
    },
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    attached_images: { 
        type: [String], 
        required: true,
    },
});

module.exports = mongoose.model("Story", StorySchema);
