// import ApolloClient from 'apollo-boost';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';

import {
  __TYPENAME_USER,
  __TYPENAME_CONTROL_PANEL_OPTIONS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_CONJUGATED_ENGLISH_VERB,
} from '../util/constants/typeNameConstants';

import { index, sentenceTypes, optionTypes } from './types';

import { nounWords, verbWords } from '../util/words/collection';
// import { contextSubjectRoleArrayLength } from '../util/constants/contextConstants';

const defaults = {
  nouns: nounWords,
  verbs: verbWords,
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
  // exercises, // exists 
  // preOptions, // exists 
  // preModifiers, // exists
  // preSentenceContext, // exists
  // user, // exists
};

const preloadedState = (<any>window).__APOLLO_STATE__;

delete (<any>window).__APOLLO_STATE__;

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: "UNION",
          name: "EnglishSentence",
          possibleTypes: [
            {name: "ConjugatedEnglishNoun"},
            {name: "ConjugatedEnglishVerb"},
            {name: "ConjugatedEnglishPreposition"}                    
          ]
        },
        {
          kind: "UNION",
          name: "JapaneseSentence",
          possibleTypes: [
            {name: "ConjugatedJapaneseNoun"},
            {name: "ConjugatedJapaneseVerb"}
          ]
        }
      ]
    }
  }
});

const cache = new InMemoryCache({ fragmentMatcher }).restore(preloadedState);

const stateLink = withClientState({
  cache,
  defaults,
  resolvers: {
    Query: {},
    Mutation: {},
    // EnglishSentence: {
    //   __resolveType(obj, context, info) {
    //     if (obj.nounDeclension) {
    //       return 'ConjugatedEnglishNoun';
    //     }
    //     if (obj.verbConjugation) {
    //       return 'ConjugatedEnglishVerb';
    //     }
    //     if (obj.preposition) {
    //       return 'ConjugatedEnglishPreposition'
    //     }
    //     return null;
    //   }
    // },
    // JapaneseSentence: {
    //   __resolveType(obj, context, info) {
    //     if (obj.nounTopicParticle) {
    //       return 'ConjugatedJapaneseNoun' 
    //     }
    //     if (obj.verbStem) {        
    //       return 'ConjugatedJapaneseVerb'
    //     }
    //     return null;
    //   }
    // }
  },
  typeDefs: [ index, sentenceTypes, optionTypes ],
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink({ uri: 'http://localhost:4000/graphql' })]),
});

(<any>window).snapSaveState = () => ({
  __APOLLO_STATE__: client.extract(),
});

export default client;
