const express = require('express');
const controller = require('./controller');

var router = express.Router();

router.route('/api/randomStory/').get(controller.getRandomStory);

module.exports = router;