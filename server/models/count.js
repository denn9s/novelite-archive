const mongoose = require('mongoose');

const CountSchema = mongoose.Schema({
    count: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Count", CountSchema);
