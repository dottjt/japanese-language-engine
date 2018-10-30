import ApolloClient from 'apollo-boost';

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_SENTENCE_STATS,
} from '../util/constants/typeNameConstants';

import { index, sentenceTypes, optionTypes } from './types';
import mutations from './mutations';

import allWords from '../util/words/collection';

const defaults = {
  nouns: allWords,
  sentenceDisplayOptions: {
    toggleSentenceStats: true,
    toggleSentenceOrder: false, 
    toggleSentenceHide: true,
    __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  },
  sentenceStats: {
    topicHover: false,
    subjectHover: false,
    verbHover: false,

    tenseHover: false,
    polarityHover: false,
    politenessHover: false,
    questionHover: false,
    selectedExerciseNumber: 0,
    __typename: __TYPENAME_SENTENCE_STATS,
  },
  // exercises: null,
};

const resolvers = { Mutation: { ...mutations, } };
const typeDefs = [ index, sentenceTypes, optionTypes ];

const client = new ApolloClient({
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
});

export default client;
