import {
  createError,
} from '../functions';

import {
  SENTENCE_TYPE_VERB,
  SENTENCE_TYPE_TOPIC,
  SENTENCE_TYPE_SUBJECT,
} from '../constants/wordConstants';

import {
  TENSE_PRESENT,
  TENSE_PAST,
} from '../constants/optionsConstants';

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_WORD_ARRAY_ELEMENT,
} from "../constants/typeNameConstants";


import {
  CONTEXT_EVENT_OCCURANCE_BEFORE_PAST,
  CONTEXT_EVENT_OCCURANCE_PAST,
  CONTEXT_EVENT_OCCURANCE_PAST_NOW,
  CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST,
  CONTEXT_EVENT_OCCURANCE_NOW,
  CONTEXT_EVENT_OCCURANCE_NOW_FUTURE,
  CONTEXT_EVENT_OCCURANCE_FUTURE,

  CONTEXT_EVENT_DURATION_CONTINUOUS,
  CONTEXT_EVENT_DURATION_SINGLE,

  CONTEXT_POV_SELF_SINGULAR,
  CONTEXT_POV_YOU_SINGULAR,
  CONTEXT_POV_HESHEIT_SINGULAR,
  CONTEXT_POV_WE_PLURAL,
  CONTEXT_POV_YOU_PLURAL,
  CONTEXT_POV_THEYTHOSE_PLURAL,
} from '../constants/contextConstants';


export const createWord = (array: string[], tag: string): Util.WordArrayElement[] => array.map(word => ({ word, tag, __typename: __TYPENAME_WORD_ARRAY_ELEMENT }));
export const createEmptyWord = (tag: string) => createWord([''], tag);

export const getInitialVerbStem = (word: string): string[] => word.slice(0, -1).split('');
export const getLastLetterVerb = (word: string): string => word.slice(-1);

export const genTSV = ({ topic, subject, verb }: { topic?: Util.Topic, subject?: Util.Subject, verb?: Util.Verb } ): Util.SentenceWords => {
  if (topic && !subject && !verb) {
    return { topic };
  }
  if (topic && subject && !verb) {
    return { topic, predicate: { subject } };
  }
  if (!topic && subject && verb) {
    return { predicate: { subject, verb } };
  }
  if (!topic && !subject && verb) {
    return { predicate: { verb }};
  }
  if (topic && subject && verb) {
    return { topic, predicate: { subject, verb } };
  }

  throw new Error(createError('conjugations/generateWords.tsx', 'genTSV', `Your sentence variation does not exist`));
};

export const returnSentenceParts = (words: Util.SentenceWords): Util.SentenceWordsOrganised => {
  let topic;
  let subject;
  let verb;

  if (words.predicate) {
    if (words.predicate.subject) {
      subject = words.predicate.subject;
    } 
    if (words.predicate.verb) {
      verb = words.predicate.verb;
    }
  };
  if (words.topic) {
    topic = words.topic;
  };

  return {
    topic,
    subject,
    verb,
  };
};

export const filtersentenceType = (words: Util.SentenceWords, sentenceType: string): Util.Noun | Util.Verb => {
  const { topic, subject, verb } = returnSentenceParts(words);

  switch(sentenceType) {
    case SENTENCE_TYPE_TOPIC: return topic as Util.Noun;
    case SENTENCE_TYPE_SUBJECT: return subject as Util.Noun;
    case SENTENCE_TYPE_VERB: return verb as Util.Verb;
  }
  throw new Error(createError('utilConjugation.tsx', 'filtersentenceType', `${sentenceType} does not exist.`));    
};

export const createCommonPermissions = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string) => {
  const none = (!topic && !subject && !verb);
  const onlyTopic = (topic && !subject && !verb);
  const onlySubject = (!topic && subject && !verb);
  const onlyVerb = (!topic && !subject && verb);

  const onlySubjectAndVerb = (!topic && subject && verb);

  const onlyTopicAndSubjectTOPIC = (topic && subject && !verb && sentenceType === SENTENCE_TYPE_TOPIC);
  const onlyTopicAndSubjectSUBJECT = (topic && subject && !verb && sentenceType === SENTENCE_TYPE_SUBJECT);

  return {
    none,

    onlyTopic,
    onlySubject,
    onlyVerb,

    onlySubjectAndVerb,

    onlyTopicAndSubjectTOPIC,
    onlyTopicAndSubjectSUBJECT,
  };
};

export const generateSentenceTypes = (topic?: Util.Noun, subject?: Util.Noun, verb?: Util.Verb) => {
  const onlyTopic = (topic && !subject && !verb);
  // const onlySubject = (!topic && subject && !verb);
  const onlyVerb = (!topic && !subject && verb);

  const onlyTopicAndSubject =  (topic && subject && !verb);
  const onlySubjectAndVerb = (!topic && subject && verb);

  return {
    onlyTopic,
    // onlySubject,
    onlyVerb,
    onlyTopicAndSubject,
    onlySubjectAndVerb,
  };
};

export const determineJapaneseTense = (context: Util.SentenceContext): string => {
  const eventOccurance = context.selectedEventOccurance;
  const eventDuration = context.selectedEventDuration;
  const eventPOV = context.selectedEventPOV;

  switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
    // Past Perfect - The tense that is used to make it clear that one event happened before another in the past
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PAST;

    // Past Continuous - A continuing action or event in a time which began or existed in the past. It can also be used to describe an unfinished action
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PAST

    // Simple Past - Event that describes an event or action that happened in the past.     
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PAST;

    // Present Perfect Continuous - "Started in the past and continuing to present time".    
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PAST;

    // Present Perfect - "Started in the past and continued to present time".
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PAST;

    // Past Perfect Continuous - started in the past and continued up until another time in the past
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PAST;
  
    //  Present Continuous - "Happening now, or unfinshed. Temporary actions."   
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: 
      return TENSE_PRESENT;

    // Simple Present - "Happening all the time, or exist now"
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PRESENT;
    
    // Future Continuous - The tense that is used for an unfinished action or event that will occur in future and continue for an expected length of time
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PRESENT;


    // Simple Future - events which are expected, or likely to occur in the future.
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return TENSE_PRESENT;
    
    // Future Perfect - actions that will be completed between now and some point in the future
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: 
      return TENSE_PRESENT;

    // Future Perfect Continuous - actions that will continue up until a point in the future
    //     case CONTEXT_POV_SELF_SINGULAR: return createWord([ "will have been", presentParticiple ], TENSE_FUTURE_PERFECT_CONTINUOUS);
    // if (eventOccurance === CONTEXT_EVENT_OCCURANCE_UNKNOWN_FUTURE) {
  }

  throw new Error(createError('verbConjugationEnglish', 'determineVerbConjugationEnglish', `${eventOccurance}${eventDuration}${eventPOV} unknown`));  
}
