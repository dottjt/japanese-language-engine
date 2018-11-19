import {
  createError,
} from '../../../functions';

import {
  CONTEXT_SUBJECT_ROLE_SECOND_HAND,
  CONTEXT_SUBJECT_ROLE_DIRECT,
  CONTEXT_SUBJECT_ROLE_ON_BEHALF_OF,
  CONTEXT_SUBJECT_ROLE_BECAUSE_OF,
} from '../../../constants/contextConstants';


// NOUN_TYPE_INSTRUMENT:
// “Aunt Patricia returned home by ferry.”
// “She opened the locked door with an old key.”
// “May I finish my homework on your computer?”

// “Everything I did was for you.”
// “Through her bravery, we were able to escape unharmed.”
// “Because of the delay, I was late to the parade.”
// “The employees refused to work on account of their low pay.”
// “He knows from experience how to deal with them.”

// determinePurposePreposition
export const determineAgencyPurposeReasonPreposition = (sentenceContext): string[] => { // agency or instrument
  // This poem was written by Milton.
  if (sentenceContext.subjectRole === CONTEXT_SUBJECT_ROLE_SECOND_HAND) { 
    return ['by']; // on 
  }

  // I opened my closet with a key.
  else if (sentenceContext.subjectRole === CONTEXT_SUBJECT_ROLE_DIRECT) {
    return ['with'];
  }

  // I opened my closet with a key.
  else if (sentenceContext.subjectRole === CONTEXT_SUBJECT_ROLE_ON_BEHALF_OF) {
    return ['on']; // for, // through
  }

  // I opened my closet with a key.
  else if (sentenceContext.subjectRole === CONTEXT_SUBJECT_ROLE_BECAUSE_OF) {
    return ['because of']; // on account of
  }
  // return 'from';
  // apparently this is a valid reason. 

  throw new Error(createError('determineOtherPreposition.ts', 'determineAgencyPreposition', ''))
};

// connection
// of 
// to
// with

// origin
// 'from'
// 'of
