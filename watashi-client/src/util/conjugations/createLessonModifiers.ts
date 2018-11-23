import {
  // randomArrayElement,
  randomArrayValue,
} from '../functions';

import {
  __TYPENAME_MODIFIERS,
} from '../constants/typeNameConstants';

const createLessonModifiers = (modifiers: Util.PreModifiers): Util.Modifiers => {
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

export default createLessonModifiers;
