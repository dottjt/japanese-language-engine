import {
  createError,
} from '../../../functions';

import {
  CONTEXT_EVENT_OCCURANCE_BEFORE_PAST,
  CONTEXT_EVENT_OCCURANCE_PAST,
  CONTEXT_EVENT_OCCURANCE_PAST_NOW,
  CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST,
  CONTEXT_EVENT_OCCURANCE_NOW,
  CONTEXT_EVENT_OCCURANCE_NOW_FUTURE,
  CONTEXT_EVENT_OCCURANCE_FUTURE,

  CONTEXT_EVENT_DURATION_CONTINUOUS,
  CONTEXT_EVENT_DURATION_SINGLE,
} from '../../../constants/contextConstants';

// I think I need to keep in count sentence structure as well to determine what these things mean.

export const determineTimePrepositionDayOfWeek = (sentenceContext): string[] => {
  const contextWhen = sentenceContext.selectedEventOccurance;
  const contextDuration = sentenceContext.selectedEventDuration;

  // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
  switch(`${contextWhen}${contextDuration}`) {
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}`:  

    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Left on monday.
      return ['since'];
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Leaving since Monday.
      return ['before'];

    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}`:  

    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}`:  

    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Leaving on monday.
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Leave on Monday.
      return ['on'];

    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}`:  

    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Will be leaving next Monday.
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Will leave next Monday.
      return ['next'];

  };

  throw new Error(createError('determineTimePreposition.ts', 'determineTimePrepositionDayOfWeek', `${contextWhen}${contextDuration} combination does not exist in function.`));
};

// NOUN_TYPE_MONTH
// NOUN_TYPE_SEASON
// NOUN_TYPE_YEAR_DATE
export const determineTimePrepositionMonthSeasonDate = (sentenceContext): string[] => {
  const contextWhen = sentenceContext.selectedEventOccurance;
  const contextDuration = sentenceContext.selectedEventDuration;

  // January, February, March, April
  // Spring, Autumn, Winter
  // 2006, 2007, 2008
  switch(`${contextWhen}${contextDuration}`) {
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}`:  
    
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Leaving since Spring.
      return ['since'];
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Leaving since Spring.
      return ['before']; // what about 
    
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}`:  
    
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}`:  
    
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Leaving in Spring.
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Leave in Spring.
      return ['in'];
    
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Will be leaving next Spring.
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Will leave next Spring. 
      return ['next'];
    
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}`:  
    

    // NOTE: Will need to think about 'before' and 'last'. What is the difference?
    // before Spring. before August.
    // before 2004 / before spring / before night / before tuesday / before half past nine
    // if (NOUN_TYPE_DAY_OF_WEEK || NOUN_TYPE_POINT_OF_DAY || NOUN_TYPE_MONTH || NOUN_TYPE_SEASON || NOUN_TYPE_YEAR_DATE || NOUN_TYPE_CLOCK_DATE) {

    // oh, so I think it's about adding CONTEXT_EVENT_OCCURANCE_ONE_BEFORE, CONTEXT_EVENT_OCCURANCE_ONE_AHEAD

  };
  throw new Error(createError('determineTimePreposition.ts', 'determineTimePrepositionMonthSeasonDate', `${contextWhen}${contextDuration} combination does not exist in function.`));
};


// NOUN_TYPE_POINT_OF_DAY
// NOUN_TYPE_PERIOD_DESCRIPTOR
export const determineTimePrepositionPeriodDescriptor = (sentenceContext): string[] => {
  const contextWhen = sentenceContext.selectedEventOccurance;
  const contextDuration = sentenceContext.selectedEventDuration;

  // year, day, week, month
  switch(`${contextWhen}${contextDuration}`) {
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}`:  
    
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Ate for an hour.
      return ['for'];
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Ate in an hour.
      return ['in']

    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}`:  
    
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}`:  
    
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Eat for the hour.
      return ['for'];
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Eat in the hour;
      return ['in'];

    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}`:  
    
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}`: // Continuous: Eat for an hour.
      return ['for'];
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}`: // Definite: Eat in an hour.  
      return ['in'];

    // NOTE: Need to think about ago. (when preposition comes AFTER the subject)
    // An hour ago. 
  };
  throw new Error(createError('determineTimePreposition.ts', 'determineTimePrepositionPeriodDescriptor', `${contextWhen}${contextDuration} combination does not exist in function.`));
};


  // NOTE: Time telling should be it's own noun module. so "half past nine" should be considered it's own noun type :) 

  // since half past nine

  // 04 - CONTEXT_EVENT_OCCURANCE_TELLING_TIME
  // if (CONTEXT_EVENT_OCCURANCE_TELLING_TIME) {
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

  