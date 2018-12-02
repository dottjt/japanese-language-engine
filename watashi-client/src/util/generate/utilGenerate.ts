import {
  // randomArrayElement,
  randomArrayValue,
} from '../functions';

import {
  __TYPENAME_MODIFIERS,
  __TYPENAME_OPTIONS,
  __TYPENAME_SENTENCE_CONTEXT,
} from '../constants/typeNameConstants';

export const createLessonModifiers = (modifiers: Util.PreModifiers): Util.Modifiers => {
  const { 
    topicNoArray, 
    subjectNoArray, 
    topicAdjectiveArray, 
    topicAdverbArray, 
    subjectAdjectiveArray, 
    subjectAdverbArray } = modifiers;
  
  return {
    __typename: __TYPENAME_MODIFIERS,
    selectedTopicNo: topicNoArray.length === 1 ? topicNoArray[0] : randomArrayValue(topicNoArray),
    selectedSubjectNo: subjectNoArray.length === 1 ? subjectNoArray[0] : randomArrayValue(subjectNoArray),
    selectedTopicAdjective: topicAdjectiveArray.length === 1 ? topicAdjectiveArray[0] : randomArrayValue(topicAdjectiveArray),
    selectedTopicAdverb: topicAdverbArray.length === 1 ? topicAdverbArray[0] : randomArrayValue(topicAdverbArray),
    selectedSubjectAdjective: subjectAdjectiveArray.length === 1 ? subjectAdjectiveArray[0] : randomArrayValue(subjectAdjectiveArray),
    selectedSubjectAdverb: subjectAdverbArray.length === 1 ? subjectAdverbArray[0] : randomArrayValue(subjectAdverbArray),  
  }
};

export const createLessonOptions = (options: Util.PreOptions): Util.Options => {
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

export const createSentenceContext = (sentenceContext: Util.PreSentenceContext): Util.SentenceContext => {
  const { 
    topicIntentArray, 
    topicProximityArray, 
    topicDestinationArray, 
    eventDirectionArray, 
    eventOccuranceArray, 
    eventDurationArray, 
    eventPOVArray, 
    subjectConnectionArray, 
    subjectRoleArray, 
    subjectQuantityArray } = sentenceContext;

  return {
    __typename: __TYPENAME_SENTENCE_CONTEXT,
    selectedTopicIntent: topicIntentArray.length === 1 ? topicIntentArray[0] : randomArrayValue(topicIntentArray),
    
    selectedTopicProximity: topicProximityArray.length === 1 ? topicProximityArray[0] : randomArrayValue(topicProximityArray),
    selectedTopicDestination: topicDestinationArray.length === 1 ? topicDestinationArray[0] : randomArrayValue(topicDestinationArray),
    selectedEventDirection: eventDirectionArray.length === 1 ? eventDirectionArray[0] : randomArrayValue(eventDirectionArray),

    selectedEventOccurance: eventOccuranceArray.length === 1 ? eventOccuranceArray[0] : randomArrayValue(eventOccuranceArray),
    selectedEventDuration: eventDurationArray.length === 1 ? eventDurationArray[0] : randomArrayValue(eventDurationArray),
    selectedEventPOV: eventPOVArray.length === 1 ? eventPOVArray[0] : randomArrayValue(eventPOVArray),

    selectedSubjectConnection: subjectConnectionArray.length === 1 ? subjectConnectionArray[0] : randomArrayValue(subjectConnectionArray),
    selectedSubjectRole: subjectRoleArray.length === 1 ? subjectRoleArray[0] : randomArrayValue(subjectRoleArray),
    selectedSubjectQuantity: subjectQuantityArray.length === 1 ? subjectQuantityArray[0] : randomArrayValue(subjectQuantityArray),
  }
};
