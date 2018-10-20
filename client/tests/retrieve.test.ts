// import { rewire } from 'rewire';

import {
  filterSpecifcWord,
  filterSpecifcCategory,
  filterSpecifcMeta,
  getRandomWord,
  getRandomWordViaCategory,
  getRandomWordViaMeta,
} from '../src/util/retrieve';

import allWords from '../src/util/words';

import {
  PRIMARY_TYPE_NOUN,
  __TYPENAME_WORDS,
} from '../src/util/constants/wordConstants';

// const app = rewire('../../src/util/conjugations/predicate');

// singleRandomWordFilter = app.__get__('singleRandomWordFilter'); 

const CATEGORY_TEST = 'CATEGORY_TEST';
const wordTest = {
  japanese: '試験',
  english: 'test',
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_TEST ],
  meta: {
    test: 'metaTestValue'
  },
  __typename: __TYPENAME_WORDS,
};

const testWords = { ...allWords, wordTest } 

describe('util/retrieve.ts', () => {

  describe('filterSpecifcWord', () => {
    test('should return word: test', () => {
      expect(filterSpecifcWord(testWords, 'test')).toBe(wordTest.english);
    });
  });

  describe('filterSpecifcCategory', () => {
    test('should return word: test', () => {
      expect(filterSpecifcCategory(testWords, CATEGORY_TEST)[0]).toBe(wordTest.category[0]);
    });
  });

  describe('filterSpecifcMeta', () => {
    test('should return word: test', () => {
      expect(filterSpecifcMeta(testWords, 'metaTestValue')).toBe(wordTest.meta.test);
    });
  });

  // describe('getRandomWord', () => {
  //   test('should return one value', () => {
  //     expect(getRandomWord(testWords)).toBe(1);
  //   });
  // });

  // describe('getRandomWordViaCategory', () => {
  //   test('', () => {
        
  //   });
  // });

  // describe('getRandomWordViaMeta', () => {
  //   test('', () => {
        
  //   });
  // });
});
  

