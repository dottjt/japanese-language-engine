// conjugation types

export const CONJUGATION_TYPE_NOUN_ENGLISH = 'CONJUGATION_TYPE_ENGLISH';
export const CONJUGATION_TYPE_NOUN_JAPANESE = 'CONJUGATION_TYPE_JAPANESE';

export const CONJUGATION_TYPE_VERB_ENGLISH = 'CONJUGATION_TYPE_ENGLISH';
export const CONJUGATION_TYPE_VERB_JAPANESE = 'CONJUGATION_TYPE_JAPANESE';

export const conjugationTypeArray = [
  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_NOUN_JAPANESE,
  CONJUGATION_TYPE_VERB_ENGLISH,
  CONJUGATION_TYPE_VERB_JAPANESE,
]

// options.primaryType

export const SENTENCE_TYPE_VERB = 'SENTENCE_TYPE_VERB';
export const SENTENCE_TYPE_SUBJECT = 'SENTENCE_TYPE_SUBJECT';
export const SENTENCE_TYPE_TOPIC = 'SENTENCE_TYPE_TOPIC';

export const primaryTypeArray = [
  SENTENCE_TYPE_VERB,
  SENTENCE_TYPE_SUBJECT,
  SENTENCE_TYPE_TOPIC,
];

// options.variation

export const T = 'T'; // T

export const WA_TS = 'WA_TS'; // WA - NOUN STATEMENT
export const MO_TS = 'MO_TS'; // MO - NOUN STATEMENT
export const GA_TS = 'GA_TS'; // GA - NOUN STATEMENT

export const V = 'V'; // WA - STATEMENT OF BEING

export const WO_SV = 'WO_SV'; // WO - SENTENCE_TYPE_VERB STATEMENT
export const NI_SV = 'NI_SV'; // NI - SENTENCE_TYPE_VERB STATEMENT
export const DE_SV = 'GA_VS'; // GA - SENTENCE_TYPE_VERB STATEMENT

export const variationArray = [
  T,
  
  WA_TS,
  MO_TS,
  GA_TS,

  V,
  
  WO_SV,
  NI_SV,
  DE_SV,
];

// options.question

export const HAS_QUESTION = 'HAS_QUESTION';
export const NOT_QUESTION = 'NOT_QUESTION';

export const questionArray = [
  HAS_QUESTION,
  NOT_QUESTION,
];

export const questionArrayLength = questionArray.length;

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
