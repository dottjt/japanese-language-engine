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
  TENSE_SIMPLE_PRESENT,
  TENSE_PRESENT_CONTINUOUS,
  TENSE_PRESENT_PERFECT,
  TENSE_PRESENT_PERFECT_CONTINUOUS,

  TENSE_SIMPLE_PAST,
  TENSE_PAST_CONTINUOUS,
  TENSE_PAST_PERFECT,
  TENSE_PAST_PERFECT_CONTINUOUS,

  TENSE_SIMPLE_FUTURE,
  TENSE_FUTURE_CONTINUOUS,
  TENSE_FUTURE_PERFECT,
  TENSE_FUTURE_PERFECT_CONTINUOUS,
} from '../../constants/wordConstants';

import {
  CONTEXT_OCCURANCE_BEGINNING_OF_TIME,

  CONTEXT_OCCURANCE_BEFORE_PAST,
  CONTEXT_OCCURANCE_PAST,
  CONTEXT_OCCURANCE_PAST_FUTUREPAST,
  CONTEXT_OCCURANCE_PAST_NOW,
  CONTEXT_OCCURANCE_NOW,
  CONTEXT_OCCURANCE_NOW_FUTURE,
  CONTEXT_OCCURANCE_PAST_FUTURE,
  CONTEXT_OCCURANCE_UNKNOWN_FUTURE,
  CONTEXT_OCCURANCE_FUTURE,
  
  CONTEXT_OCCURANCE_END_OF_TIME,
  CONTEXT_OCCURANCE_ALL_THE_TIME,
  CONTEXT_OCCURANCE_AT_TIMES,

  CONTEXT_DURATION_PARTIAL_CONTINUOUS,
  CONTEXT_DURATION_COMPLETE,

  CONTEXT_POV_SELF_SINGULAR,
  CONTEXT_POV_YOU_SINGULAR,
  CONTEXT_POV_HESHEIT_SINGULAR,
  CONTEXT_POV_WE_PLURAL,
  CONTEXT_POV_YOU_PLURAL,
  CONTEXT_POV_THEYTHOSE_PLURAL,

  // perhaps there can be unknown duration? 
} from '../../constants/contextConstants';

import {
  __TYPENAME_CONJUGATED_ENGLISH_VERB,
} from '../../constants/typeNameConstants';

import {
  verbConjugationPermissionsEnglish,
} from './verbPermissions';

const determineVerbTenseConjugationEnglish = (verb, context): Util.WordElement => {

  const eventOccurance = context.eventOccurance;
  const eventDuration = context.eventDuration;
  const eventPOV = context.eventPOV;

  const infinitive = verb.infinitive; // "to hack";
  const presentParticiple = verb.presentParticiple; // "hacking";
  const pastParticiple = verb.pastParticiple; //"hacked";
  const simplePresentContinuousHeSheIt = verb.simplePresentContinuousHeSheIt; // "hacks";

  switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
    

  }


  // Simple Present - "Happening all the time, or exist now"
  if (eventOccurance === CONTEXT_OCCURANCE_ALL_THE_TIME || 
      eventOccurance === CONTEXT_OCCURANCE_NOW) {
        // if not be
        switch() {
          case CONTEXT_POV_SELF_SINGULAR: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
          case CONTEXT_POV_YOU_SINGULAR: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
          case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ infinitive + "s" ], TENSE_SIMPLE_PRESENT); 
          case CONTEXT_POV_WE_PLURAL: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
          case CONTEXT_POV_YOU_PLURAL: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
          case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
        }
        
  }



  // Present Continuous - "Happening now, or unfinshed. Temporary actions."
  if (eventOccurance === CONTEXT_OCCURANCE_NOW || 
      eventDuration === CONTEXT_DURATION_PARTIAL_CONTINUOUS) {

        switch() {
          case CONTEXT_POV_SELF_SINGULAR: return createWord([ "am", presentParticiple ], TENSE_SIMPLE_PRESENT);
          case CONTEXT_POV_YOU_SINGULAR: return createWord([ "are", presentParticiple ], TENSE_SIMPLE_PRESENT);
          case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "is", presentParticiple ], TENSE_SIMPLE_PRESENT); 
          case CONTEXT_POV_WE_PLURAL: 
          case CONTEXT_POV_YOU_PLURAL: 
          case CONTEXT_POV_THEYTHOSE_PLURAL: 
            return createWord([ "are", presentParticiple ], TENSE_SIMPLE_PRESENT); 
        }

}



  // Present Perfect - "Started in the past and continued to present time".
  if (eventOccurance === CONTEXT_OCCURANCE_PAST_NOW ||
      eventDuration === CONTEXT_DURATION_COMPLETE) {

      switch() {
        case CONTEXT_POV_SELF_SINGULAR: return createWord([ "have", pastParticiple ], TENSE_PRESENT_PERFECT);
        case CONTEXT_POV_YOU_SINGULAR: return createWord([ "have", pastParticiple ], TENSE_PRESENT_PERFECT);
        case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "has", pastParticiple ], TENSE_PRESENT_PERFECT); 
        case CONTEXT_POV_WE_PLURAL: return createWord([ "have", pastParticiple ], TENSE_PRESENT_PERFECT);
        case CONTEXT_POV_YOU_PLURAL: return createWord([ "have", pastParticiple ], TENSE_PRESENT_PERFECT);
        case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ "have", pastParticiple ], TENSE_PRESENT_PERFECT);
      }
  }

  // Present Perfect Continuous - "Started in the past and continuing to present time".
  if (eventOccurance === CONTEXT_OCCURANCE_PAST_NOW ||
      eventDuration === CONTEXT_DURATION_PARTIAL_CONTINUOUS) {
        
      switch() {
        case CONTEXT_POV_SELF_SINGULAR: return createWord([ "have been", pastParticiple ], TENSE_PRESENT_PERFECT_CONTINUOUS);
        case CONTEXT_POV_YOU_SINGULAR: return createWord([ "have been", pastParticiple ], TENSE_PRESENT_PERFECT_CONTINUOUS);
        case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "have been", pastParticiple], TENSE_PRESENT_PERFECT_CONTINUOUS); 
        case CONTEXT_POV_WE_PLURAL: return createWord([ "have been", pastParticiple ], TENSE_PRESENT_PERFECT_CONTINUOUS);
        case CONTEXT_POV_YOU_PLURAL: return createWord([ "have been", pastParticiple ], TENSE_PRESENT_PERFECT_CONTINUOUS);
        case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ "have been", pastParticiple ], TENSE_PRESENT_PERFECT_CONTINUOUS);
      }
  }


  // Simple Past - Event that describes an event or action that happened in the past. 
  if (eventOccurance === CONTEXT_OCCURANCE_PAST) {
    // ALWAYS THE SAME

    switch() {
      case CONTEXT_POV_SELF_SINGULAR: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case CONTEXT_POV_YOU_SINGULAR: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST); 
      case CONTEXT_POV_WE_PLURAL: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case CONTEXT_POV_YOU_PLURAL: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
    }

  }

  // Past Continuous - a continuing action or event in a time which began or existed in the past. It can also be used to describe an unfinished action
  if (eventOccurance === CONTEXT_OCCURANCE_PAST ||
      eventDuration === CONTEXT_DURATION_PARTIAL_CONTINUOUS) {
        switch() {
          case CONTEXT_POV_SELF_SINGULAR: return createWord([ "was" ], TENSE_PAST_CONTINUOUS);
          case CONTEXT_POV_YOU_SINGULAR: return createWord([ "have" ], TENSE_PAST_CONTINUOUS);
          case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "was" ], TENSE_PAST_CONTINUOUS); 
          case CONTEXT_POV_WE_PLURAL: return createWord([ ], TENSE_PAST_CONTINUOUS);
          case CONTEXT_POV_YOU_PLURAL: return createWord([ ], TENSE_PAST_CONTINUOUS);
          case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ ], TENSE_PAST_CONTINUOUS);
        }
  }


  // Past Perfect - The tense that is used to make it clear that one event happened before another in the past
  if (eventOccurance === CONTEXT_OCCURANCE_BEFORE_PAST) { // could be more refined?
        switch() {
          case CONTEXT_POV_SELF_SINGULAR: return createWord([ "had", pastParticiple ], TENSE_PAST_PERFECT);
          case CONTEXT_POV_YOU_SINGULAR: return createWord([ "had", pastParticiple ], TENSE_PAST_PERFECT);
          case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "had", pastParticiple ], TENSE_PAST_PERFECT); 
          case CONTEXT_POV_WE_PLURAL: return createWord([ "had", pastParticiple ], TENSE_PAST_PERFECT);
          case CONTEXT_POV_YOU_PLURAL: return createWord([ "had", pastParticiple ], TENSE_PAST_PERFECT);
          case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ "had", pastParticiple ], TENSE_PAST_PERFECT);
        }
  }

  // Past Perfect Continuous - started in the past and continued up until another time in the past
  if (eventOccurance === CONTEXT_OCCURANCE_PAST_FUTUREPAST) {
    switch() {
      case CONTEXT_POV_SELF_SINGULAR: return createWord([ "had been", presentParticiple ], TENSE_PAST_PERFECT_CONTINUOUS);
      case CONTEXT_POV_YOU_SINGULAR: return createWord([ "had been", presentParticiple ], TENSE_PAST_PERFECT_CONTINUOUS);
      case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "had been", presentParticiple], TENSE_PAST_PERFECT_CONTINUOUS); 
      case CONTEXT_POV_WE_PLURAL: return createWord([ "had been", presentParticiple ], TENSE_PAST_PERFECT_CONTINUOUS);
      case CONTEXT_POV_YOU_PLURAL: return createWord([ "had been", presentParticiple ], TENSE_PAST_PERFECT_CONTINUOUS);
      case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ "had been", presentParticiple ], TENSE_PAST_PERFECT_CONTINUOUS);
    }
  }


  // Simple Future - events which are expected, or likely to occur in the future.
  if (eventOccurance === CONTEXT_OCCURANCE_FUTURE) {
    // ALWAYS THE SAME

    switch() {
      case CONTEXT_POV_SELF_SINGULAR: return createWord([ "will", infinitive ], TENSE_SIMPLE_FUTURE);
      case CONTEXT_POV_YOU_SINGULAR: return createWord([ "will", infinitive ], TENSE_SIMPLE_FUTURE);
      case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "will", infinitive ], TENSE_SIMPLE_FUTURE); 
      case CONTEXT_POV_WE_PLURAL: return createWord([ "will", infinitive ], TENSE_SIMPLE_FUTURE);
      case CONTEXT_POV_YOU_PLURAL: return createWord([ "will", infinitive ], TENSE_SIMPLE_FUTURE);
      case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ "will", infinitive ], TENSE_SIMPLE_FUTURE);
    }
    return createWord(['will', infinitive], ENGLISH_TENSE);
  }

  // Future Continuous - The tense that is used for an unfinished action or event that will occur in future and continue for an expected length of time
  if (eventOccurance === CONTEXT_OCCURANCE_FUTURE && 
      eventDuration === CONTEXT_DURATION_PARTIAL_CONTINUOUS) {
        switch() {
          case CONTEXT_POV_SELF_SINGULAR: return createWord([ "will be", presentParticiple ], TENSE_FUTURE_CONTINUOUS);
          case CONTEXT_POV_YOU_SINGULAR: return createWord([ "will be", presentParticiple ], TENSE_FUTURE_CONTINUOUS);
          case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "will be", presentParticiple ], TENSE_FUTURE_CONTINUOUS); 
          case CONTEXT_POV_WE_PLURAL: return createWord([ "will be", presentParticiple ], TENSE_FUTURE_CONTINUOUS);
          case CONTEXT_POV_YOU_PLURAL: return createWord([ "will be", presentParticiple ], TENSE_FUTURE_CONTINUOUS);
          case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ "will be", presentParticiple ], TENSE_FUTURE_CONTINUOUS);
        }
  }

  // Future Perfect - actions that will be completed between now and some point in the future
  if (eventOccurance === CONTEXT_OCCURANCE_NOW_FUTURE) {
    // ALWAYS THE SAME

    switch() {
      case CONTEXT_POV_SELF_SINGULAR: return createWord([ "will have", pastParticiple ], TENSE_FUTURE_PERFECT);
      case CONTEXT_POV_YOU_SINGULAR: return createWord([ "will have", pastParticiple ], TENSE_FUTURE_PERFECT);
      case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([ "will have", pastParticiple ], TENSE_FUTURE_PERFECT); 
      case CONTEXT_POV_WE_PLURAL: return createWord([ "will have", pastParticiple ], TENSE_FUTURE_PERFECT);
      case CONTEXT_POV_YOU_PLURAL: return createWord([ "will have", pastParticiple ], TENSE_FUTURE_PERFECT);
      case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ "will have", pastParticiple ], TENSE_FUTURE_PERFECT);
    }
  }

  // Future Perfect Continuous - actions that will continue up until a point in the future
  if (eventOccurance === CONTEXT_OCCURANCE_UNKNOWN_FUTURE) {
    switch() {
      case CONTEXT_POV_SELF_SINGULAR: return createWord([ ], TENSE_FUTURE_PERFECT_CONTINUOUS);
      case CONTEXT_POV_YOU_SINGULAR: return createWord([ ], TENSE_FUTURE_PERFECT_CONTINUOUS);
      case CONTEXT_POV_HESHEIT_SINGULAR: return createWord([], TENSE_FUTURE_PERFECT_CONTINUOUS); 
      case CONTEXT_POV_WE_PLURAL: return createWord([ ], TENSE_FUTURE_PERFECT_CONTINUOUS);
      case CONTEXT_POV_YOU_PLURAL: return createWord([ ], TENSE_FUTURE_PERFECT_CONTINUOUS);
      case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord([ ], TENSE_FUTURE_PERFECT_CONTINUOUS);
    }
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

const verbConjugationEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.ConjugatedEnglishWord => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_VERB_ENGLISH;

  const { polarity } = determineVerbConjugationEnglish(words, options, sentenceType);
  const { tense } = determineVerbTenseConjugationEnglish(word, )


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
