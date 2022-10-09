const mongoose = require('mongoose');

const itemScehma = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const cartSchema = mongoose.Schema({
    items: {
        type: [itemScehma],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Cart", cartSchema);