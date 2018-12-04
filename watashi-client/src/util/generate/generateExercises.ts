// import {
//   createError,
// } from '../functions';

// import gql from 'graphql-tag';

// import { LESSON_PATH } from '../constants/lessonConstants';
// import { LESSON_PRE_OPTIONS } from '../config/optionsConfig';
// import { LESSON_PRE_MODIFIERS } from '../config/modifiersConfig';
// import { LESSON_PRE_SENTENCE_CONTEXT } from '../config/collectionConfig';

import { ROUTE_PATH } from '../constants/routeConstants';
import { PLAYGROUND_PATH } from '../constants/playgroundConstants';
import {
  PLAYGROUND_PRE_OPTIONS, 
  PLAYGROUND_PRE_MODIFIERS, 
  PLAYGROUND_PRE_SENTENCE_CONTEXT } from '../config/playgroundConfig';

// import GET_NOUNS_VERBS_ADJECTIVES from '../../graphql/queries/getNounsVerbsAndPreOptionsQuery';
// import GET_EVERYTHING from '../../graphql/queries/getEverything';

import {
  // __TYPENAME_OPTIONS,
  // __TYPENAME_MODIFIERS,
  __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE
} from '../constants/typeNameConstants';

import { 
  createLessonModifiers, 
  createLessonOptions, 
  createSentenceContext } from './utilGenerate';

import generateSentences from './generateSentences';

export const determinePreOptions = (path: string): Util.PreOptions | any => {
  const firstPath = path.split('/')[1];

  if (`/${firstPath}` === ROUTE_PATH.PLAYGROUND) {
    switch(path) {
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop}`: return PLAYGROUND_PRE_OPTIONS.uTop;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top}`: return PLAYGROUND_PRE_OPTIONS.top;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.adjTop}`: return PLAYGROUND_PRE_OPTIONS.adjTop;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_uSub}`: return PLAYGROUND_PRE_OPTIONS.uTop_uSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_Sub}`: return PLAYGROUND_PRE_OPTIONS.uTop_Sub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_adjSub}`: return PLAYGROUND_PRE_OPTIONS.uTop_adjSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_Sub}`: return PLAYGROUND_PRE_OPTIONS.top_Sub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_adjSub}`: return PLAYGROUND_PRE_OPTIONS.top_adjSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb}`: return PLAYGROUND_PRE_OPTIONS.verb;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verbAdv}`: return PLAYGROUND_PRE_OPTIONS.verbAdv;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb_Sub}`: return PLAYGROUND_PRE_OPTIONS.verb_Sub;
      default:
        return PLAYGROUND_PRE_OPTIONS.uTop;
    }
  }
  
  // if (`/${firstPath}` === ROUTE_PATH.EXERCISES) {
  //   switch(path) {
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L001}`: return LESSON_PRE_OPTIONS.L001;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L002}`: return LESSON_PRE_OPTIONS.L002;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L003}`: return LESSON_PRE_OPTIONS.L003;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L004}`: return LESSON_PRE_OPTIONS.L004;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L005}`: return LESSON_PRE_OPTIONS.L005;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L006}`: return LESSON_PRE_OPTIONS.L006;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L007}`: return LESSON_PRE_OPTIONS.L007;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L008}`: return LESSON_PRE_OPTIONS.L008;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L009}`: return LESSON_PRE_OPTIONS.L009;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L010}`: return LESSON_PRE_OPTIONS.L010;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L011}`: return LESSON_PRE_OPTIONS.L011;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L012}`: return LESSON_PRE_OPTIONS.L012;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L013}`: return LESSON_PRE_OPTIONS.L013;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L014}`: return LESSON_PRE_OPTIONS.L014;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L015}`: return LESSON_PRE_OPTIONS.L015;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L016}`: return LESSON_PRE_OPTIONS.L016;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L017}`: return LESSON_PRE_OPTIONS.L017;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L018}`: return LESSON_PRE_OPTIONS.L018;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L019}`: return LESSON_PRE_OPTIONS.L019;
  //     default: return LESSON_PRE_OPTIONS.L001;
  //   };
  // }

  throw new Error('determinePreOptions');
};

export const determinePreModifiers = (path: string): Util.PreModifiers => {
  const firstPath = path.split('/')[1];

  if (`/${firstPath}` === ROUTE_PATH.PLAYGROUND) {
    switch(path) {
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop}`: return PLAYGROUND_PRE_MODIFIERS.uTop;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top}`: return PLAYGROUND_PRE_MODIFIERS.top;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.adjTop}`: return PLAYGROUND_PRE_MODIFIERS.adjTop;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_uSub}`: return PLAYGROUND_PRE_MODIFIERS.uTop_uSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_Sub}`: return PLAYGROUND_PRE_MODIFIERS.uTop_Sub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_adjSub}`: return PLAYGROUND_PRE_MODIFIERS.uTop_adjSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_Sub}`: return PLAYGROUND_PRE_MODIFIERS.top_Sub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_adjSub}`: return PLAYGROUND_PRE_MODIFIERS.top_adjSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb}`: return PLAYGROUND_PRE_MODIFIERS.verb;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verbAdv}`: return PLAYGROUND_PRE_MODIFIERS.verbAdv;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb_Sub}`: return PLAYGROUND_PRE_MODIFIERS.verb_Sub;
      default:
        return PLAYGROUND_PRE_MODIFIERS.uTop;
    }
  }

  // if (`/${firstPath}` === ROUTE_PATH.EXERCISES) {
  //   switch(path) {
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L001}`: return LESSON_PRE_MODIFIERS.L001;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L002}`: return LESSON_PRE_MODIFIERS.L002;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L003}`: return LESSON_PRE_MODIFIERS.L003;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L004}`: return LESSON_PRE_MODIFIERS.L004;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L005}`: return LESSON_PRE_MODIFIERS.L005;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L006}`: return LESSON_PRE_MODIFIERS.L006;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L007}`: return LESSON_PRE_MODIFIERS.L007;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L008}`: return LESSON_PRE_MODIFIERS.L008;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L009}`: return LESSON_PRE_MODIFIERS.L009;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L010}`: return LESSON_PRE_MODIFIERS.L010;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L011}`: return LESSON_PRE_MODIFIERS.L011;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L012}`: return LESSON_PRE_MODIFIERS.L012;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L013}`: return LESSON_PRE_MODIFIERS.L013;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L014}`: return LESSON_PRE_MODIFIERS.L014;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L015}`: return LESSON_PRE_MODIFIERS.L015;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L016}`: return LESSON_PRE_MODIFIERS.L016;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L017}`: return LESSON_PRE_MODIFIERS.L017;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L018}`: return LESSON_PRE_MODIFIERS.L018;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L019}`: return LESSON_PRE_MODIFIERS.L019;
  //     default: return LESSON_PRE_MODIFIERS.L001;
  //   };
  // }

  throw new Error('determinePreModifiers');
};

export const determineSentenceContext = (path: string): Util.PreSentenceContext => {
  const firstPath = path.split('/')[1];

  if (`/${firstPath}` === ROUTE_PATH.PLAYGROUND) {
    switch(path) {
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.top;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.adjTop}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.adjTop;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_uSub}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop_uSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_Sub}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop_Sub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_adjSub}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop_adjSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_Sub}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.top_Sub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_adjSub}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.top_adjSub;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.verb;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verbAdv}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.verbAdv;
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb_Sub}`: return PLAYGROUND_PRE_SENTENCE_CONTEXT.verb_Sub;
      default:
        return PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop;
    }
  }

  // if (`/${firstPath}` === ROUTE_PATH.EXERCISES) {
  //   switch(path) {
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L001}`: return LESSON_PRE_SENTENCE_CONTEXT.L001;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L002}`: return LESSON_PRE_SENTENCE_CONTEXT.L002;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L003}`: return LESSON_PRE_SENTENCE_CONTEXT.L003;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L004}`: return LESSON_PRE_SENTENCE_CONTEXT.L004;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L005}`: return LESSON_PRE_SENTENCE_CONTEXT.L005;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L006}`: return LESSON_PRE_SENTENCE_CONTEXT.L006;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L007}`: return LESSON_PRE_SENTENCE_CONTEXT.L007;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L008}`: return LESSON_PRE_SENTENCE_CONTEXT.L008;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L009}`: return LESSON_PRE_SENTENCE_CONTEXT.L009;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L010}`: return LESSON_PRE_SENTENCE_CONTEXT.L010;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L011}`: return LESSON_PRE_SENTENCE_CONTEXT.L011;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L012}`: return LESSON_PRE_SENTENCE_CONTEXT.L012;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L013}`: return LESSON_PRE_SENTENCE_CONTEXT.L013;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L014}`: return LESSON_PRE_SENTENCE_CONTEXT.L014;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L015}`: return LESSON_PRE_SENTENCE_CONTEXT.L015;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L016}`: return LESSON_PRE_SENTENCE_CONTEXT.L016;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L017}`: return LESSON_PRE_SENTENCE_CONTEXT.L017;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L018}`: return LESSON_PRE_SENTENCE_CONTEXT.L018;
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L019}`: return LESSON_PRE_SENTENCE_CONTEXT.L019;
  //     default: return LESSON_PRE_SENTENCE_CONTEXT.L001;
  //   };
  // }

  throw new Error('determineSentenceContext');
};

export const determineExercises = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], path: string, preOptions: Util.PreOptions, preModifiers: Util.PreModifiers, preSentenceContext: Util.PreSentenceContext, numberOfExercices: number): Util.EnglishJapaneseOptionsSentence[] => {
  const firstPath = path.split('/')[1];
  console.log(ROUTE_PATH.PLAYGROUND, firstPath)

  if (`/${firstPath}` === ROUTE_PATH.PLAYGROUND) {
    switch(path) {
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.adjTop}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_uSub}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_Sub}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_adjSub}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_Sub}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_adjSub}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verbAdv}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      case `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb_Sub}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
      default: // default /playground
        return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
    }
  }

  throw new Error(`determineExercises ${path} does not exist`) 
  // if (`/${firstPath}` === ROUTE_PATH.EXERCISES) {
  //   switch(path) {
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L001}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L002}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L003}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L004}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L005}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L006}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L007}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L008}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L009}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L010}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L011}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L012}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L013}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L014}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L015}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L016}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L017}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L018}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L019}`: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //     default: return generateSentences(nouns, verbs, adjectives, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), () => createSentenceContext(preSentenceContext), numberOfExercices);
  //   };  
  // }
};

import generateWords from './generateWords';
import { optionsVariationArray } from '../constants/optionsConstants';
import { generatePhrases } from './generateSentences';

export const determinePlayground = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], preModifiers: Util.PreModifiers, preOptions: Util.PreOptions, preSentenceContext: Util.PreSentenceContext): Util.EnglishJapaneseOptionsSentence[] => {

  // NOTE: Need to figure this out on the client.

  // so, depending on the path,
  // so we need to get the routes sorted, first :)

  const options = createLessonOptions(preOptions);
  const modifiers = createLessonModifiers(preModifiers);
  const sentenceContext = createSentenceContext(preSentenceContext);

  return optionsVariationArray.map(optionsVariation => {
    // so they should still get an options? Or should they not?
    options.selectedVariation = optionsVariation;

    const { sentenceWords, sentenceModifiers } = generateWords(nouns, verbs, adjectives, options, modifiers);
    const phrases = generatePhrases(sentenceWords(), sentenceModifiers(), sentenceContext, options);
    
    const englishSentence = phrases.englishSentence.filter(wordArrayElement => wordArrayElement.word !== '');
    const japaneseSentence = phrases.japaneseSentence.filter(wordArrayElement => wordArrayElement.word !== '');

    return {
      options,
      modifiers,
      sentenceContext,
      englishSentence,
      japaneseSentence, 
      __typename: __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
    }  
  });

}

export default generateSentences;
