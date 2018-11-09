import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';

// resolvers
import { userQuery, userMutation } from './resolvers/userResolvers';

const resolvers = {
  Query: {
    ...userQuery,
  },
  Mutation: {
    ...userMutation,
  }
};

const server = new GraphQLServer({ typeDefs: './graphql/typeDefs/schema.graphql', resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
