import {
  LESSON_PATH,
  LESSON_OPTIONS,
  LESSON_MODIFIERS,
} from './constants/lessonConstants';

import { 
  ROUTE_PATH,
} from './constants/generalConstants';

import {
  GET_NOUNS,
} from '../graphql/queries';

import generateExercises from './conjugations/generateExercises';

export const capitalise = (word: string): string => word ? word[0].toUpperCase() + word.slice(1) : word
export const randomArrayElement = (arrayLength: number): number => Math.floor(Math.random() * arrayLength);
export const startOfArray = (sentenceLength: number, index: number): boolean => index === 0;
export const endOfArray = (sentenceLength: number, index: number): boolean => (sentenceLength - 1) === index;
export const emptyWordElement = (): Util.WordElement => ({ wordArray: [''], wordType: 'NA', __typename: 'NA' });
export const determineSentenceCover = (toggleSentenceOrder: boolean, hoverState: boolean, toggleSentenceHide: boolean): string => toggleSentenceOrder || hoverState || toggleSentenceHide ? 'none' : 'black'; 

interface IValues {
  value: string,
  selected: boolean,
};

export const convertValuesIntoButtonArray = (values: string[]): IValues[] =>
  values.map((value, index) => {
    if (index === 0) {
      return { value, selected: true }
    }
    return { value, selected: false }
  });

export const createError = (fileLocation: string, functionName: string, errorMessage: string): string => {
  return `Error. file: ${fileLocation}, function: ${functionName}, ${errorMessage}`;
};

export const determineGetExercise = (nouns: Util.Word[], path: string, numberOfExercices: number): Util.EnglishJapaneseOptionsSentence[] => {
  switch(path) {
    case `${ROUTE_PATH.APP}${LESSON_PATH.L001}`: return generateExercises(nouns, LESSON_MODIFIERS.L001, LESSON_OPTIONS.L001, numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L002}`: return generateExercises(nouns, LESSON_MODIFIERS.L002, LESSON_OPTIONS.L002, numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L003}`: return generateExercises(nouns, LESSON_MODIFIERS.L003, LESSON_OPTIONS.L003, numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L004}`: return generateExercises(nouns, LESSON_MODIFIERS.L004, LESSON_OPTIONS.L004, numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L005}`: return generateExercises(nouns, LESSON_MODIFIERS.L005, LESSON_OPTIONS.L005, numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L006}`: return generateExercises(nouns, LESSON_MODIFIERS.L006, LESSON_OPTIONS.L006, numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L007}`: return generateExercises(nouns, LESSON_MODIFIERS.L007, LESSON_OPTIONS.L007, numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L008}`: return generateExercises(nouns, LESSON_MODIFIERS.L008, LESSON_OPTIONS.L008, numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L009}`: return generateExercises(nouns, LESSON_MODIFIERS.L009, LESSON_OPTIONS.L009, numberOfExercices);
    default: return generateExercises(nouns, LESSON_MODIFIERS.L001, LESSON_OPTIONS.L001, numberOfExercices);
  };
};

export const getExercisesApollo = (client: any, path: string, numberOfExercices: number): void => {
  try {
    const data = client.readQuery({ query: GET_NOUNS }) as any;
    client.writeData({ data: { exercises: determineGetExercise(data.nouns, path, numberOfExercices) } });
  } catch(error) {
    throw new Error(createError('functions.tsx', 'getExercisesApollo', `Error: ${error}. Unable to access graphql and pull down nouns.`));
  } 
};
