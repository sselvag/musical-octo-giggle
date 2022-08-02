const { posts, authors, clients } = require('../sampleData.js')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLScalarType, GraphQLSchema } = require('graphql');

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return authors.find(author => author.id === args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})