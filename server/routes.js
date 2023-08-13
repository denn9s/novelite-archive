const express = require('express');
const controller = require('./controller');

var router = express.Router();

router.route('/randomStory/').get(controller.getRandomStory);

router.route('/storyReadCount/').get(controller.getReadStoryCount);

router.route('/storyReadCount/').post(controller.incrementReadStoryCount);

module.exports = router;