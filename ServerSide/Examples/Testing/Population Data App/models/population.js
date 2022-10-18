const mongoose = require('mongoose');

const populationSchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    totalPopulation: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Population", populationSchema);