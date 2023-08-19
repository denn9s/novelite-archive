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


function isImgUrl(url) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('Image URL is valid');
            } else {
                console.log('Image URL is invalid');
            }
        })
        .catch(error => {
            console.error('Error validating image URL:', error);
        });
}

function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

async function validateLinks() {
    let stories = await Story.find();
    const maxDuration = 2000; // 2 seconds
    const randomDuration = Math.random() * maxDuration;
    for (story of stories) {
        if (story.attached_images.length > 0) {
            await sleep(randomDuration);
            console.log(story.tweet_id);
            isImgUrl(story.attached_images[0])
        }
    }
}

validateLinks();