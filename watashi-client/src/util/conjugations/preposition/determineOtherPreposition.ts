import {
  createError,
} from '../../functions';

import {
  // CONTEXT_TIME_VARIABLE_POINT_IN_TIME,
  // CONTEXT_TIME_PERIOD,
  // CONTEXT_TIME_FUTURE,
  // CONTEXT_TIME_PAST,
  // CONTEXT_TIME_TELLING_TIME,
} from '../../constants/contextConstants';

import {
  // WORD_TYPE_DAY_OF_WEEK,
  // WORD_TYPE_POINT_OF_DAY,
  // WORD_TYPE_MONTH,
  // WORD_TYPE_SEASON,
  // WORD_TYPE_YEAR_DATE, 
  // WORD_TYPE_CLOCK_DATE,
  // WORD_TYPE_PERIOD_DESCRIPTOR,
  // WORD_TYPE_NUMBER,
} from '../../constants/wordConstants';

export const determineAgencyPreposition = () => {
  // written by John Keats
  if () { 
    return 'by';
  };

  if () {
    return 'on'
  };
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

};

export const determineOriginPreposition = () => {

  if () {
    return 'from';
  }

  if () {
    return 'of';
  }

};