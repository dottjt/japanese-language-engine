import {
  // createError,
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
  CONTEXT_TYPE_INTERNAL_STATE,
  CONTEXT_TYPE_TIME,
  CONTEXT_TYPE_QUANTITY,
  CONTEXT_TYPE_TOPIC_RELATIVE_POSITION,
  CONTEXT_TYPE_DIRECTION,
  CONTEXT_TYPE_AGENCY,
  CONTEXT_TYPE_PURPOSE,

  CONTEXT_TIME_PRESENT,
} from '../../constants/contextConstants';


const determinePreposition = (verb: Util.Word, subject: Util.Word) => {
  // maybe themes are the bridge between subject and context. 
  // So, nouns can only have certain traits. And if they fulfil them, then they are selected. 


  // different types of subjectContext as well
  // Monday // what is the subjectContext of this?
  const subjectContext = {
    wordType: 'Date',
    internalState: "CONTEXT_INTERNAL_STATE_ALIVE",
    positionRelative: "CONTEXT_TOPIC_RELATIVE_POSITION_INSIDE",
    direction: "CONTEXT_DIRECTION_TOWARD",
    quantity: "CONTEXT_QUANTITY_SINGLE",
    time: "CONTEXT_TIME_PRESENT",
  };


  // I ran inside the house // CONTEXT
  // run towards the house
  // run after the house


  const verbContext = {
    type: CONTEXT_TYPE_TIME
  };
  // ah, so these context options are also to helpa

  const verbWord = "run";

  const subjectWord = "house"; 
  
  switch(verbContext.type) {
    case CONTEXT_TYPE_INTERNAL_STATE: 
      return 
      
    case CONTEXT_TYPE_TIME: 
      // on Monday
      if (CONTEXT_TIME_PRESENT) {
          
      }
      // in the morning / in August 

      return 
    case CONTEXT_TYPE_QUANTITY: 
      return 
    case CONTEXT_TYPE_TOPIC_RELATIVE_POSITION: 
      return 
    case CONTEXT_TYPE_DIRECTION: 
      return 
    case CONTEXT_TYPE_AGENCY: 
      return 
    case CONTEXT_TYPE_PURPOSE: 
      return 
  }

  const outcome = "run to the house"; // CONTEXT_TOPIC_RELATIVE_POSITION_NEAR
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
