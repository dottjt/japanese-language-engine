import {
  CATEGORY_HUMAN_NAME,
  CATEGORY_RESPONSE,
} from './constants';

import {
  wordPerson,
} from './words/nouns';

import {
  randomArrayElement
} from './functions';

const singleRandomWordFilter = (nouns: Util.Word[], nounComparisonCategory: string): Util.Word => {
  const filteredNouns = nouns.filter((noun: Util.Word) => 
    noun.category.filter((nounCategory: string): boolean => (
      nounCategory === nounComparisonCategory
    )).length > 0
  );
  return filteredNouns[randomArrayElement(filteredNouns)];
};

export const getOneRandomHumanNameCategoryNoun = (nouns: Util.Word[]): Util.Word => singleRandomWordFilter(nouns, CATEGORY_HUMAN_NAME);
export const getOneRandomResponseCategoryNoun = (nouns: Util.Word[]): Util.Word => singleRandomWordFilter(nouns, CATEGORY_RESPONSE);

export const getOneWordPerson = (nouns: Util.Word[]): Util.Word => {
  const result = nouns.find((word) => word.english === 'person');
  return result ? result : wordPerson;
};

