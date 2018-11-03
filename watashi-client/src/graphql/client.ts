// import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';

import {
  __TYPENAME_CONTROL_PANEL_OPTIONS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_SENTENCE_STATS,
} from '../util/constants/typeNameConstants';

import { index, sentenceTypes, optionTypes } from './types';
import mutations from './mutations';

import allWords from '../util/words/collection';

const defaults = {
  nouns: allWords,
  exercises: null,
  controlPanelOptions: {
    controlPanelPoliteness: null,
    controlPanelVariation: null,
    controlPanelPolarity: null,
    controlPanelTense: null,
    controlPanelGender: null,
    controlPanelQuestion: null,
    controlPanelSentenceEnding: null,
    __typename: __TYPENAME_CONTROL_PANEL_OPTIONS,
  },
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
};

const preloadedState = (<any>window).__APOLLO_STATE__;

delete (<any>window).__APOLLO_STATE__;

const cache = new InMemoryCache().restore(preloadedState);

const stateLink = withClientState({
  cache,
  defaults,
  resolvers: { Mutation: { ...mutations, } },
  typeDefs: [ index, sentenceTypes, optionTypes ],
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink({uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'})]),
});

(<any>window).snapSaveState = () => ({
  __APOLLO_STATE__: client.extract(),
});

export default client;
