import {
  createError,
  randomArrayValue,
} from '../functions';

import { 
  filterSpecifcWordNoun,
  // filterSpecifcCategoryNoun,
  // getRandomWordNoun,
  getRandomWordViaCategoryNoun,

  filterSpecifcWordVerb,
  // filterSpecifcCategoryVerb,
  getRandomWordVerb,
  // getRandomWordViaCategoryVerb,
} from '../filters';

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

import {
  CATEGORY_HUMAN_NAME,
  CATEGORY_LOCATION,
  
  CATEGORY_FOOD,

} from '../constants/wordConstants';

// const VARIATION_TSV = 'VARIATION_TSV';


const generate_T_variations = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string): () => Util.SentenceWords => {
  
  const T_variations = [
    () => genTSV({ topic: filterSpecifcWordNoun(nouns, 'person') }),
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(T_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${selectedTheme} does not exist`));
};

const generate_TS_variations = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string): () => Util.SentenceWords => {
  
  const TS_variations = [
    () => genTSV({ topic: getRandomWordViaCategoryNoun(nouns, CATEGORY_HUMAN_NAME), subject: filterSpecifcWordNoun(nouns, 'person') }),
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(TS_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${selectedTheme} does not exist`));
};

const generate_V_variations = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string): () => Util.SentenceWords => {
  
  const V_variations = [
    () => genTSV({ verb: getRandomWordVerb(verbs) }),
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(V_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${selectedTheme} does not exist`));
};

const generate_WO_SV_variations = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string): () => Util.SentenceWords => {
  
  const WO_SV_variations = [
    () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, CATEGORY_FOOD), verb: filterSpecifcWordVerb(verbs, 'eat') }),
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(WO_SV_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${selectedTheme} does not exist`));
};

const generate_NI_SV_variations = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string): () => Util.SentenceWords => {
  
  const NI_SV_variations = [
    () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, CATEGORY_LOCATION), verb: filterSpecifcWordVerb(verbs, 'go') })
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(NI_SV_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${selectedTheme} does not exist`));
};

const generate_DE_SV_variations = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string): () => Util.SentenceWords => {
  
  const DE_SV_variations = [
    () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, CATEGORY_LOCATION), verb: filterSpecifcWordVerb(verbs, 'go') })
  ];

  switch(selectedTheme) {
    case THEMES_DEFAULT: return randomArrayValue(DE_SV_variations);
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${selectedTheme} does not exist`));
};



// filterSpecifcWordNoun,
// filterSpecifcCategoryNoun,
// getRandomWordNoun,
// getRandomWordViaCategoryNoun,

const generateWords = (nouns: Util.Noun[], verbs: Util.Verb[], options: Util.Options): () => Util.SentenceWords => {
  const selectedVariation = options.selectedVariation;
  const selectedTheme = options.selectedTheme;

  switch(`${selectedVariation}`) {
    case `${T}`:     return generate_T_variations(nouns, verbs, selectedTheme);
    case `${WA_TS}`: return generate_TS_variations(nouns, verbs, selectedTheme);
    case `${MO_TS}`: return generate_TS_variations(nouns, verbs, selectedTheme);
    case `${GA_TS}`: return generate_TS_variations(nouns, verbs, selectedTheme);
    case `${V}`:     return generate_V_variations(nouns, verbs, selectedTheme);
    case `${WO_SV}`: return generate_WO_SV_variations(nouns, verbs, selectedTheme);
    case `${NI_SV}`: return generate_NI_SV_variations(nouns, verbs, selectedTheme);
    case `${DE_SV}`: return generate_DE_SV_variations(nouns, verbs, selectedTheme);
    case `${KARA_TS}`: 
    case `${MADE_TS}`:
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `Your options variation ${selectedTheme}${selectedVariation} does not exist`));
};

export default generateWords;


