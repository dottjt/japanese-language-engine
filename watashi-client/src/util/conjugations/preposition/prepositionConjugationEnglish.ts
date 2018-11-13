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
  
  CONTEXT_TIME_PRESENT,
  CONTEXT_TIME_PERIOD,
} from '../../constants/contextConstants';

const determineTimePreposition = () => {
  // on Monday
  if (WORD_TYPE_DAY_OF_WEEK && CONTEXT_TIME_PRESENT) {
    return 'on';
  }

  // in the morning / in August / in the morning / in an hour
  if ((WORD_TYPE_TIME_OF_DAY || WORD_TYPE_MONTH_OR_SEASON || WORD_TYPE_YEAR || WORD_TYPE_PERIOD_OF_TIME) && CONTEXT_TIME_PERIOD ) {
    return 'in';
  }

  // at night / at half past nine
  if (WORD_TYPE_NIGHT || WORD_TYPE_POINT_OF_TIME) {
    return 'at';
  }

  // since 1980
  if () {
    return 'since';
  }
  
  // for 2 years
  if () {
    return 'for';
  }

  // 2 years ago
  if () {
    return 'ago';
  }

  // before 2004
  if () {
    return 'before';
  }
  
  // ten to six (5:50)
  if () {
    return 'to';
  }

  // ten past six (6:10)
  if () {
    return 'past';
  }

  // from Monday to/till Friday
  if () {
    return 'to'; // till // until
  }

  // He is on holiday until Friday.
  if () {
    return 'till'; // until
  }

  // I will be back by 6 o’clock. - By 11 o'clock, I had read five pages.
  if () {
    return 'by';
  }

  throw new Error(createError('prepositionConjugationEnglish.ts', '', ''))
}

const determinePlacePreposition = () => {
  // in the kitchen, in London
  // in the book
  // in the car, in a taxi
  // in the picture, in the world
  if () {
    return 'in';
  }
  // at the door, at the station
  // at the table
  // at a concert, at the party
  // at the cinema, at school, at work
  if () {
    return 'at';
  }
  // the picture on the wall
  // London lies on the Thames.
  // on the table
  // on the left
  // on the first floor
  // on the bus, on a plane
  // on TV, on the radio
  if () {
    return 'on';
  }
  // Jane is standing by / next to / beside the car.
  if () {
    return 'by'; // next // to // beside
  }
  // the bag is under the table
  if () {
    return 'under';
  }
  // the fish are below the surface
  if () {
    return 'below';
  }
  // put a jacket over your shirt
  // over 16 years of age
  // walk over the bridge
  // climb over the wall
  if () {
    return 'over';
  }
  // a path above the lake
  if () {
    return 'above';
  }

  throw new Error(createError('prepositionConjugationEnglish.ts', '', ''))
}

const determineDirectionPreposition = () => {
  // walk across the bridge
  // swim across the lake
  if () {
    return 'across';
  }
  // drive through the tunnel
  if () {
    return 'through';
  }
  // go to the cinema
  // go to London / Ireland
  // go to bed
  if () {
    return 'to';
  }
  // go into the kitchen / the house
  if () {
    return 'into';
  }
  // go 5 steps towards the house
  if () {
    return 'towards';
  }
  // jump onto the table
  if () {
    return 'onto';
  }
  // a flower from the garden
  if () {
    return 'from';
  }

  throw new Error(createError('prepositionConjugationEnglish.ts', '', ''))
};

const determineDirectionPreposition = () => {
  
};

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
    possession: "him, her etc. "
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
    case PREPOSITION_TYPE_TIME: return determineTimePreposition();
    case PREPOSITION_TYPE_PLACE: return determinePlacePreposition();
    case PREPOSITION_TYPE_DIRECTION: return determineDirectionPreposition();
    case PREPOSITION_TYPE_AGENCY: return 
    case PREPOSITION_TYPE_PURPOSE: return 
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
