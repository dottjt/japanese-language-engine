// options.variation

export const NA = 'NA'; // NA

export const T = 'T'; // T

export const WA_TS = 'WA_TS'; // WA - NOUN STATEMENT
export const MO_TS = 'MO_TS'; // MO - NOUN STATEMENT
export const GA_TS = 'GA_TS'; // GA - NOUN STATEMENT

export const V = 'V'; // WA - STATEMENT OF BEING

export const WO_SV = 'WO_SV'; // WO - SENTENCE_TYPE_VERB STATEMENT
export const NI_SV = 'NI_SV'; // NI - SENTENCE_TYPE_VERB STATEMENT
export const DE_SV = 'GA_VS'; // GA - SENTENCE_TYPE_VERB STATEMENT

export const KARA_TS = 'KARA_TS';
export const MADE_TS = 'MADE_TS';

export const variationArray = [
  T,
  
  WA_TS,
  MO_TS,
  GA_TS,

  V,
  
  WO_SV,
  NI_SV,
  DE_SV,

  KARA_TS,
  MADE_TS,
];


// options.question

export const HAS_QUESTION = 'HAS_QUESTION';
export const NOT_QUESTION = 'NOT_QUESTION';
export const RANDOM_QUESTION = 'RANDOM_QUESTION';

export const questionArray = [
  HAS_QUESTION,
  NOT_QUESTION,
];

export const questionArrayLength = questionArray.length;

// options.polarity

export const POLARITY_POSITIVE = 'POLARITY_POSITIVE';
export const POLARITY_NEGATIVE = 'POLARITY_NEGATIVE';
export const POLARITY_RANDOM = 'POLARITY_RANDOM';

export const polarityArray = [ 
  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,
];

export const polarityArrayLength = polarityArray.length;

// options.tense

export const TENSE_PRESENT = 'TENSE_PRESENT';
export const TENSE_PAST = 'TENSE_PAST';
export const TENSE_RANDOM = 'TENSE_RANDOM';

export const tenseArray = [ 
  TENSE_PRESENT,
  TENSE_PAST,
];

export const tenseArrayLength = tenseArray.length;


// options.politeness

export const POLITENESS_CASUAL = 'POLITENESS_CASUAL';
export const POLITENESS_FORMAL = 'POLITENESS_FORMAL';
export const POLITENESS_HUMBLE = 'POLITENESS_HUMBLE';
export const POLITENESS_HONORIFIC = 'POLITENESS_HONORIFIC';
export const POLITENESS_RANDOM = 'POLITENESS_RANDOM';

export const politenessArray = [ 
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  // POLITENESS_HUMBLE,
  // POLITENESS_HONORIFIC,
];

export const politenessArrayLength = politenessArray.length;

// options.gender

export const GENDER_MASCULINE = 'GENDER_MASCULINE';
export const GENDER_FEMININE = 'GENDER_FEMININE';
export const GENDER_RANDOM = 'GENDER_RANDOM';

export const genderArray = [ 
  GENDER_MASCULINE,
  GENDER_FEMININE,
];

export const genderArrayLength = genderArray.length;

// options.sentenceEnding 

export const SENTENCE_ENDING_NE = 'SENTENCE_ENDING_NE';
export const SENTENCE_ENDING_YO = 'SENTENCE_ENDING_YO';
export const SENTENCE_ENDING_YO_NE = 'SENTENCE_ENDING_YO_NE';
export const SENTENCE_ENDING_RANDOM = 'SENTENCE_ENDING_RANDOM';

export const sentenceEndingArray = [ 
  SENTENCE_ENDING_NE,
  SENTENCE_ENDING_YO,
  SENTENCE_ENDING_YO_NE,
];

export const sentenceEndingArrayLength = sentenceEndingArray.length;

// options.themes

export const THEMES_DEFAULT = 'THEMES_DEFAULT';

export const themesArray = [
  THEMES_DEFAULT,
];

export const themesArrayLength = themesArray.length;

