const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/posts');


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/posts', async (req, res) => {
    /*ToDo 1: Get all the posts using the find function and return the result, if error return status 400 */
    await Post.find({}).toArray(function (err, result) {
        if (err) {
            res.writeHead(404);
            res.end();
        } else {
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end(result);
        }
    });
});

app.get('/post/maximumLikes', async (req, res) => {
    /*ToDo 2: Find the post with maximum likes and return the result */
    await Post.find({}).sort({ likes: -1 }).toArray(function (err, result) {
        if (err) {
            res.writeHead(404);
            res.end();
        } else {
            res.writeHead(200, { 'Content-type': 'text' })
            res.end(result[0]);
        }
    });
});

app.get('/posts/leastLikes', async (req, res) => {
    /*ToDo 2: Find post with minimum likes from the database and return the result*/
    await Post.find().sort({ likes: 1 }).toArray(function (err, result) {
        if (err) {
            res.writeHead(404);
            res.end();
        } else {
            res.writeHead(200, { 'Content-type': 'text' })
            res.end(result[0]);
        }
    });
});

/*ToDo 3: Export the app*/
module.exports = app;