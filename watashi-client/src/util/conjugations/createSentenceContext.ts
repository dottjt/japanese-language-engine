import {
  randomArrayElement,
} from '../functions';

import {
  __TYPENAME_SENTENCE_CONTEXT,
} from '../constants/typeNameConstants';

import { 
  // -----

  contextProximityArray,
  contextTopicDestinationArray,
  contextDirectionArray,

  contextEventOccuranceArray,
  contextDurationArray,
  contextEventPOVArray,

  contextSubjectConnectionArray,
  contextSubjectRoleArray,
  contextSubjectQuantityArray,

  // -----
  contextProximityArrayLength,
  contextTopicDestinationArrayLength,
  contextDirectionArrayLength,

  contextEventOccuranceArrayLength,
  contextDurationArrayLength,
  contextEventPOVArrayLength,

  contextSubjectConnectionArrayLength,
  contextSubjectRoleArrayLength,
  contextSubjectQuantityArrayLength,

  // -----

  CONTEXT_PROXIMITY_RANDOM,
  CONTEXT_TOPIC_DESTINATION_RANDOM,
  CONTEXT_DIRECTION_RANDOM,
  
  CONTEXT_EVENT_OCCURANCE_RANDOM,
  CONTEXT_EVENT_DURATION_RANDOM,
  
  CONTEXT_SUBJECT_CONNECTION_RANDOM,
  CONTEXT_SUBJECT_ROLE_RANDOM,
  CONTEXT_SUBJECT_QUANTITY_RANDOM,

} from '../constants/contextConstants';


const randomContextProximityValue = () => contextProximityArray[randomArrayElement(contextProximityArrayLength)];
const randomContextTopicDestinationValue = () => contextTopicDestinationArray[randomArrayElement(contextTopicDestinationArrayLength)];
const randomContextEventDirectionValue = () => contextDirectionArray[randomArrayElement(contextDirectionArrayLength)];

const randomContextEventOccuranceValue = () => contextEventOccuranceArray[randomArrayElement(contextEventOccuranceArrayLength)];
const randomContextDurationValue = () => contextDurationArray[randomArrayElement(contextDurationArrayLength)];
const randomContextPOVValue = () => contextEventPOVArray[randomArrayElement(contextEventPOVArrayLength)];

const randomContextSubjectConnectionValue = () => contextSubjectConnectionArray[randomArrayElement(contextSubjectConnectionArrayLength)];
const randomContextSubjectRoleValue = () => contextSubjectRoleArray[randomArrayElement(contextSubjectRoleArrayLength)];
const randomContextSubjectQuantityValue = () => contextSubjectQuantityArray[randomArrayElement(contextSubjectQuantityArrayLength)];

const createSentenceContext = (sentenceContext: Util.SentenceContext): Util.SentenceContext => {
  const { proximity, topicDestination, eventDirection, eventOccurance, eventDuration, eventPOV, subjectConnection, subjectRole, subjectQuantity } = sentenceContext;

  return {
    __typename: __TYPENAME_SENTENCE_CONTEXT,
    proximity: proximity === CONTEXT_PROXIMITY_RANDOM ? randomContextProximityValue() : proximity,
    topicDestination: topicDestination === CONTEXT_TOPIC_DESTINATION_RANDOM ? randomContextTopicDestinationValue() : topicDestination,
    eventDirection: eventDirection === CONTEXT_DIRECTION_RANDOM ? randomContextEventDirectionValue() : eventDirection,

    eventOccurance: eventOccurance === CONTEXT_EVENT_OCCURANCE_RANDOM ? randomContextEventOccuranceValue() : eventOccurance,
    eventDuration: eventDuration === CONTEXT_EVENT_DURATION_RANDOM ? randomContextDurationValue() : eventDuration,
    eventPOV: eventPOV === CONTEXT_DIRECTION_RANDOM ? randomContextPOVValue() : eventPOV,

    subjectConnection: subjectConnection === CONTEXT_SUBJECT_CONNECTION_RANDOM ? randomContextSubjectConnectionValue() : subjectConnection,  
    subjectRole: subjectRole === CONTEXT_SUBJECT_ROLE_RANDOM ? randomContextSubjectRoleValue() : subjectRole,
    subjectQuantity: subjectQuantity === CONTEXT_SUBJECT_QUANTITY_RANDOM ? randomContextSubjectQuantityValue() : subjectQuantity,
  }
};

export default createSentenceContext;