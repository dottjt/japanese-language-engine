// conjugation identifier

export const PREDICATE_IDENTIFIER = 'predicate';
export const TOPIC_IDENTIFIER = 'topic';

export const identifierArray = [
  PREDICATE_IDENTIFIER,
  TOPIC_IDENTIFIER,
];

// options.sentenceType

export const TOPIC = 'TOPIC';
export const PREDICATE = 'PREDICATE';
export const TOPIC_PREDICATE = 'TOPIC_PREDICATE';

export const sentenceTypeArray = [
  TOPIC,
  PREDICATE,
  TOPIC_PREDICATE,
];

// options.variation

export const WA_SOB = 'WA_NSOB'; // WA - STATEMENT OF BEING

export const WA_NS = 'WA_NS'; // WA - NOUN STATEMENT
export const WA_NS_QUESTION = 'WA_NS_QUESTION'; // WA - NOUN STATEMENT

export const MO_NS = 'MO_NS'; // MO - NOUN STATEMENT
export const MO_NS_QUESTION = 'MO_NS_QUESTION'; // MO - NOUN STATEMENT

export const GA_NS = 'GA_NS'; // GA - NOUN STATEMENT
export const GA_NS_QUESTION = 'GA_NS_QUESTION'; // GA - NOUN STATEMENT


export const WO_VS = 'WO_VS'; // WO - VERB STATEMENT
export const WO_VS_QUESTION = 'WO_VS_QUESTION'; // GA - VERB STATEMENT

export const NI_VS = 'NI_VS'; // NI - VERB STATEMENT
export const NI_VS_QUESTION = 'NI_VS_QUESTION'; // GA - VERB STATEMENT

export const DE_VS = 'GA_VS'; // GA - VERB STATEMENT
export const DE_VS_QUESTION = 'GA_VS_QUESTION'; // GA - VERB STATEMENT


export const variationArray = [
  WA_NS,
  WA_NS_QUESTION,
  MO_NS,
  MO_NS_QUESTION,
  GA_NS,
  GA_NS_QUESTION,

  WO_VS,
  WO_VS_QUESTION,
  NI_VS,
  NI_VS_QUESTION,
  DE_VS,
  DE_VS_QUESTION,
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
