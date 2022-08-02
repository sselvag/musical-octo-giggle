const { Post } = require('../models');

const resolvers = {
    Query: {
        posts: async () => {
            return Post.find().sort({ createdAt: -1 });
        },
        post: async (parent, { postId }) => {
            return Post.findone({ _id: postId});
        },
    },

    Mutation: {
        addPost: async (parent, { postText, postAuthor}) => {
            return Post.create({ postText, postAuthor});
        },
        addComment: async (parent, { postId, commentText}) => {
            return Post.findOneAndUpdate(
                { _id: postId },
                {
                    $addToSet: { comment: { commentText }},
                },
                {
                    new: true,
                    runValidator: true,
                }
            );
        },
        removePost: async ( parent, { postId }) => {
            return Post.findOneAndDelete({ _id: postId });
        },
        removeComment: async ( parent, { postId, commentId}) => {
            return Post.findOneAndUpdate(
                { _id: postId},
                { $pill: {comments: { _id: commentId }}},
                { new: true }
            );
        },
    },
};

module.exports = resolvers;