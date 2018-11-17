import {
  randomArrayElement,
} from '../functions';

import {
  __TYPENAME_SENTENCE_CONTEXT,
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

  CONTEXT_OCCURANCE_RANDOM,
  CONTEXT_DURATION_RANDOM,
  CONTEXT_TOPIC_POSITION_RANDOM,
  CONTEXT_TOPIC_DESTINATION_RANDOM,
  CONTEXT_DIRECTION_RANDOM,
  CONTEXT_SUBJECT_CONNECTION_RANDOM,
  CONTEXT_SUBJECT_ROLE_RANDOM,
} from '../constants/contextConstants';


const randomContextWhenValue = () => contextWhenArray[randomArrayElement(contextWhenArrayLength)];
const randomContextDurationValue = () => contextDurationArray[randomArrayElement(contextDurationArrayLength)];
const randomContextTopicPositionValue = () => contextTopicPositionArray[randomArrayElement(contextTopicPositionArrayLength)];
const randomContextTopicDestinationValue = () => contextTopicDestinationArray[randomArrayElement(contextTopicDestinationArrayLength)];
const randomContextDirectionValue = () => contextDirectionArray[randomArrayElement(contextDirectionArrayLength)];
const randomContextSubjectConnectionValue = () => contextSubjectConnectionArray[randomArrayElement(contextSubjectConnectionArrayLength)];
const randomContextSubjectRoleValue = () => contextSubjectRoleArray[randomArrayElement(contextSubjectRoleArrayLength)];

const createSentenceContextOptions = (sentenceContext: Util.SentenceContext): Util.SentenceContext => {
  const { topicPosition, topicDestination, eventDirection, eventWhen, eventDuration, subjectConnection, subjectRole } = sentenceContext;

  return {
    __typename: __TYPENAME_SENTENCE_CONTEXT,
    topicPosition: topicPosition === CONTEXT_OCCURANCE_RANDOM ? randomContextWhenValue() : topicPosition,
    topicDestination: topicDestination === CONTEXT_DURATION_RANDOM ? randomContextDurationValue() : topicDestination,
    eventDirection: eventDirection === CONTEXT_TOPIC_POSITION_RANDOM ? randomContextTopicPositionValue() : eventDirection,
    eventWhen: eventWhen === CONTEXT_TOPIC_DESTINATION_RANDOM ? randomContextTopicDestinationValue() : eventWhen,
    eventDuration: eventDuration === CONTEXT_DIRECTION_RANDOM ? randomContextDirectionValue() : eventDuration,
    subjectConnection: subjectConnection === CONTEXT_SUBJECT_CONNECTION_RANDOM ? randomContextSubjectConnectionValue() : subjectConnection,  
    subjectRole: subjectRole === CONTEXT_SUBJECT_ROLE_RANDOM ? randomContextSubjectRoleValue() : subjectRole,
  }
};

export default createSentenceContextOptions;