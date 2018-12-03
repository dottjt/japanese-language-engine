// import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
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
  __TYPENAME_PRE_OPTIONS,
} from '../util/constants/typeNameConstants';

import { ROUTE_PATH } from '../util/constants/routeConstants';

import { index, sentenceTypes, optionTypes } from './types';

import { nounWords, verbWords, adjectiveWords } from '../util/words/collection';

import {
  determinePreOptions,
  determinePreModifiers,
  determineSentenceContext,
} from '../util/generate/generateExercises';

import GET_NOUNS_VERBS_ADJECTIVES from './queries/getNounsVerbsAndPreOptionsQuery';
import GET_PRE_QUERY from './queries/getPreQuery';

import { determineExercises, determinePlayground } from '../util/generate/generateExercises';

const defaults = {
  exerciseLoadCounter: 0,
  playgroundLoadCounter: 0,
  preLoadCounter: 0,
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
  exercises: null, // exists 
  preOptions: null, // exists 
  preModifiers: null, // exists
  preSentenceContext: null, // exists
  user: null, // exists
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
      modifyPlaygroundOptions: (_, { arrayValue, currentArray, type, arrayType, typename }, { cache, getCacheKey }) => {
        const createPlaygroundOptions = (type, arrayType, arrayTypeValue) => ({
          data: {
            [type]: {
              [arrayType]: currentArray.filter(value => value !== arrayValue.value),
              __typename: typename,
            },
            exerciseLoadCounter: 0, // NOTE: Will need to see if we want a separate model for this. 
          },  
        });

        if (arrayValue.selected && currentArray.length > 1) {
          cache.writeData(createPlaygroundOptions(type, arrayType, currentArray.filter(value => value !== arrayValue.value)));
        } else {
          cache.writeData(createPlaygroundOptions(type, arrayType, currentArray.concat(arrayValue.value)));
        }
        return null;
      },
      populateEverything: (_, { path, exerciseLoadCounter, preLoadCounter, playgroundLoadCounter }, { cache, getCacheKey }) => {
        const pathArray = path.split('/');
        const firstPath = '/' + pathArray[1];

        // - /exercises
        if (firstPath === ROUTE_PATH.EXERCISES && pathArray.length === 2) {
          return null;
        }

        const words = cache.readQuery({ query: GET_NOUNS_VERBS_ADJECTIVES }) as any;

        // - /playground
        // - /exercises/cake
        // - /playground/cake
        if (firstPath === ROUTE_PATH.EXERCISES || firstPath === ROUTE_PATH.PLAYGROUND) {
          if (preLoadCounter === 0) {
            cache.writeData({ data: {
              preOptions: determinePreOptions(path),
              preModifiers: determinePreModifiers(path),
              preSentenceContext: determineSentenceContext(path),
              user: null,
              preLoadCounter: 1 }
            });
          }
          
          const data = cache.readQuery({ query: GET_PRE_QUERY }) as any;
          const numberOfExercices = path === '/' ? 1 : 10;
          
          if (playgroundLoadCounter === 0) {
            if (firstPath === ROUTE_PATH.PLAYGROUND && pathArray.length === 2) {
              cache.writeData({ data: {
                exercises: determinePlayground(words.nouns, words.verbs, words.adjectives, data.preModifiers, data.preOptions, data.preSentenceContext),
                playgroundLoadCounter: 1 }
              });  
            }  
          }

          if (exerciseLoadCounter === 0) {
            if (firstPath === ROUTE_PATH.EXERCISES) {
              cache.writeData({ data: { 
                exercises: determineExercises(words.nouns, words.verbs, words.adjectives, path, data.preOptions, data.preModifiers, data.preSentenceContext, numberOfExercices),
                exerciseLoadCounter: 1 } 
              });
            }
          }
          return null;
        }
        return null;
      }
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
