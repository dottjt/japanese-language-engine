import ApolloClient from "apollo-boost";

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from "../util/constants/optionsConstants";

import allWords from "../util/words/collection";

const client = new ApolloClient({
  clientState: {
    defaults: {
      nouns: allWords,
      sentenceDisplayOptions: {
        showSentenceStats: true,
        __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
      }
    },
    resolvers: {
      Mutation: {
        updateOptionsTone: async (_: any, { value }: any, { cache, getCacheKey }: any) => {
          await cache.writeData({
            data: { options: { politeness: value } }
          });
          return null;
        }
      }
    },
    typeDefs: `
      type SentenceDisplayOptions {
        showSentenceStats: Boolean
      }

      type TypeMeta {
        verbType: String
      }

      type Word {
        japanese: String
        english: String
        primaryType: String
        category: [ String ]
        meta: TypeMeta
      }

      type Mutation {
        updateOptionsTone(value: String)
      }

      type Query {
        sentenceDisplayOptions: SentenceDisplayOptions
        nouns: [Word]
      }
    `
  },
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
});

export default client;
