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
    // Continuous: Leaving on monday. Definite: Leave on Monday.
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`: 
      return 'on';

    // Continuous: Left on monday. Definite: Leaving since Monday.
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
      return 'since';
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
      return 'last';

    // Continuous: Will be leaving next Monday. Definite: Will leave next Monday.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
      return 'next';
  };
};

// NOUN_TYPE_MONTH
// NOUN_TYPE_SEASON
// NOUN_TYPE_YEAR_DATE
export const determineTimePrepositionMonthSeasonDate = (eventContext): string => {
  const contextWhen = eventContext.eventWhen;
  const contextDuration = eventContext.eventDuration;

  // Spring
  switch(`${contextWhen}${contextDuration}`) {
    // Continuous: Leaving in Spring. Definite: Leave in Spring.
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`: 
      return 'in';

    // Continuous: Leaving since Spring. Definite: Leaving since Spring.
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
      return 'since';
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
      return 'last';

    // Continuous: Will be leaving next Spring. Definite: Will leave next Spring.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
      return 'next';

    // NOTE: Will need to think about 'before'
    // before Spring. before August. 
  };
};


// NOUN_TYPE_POINT_OF_DAY
// NOUN_TYPE_PERIOD_DESCRIPTOR
export const determineTimePrepositionPeriodDescriptor = (eventContext): string => {
  const contextWhen = eventContext.eventWhen;
  const contextDuration = eventContext.eventDuration;

  // year, day, week, month
  switch(`${contextWhen}${contextDuration}`) {
    // Continuous: Eat for the hour.
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:
    // Continuous: Eat for an hour.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
    // Continuous: Ate for an hour.
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
      return 'for';

    // Definite: Eat in the hour;
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`:
    //  Definite: Eat in an hour.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
    // Definite: Ate in an hour.
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
      return 'in';

    // NOTE: Need to think about adjective subject;
    // An hour ago. 
  };
};


export const determineTimePrepositionMonth = (eventContext): string => {
  const contextWhen = eventContext.eventWhen;
  const contextDuration = eventContext.eventDuration;

  switch(`${contextWhen}${contextDuration}`) {

        case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:
        case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
        case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
        
        // Definite: In November
        case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`:
        case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
        case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
          return 'in';
  } 
};

const determineTimePreposition = () => {

  // 01 - CONTEXT_POINT_IN_TIME


  // at night / at half past nine
  if (NOUN_TYPE_POINT_OF_DAY_NIGHT || NOUN_TYPE_CLOCK_DATE) {
    return 'at';
  }

  // since half past nine
  if (NOUN_TYPE_CLOCK_DATE) {
    return 'since';
  }

  // this applies when after the subject, not before. 
  if (NOUN_TYPE_PERIOD_DESCRIPTOR) {
    return 'ago';
  }

    // before 2004 / before spring / before night / before tuesday / before half past nine
    if (NOUN_TYPE_DAY_OF_WEEK || NOUN_TYPE_POINT_OF_DAY || NOUN_TYPE_MONTH || NOUN_TYPE_SEASON || NOUN_TYPE_YEAR_DATE || NOUN_TYPE_CLOCK_DATE) {
      return 'before';
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