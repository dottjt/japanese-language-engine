require('reflect-metadata');

const requireGraphQLFile = require('require-graphql-file');
const typeDefs = requireGraphQLFile('./graphql/typeDefs/schema.graphql');

const { GraphQLServer } = require('graphql-yoga');
const { createConnection } = require('typeorm');

console.log('yolo');

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

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};


const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, ({ port }) => {
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  );

  createConnection().then(async connection => {}).catch(error => console.log(error));
});
