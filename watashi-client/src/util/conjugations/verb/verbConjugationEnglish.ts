import {
  createError,
  emptyWordElement,
} from '../../functions';

import {
  filtersentenceType,
  returnSentenceParts,
  createWord,
} from '../utilConjugation';

import {
  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  ENGLISH_TENSE,
  ENGLISH_POLARITY,

  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../constants/optionsConstants';

import {
  CONTEXT_OCCURANCE_BEGINNING_OF_TIME,

  CONTEXT_OCCURANCE_BEFORE_PAST,
  CONTEXT_OCCURANCE_PAST,
  CONTEXT_OCCURANCE_PAST_FUTUREPAST,
  CONTEXT_OCCURANCE_PAST_NOW,
  CONTEXT_OCCURANCE_NOW,
  CONTEXT_OCCURANCE_NOW_FUTURE,
  CONTEXT_OCCURANCE_PAST_FUTURE,
  CONTEXT_OCCURANCE_FUTURE,
  
  CONTEXT_OCCURANCE_END_OF_TIME,
  CONTEXT_OCCURANCE_ALL_THE_TIME,
  CONTEXT_OCCURANCE_AT_TIMES,

  CONTEXT_DURATION_PARTIAL_CONTINUOUS,
  CONTEXT_DURATION_COMPLETE,

  // perhaps there can be unknown duration? 
} from '../../constants/contextConstants';

import {
  __TYPENAME_CONJUGATED_ENGLISH_VERB,
} from '../../constants/typeNameConstants';

import {
  verbConjugationPermissionsEnglish,
} from './verbPermissions';

const determineVerbTenseConjugationEnglish = (verb, context) => {

  const eventOccurance = context.eventOccurance;
  const eventDuration = context.eventDuration;

  const infinitive = verb.infinitive, // "to hack";
  const presentParticiple = verb.presentParticiple, // "hacking";
  const pastParticiple = verb.pastParticiple, //"hacked";
  const simplePresentContinuousHeSheIt = verb.simplePresentContinuousHeSheIt, // "hacks";

  // Simple Present - "Happening all the time, or exist now"
  if (eventOccurance === CONTEXT_OCCURANCE_ALL_THE_TIME || 
      eventOccurance === CONTEXT_OCCURANCE_NOW) {

  }

  // Present Continuous - "Happening now, or unfinshed. Temporary actions."
  if (eventOccurance === CONTEXT_OCCURANCE_NOW || 
      eventDuration === CONTEXT_DURATION_PARTIAL_CONTINUOUS) {

  }

  // Present Perfect - "Started in the past and continued to present time".
  if (eventOccurance === CONTEXT_OCCURANCE_PAST_NOW ||
      eventDuration === CONTEXT_DURATION_COMPLETE) {

  }

  // Present Perfect Continuous - "Started in the past and continuing to present time".
  if (eventOccurance === CONTEXT_OCCURANCE_PAST_NOW ||
      eventDuration === CONTEXT_DURATION_PARTIAL_CONTINUOUS) {
    
  }

  // Simple Past - Event that describes an event or action that happened in the past. 
  if (eventOccurance === CONTEXT_OCCURANCE_PAST) {

  }

  // Past Continuous - a continuing action or event in a time which began or existed in the past. It can also be used to describe an unfinished action
  if (eventOccurance === CONTEXT_OCCURANCE_PAST ||
      eventDuration === CONTEXT_DURATION_PARTIAL_CONTINUOUS) {

  }

  // Past Perfect - The tense that is used to make it clear that one event happened before another in the past
  if (eventOccurance === CONTEXT_OCCURANCE_BEFORE_PAST) { // could be more refined?

  }

  // Past Perfect Continuous - started in the past and continued up until another time in the past
  if (eventOccurance === CONTEXT_OCCURANCE_PAST_FUTUREPAST) {

  }

  // Simple Future - events which are expected, or likely to occur in the future.
  if (eventOccurance === CONTEXT_OCCURANCE_FUTURE) {

  }

  // Future Continuous - The tense that is used for an unfinished action or event that will occur in future and continue for an expected length of time
  if (eventOccurance === CONTEXT_OCCURANCE_FUTURE && 
      eventDuration === CONTEXT_DURATION_PARTIAL_CONTINUOUS) {

  }

  // Future Perfect - actions that will be completed between now and some point in the future
  if (eventOccurance === CONTEXT_OCCURANCE_NOW_FUTURE) {

  }

  // Future Perfect Continuous - actions that will continue up until a point in the future
  if () {
    
  }
}


const determineVerbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): { tense: Util.WordElement, polarity: Util.WordElement } => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = verbConjugationPermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
      switch(`${options.polarity}`) {
        case `${POLARITY_POSITIVE}`: return { tense: createWord([''], ENGLISH_TENSE), polarity: createWord([''], ENGLISH_POLARITY) };
        case `${POLARITY_NEGATIVE}`: return { tense: createWord(['do'], ENGLISH_TENSE), polarity: createWord(['not'], ENGLISH_POLARITY) };
      }
      throw new Error(createError('conjugations/verb', 'determineVerbConjugationEnglish', `${options.polarity} unknown`));  
  }
  return { tense: createWord([''], ENGLISH_TENSE), polarity: createWord([''], ENGLISH_POLARITY) };
}; 

const verbConjugationEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceType: string): Util.ConjugatedEnglishWord => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_VERB_ENGLISH;

  const { tense, polarity } = determineVerbConjugationEnglish(words, options, sentenceType);
  const { tense } = 


  return {
    tense,
    indefiniteArticle: emptyWordElement(),
    polarity,
    word,
    type,
    sentenceType,
    __typename: __TYPENAME_CONJUGATED_ENGLISH_VERB,
  }
  // return `${verbPolarity} ${word.english}`;
};

export default verbConjugationEnglish;
