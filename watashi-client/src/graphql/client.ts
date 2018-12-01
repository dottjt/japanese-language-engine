// import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';

// import gql from 'graphql-tag';

import {
  __TYPENAME_USER,
  __TYPENAME_CONTROL_PANEL_OPTIONS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_CONJUGATED_ENGLISH_VERB,
  __TYPENAME_PRE_OPTIONS,
} from '../util/constants/typeNameConstants';

import { index, sentenceTypes, optionTypes } from './types';

import { nounWords, verbWords, adjectiveWords } from '../util/words/collection';
// import { contextSubjectRoleArrayLength } from '../util/constants/contextConstants';

// import { getExercisesApollo } from '../util/conjugations/generateExercises';


import GET_NOUNS_VERBS_AND_PRE_OPTIONS from './queries/getNounsVerbsAndPreOptionsQuery';
import GET_EVERYTHING from './queries/getEverything';

import { determineGetExercise } from '../util/conjugations/generateExercises';


const defaults = {
  loadCounter: 0,
  nouns: nounWords,
  verbs: verbWords,
  adjectives: adjectiveWords,
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
  // exercises: null, // exists 
  // preOptions: null, // exists 
  // preModifiers: null, // exists
  // preSentenceContext: null, // exists
  // user: null, // exists
};

const preloadedState = (<any>window).__APOLLO_STATE__;

delete (<any>window).__APOLLO_STATE__;

const cache = new InMemoryCache().restore(preloadedState);

const stateLink = withClientState({
  cache,
  defaults,
  resolvers: {
    Query: {},
    Mutation: {
      modifyPreOptions: (_, { arrayValue, currentArray }, { cache, getCacheKey }) => {
        const currentArrayHasValue = currentArray.filter(value => value === arrayValue);
        if (currentArrayHasValue.length > 0) {
          console.log('wrend')
        } else {      
          console.log('wrend not')
          cache.writeData({
            data: {
              preOptions: {
                politenessArray: currentArray.concat(arrayValue),
                __typename: __TYPENAME_PRE_OPTIONS, // this.getTypename(this.props.type),
              },
            },
          });
        }
        cache.writeData({ data: { loadCounter: 0 } });
        // const data = cache.readQuery({ query: gql`{ preOptions { politenessArray } }` }) as any;
        return null;
      },
      populateEverything: (_, { preOptions, preModifiers, preSentenceContext, path }, { cache, getCacheKey }) => {
        cache.writeData({ data: { preOptions, preModifiers, preSentenceContext, user: null } });        
        const data = cache.readQuery({ query: GET_NOUNS_VERBS_AND_PRE_OPTIONS }) as any;
        const numberOfExercices = path === '/' ? 1 : 10;
        cache.writeData({ data: { exercises: determineGetExercise(data.nouns, data.verbs, data.adjectives, path, data.preOptions, data.preModifiers, data.preSentenceContext, numberOfExercices) } });
        const returnData = cache.readQuery({ query: GET_EVERYTHING }) as any;
        cache.writeData({ data: { loadCounter: 1 } });
        return returnData;
      },
    },
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


// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData: {
//     __schema: {
//       types: [
//         {
//           kind: "UNION",
//           name: "EnglishSentence",
//           possibleTypes: [
//             {name: "ConjugatedEnglishNoun"},
//             {name: "ConjugatedEnglishVerb"},
//             {name: "ConjugatedEnglishPreposition"}                    
//           ]
//         },
//         {
//           kind: "UNION",
//           name: "JapaneseSentence",
//           possibleTypes: [
//             {name: "ConjugatedJapaneseNoun"},
//             {name: "ConjugatedJapaneseVerb"}
//           ]
//         }
//       ]
//     }
//   }
// });


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
