import {
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  // POLITENESS_HUMBLE,
  // POLITENESS_HONORIFIC,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,
} from './constants/optionsConstants';

export const capitalise = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);
export const randomArrayElement = (array: string[] | Util.Word[]): number => Math.floor(Math.random() * array.length);

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

export const removeGapIfValueEmpty = (value: string): string => value !== '' ? ` ${value}` : '';