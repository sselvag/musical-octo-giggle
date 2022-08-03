require('dotenv').config();
const {
	User,
	Post
} = require('../models');
const { signToken } = require('../utlis/auth');
const { AuthenticationError } = require('apollo-server-express');
const { GraphQLUpload } = require('graphql-upload');
const moment = require('moment');

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        //Finds all Users
        users: async () => {
            return User.find({})
        },

        //Find User by _id
        user: async (parent, {id}) => {
            return User.findById(id).populate('users')
        },

        //Find All of a Users Posts
		userPosts: async (parent, { user_id }) => {
			const currentPosts = await Post.find({})
				.populate('user_id')
				.populate('post_id');

			const usersPosts = currentPost.filter(
				(post) => post.user_id._id == user_id
			);

			return usersPosts;
		},
    }
}