import {
  createError,
} from '../functions';

import {
  LESSON_PATH,
  LESSON_OPTIONS,
  LESSON_MODIFIERS,
} from '../constants/lessonConstants';

import { ROUTE_PATH } from '../constants/routeConstants';

import GET_NOUNS_AND_PRE_OPTIONS from '../../graphql/queries/getNounsAndPreOptionsQuery';
// import GET_EVERYTHING from '../../graphql/queries/getEverything';

import {
  __TYPENAME_OPTIONS,
  __TYPENAME_MODIFIERS,
} from '../constants/typeNameConstants';

import createLessonModifiers from './createLessonModifiers';
import createLessonOptions from './createLessonOptions';
import generateSentences from './generateSentences';

export const determinePreOptions = (path: string): Util.Options => {
  switch(path) {
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L001}`: return LESSON_OPTIONS.L001;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L002}`: return LESSON_OPTIONS.L002;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L003}`: return LESSON_OPTIONS.L003;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L004}`: return LESSON_OPTIONS.L004;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L005}`: return LESSON_OPTIONS.L005;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L006}`: return LESSON_OPTIONS.L006;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L007}`: return LESSON_OPTIONS.L007;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L008}`: return LESSON_OPTIONS.L008;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L009}`: return LESSON_OPTIONS.L009;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L010}`: return LESSON_OPTIONS.L010;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L011}`: return LESSON_OPTIONS.L011;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L012}`: return LESSON_OPTIONS.L012;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L013}`: return LESSON_OPTIONS.L013;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L014}`: return LESSON_OPTIONS.L014;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L015}`: return LESSON_OPTIONS.L015;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L016}`: return LESSON_OPTIONS.L016;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L017}`: return LESSON_OPTIONS.L017;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L018}`: return LESSON_OPTIONS.L018;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L019}`: return LESSON_OPTIONS.L019;
    default: return LESSON_OPTIONS.L001;
  };
};

export const determinePreModifiers = (path: string): Util.Modifiers => {
  switch(path) {
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L001}`: return LESSON_MODIFIERS.L001;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L002}`: return LESSON_MODIFIERS.L002;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L003}`: return LESSON_MODIFIERS.L003;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L004}`: return LESSON_MODIFIERS.L004;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L005}`: return LESSON_MODIFIERS.L005;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L006}`: return LESSON_MODIFIERS.L006;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L007}`: return LESSON_MODIFIERS.L007;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L008}`: return LESSON_MODIFIERS.L008;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L009}`: return LESSON_MODIFIERS.L009;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L010}`: return LESSON_MODIFIERS.L010;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L011}`: return LESSON_MODIFIERS.L011;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L012}`: return LESSON_MODIFIERS.L012;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L013}`: return LESSON_MODIFIERS.L013;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L014}`: return LESSON_MODIFIERS.L014;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L015}`: return LESSON_MODIFIERS.L015;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L016}`: return LESSON_MODIFIERS.L016;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L017}`: return LESSON_MODIFIERS.L017;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L018}`: return LESSON_MODIFIERS.L018;
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L019}`: return LESSON_MODIFIERS.L019;
    default: return LESSON_MODIFIERS.L001;
  };
};

export const determineGetExercise = (nouns: Util.Word[], path: string, preOptions: Util.Options, preModifiers: Util.Modifiers, numberOfExercices: number): Util.EnglishJapaneseOptionsSentence[] => {
  switch(path) {
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L001}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L002}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L003}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L004}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L005}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L006}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L007}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L008}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L009}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L010}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L011}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L012}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L013}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L014}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L015}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L016}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L017}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L018}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    case `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L019}`: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
    default: return generateSentences(nouns, () => createLessonModifiers(preModifiers), () => createLessonOptions(preOptions), numberOfExercices);
  };
};

export const getExercisesApollo = (client: any, path: string, numberOfExercices: number): void => {
  try {
    // I need to figure out how to get this 
    // NOTE: user should not be null, it should be gotten from the server, if at all possible. 
    client.writeData({ data: { user: null, preOptions: determinePreOptions(path), preModifiers: determinePreModifiers(path) } });

    const data = client.readQuery({ query: GET_NOUNS_AND_PRE_OPTIONS }) as any;

    client.writeData({ data: { exercises: determineGetExercise(data.nouns, path, data.preOptions, data.preModifiers, numberOfExercices) } });

    // const data2 = client.readQuery({ query: GET_EVERYTHING }) as any;

    // console.log('data2', data2);

  } catch(error) {
    throw new Error(createError('generateExercises.ts', 'getExercisesApollo', `Error: ${error}.`));
  } 
};





// const recalculateOptions = (options: Util.Options, controlPanelOptions: Util.ControlPanelOptions): Util.Options => {
//   const { controlPanelPoliteness, controlPanelVariation, controlPanelPolarity, controlPanelTense, controlPanelGender, controlPanelQuestion, /* controlPanelSentenceEnding */ } = controlPanelOptions;
//   return {
//     __typename: __TYPENAME_OPTIONS,
//     politeness: controlPanelPoliteness ? controlPanelPoliteness : options.politeness,
//     variation: controlPanelVariation ? controlPanelVariation : options.variation,
//     polarity: controlPanelPolarity ? controlPanelPolarity : options.polarity,
//     tense: controlPanelTense ? controlPanelTense : options.tense,
//     gender: controlPanelGender ? controlPanelGender : options.gender,
//     question: controlPanelQuestion ? controlPanelQuestion : options.question,
//     // controlPanelSentenceEnding: controlPanelSentenceEnding ? controlPanelSentenceEnding : options.sentenceEnding 
//   }
// }