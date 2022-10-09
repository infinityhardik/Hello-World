const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/posts');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/posts/leastLikes', (req, res) => {
    Post.find({}).sort({ likes: 1 }).limit(1)
        .then(result => {
            res.json(result[0])
        });
});

module.exports = app;