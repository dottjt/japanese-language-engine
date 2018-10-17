import ApolloClient from "apollo-boost";

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from "../util/constants/constants";

import allWords from "../util/words";

const client = new ApolloClient({
  clientState: {
    defaults: {
      nouns: allWords,
      sentenceDisplayOptions: {
        showSentenceHints: true,
        __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
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
      type SentenceDisplayOptions {
        showSentenceHints: Boolean
      }

      type TypeMeta {
        iDontKnowYet: String
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
