import ApolloClient from "apollo-boost";

import {
  __TYPENAME_OPTIONS,
  POLITENESS_CASUAL,
  POLARITY_POSITIVE,
  TOPIC_PREDICATE
} from "../util/constants";

import allWords from "../util/words";

const client = new ApolloClient({
  clientState: {
    defaults: {
      nouns: allWords,
      options: {
        __typename: __TYPENAME_OPTIONS,
        politeness: POLITENESS_CASUAL,
        sentenceType: TOPIC_PREDICATE,
        variation: POLARITY_POSITIVE
      }
    },
    resolvers: {
      Mutation: {
        updateOptionsTone: async (
          _: any,
          { value }: any,
          { cache, getCacheKey }: any
        ) => {
          await cache.writeData({
            data: { options: { politeness: value } }
          });
          return null;
        }
      }
    },
    typeDefs: `
      type Options {
        politeness: String
        sentenceType: String
        variation: String
      }

      type TypeMeta {
        iDontKnowYet: String
      }

      type Word {
        japanese: String
        english: String
        primaryType: String
        category: [ String ]
        typeMeta: TypeMeta
      }

      type Mutation {
        updateOptionsTone(value: String)
      }

      type Query {
        options: Options
        nouns: [Word]
      }
    `
  },
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
});

export default client;
