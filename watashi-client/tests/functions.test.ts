import {
  capitalise,
  // randomArrayElement,
  // convertValuesIntoButtonArray,
  // createError,
  // convertPolitenessIntoValue,
  // convertPolarityIntoValue,
  // removeGapIfValueEmpty,
} from '../src/util/functions';

describe('util/functions.ts', () => {
  describe('capitalise', () => {
    test('should capitalise first letter of a word', () => {
      const word = 'word';
      const capitalWord = 'Word';

      expect(capitalise(word)).toBe('Word');
      expect(capitalise(capitalWord)).toBe(capitalWord);
    });
  });

  // describe('randomArrayElement', () => {
  //   test('should return a random number', () => {      
  //     expect(randomArrayElement(6));
  //   });
  // });

  // describe('convertValuesIntoButtonArray', () => {
  //   test('', () => {
        
  //   });
  // });

  // describe('createError', () => {
  //   test('', () => {
        
  //   });
  // });

  // describe('convertPolitenessIntoValue', () => {
  //   test('', () => {
        
  //   });
  // });

  // describe('convertPolarityIntoValue', () => {
  //   test('', () => {
        
  //   });
  // });

});
  

