import {
  createError,
} from '../../functions';

import {
  CONTEXT_TIME_VARIABLE_POINT_IN_TIME,
  CONTEXT_TIME_PERIOD,
  CONTEXT_TIME_FUTURE,
  CONTEXT_TIME_PAST,
  CONTEXT_TIME_TELLING_TIME,
} from '../../constants/contextConstants';

import {
  WORD_TYPE_DAY_OF_WEEK,
  WORD_TYPE_POINT_OF_DAY,
  WORD_TYPE_MONTH,
  WORD_TYPE_SEASON,
  WORD_TYPE_YEAR_DATE, 
  WORD_TYPE_CLOCK_DATE,
  WORD_TYPE_PERIOD_DESCRIPTOR,
  WORD_TYPE_NUMBER,
} from '../../constants/wordConstants';

// I think I need to keep in count sentence structure as well to determine what these things mean.


const determineTimePreposition = () => {
  /* Generic Point In Time */
  // on Monday
  if (WORD_TYPE_DAY_OF_WEEK && CONTEXT_TIME_VARIABLE_POINT_IN_TIME) {
    return 'on';
  }

  /* Generic Point In Time */
  // in the morning / in August / in Spring / in 2006
  if ((WORD_TYPE_POINT_OF_DAY || WORD_TYPE_MONTH || WORD_TYPE_SEASON || WORD_TYPE_YEAR_DATE) && CONTEXT_TIME_VARIABLE_POINT_IN_TIME)  {
    return 'in';
  }
  
  /* After Period of Time */
  // in an hour
  if (WORD_TYPE_PERIOD_DESCRIPTOR && CONTEXT_TIME_FUTURE) {
    return 'in';
  }

  /* Generic Point In Time */
  // at night / at half past nine
  if ((WORD_TYPE_POINT_OF_DAY || WORD_TYPE_CLOCK_DATE) && CONTEXT_TIME_VARIABLE_POINT_IN_TIME) {
    return 'at';
  }

  // NOTE: Since "last year" not covered.
  // since 1980 / since half past nine / since Spring / since March / since Monday
  if ((WORD_TYPE_YEAR_DATE || WORD_TYPE_CLOCK_DATE || WORD_TYPE_SEASON || WORD_TYPE_MONTH || WORD_TYPE_DAY_OF_WEEK) && CONTEXT_TIME_VARIABLE_POINT_IN_TIME) {
    return 'since';
  }
  
  // for 2 years / for 1 year
  if (WORD_TYPE_PERIOD_DESCRIPTOR && CONTEXT_TIME_PERIOD) {
    return 'for';
  }

  // 2 years ago / 1 year ago
  if (WORD_TYPE_PERIOD_DESCRIPTOR && CONTEXT_TIME_PAST) {
    return 'ago';
  }

  // before 2004 / before spring / before night / before tuesday / before half past nine
  if ((WORD_TYPE_DAY_OF_WEEK || WORD_TYPE_POINT_OF_DAY || WORD_TYPE_MONTH || WORD_TYPE_SEASON || WORD_TYPE_YEAR_DATE || WORD_TYPE_CLOCK_DATE) && CONTEXT_TIME_PAST) {
    return 'before';
  }

  // I have no idea how this should really work. 
  // ten to six (5:50)
  if (WORD_TYPE_NUMBER || CONTEXT_TIME_TELLING_TIME) {
    return 'to';
  }

  // ten past six (6:10)
  if (WORD_TYPE_NUMBER || CONTEXT_TIME_TELLING_TIME) {
    return 'past';
  }

  // from Monday to/till Friday
  if ('HAVE NOT YET FIGURED OUT') {
    return 'to'; // till // until
  }

  // He is on holiday until Friday.
  if ('HAVE NOT YET FIGURED OUT') {
    return 'till'; // until
  }

  // I will be back by 6 o’clock. - By 11 o'clock, I had read five pages.
  if ('HAVE NOT YET FIGURED OUT') {
    return 'by';
  }

  throw new Error(createError('prepositionConjugationEnglish.ts', '', ''))
}

export default determineTimePreposition;