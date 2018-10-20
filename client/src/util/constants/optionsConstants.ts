// options.primaryType

export const VERB = 'VERB';
export const SUBJECT = 'SUBJECT';
export const TOPIC = 'TOPIC';

export const primaryTypeArray = [
  VERB,
  SUBJECT,
  TOPIC,
];

// options.variation

export const WA_SOB = 'WA_SOB'; // WA - STATEMENT OF BEING

export const WA_NS = 'WA_NS'; // WA - NOUN STATEMENT
export const MO_NS = 'MO_NS'; // MO - NOUN STATEMENT
export const GA_NS = 'GA_NS'; // GA - NOUN STATEMENT

export const WO_VS = 'WO_VS'; // WO - VERB STATEMENT
export const NI_VS = 'NI_VS'; // NI - VERB STATEMENT
export const DE_VS = 'GA_VS'; // GA - VERB STATEMENT

export const variationArray = [
  WA_SOB,
  
  WA_NS,
  MO_NS,
  GA_NS,

  WO_VS,
  NI_VS,
  DE_VS,
];

// options.polarity

export const POLARITY_POSITIVE = 'positive';
export const POLARITY_NEGATIVE = 'negative';

export const polarityArray = [ 
  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,
];

export const polarityArrayLength = polarityArray.length;

// options.tense

export const TENSE_PRESENT = 'present';
export const TENSE_PAST = 'past';

export const tenseArray = [ 
  TENSE_PRESENT,
  TENSE_PAST,
];

export const tenseArrayLength = tenseArray.length;


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

export const politenessArrayLength = politenessArray.length;

// options.gender
export const GENDER_MASCULINE = 'mas';
export const GENDER_FEMININE = 'fem';

export const genderArray = [ 
  GENDER_MASCULINE,
  GENDER_FEMININE,
];

export const genderArrayLength = genderArray.length;

// __typename
export const __TYPENAME_SENTENCE_DISPLAY_OPTIONS = 'options';
