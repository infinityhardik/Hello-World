const Post = require('./models/posts');

const refreshAll = async(data) => {
    await Post.deleteMany({});

    await Post.insertMany(data);
}

module.exports = { refreshAll };

