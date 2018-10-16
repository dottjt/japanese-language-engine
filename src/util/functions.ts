import {
  HUMAN_NAME,
  RESPONSE,
} from './constants';

import {
  wordPerson,
} from './words';

export const capitalise = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);
export const randomArrayElement = (array: string[]): number => Math.floor(Math.random() * array.length);
export const appendSan = (value: string): string => `${value}さん`;

const singleWordFilter = (nouns: Util.Word[], nounComparisonCategory: string): Util.Word => (
  nouns.filter((noun: Util.Word) =>
    noun.category.filter((nounCategory: string): boolean => (
      nounCategory === nounComparisonCategory
    )).length > 0
  )[0]
);

export const getOneRandomHumanNameCategoryNoun = (nouns: Util.Word[]): Util.Word => singleWordFilter(nouns, HUMAN_NAME);
export const getOneRandomResponseCategoryNoun = (nouns: Util.Word[]): Util.Word => singleWordFilter(nouns, RESPONSE);

export const getOneWordPerson = (nouns: Util.Word[]): Util.Word => {
  const result = nouns.find((word) => word.english === 'person');
  return result ? result : wordPerson;
};

