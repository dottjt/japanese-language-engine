import {
  HUMAN_NAME,
  RESPONSE,
} from './constants';

import {
  wordPerson,
} from './words/humanNames';

export const capitalise = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);
export const randomArrayElement = (array: string[] | Util.Word[]): number => Math.floor(Math.random() * array.length);
export const appendSan = (value: string): string => `${value}さん`;

interface IValues {
  value: string,
  selected: boolean,
};

export const convertValuesIntoButtonArray = (values: string[]): IValues[] =>
  values.map((value, index) => {
    if (index === 0) {
      return {
        value,
        selected: true,
      }
    }
    return {
      value,
      selected: false,
    }
  });

const singleRandomWordFilter = (nouns: Util.Word[], nounComparisonCategory: string): Util.Word => {
  const filteredNouns = nouns.filter((noun: Util.Word) => 
    noun.category.filter((nounCategory: string): boolean => (
      nounCategory === nounComparisonCategory
    )).length > 0
  );
  return filteredNouns[randomArrayElement(filteredNouns)];
};

export const getOneRandomHumanNameCategoryNoun = (nouns: Util.Word[]): Util.Word => singleRandomWordFilter(nouns, HUMAN_NAME);
export const getOneRandomResponseCategoryNoun = (nouns: Util.Word[]): Util.Word => singleRandomWordFilter(nouns, RESPONSE);

export const getOneWordPerson = (nouns: Util.Word[]): Util.Word => {
  const result = nouns.find((word) => word.english === 'person');
  return result ? result : wordPerson;
};

