import ApolloClient from "apollo-boost";

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_SENTENCE_STATS,
} from "../util/constants/optionsConstants";

import allWords from "../util/words/collection";

import router from '../router';

// const generateExercises

console.log(router);

const client = new ApolloClient({
  clientState: {
    defaults: {
      nouns: allWords,
      sentenceDisplayOptions: {
        showSentenceStats: true,
        __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
      },
      sentenceStats: {
        nounPolarityHover: false,
        nounPastHover: false,
        selectedExerciseNumber: 0,
        __typename: __TYPENAME_SENTENCE_STATS,
      },
      // exercises: {

      // }
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
    typeDefs:`
      type SentenceStats {
        nounPolarityHover: Boolean
        nounPastHover: Boolean
        selectedExerciseNumber: Int
      }

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
        sentenceStats: SentenceStats
        sentenceDisplayOptions: SentenceDisplayOptions
        nouns: [Word]
      }
    `
  },
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
});

export default client;
