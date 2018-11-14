import {
  createError,
} from '../../functions';

import {
  CONTEXT_POINT_IN_TIME,
  CONTEXT_TIME_PERIOD,
  CONTEXT_TIME_PRESENT,
  CONTEXT_TIME_PAST,
  CONTEXT_TIME_FUTURE,
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
  WORD_TYPE_NUMBER_MINUTE,
  WORD_TYPE_NUMBER_HOUR,
} from '../../constants/wordConstants';

// I think I need to keep in count sentence structure as well to determine what these things mean.

const determineTimePreposition = () => {

  // 01 - CONTEXT_POINT_IN_TIME
  if (CONTEXT_POINT_IN_TIME) {
    // on Monday
    if (WORD_TYPE_DAY_OF_WEEK) {
      return 'on';
    }

    // in an hour / in the morning / in August / in Spring / in 2006
    if (WORD_TYPE_PERIOD_DESCRIPTOR || WORD_TYPE_POINT_OF_DAY || WORD_TYPE_MONTH || WORD_TYPE_SEASON || WORD_TYPE_YEAR_DATE) {
      return 'in';
    }

    // at night / at half past nine
    if (WORD_TYPE_POINT_OF_DAY || WORD_TYPE_CLOCK_DATE) {
      return 'at';
    }

    // NOTE: Since "last year" not covered.
    // since 1980 / since half past nine / since Spring / since March / since Monday
    if (WORD_TYPE_YEAR_DATE || WORD_TYPE_CLOCK_DATE || WORD_TYPE_SEASON || WORD_TYPE_MONTH || WORD_TYPE_DAY_OF_WEEK) {
      return 'since';
    }
  }
  
  // 02 - CONTEXT_TIME_PERIOD
  if (CONTEXT_TIME_PERIOD) {
    // for 2 years / for 1 year
    if (WORD_TYPE_PERIOD_DESCRIPTOR) {
      return 'for';
    }

    // 2 years ago / 1 year ago
    if (WORD_TYPE_PERIOD_DESCRIPTOR && CONTEXT_TIME_PAST) {
      return 'ago';
    }
  }

  // 03 - CONTEXT_TIME_PAST
  if (CONTEXT_TIME_PAST) {
    // before 2004 / before spring / before night / before tuesday / before half past nine
    if (WORD_TYPE_DAY_OF_WEEK || WORD_TYPE_POINT_OF_DAY || WORD_TYPE_MONTH || WORD_TYPE_SEASON || WORD_TYPE_YEAR_DATE || WORD_TYPE_CLOCK_DATE) {
      return 'before';
    }
  }

  // 04 - CONTEXT_TIME_TELLING_TIME
  // if (CONTEXT_TIME_TELLING_TIME) {
  //   // I have no idea how this should really work. 
  //   // ten to six (5:50)
  //   if (WORD_TYPE_NUMBER_MINUTE) {
  //     return 'to';
  //   }

  //   // ten past six (6:10)
  //   if (WORD_TYPE_NUMBER_HOUR) {
  //     return 'past';
  //   }
  // }

  // 05 - CONTEXT_TIME_PRESENT
  if (CONTEXT_TIME_PRESENT) {

  }

  // 06 - CONTEXT_TIME_FUTURE
  if (CONTEXT_TIME_FUTURE) {

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