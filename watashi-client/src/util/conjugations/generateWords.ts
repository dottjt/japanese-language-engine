import {
  createError,
  randomArrayValue,
} from '../functions';

import { 
  filterSpecifcWordNoun,
  // getRandomWordNoun,
  getRandomWordViaCategoryNoun,

  filterSpecifcWordVerb,
  getRandomWordVerb,
  // getRandomWordViaCategoryVerb,

  // filterSpecifcWordAdjective,
  // getRandomWordAdjective,
  getRandomWordViaCategoryAdjective,

} from '../generators';

import {
  genTSV,
} from './utilConjugation';

import {
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

  THEMES_DEFAULT,

  
} from '../constants/optionsConstants';

// import {
//   T_ADJ,
//   T_ADV,

//   S_ADJ,
//   S_ADV,

//   T_NO1,
//   T_NO2,
//   T_NO3,
//   S_NO1,
//   S_NO2,
//   S_NO3,

//   TOPIC_NO,
//   SUBJECT_NO,
//   TOPIC_ADJECTIVE,
//   TOPIC_ADVERB,
//   SUBJECT_ADJECTIVE,
//   SUBJECT_ADVERB,
// } from '../constants/modifiersConstants';

import {
  // CATEGORY_TOPIC_UNKNOWN,
  // CATEGORY_SUBJECT_UNKNOWN,
  // CATEGORY_VERB_UNKNOWN,

  CATEGORY_HUMAN_NAME,
  CATEGORY_LOCATION,
  
  CATEGORY_FOOD,
  CATEGORY_FOOD_FRUIT,
} from '../constants/wordConstants';

const generate_T_variations = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], selectedTheme: string): { sentenceWords: () => Util.SentenceWords, sentenceModifiers: () => Util.SentenceModifierWords } => {
  // const unknownSubject = getRandomWordViaCategoryNoun(nouns, [ CATEGORY_SUBJECT_UNKNOWN ]);
  
  const L001 = [ // Apple is.  
    {  // Is an apple.
      sentenceWords: () => genTSV({ topic: getRandomWordViaCategoryNoun(nouns, [ CATEGORY_FOOD_FRUIT ]) }),
      sentenceModifiers: () => {},
    },
  ];

  const T_variations = [
    ...L001,
    {  // Is tasty.
      sentenceWords: () => genTSV({ topic: filterSpecifcWordNoun(nouns, 'fruit') }),
      sentenceModifiers: () => { tAdj: getRandomWordViaCategoryAdjective(adjectives, [ CATEGORY_FOOD ]) },
    }
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(T_variations);
    case THEMES_L001: return L001[0];
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'T_variations', `${selectedTheme} does not exist`));
};

const generate_TS_variations = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], selectedTheme: string): { sentenceWords: () => Util.SentenceWords, sentenceModifiers: () => Util.SentenceModifierWords } => {
  
  const TS_variations = [
    { 
      sentenceWords: () => genTSV({ topic: getRandomWordViaCategoryNoun(nouns, [ CATEGORY_HUMAN_NAME ]), subject: filterSpecifcWordNoun(nouns, 'person') }),
      sentenceModifiers: () => {}
    }
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(TS_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'TS_variations', `${selectedTheme} does not exist`));
};

const generate_V_variations = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], selectedTheme: string): { sentenceWords: () => Util.SentenceWords, sentenceModifiers: () => Util.SentenceModifierWords } => {
  
  const V_variations = [
    {
      sentenceWords: () => genTSV({ verb: getRandomWordVerb(verbs) }),
      sentenceModifiers: () => {}
    }
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(V_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generate_V_variations', `${selectedTheme} does not exist`));
};

const generate_WO_SV_variations = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], selectedTheme: string): { sentenceWords: () => Util.SentenceWords, sentenceModifiers: () => Util.SentenceModifierWords } => {
  
  const WO_SV_variations = [
    {
      sentenceWords: () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, [ CATEGORY_FOOD ]), verb: filterSpecifcWordVerb(verbs, 'eat') }),
      sentenceModifiers: () => {},
    }
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(WO_SV_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generate_WO_SV_variations', `${selectedTheme} does not exist`));
};

const generate_NI_SV_variations = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], selectedTheme: string): { sentenceWords: () => Util.SentenceWords, sentenceModifiers: () => Util.SentenceModifierWords } => {
  
  const NI_SV_variations = [
    {
      sentenceWords: () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, [ CATEGORY_LOCATION ]), verb: filterSpecifcWordVerb(verbs, 'go') }),
      sentenceModifiers: () => {},
    }
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(NI_SV_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generate_NI_SV_variations', `${selectedTheme} does not exist`));
};

const generate_DE_SV_variations = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], selectedTheme: string): { sentenceWords: () => Util.SentenceWords, sentenceModifiers: () => Util.SentenceModifierWords } => {
  
  const DE_SV_variations = [
    {
      sentenceWords: () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, [ CATEGORY_LOCATION ]), verb: filterSpecifcWordVerb(verbs, 'go') }),
      sentenceModifiers: () => {},
    }
  ];
  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(DE_SV_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generate_DE_SV_variations', `${selectedTheme} does not exist`));
};



// filterSpecifcWordNoun,
// filterSpecifcCategoryNoun,
// getRandomWordNoun,
// getRandomWordViaCategoryNoun,

const generateWords = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], options: Util.Options): { sentenceWords: () => Util.SentenceWords, sentenceModifiers: () =>  Util.SentenceModifierWords } => {
  const selectedVariation = options.selectedVariation;
  const selectedTheme = options.selectedTheme;

  switch(`${selectedVariation}`) {
    case `${T}`:     return generate_T_variations(nouns, verbs, adjectives, selectedTheme);
    case `${WA_TS}`: return generate_TS_variations(nouns, verbs, adjectives, selectedTheme);
    case `${MO_TS}`: return generate_TS_variations(nouns, verbs, adjectives, selectedTheme);
    case `${GA_TS}`: return generate_TS_variations(nouns, verbs, adjectives, selectedTheme);
    case `${V}`:     return generate_V_variations(nouns, verbs, adjectives, selectedTheme);
    case `${WO_SV}`: return generate_WO_SV_variations(nouns, verbs, adjectives, selectedTheme);
    case `${NI_SV}`: return generate_NI_SV_variations(nouns, verbs, adjectives, selectedTheme);
    case `${DE_SV}`: return generate_DE_SV_variations(nouns, verbs, adjectives, selectedTheme);
    case `${KARA_TS}`: 
    case `${MADE_TS}`:
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `Your options variation ${selectedTheme}${selectedVariation} does not exist`));
};

export default generateWords;
