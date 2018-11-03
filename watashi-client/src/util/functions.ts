import {
  LESSON_PATH,
  LESSON_OPTIONS,
  LESSON_MODIFIERS,
} from './constants/lessonConstants';

import { 
  ROUTE_PATH,
} from './constants/generalConstants';

import {
  GET_NOUNS_AND_CONTROL_PANEL_OPTIONS,
} from '../graphql/queries';

import {
  __TYPENAME_OPTIONS,
} from './constants/typeNameConstants';

import generateExercises from './conjugations/generateExercises';

export const capitalise = (word: string): string => word ? word[0].toUpperCase() + word.slice(1) : word
export const randomArrayElement = (arrayLength: number): number => Math.floor(Math.random() * arrayLength);
export const startOfArray = (sentenceLength: number, index: number): boolean => index === 0;
export const endOfArray = (sentenceLength: number, index: number): boolean => (sentenceLength - 1) === index;
export const emptyWordElement = (): Util.WordElement => ({ wordArray: [''], wordType: 'NA', __typename: 'NA' });
export const determineSentenceCover = (toggleSentenceOrder: boolean, hoverState: boolean, toggleSentenceHide: boolean): string => toggleSentenceOrder || hoverState || toggleSentenceHide ? 'none' : 'black'; 

export const createError = (fileLocation: string, functionName: string, errorMessage: string): string => {
  return `Error. file: ${fileLocation}, function: ${functionName}, ${errorMessage}`;
};

// SENTENCE CREATION

import { 
  politenessArray,
  polarityArray,
  tenseArray,
  genderArray,
  questionArray,
  // sentenceEndingArray,

  politenessArrayLength,
  polarityArrayLength,
  tenseArrayLength,
  genderArrayLength,
  questionArrayLength,
  // sentenceEndingArrayLength,

  GENDER_RANDOM,
  POLITENESS_RANDOM,
  TENSE_RANDOM,
  POLARITY_RANDOM,
  RANDOM_QUESTION,
  // SENTENCE_ENDING_RANDOM,
} from './constants/optionsConstants';


const randomVariationValue = (variationArray: string[]): string => variationArray[randomArrayElement(variationArray.length)];
const randomPolitenessValue = (): string => politenessArray[randomArrayElement(politenessArrayLength)];
const randomPolarityValue = (): string =>  polarityArray[randomArrayElement(polarityArrayLength)];
const randomTenseValue = (): string => tenseArray[randomArrayElement(tenseArrayLength)];
const randomQuestionValue = (): string => questionArray[randomArrayElement(questionArrayLength)];
const randomGenderValue = (): string => genderArray[randomArrayElement(genderArrayLength)];
// const randomSentenceEndingValue = (): string => sentenceEndingArray[randomArrayElement(sentenceEndingArrayLength)];

const createLessonOptions = (options: Util.PreOptions): Util.Options => {
  const { variation, politeness, polarity, tense, question, gender, /* sentenceEnding */ } = options;
  return {
    __typename: __TYPENAME_OPTIONS,
    variation: typeof variation === 'string' ? variation : randomVariationValue(variation),
    question: question === RANDOM_QUESTION ? randomQuestionValue() : question,
    politeness: politeness === POLITENESS_RANDOM ? randomPolitenessValue() : politeness,
    polarity: polarity === POLARITY_RANDOM ? randomPolarityValue() : polarity,
    tense: tense === TENSE_RANDOM ? randomTenseValue() : tense,
    gender: gender === GENDER_RANDOM ? randomGenderValue() : gender,  
    // sentenceEnding: sentenceEnding === SENTENCE_ENDING_RANDOM ? randomSentenceEndingValue() : sentenceEnding,
  }
};

const recalculateOptions = (options: Util.PreOptions, controlPanelOptions: Util.ControlPanelOptions): Util.PreOptions => {
  const { controlPanelPoliteness, controlPanelVariation, controlPanelPolarity, controlPanelTense, controlPanelGender, controlPanelQuestion, /* controlPanelSentenceEnding */ } = controlPanelOptions;
  return {
    __typename: __TYPENAME_OPTIONS,
    politeness: controlPanelPoliteness ? controlPanelPoliteness : options.politeness,
    variation: controlPanelVariation ? controlPanelVariation : options.variation,
    polarity: controlPanelPolarity ? controlPanelPolarity : options.polarity,
    tense: controlPanelTense ? controlPanelTense : options.tense,
    gender: controlPanelGender ? controlPanelGender : options.gender,
    question: controlPanelQuestion ? controlPanelQuestion : options.question,
    // controlPanelSentenceEnding: controlPanelSentenceEnding ? controlPanelSentenceEnding : options.sentenceEnding 
  }
}

export const determineGetExercise = (nouns: Util.Word[], path: string, controlPanelOptions: Util.ControlPanelOptions, numberOfExercices: number): Util.EnglishJapaneseOptionsSentence[] => {
  console.log(createLessonOptions(recalculateOptions(LESSON_OPTIONS.L001, controlPanelOptions)));

  switch(path) {
    case `${ROUTE_PATH.APP}${LESSON_PATH.L001}`: return generateExercises(nouns, LESSON_MODIFIERS.L001, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L001, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L002}`: return generateExercises(nouns, LESSON_MODIFIERS.L002, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L002, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L003}`: return generateExercises(nouns, LESSON_MODIFIERS.L003, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L003, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L004}`: return generateExercises(nouns, LESSON_MODIFIERS.L004, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L004, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L005}`: return generateExercises(nouns, LESSON_MODIFIERS.L005, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L005, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L006}`: return generateExercises(nouns, LESSON_MODIFIERS.L006, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L006, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L007}`: return generateExercises(nouns, LESSON_MODIFIERS.L007, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L007, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L008}`: return generateExercises(nouns, LESSON_MODIFIERS.L008, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L008, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L009}`: return generateExercises(nouns, LESSON_MODIFIERS.L009, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L009, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L010}`: return generateExercises(nouns, LESSON_MODIFIERS.L010, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L010, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L011}`: return generateExercises(nouns, LESSON_MODIFIERS.L011, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L011, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L012}`: return generateExercises(nouns, LESSON_MODIFIERS.L012, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L012, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L013}`: return generateExercises(nouns, LESSON_MODIFIERS.L013, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L013, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L014}`: return generateExercises(nouns, LESSON_MODIFIERS.L014, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L014, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L015}`: return generateExercises(nouns, LESSON_MODIFIERS.L015, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L015, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L016}`: return generateExercises(nouns, LESSON_MODIFIERS.L016, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L016, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L017}`: return generateExercises(nouns, LESSON_MODIFIERS.L017, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L017, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L018}`: return generateExercises(nouns, LESSON_MODIFIERS.L018, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L018, controlPanelOptions)), numberOfExercices);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L019}`: return generateExercises(nouns, LESSON_MODIFIERS.L019, () => createLessonOptions(recalculateOptions(LESSON_OPTIONS.L019, controlPanelOptions)), numberOfExercices);
    default: return generateExercises(nouns, LESSON_MODIFIERS.L001, () => createLessonOptions(LESSON_OPTIONS.L001), numberOfExercices);
  };
};

export const getExercisesApollo = (client: any, path: string, numberOfExercices: number): void => {
  try {
    // NOTE: Can probably optimise so it only gets nouns once, although it also may cache the results anyway, so no biggie.
    const data = client.readQuery({ query: GET_NOUNS_AND_CONTROL_PANEL_OPTIONS }) as any;
    client.writeData({ data: { exercises: determineGetExercise(data.nouns, path, data.controlPanelOptions, numberOfExercices) } });
  } catch(error) {
    throw new Error(createError('functions.tsx', 'getExercisesApollo', `Error: ${error}. Unable to access graphql and pull down nouns.`));
  } 
};
