import {
  // createError,
  emptyWordElement,
} from '../../functions';

import {
  filtersentenceType,
  // returnSentenceParts,
  createWord,
} from '../utilConjugation';

import {
  __TYPENAME_CONJUGATED_ENGLISH_PREPOSITION,
} from '../../constants/typeNameConstants';

import {
  CONJUGATION_TYPE_PREPOSITION_ENGLISH,

  ENGLISH_PREPOSITION,
} from '../../constants/optionsConstants';



import {
  // 
  NOUN_TYPE_DAY_OF_WEEK,
  NOUN_TYPE_PERIOD_DESCRIPTOR,
  NOUN_TYPE_POINT_OF_DAY,
  NOUN_TYPE_MONTH,
  NOUN_TYPE_SEASON,
  NOUN_TYPE_YEAR_DATE,
  NOUN_TYPE_CLOCK_DATE,

  // place
  NOUN_TYPE_SPACE,
  NOUN_TYPE_ABSTRACT,
} from '../../constants/wordConstants';

import {
  determineTimePrepositionDayOfWeek,
  determineTimePrepositionMonthSeasonDate,
  determineTimePrepositionPeriodDescriptor,
} from './utilPreposition/determineTimePreposition';

import determinePlacePreposition from './utilPreposition/determinePlacePreposition';
import {
  determineAgencyPreposition,
  determinePurposePreposition,
  determineReasonPreposition,
  determineConnectionPreposition,
  determineOriginPreposition,  
} from './utilPreposition/determineOtherPreposition';


const determinePreposition = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  // maybe themes are the bridge between subject and context. 
  // const { topic, subject, verb } = returnSentenceParts(words);

  // figure out monday.
  const eventContext = {
    topicPosition: 'CONTEXT_TOPIC_POSITION_NEAR',
    topicDestination: "CONTEXT_TOPIC_RELATIVE_TOPIC_DESTINATION_INSIDE",
    eventDirection: "CONTEXT_DIRECTION_TOWARD",  
    eventWhen: 'CONTEXT_WHEN_PRESENT',
    eventDuration: 'CONTEXT_DURATION_DEFINITE',
    subjectConnection: 'CONTEXT_SUBJECT_CONNECTION_IN_CONJUNCTION',
  };

  switch(subjectWord.metaType.nounType) {
    // Time Prepositions
    case NOUN_TYPE_DAY_OF_WEEK: 
      return createWord(determineTimePrepositionDayOfWeek(eventContext), ENGLISH_PREPOSITION);

    case NOUN_TYPE_PERIOD_DESCRIPTOR:
    case NOUN_TYPE_POINT_OF_DAY: 
      return createWord(determineTimePrepositionPeriodDescriptor(eventContext), ENGLISH_PREPOSITION);
   
    case NOUN_TYPE_MONTH: 
    case NOUN_TYPE_SEASON: 
    case NOUN_TYPE_YEAR_DATE:  
      return createWord(determineTimePrepositionMonthSeasonDate(eventContext), ENGLISH_PREPOSITION);
    

    // Place Prepositions
    case NOUN_TYPE_SPACE:
      return createWord(determinePlacePreposition(eventContext), ENGLISH_PREPOSITION);
    
    // case NOUN_TYPE_CLOCK_DATE:   
      // NOTE: This requires attention yo.

    // case NOUN_TYPE_ABSTRACT:
    // NOTE: Maybe I can treat time as if it's an abstract concept? Yes motherfucker.

    case PREPOSITION_TYPE_AGENCY: return createWord(determineAgencyPreposition(eventContext), ENGLISH_PREPOSITION);
    case PREPOSITION_TYPE_PURPOSE: return createWord(determinePurposePreposition(eventContext), ENGLISH_PREPOSITION);
    case PREPOSITION_TYPE_REASON: return createWord(determineReasonPreposition(eventContext), ENGLISH_PREPOSITION);
    case PREPOSITION_TYPE_CONNECTION: return createWord(determineConnectionPreposition(eventContext), ENGLISH_PREPOSITION);
    case PREPOSITION_TYPE_ORIGIN: return createWord(determineOriginPreposition(eventContext), ENGLISH_PREPOSITION);
  }

  const outcome = "run to the house"; // CONTEXT_TOPIC_RELATIVE_TOPIC_DESTINATION_NEAR
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
