const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'username'
    },

    date: {
        type: Schema.Types.ObjectId,
        ref: 'date',
    },
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;