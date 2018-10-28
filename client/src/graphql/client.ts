import ApolloClient from 'apollo-boost';

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_SENTENCE_STATS,
} from '../util/constants/typeNameConstants';

import {
  LESSON_PATH,
  LESSON_OPTIONS,
} from '../util/constants/lessonConstants';

import {
  index, 
  sentenceTypes,
  optionTypes,
} from './types';

import allWords from '../util/words/collection';
import generateExercises from 'src/util/conjugations/generateExercises';

import mutations from './mutations';

const determineGetExercise = (path: string): Util.EnglishJapaneseOptionsSentence[] => {
  switch(path) {
    case LESSON_PATH.L001: return generateExercises(allWords, LESSON_OPTIONS.L001, 10);
    case LESSON_PATH.L002: return generateExercises(allWords, LESSON_OPTIONS.L002, 10);
    case LESSON_PATH.L003: return generateExercises(allWords, LESSON_OPTIONS.L003, 10);
    case LESSON_PATH.L004: return generateExercises(allWords, LESSON_OPTIONS.L004, 10);
    case LESSON_PATH.L005: return generateExercises(allWords, LESSON_OPTIONS.L005, 10);
    case LESSON_PATH.L006: return generateExercises(allWords, LESSON_OPTIONS.L006, 10);
    case LESSON_PATH.L007: return generateExercises(allWords, LESSON_OPTIONS.L007, 10);
    case LESSON_PATH.L008: return generateExercises(allWords, LESSON_OPTIONS.L008, 10);
    case LESSON_PATH.L009: return generateExercises(allWords, LESSON_OPTIONS.L009, 10);
    default: return generateExercises(allWords, LESSON_OPTIONS.L001, 10);
  };
};

const locationPath = window.location.pathname;

const defaults = {
  nouns: allWords,
  sentenceDisplayOptions: {
    showSentenceStats: true,
    __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  },
  sentenceStats: {
    polarityHover: false,
    nounPastHover: false,
    selectedExerciseNumber: 0,
    __typename: __TYPENAME_SENTENCE_STATS,
  },
  exercises: determineGetExercise(locationPath),
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
