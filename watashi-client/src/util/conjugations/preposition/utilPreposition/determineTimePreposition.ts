import {
  createError,
} from '../../../functions';

import {
  CONTEXT_WHEN_PRESENT,
  CONTEXT_WHEN_PAST,
  CONTEXT_WHEN_FUTURE,
  CONTEXT_DURATION_CONTINUOUS,
  // CONTEXT_DURATION_DEFINITE_CONTINUOUS,
  CONTEXT_DURATION_DEFINITE,
} from '../../../constants/contextConstants';

// I think I need to keep in count sentence structure as well to determine what these things mean.

export const determineTimePrepositionDayOfWeek = (eventContext): string[] => {
  const contextWhen = eventContext.eventWhen;
  const contextDuration = eventContext.eventDuration;

  // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
  switch(`${contextWhen}${contextDuration}`) {
    // Continuous: Leaving on monday. Definite: Leave on Monday.
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`: 
      return ['on'];

    // Continuous: Left on monday. Definite: Leaving since Monday.
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
      return ['since'];
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
      return ['before'];

    // Continuous: Will be leaving next Monday. Definite: Will leave next Monday.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
      return ['next'];
  };

  throw new Error(createError('determineTimePreposition.ts', 'determineTimePrepositionDayOfWeek', `${contextWhen}${contextDuration} combination does not exist in function.`));
};

// NOUN_TYPE_MONTH
// NOUN_TYPE_SEASON
// NOUN_TYPE_YEAR_DATE
export const determineTimePrepositionMonthSeasonDate = (eventContext): string[] => {
  const contextWhen = eventContext.eventWhen;
  const contextDuration = eventContext.eventDuration;

  // Spring
  switch(`${contextWhen}${contextDuration}`) {
    // Continuous: Leaving in Spring. Definite: Leave in Spring.
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`: 
      return ['in'];

    // Continuous: Leaving since Spring. Definite: Leaving since Spring.
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
      return ['since'];
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
      return ['before']; // what about 

    // Continuous: Will be leaving next Spring. Definite: Will leave next Spring.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
      return ['next'];

    // NOTE: Will need to think about 'before' and 'last'. What is the difference?
    // before Spring. before August.
    // before 2004 / before spring / before night / before tuesday / before half past nine
    // if (NOUN_TYPE_DAY_OF_WEEK || NOUN_TYPE_POINT_OF_DAY || NOUN_TYPE_MONTH || NOUN_TYPE_SEASON || NOUN_TYPE_YEAR_DATE || NOUN_TYPE_CLOCK_DATE) {

    // oh, so I think it's about adding CONTEXT_WHEN_ONE_BEFORE, CONTEXT_WHEN_ONE_AHEAD

  };
  throw new Error(createError('determineTimePreposition.ts', 'determineTimePrepositionMonthSeasonDate', `${contextWhen}${contextDuration} combination does not exist in function.`));
};


// NOUN_TYPE_POINT_OF_DAY
// NOUN_TYPE_PERIOD_DESCRIPTOR
export const determineTimePrepositionPeriodDescriptor = (eventContext): string[] => {
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
      return ['for'];

    // Definite: Eat in the hour;
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_DEFINITE}`:
    //  Definite: Eat in an hour.
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
    // Definite: Ate in an hour.
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
      return ['in'];

    // NOTE: Need to think about ago. (when preposition comes AFTER the subject)
    // An hour ago. 
  };
  throw new Error(createError('determineTimePreposition.ts', 'determineTimePrepositionPeriodDescriptor', `${contextWhen}${contextDuration} combination does not exist in function.`));
};


  // NOTE: Time telling should be it's own noun module. so "half past nine" should be considered it's own noun type :) 

  // since half past nine

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

  // // from Monday to/till Friday
  // if ('HAVE NOT YET FIGURED OUT') {
  //   return 'to'; // till // until
  // }

  // // He is on holiday until Friday.
  // if ('HAVE NOT YET FIGURED OUT') {
  //   return 'till'; // until
  // }
  // // I will be back by 6 o’clock. - By 11 o'clock, I had read five pages.
  // if ('HAVE NOT YET FIGURED OUT') {
  //   return 'by';
  // }

  // at night / at half past nine
  // if (NOUN_TYPE_POINT_OF_DAY_NIGHT || NOUN_TYPE_CLOCK_DATE) {
  //   return 'at';
  // }