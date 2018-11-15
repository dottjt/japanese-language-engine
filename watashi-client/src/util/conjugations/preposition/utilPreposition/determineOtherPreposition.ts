import {
  createError,
} from '../../../functions';

import {
  CONTEXT_AGENCY_SUBJECT_IS_TOOL,
  CONTEXT_AGENCY_TOPIC_IS_TOOL,
} from '../../../constants/contextConstants';

import {
  // NOUN_TYPE_DAY_OF_WEEK,
  // NOUN_TYPE_POINT_OF_DAY,
  // NOUN_TYPE_MONTH,
  // NOUN_TYPE_SEASON,
  // NOUN_TYPE_YEAR_DATE, 
  // NOUN_TYPE_CLOCK_DATE,
  // NOUN_TYPE_PERIOD_DESCRIPTOR,
  // NOUN_TYPE_NUMBER,
} from '../../../constants/wordConstants';

export const determineAgencyPreposition = () => { // agency or instrument
  // I opened my closet with a key. 
  if (CONTEXT_AGENCY_SUBJECT_IS_TOOL) { 
    return 'by';
  };

  // This poem was written by Milton.
  if (CONTEXT_AGENCY_TOPIC_IS_TOOL) {
    return 'with';
  };

  throw new Error(createError('determineOtherPreposition.ts', 'determineAgencyPreposition', ''))
};

export const determinePurposePreposition = () => {
  if () { 
    return 'by';
  };

  if () {
    return 'with';
  };

  if () {
    return 'on';
  };

  throw new Error(createError('determineOtherPreposition.ts', 'determine', ''))
};

export const determineReasonPreposition = () => {

  if () {
    return 'for';
  }

  if () {
    return 'through';
  }

  if () {
    return 'because of';
  }

  if () {
    return 'on account of';
  }

  if () {
    return 'from';
  }

  throw new Error(createError('determineOtherPreposition.ts', 'determine', ''))
};

export const determineConnectionPreposition = () => {

  if () { 
    return 'of';
  }

  if () { 
    return 'to';
  }

  if () { 
    return 'with';
  }

  throw new Error(createError('determineOtherPreposition.ts', 'determine', ''))
};

export const determineOriginPreposition = () => {

  if () {
    return 'from';
  }

  if () {
    return 'of';
  }

  throw new Error(createError('determineOtherPreposition.ts', 'determine', ''))
};