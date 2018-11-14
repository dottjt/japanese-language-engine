import {
  createError,
  emptyWordElement,
} from '../../functions';

import {
  filtersentenceType,
} from '../utilConjugation';


import {
  __TYPENAME_CONJUGATED_ENGLISH_PREPOSITION,
} from '../../constants/typeNameConstants';

import {
  CONJUGATION_TYPE_PREPOSITION_ENGLISH,
} from '../../constants/optionsConstants';

import {
  PREPOSITION_TYPE_TIME,
  PREPOSITION_TYPE_PLACE,
  PREPOSITION_TYPE_DIRECTION,
  PREPOSITION_TYPE_AGENCY,
  PREPOSITION_TYPE_PURPOSE,
  PREPOSITION_TYPE_REASON,
  PREPOSITION_TYPE_CONNECTION,
  PREPOSITION_TYPE_ORIGIN,
} from '../../constants/contextConstants';

import determineTimePreposition from './determineTimePreposition';
import determinePlacePreposition from './determinePlacePreposition';
import determineDirectionPreposition from './determineDirectionPreposition';

import {
  determineAgencyPreposition,
  determinePurposePreposition,
  determineReasonPreposition,
  determineConnectionPreposition,
  determineOriginPreposition,  
} from './determineOtherPreposition';

// I think I need to keep in count sentence structure as well to determine what these things mean.


const determinePreposition = (verb: Util.Word, subject: Util.Word) => {
  // maybe themes are the bridge between subject and context. 
  // So, nouns can only have certain traits. And if they fulfil them, then they are selected. 


  // different types of subjectContext as well
  // Monday // what is the subjectContext of this?
  const subjectContext = {
    wordType: 'Date',
    // internalState: "CONTEXT_INTERNAL_STATE_WORKING",
    positionRelative: "CONTEXT_TOPIC_RELATIVE_DESTINATION_INSIDE",
    direction: "CONTEXT_DIRECTION_TOWARD",
    quantity: "CONTEXT_QUANTITY_SINGLE",
    time: "CONTEXT_TIME_PRESENT",
    // possession: "him, her etc. "
    physicalContact: '' // yes, no.
  };
  // Car // what is the subjectContext of this?


  type: CONTEXT_TYPE_TIME



  // I ran inside the house // CONTEXT
  // run towards the house
  // run after the house

  const verbWord = "run";

  const subjectWord = "house"; 
  
  switch(verbContext.type) {
    case PREPOSITION_TYPE_TIME: return determineTimePreposition();
    case PREPOSITION_TYPE_PLACE: return determinePlacePreposition();
    case PREPOSITION_TYPE_DIRECTION: return determineDirectionPreposition();
    case PREPOSITION_TYPE_AGENCY: return determineAgencyPreposition();
    case PREPOSITION_TYPE_PURPOSE: return determinePurposePreposition();
    case PREPOSITION_TYPE_REASON: return determineReasonPreposition();
    case PREPOSITION_TYPE_CONNECTION: return determineConnectionPreposition();
    case PREPOSITION_TYPE_ORIGIN: return determineOriginPreposition();
  }

  const outcome = "run to the house"; // CONTEXT_TOPIC_RELATIVE_DESTINATION_NEAR
};

//   // a function that figures out which preposition it is, based on both the verb and the subject



const prepositionConjugationEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceType: string): Util.ConjugatedEnglishWord => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_PREPOSITION_ENGLISH;

  const preposition = determinePreposition(verb, subject);

  // eat 
  // I think there needs to be another field for preposition:

  return {
    tense: emptyWordElement(),
    indefiniteArticle: emptyWordElement(),
    polarity: emptyWordElement(),
    word,
    type,
    sentenceType,
    __typename: __TYPENAME_CONJUGATED_ENGLISH_PREPOSITION,
  }
  // return `${prepositionPolarity} ${word.english}`;
};

export default prepositionConjugationEnglish;
