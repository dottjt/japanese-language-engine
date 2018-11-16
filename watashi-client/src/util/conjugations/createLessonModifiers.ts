import {
  randomArrayElement,
} from '../functions';

import {
  __TYPENAME_MODIFIERS,
} from '../constants/typeNameConstants';

import {
  topicNoArray,
  subjectNoArray,
  topicAdjectiveArray,
  topicAdverbArray,
  subjectAdjectiveArray,
  subjectAdverbArray,
} from '../constants/modifiersConstants';

const randomTopicNo = (): string => topicNoArray[randomArrayElement(topicNoArray.length)];
const randomSubjectNoValue = (): string => subjectNoArray[randomArrayElement(subjectNoArray.length)];
const randomTopicAdjectiveValue = (): string =>  topicAdjectiveArray[randomArrayElement(topicAdjectiveArray.length)];
const randomTopicAdverbValue = (): string => topicAdverbArray[randomArrayElement(topicAdverbArray.length)];
const randomSubjectAdjectiveValue = (): string => subjectAdjectiveArray[randomArrayElement(subjectAdjectiveArray.length)];
const randomSubjectAdverbValue = (): string => subjectAdverbArray[randomArrayElement(subjectAdverbArray.length)];

const createLessonModifiers = (modifiers: Util.Modifiers): Util.Modifiers => {
  const { topicNo, subjectNo, topicAdjective, topicAdverb, subjectAdjective, subjectAdverb } = modifiers;
  
  return {
    __typename: __TYPENAME_MODIFIERS,
    topicNo: topicNo ? topicNo : randomTopicNo(),
    subjectNo: subjectNo ? subjectNo : randomSubjectNoValue(),
    topicAdjective: topicAdjective ? topicAdjective : randomTopicAdjectiveValue(),
    topicAdverb: topicAdverb ? topicAdverb : randomTopicAdverbValue(),
    subjectAdjective: subjectAdjective ? subjectAdjective : randomSubjectAdjectiveValue(),
    subjectAdverb: subjectAdverb ? subjectAdverb : randomSubjectAdverbValue(),  
  }
};

export default createLessonModifiers;
