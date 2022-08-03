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
    },

    Mutation: {
        // Creates a New User
        createUser: async (parent, {username, first_name, last_name, email, password}) =>
        {
            const newUser = new User ({
                username, 
                first_name,
                last_name,
                email,
                password,
            });

            const user = await newUser.save();
        },

        // Logs in to the User Account 
        login: async (parent, { username, password}) => {

            // Incorrect Email or Password
            const errorMessage = 'Incorrect Email or Password !';

            // Finds a Userin the Database
            const user = await User.findOne({username});

            // No User Found
            if (!user) {
                throw new AuthenticationError(errorMessage)
            }

            return {user};
        },

        //add a new Post to our database
		addPost: async (parent, { body, user_id }) => {
			//create new model for our db
			const newPost = new Post({ body, user_id });

			//save model to database
			const Post = await newPost.save();

			//return Post
			return Post;
		},

		//update Post
		updatePost: async (parent, { id, body }) => {
			const updatedPost = await Post.findByIdAndUpdate(id, { body });

			return updatedPost;
		},

		//delete Post
		deletePost: async (parent, { id }) => {
			//get Post by id and delete
			const deletePost = await Post.findByIdAndDelete(id);

			return true;
		},
    }
}