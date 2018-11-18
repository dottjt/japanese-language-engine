import {
  randomArrayElement,
} from '../functions';

import {
  __TYPENAME_SENTENCE_CONTEXT,
} from '../constants/typeNameConstants';

import { 
  contextEventOccuranceArray,
  contextDurationArray,
  contextTopicPositionArray,
  contextTopicDestinationArray,
  contextEventPOVArray,
  contextDirectionArray,
  contextSubjectConnectionArray,
  contextSubjectRoleArray,

  contextEventOccuranceArrayLength,
  contextDurationArrayLength,
  contextTopicPositionArrayLength,
  contextTopicDestinationArrayLength,
  contextEventPOVArrayLength,
  contextDirectionArrayLength,
  contextSubjectConnectionArrayLength,
  contextSubjectRoleArrayLength,

  CONTEXT_EVENT_OCCURANCE_RANDOM,
  CONTEXT_EVENT_DURATION_RANDOM,
  CONTEXT_TOPIC_DESTINATION_RANDOM,
  CONTEXT_DIRECTION_RANDOM,
  CONTEXT_SUBJECT_CONNECTION_RANDOM,
  CONTEXT_SUBJECT_ROLE_RANDOM,
} from '../constants/contextConstants';


const randomContextTopicPositionValue = () => contextTopicPositionArray[randomArrayElement(contextTopicPositionArrayLength)];
const randomContextTopicDestinationValue = () => contextTopicDestinationArray[randomArrayElement(contextTopicDestinationArrayLength)];
const randomContextEventDirectionValue = () => contextDirectionArray[randomArrayElement(contextDirectionArrayLength)];

const randomContextEventOccuranceValue = () => contextEventOccuranceArray[randomArrayElement(contextEventOccuranceArrayLength)];
const randomContextDurationValue = () => contextDurationArray[randomArrayElement(contextDurationArrayLength)];
const randomContextPOVValue = () => contextEventPOVArray[randomArrayElement(contextEventPOVArrayLength)];

const randomContextSubjectConnectionValue = () => contextSubjectConnectionArray[randomArrayElement(contextSubjectConnectionArrayLength)];
const randomContextSubjectRoleValue = () => contextSubjectRoleArray[randomArrayElement(contextSubjectRoleArrayLength)];

const createSentenceContext = (sentenceContext: Util.SentenceContext): Util.SentenceContext => {
  const { topicPosition, topicDestination, eventDirection, eventOccurance, eventDuration, subjectConnection, subjectRole, eventPOV } = sentenceContext;

  return {
    __typename: __TYPENAME_SENTENCE_CONTEXT,
    topicPosition: topicPosition === CONTEXT_EVENT_OCCURANCE_RANDOM ? randomContextTopicPositionValue() : topicPosition,
    topicDestination: topicDestination === CONTEXT_TOPIC_DESTINATION_RANDOM ? randomContextTopicDestinationValue() : topicDestination,
    eventDirection: eventDirection === CONTEXT_DIRECTION_RANDOM ? randomContextEventDirectionValue() : eventDirection,

    eventOccurance: eventOccurance === CONTEXT_EVENT_OCCURANCE_RANDOM ? randomContextEventOccuranceValue() : eventOccurance,
    eventDuration: eventDuration === CONTEXT_EVENT_DURATION_RANDOM ? randomContextDurationValue() : eventDuration,
    eventPOV: eventPOV === CONTEXT_DIRECTION_RANDOM ? randomContextPOVValue() : eventDuration,

    subjectConnection: subjectConnection === CONTEXT_SUBJECT_CONNECTION_RANDOM ? randomContextSubjectConnectionValue() : subjectConnection,  
    subjectRole: subjectRole === CONTEXT_SUBJECT_ROLE_RANDOM ? randomContextSubjectRoleValue() : subjectRole,
  }
};

export default createSentenceContext;