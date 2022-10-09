const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/posts');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    Post.find()
    .then(result => res.json(result))
    .catch((e) => res.status(400).json({ message: e.message }));
});

app.get('/post/maximumLikes', (req, res) => {
    Post.find({}).sort({ likes: -1 }).limit(1)
        .then(result => {
            res.json(result[0])
        });
});

module.exports = app;