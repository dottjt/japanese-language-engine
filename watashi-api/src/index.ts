import 'reflect-metadata';

import { GraphQLServer } from 'graphql-yoga';

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    getCurrentUser: (_, { accessToken }) => {
      
      return '';
      // go to the database and get the current user.
    },
  },
};

const server = new GraphQLServer({ typeDefs: './graphql/typeDefs/schema.graphql', resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
