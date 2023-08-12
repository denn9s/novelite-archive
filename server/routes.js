const express = require('express');
const controller = require('./controller');

var router = express.Router();

router.route('/api/randomStory/').get(controller.getRandomStory);

router.route('/api/storyReadCount/').get(controller.getReadStoryCount);

router.route('/api/storyReadCount/').post(controller.incrementReadStoryCount);

module.exports = router;