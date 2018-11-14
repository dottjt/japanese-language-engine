import {
  randomArrayElement,
} from '../functions';

import {
  __TYPENAME_OPTIONS,
} from '../constants/typeNameConstants';

import { 
  politenessArray,
  polarityArray,
  tenseArray,
  genderArray,
  questionArray,
  // sentenceEndingArray,
  themesArray,

  politenessArrayLength,
  polarityArrayLength,
  tenseArrayLength,
  genderArrayLength,
  questionArrayLength,
  // sentenceEndingArrayLength,
  themesArrayLength,

  GENDER_RANDOM,
  POLITENESS_RANDOM,
  TENSE_RANDOM,
  POLARITY_RANDOM,
  RANDOM_QUESTION,
  // SENTENCE_ENDING_RANDOM,
} from '../constants/optionsConstants';

const randomVariationValue = (variationArray: string[]): string => variationArray[randomArrayElement(variationArray.length)];
const randomPolitenessValue = (): string => politenessArray[randomArrayElement(politenessArrayLength)];
const randomPolarityValue = (): string =>  polarityArray[randomArrayElement(polarityArrayLength)];
const randomTenseValue = (): string => tenseArray[randomArrayElement(tenseArrayLength)];
const randomQuestionValue = (): string => questionArray[randomArrayElement(questionArrayLength)];
const randomGenderValue = (): string => genderArray[randomArrayElement(genderArrayLength)];
// const randomSentenceEndingValue = (): string => sentenceEndingArray[randomArrayElement(sentenceEndingArrayLength)];
const randomThemesValue = (): string => themesArray[randomArrayElement(themesArrayLength)];

const createLessonOptions = (options: Util.Options): Util.Options => {
  const { variation, politeness, polarity, tense, question, gender, /* sentenceEnding, */ themes } = options;

  return {
    __typename: __TYPENAME_OPTIONS,
    variation,
    selectedVariation: variation.length === 1 ? variation[0] : randomVariationValue(variation),
    question: question === RANDOM_QUESTION ? randomQuestionValue() : question,
    politeness: politeness === POLITENESS_RANDOM ? randomPolitenessValue() : politeness,
    polarity: polarity === POLARITY_RANDOM ? randomPolarityValue() : polarity,
    tense: tense === TENSE_RANDOM ? randomTenseValue() : tense,
    gender: gender === GENDER_RANDOM ? randomGenderValue() : gender,  
    // sentenceEnding: sentenceEnding === SENTENCE_ENDING_RANDOM ? randomSentenceEndingValue() : sentenceEnding,
    themes,
    selectedTheme: themes.length === 1 ? themes[0] : randomThemesValue(),
  }
};

export default createLessonOptions;