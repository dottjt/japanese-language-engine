import {
  randomArrayValue,
} from '../functions';

import {
  __TYPENAME_OPTIONS,
} from '../constants/typeNameConstants';

import {

} from '../constants/optionsConstants';

const createLessonOptions = (options: Util.PreOptions): Util.Options => {
  const { 
    variationArray, 
    politenessArray, 
    polarityArray, 
    questionArray, 
    genderArray, 
    /* sentenceEnding, */ 
    themesArray } = options;

  return {
    __typename: __TYPENAME_OPTIONS,
    // variation,
    selectedVariation: variationArray.length === 1 ? variationArray[0] : randomArrayValue(variationArray),
    selectedQuestion: questionArray.length === 1 ? questionArray[0] : randomArrayValue(questionArray),
    selectedPoliteness: politenessArray.length === 1 ? politenessArray[0] : randomArrayValue(politenessArray),
    selectedPolarity: polarityArray.length === 1 ? polarityArray[0] : randomArrayValue(polarityArray),
    selectedGender: genderArray.length === 1 ? genderArray[0] : randomArrayValue(genderArray),  
    // sentenceEnding: sentenceEnding === SENTENCE_ENDING_RANDOM ? randomSentenceEndingValue() : sentenceEnding,
    selectedTheme: themesArray.length === 1 ? themesArray[0] : randomArrayValue(themesArray),
  }
};

export default createLessonOptions;