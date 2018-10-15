import Util from 'utilTypes';

import { 
  QUESTION_WA_BASIC,

  HUMAN_NAME,
  RESPONSE,
} from './constants';

import {
  wordPerson,
} from './words';

import { 
  basicWaQuestionSentenceEnglish,
  basicWaQuestionSentenceJapanese,
} from './sentenceTypes/basicQuestions';

export const capitalizeFirstLetter = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);

const singleWordFilter = (nouns: Util.Word[], nounComparisonCategory: string): Util.Word => (
  nouns.filter((noun: Util.Word) => 
    noun.category.filter((nounCategory: string): boolean => (
      nounCategory === nounComparisonCategory
    )).length > 0 
  )[0]
);

const getOneRandomHumanNameCategoryNoun = (nouns: Util.Word[]): Util.Word => singleWordFilter(nouns, HUMAN_NAME);
const getOneRandomResponseCategoryNoun = (nouns: Util.Word[]): Util.Word => singleWordFilter(nouns, RESPONSE);

const getOneWordPerson = (nouns: Util.Word[]): Util.Word => {
  const result = nouns.find((word) => word.english === 'person');
  return result ? result : wordPerson;
}


export const filterRandomCorrectWordData = (options: Util.Options, nouns: Util.Word[]): Util.EnglishJapaneseSentence => {
  switch(options.sentenceType) {
    case QUESTION_WA_BASIC:
      const predicateNoun = getOneWordPerson(nouns);
      const words = {
        questionTopicNoun: getOneRandomHumanNameCategoryNoun(nouns),
        questionPredicateNoun: predicateNoun,
        answerResponse: getOneRandomResponseCategoryNoun(nouns),
        answerPredicateNoun: predicateNoun,
      };

      return {
        japaneseSentence: basicWaQuestionSentenceJapanese(words, options),
        englishSentence: basicWaQuestionSentenceEnglish(words, options),
      }
    default:
      return {
        japaneseSentence: {
          type: 'NA',
          question: 'japaneseSentence question error',
          answer: 'japaneseSentence answer error',
        },
        englishSentence: {
          type: 'NA',
          question: 'englishSentence question error',
          answer: 'englishSentence answer error',
      }
    }
  }
};
