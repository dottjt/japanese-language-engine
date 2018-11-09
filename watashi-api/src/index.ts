require('reflect-metadata');
const requireGraphQLFile = require('require-graphql-file');
const typeDefs = requireGraphQLFile('./graphql/typeDefs/schema.graphql');
const { GraphQLServer } = require('graphql-yoga');

// resolvers
const { userQuery, userMutation } = require('./resolvers/userResolvers');

const resolvers = {
  Query: {
    ...userQuery,
  },
  Mutation: {
    ...userMutation,
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
