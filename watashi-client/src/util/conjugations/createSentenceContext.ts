import {
  randomArrayElement,
} from '../functions';

import {
  __TYPENAME_OPTIONS,
} from '../constants/typeNameConstants';

import { 
  contextWhenArray,
  contextDurationArray,
  contextTopicPositionArray,
  contextTopicDestinationArray,
  contextDirectionArray,
  contextSubjectConnectionArray,
  contextSubjectRoleArray,

  contextWhenArrayLength,
  contextDurationArrayLength,
  contextTopicPositionArrayLength,
  contextTopicDestinationArrayLength,
  contextDirectionArrayLength,
  contextSubjectConnectionArrayLength,
  contextSubjectRoleArrayLength,

  CONTEXT_WHEN_RANDOM,
  CONTEXT_DURATION_RANDOM,
  CONTEXT_TOPIC_POSITION_RANDOM,
  CONTEXT_TOPIC_DESTINATION_RANDOM,
  CONTEXT_DIRECTION_RANDOM,
  CONTEXT_SUBJECT_CONNECTION_RANDOM,
  CONTEXT_SUBJECT_ROLE_RANDOM,
} from '../constants/optionsConstants';


const randomContextWhenValue = () => contextWhenArray[randomArrayElement(contextWhenArrayLength)];
const randomContextDurationValue = () => contextDurationArray[randomArrayElement(contextDurationArrayLength)];
const randomContextTopicPositionValue = () => contextTopicPositionArray[randomArrayElement(contextTopicPositionArrayLength)];
const randomContextTopicDestinationValue = () => contextTopicDestinationArray[randomArrayElement(contextTopicDestinationArrayLength)];
const randomContextDirectionValue = () => contextDirectionArray[randomArrayElement(contextDirectionArrayLength)];
const randomContextSubjectConnectionValue = () => contextSubjectConnectionArray[randomArrayElement(contextSubjectConnectionArrayLength)];
const randomContextSubjectRoleValue = () => contextSubjectRoleArray[randomArrayElement(contextSubjectRoleArrayLength)];

const createSentenceContextOptions = (options: Util.Options): Util.Options => {
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

export default createSentenceContextOptions;