// import { 
//   LANG_JAPANESE, 
//   // LANG_ENGLISH, 
// } from './constants/generalConstants';

import {
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  // POLITENESS_HUMBLE,
  // POLITENESS_HONORIFIC,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from './constants/optionsConstants';

export const capitalise = (word: string): string => word ? word[0].toUpperCase() + word.slice(1) : word
export const randomArrayElement = (arrayLength: number): number => Math.floor(Math.random() * arrayLength);
export const startOfSentence = (sentenceLength: number, index: number) => index === 0;
export const endOfSentence = (sentenceLength: number, index: number) => sentenceLength - 1 === index;
export const tagArray = (array: string[], tag: string): Util.WordArrayElement[] => array.map(word => ({ word, tag }))

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

export const convertPolitenessIntoValue = (politeness: string): string => {
  switch(politeness) {
    case POLITENESS_CASUAL:
      return 'Casual Politeness';
    case POLITENESS_FORMAL: 
      return 'Formal Politeness'
    default: 
      return createError('util/functions', 'convertPolitenessIntoValue', `${politeness} value does not exist.`);
  }
};

export const convertPolarityIntoValue = (polarity: string): string => {
  switch(polarity) {
    case POLARITY_POSITIVE:
      return 'Positive Sentence';
    case POLARITY_NEGATIVE: 
      return 'Negative Sentence';
    default: 
      return createError('util/functions', 'convertPolarityIntoValue', `${polarity} value does not exist.`);
  }
};
