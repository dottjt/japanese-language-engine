import {
  randomArrayElement,
} from '../functions';

import {
  __TYPENAME_SENTENCE_CONTEXT,
} from '../constants/typeNameConstants';

const randomArrayValue = (array: string[]): string => array[randomArrayElement(array.length)];

const createSentenceContext = (sentenceContext: Util.PreSentenceContext): Util.SentenceContext => {
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

export default createSentenceContext;