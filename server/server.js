const cron = require('node-cron');
const cors = require('cors');
const express = require('express');
const rateLimit = require('express-rate-limit')

const routes = require('./routes');
const { updateDB } = require('./services/update_stories');
const { login } = require('./services/scraper_login');

const app = express();
const port = 6969;

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 1000, // 1000 request per window
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(cors());
app.use(limiter);

cron.schedule('59 23 * * *', function() {
    console.log('running scheduled job')
    updateDB();
});

app.use('', routes);

app.listen(port, '0.0.0.0', () => {
    console.log(`starting server on port ${port}`);
    login();
});
