import {
  createError,
} from '../../../functions';

import {
  CONTEXT_WHEN_PRESENT,
  CONTEXT_WHEN_PAST,
  CONTEXT_WHEN_FUTURE,
  CONTEXT_DURATION_CONTINUOUS,
  CONTEXT_DURATION_DEFINITE_CONTINUOUS,
  CONTEXT_DURATION_DEFINITE,
} from '../../../constants/contextConstants';

import {
  NOUN_TYPE_DAY_OF_WEEK,
  NOUN_TYPE_POINT_OF_DAY,
  NOUN_TYPE_MONTH,
  NOUN_TYPE_SEASON,
  NOUN_TYPE_YEAR_DATE, 
  NOUN_TYPE_CLOCK_DATE,
  NOUN_TYPE_PERIOD_DESCRIPTOR,
  NOUN_TYPE_NUMBER_MINUTE,
  NOUN_TYPE_NUMBER_HOUR,
} from '../../../constants/wordConstants';

// I think I need to keep in count sentence structure as well to determine what these things mean.


export const determineTimePrepositionDayOfWeek = (eventContext): string => {
  const contextWhen = eventContext.eventWhen;
  const contextDuration = eventContext.eventDuration;

  // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
  switch(`${contextWhen}${contextDuration}`) {
    // NOTE: Continuous: Leaving on monday. Definite: Leave on Monday.
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`: 
      return 'on';

    // NOTE: Continuous: Left on monday. Definite: Leaving since Monday.
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
      return 'since';
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
      return 'last';

    // NOTE: Continuous: Will be leaving next Monday. Definite: Will leave next Monday.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
      return 'next';
  };
};

export const determineTimePrepositionPeriodDescriptor = (eventContext): string => {
  const contextWhen = eventContext.eventWhen;
  const contextDuration = eventContext.eventDuration;

  // year, day, week, month
  switch(`${contextWhen}${contextDuration}`) {
    // Eat in an hour 


    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`:

    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 

    // NOTE: Continuous: Eat for an hour. Definite: Eat in an hour.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
      return 'in';
  };
};


const determineTimePreposition = () => {

  // 01 - CONTEXT_POINT_IN_TIME
  if (CONTEXT_POINT_IN_TIME) {
    // on Monday
    if (NOUN_TYPE_DAY_OF_WEEK) {
      return 'on';
    }

    // in an hour / in the morning / in August / in Spring / in 2006
    if (NOUN_TYPE_PERIOD_DESCRIPTOR || NOUN_TYPE_POINT_OF_DAY || NOUN_TYPE_MONTH || NOUN_TYPE_SEASON || NOUN_TYPE_YEAR_DATE) {
      return 'in';
    }

    // at night / at half past nine
    if (NOUN_TYPE_POINT_OF_DAY || NOUN_TYPE_CLOCK_DATE) {
      return 'at';
    }

    // NOTE: Since "last year" not covered.
    // since 1980 / since half past nine / since Spring / since March / since Monday
    if (NOUN_TYPE_YEAR_DATE || NOUN_TYPE_CLOCK_DATE || NOUN_TYPE_SEASON || NOUN_TYPE_MONTH || NOUN_TYPE_DAY_OF_WEEK) {
      return 'since';
    }
  }
  
  // 02 - CONTEXT_WHEN_PERIOD
  if (CONTEXT_WHEN_PERIOD) {
    // for 2 years / for 1 year
    if (NOUN_TYPE_PERIOD_DESCRIPTOR) {
      return 'for';
    }

    // 2 years ago / 1 year ago
    if (NOUN_TYPE_PERIOD_DESCRIPTOR && CONTEXT_WHEN_PAST) {
      return 'ago';
    }
  }

  // 03 - CONTEXT_WHEN_PAST
  if (CONTEXT_WHEN_PAST) {
    // before 2004 / before spring / before night / before tuesday / before half past nine
    if (NOUN_TYPE_DAY_OF_WEEK || NOUN_TYPE_POINT_OF_DAY || NOUN_TYPE_MONTH || NOUN_TYPE_SEASON || NOUN_TYPE_YEAR_DATE || NOUN_TYPE_CLOCK_DATE) {
      return 'before';
    }
  }

  // 04 - CONTEXT_WHEN_TELLING_TIME
  // if (CONTEXT_WHEN_TELLING_TIME) {
  //   // I have no idea how this should really work. 
  //   // ten to six (5:50)
  //   if (NOUN_TYPE_NUMBER_MINUTE) {
  //     return 'to';
  //   }

  //   // ten past six (6:10)
  //   if (NOUN_TYPE_NUMBER_HOUR) {
  //     return 'past';
  //   }
  // }

  // 05 - CONTEXT_WHEN_PRESENT
  if (CONTEXT_WHEN_PRESENT) {

  }

  // 06 - CONTEXT_WHEN_FUTURE
  if (CONTEXT_WHEN_FUTURE) {

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