const { gql } = require('applollo-server-express');

const typeDefs = gql`

type User{
    _id: ID
    username: String
    first_name: String
    last_name: String
    email: String
    password: String
    post: [post]
}

type Post {
	_id: ID!
	body: String!
	date: String!
	user_id: User!
}

type Query {
    users: [User]1
    user(id: ID!): User!
    posts: [Post]
}

type Mutation {
    createUser(
        username: String!
        first_name: String!
        last_name: String!
        email: String!
        password: String!
    ): Auth
    login(username: String! || email: String!, password: String!): Auth
    postPost(body: String!, user_id: ID!, locationID: ID!): Post!
    deletePost(id: ID!): Boolean!
    updatePost(body: String!, id: ID!): Post!
    }
`

module.exports = typesDefs;