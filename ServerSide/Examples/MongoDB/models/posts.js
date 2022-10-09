const mongoose = require('mongoose');

const postModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comments: {
        type: [{ 
                author: {
                    type: String,
                    required: true
                },
                text: {
                    type: String,
                    required: true
                }
            }],
        required: false
    },
    likes: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Post", postModel);