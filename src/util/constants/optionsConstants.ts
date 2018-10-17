// conjugation identifier

export const PREDICATE_IDENTIFIER = 'predicate';
export const TOPIC_IDENTIFIER = 'topic';

export const identifierArray = [
  PREDICATE_IDENTIFIER,
  TOPIC_IDENTIFIER,
];

// options.sentenceType

export const TOPIC_PREDICATE = 'TOPIC_PREDICATE';

export const sentenceTypeArray = [
  TOPIC_PREDICATE,
];

// options.variation

export const WA_SOB = 'WA_SOB'; // WA - STATEMENT OF BEING
export const WA_SOB_QUESTION = 'WA_SOB_QUESTION'; // WA - STATEMENT OF BEING

export const MO_SOB = 'MO_SOB'; // MO - STATEMENT OF BEING
export const MO_SOB_QUESTION = 'MO_SOB_QUESTION'; // MO - STATEMENT OF BEING

export const GA_SOB = 'GA_SOB'; // GA - STATEMENT OF BEING
export const GA_SOB_QUESTION = 'GA_SOB_QUESTION'; // GA - STATEMENT OF BEING

export const variationArray = [
  WA_SOB,
  WA_SOB_QUESTION,
  MO_SOB,
  MO_SOB_QUESTION,
  GA_SOB,
  GA_SOB_QUESTION,
];

// options.polarity

export const POLARITY_POSITIVE = 'positive';
export const POLARITY_NEGATIVE = 'negative';

export const polarityArray = [ 
  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,
];

// options.tense

export const TENSE_PRESENT = 'present';
export const TENSE_PAST = 'past';

export const tenseArray = [ 
  TENSE_PRESENT,
  TENSE_PAST,
];

// options.politeness

export const POLITENESS_CASUAL = 'c';
export const POLITENESS_FORMAL = 'f';
export const POLITENESS_HUMBLE = 'hu';
export const POLITENESS_HONORIFIC = 'ho';

export const politenessArray = [ 
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  // POLITENESS_HUMBLE,
  // POLITENESS_HONORIFIC,
];

// __typename
export const __TYPENAME_SENTENCE_DISPLAY_OPTIONS = 'options';
