import {
  createError,
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


// filterSpecifcWordNoun,
// filterSpecifcCategoryNoun,
// getRandomWordNoun,
// getRandomWordViaCategoryNoun,

const generateWords = (nouns: Util.Noun[], verbs: Util.Verb[], options: Util.Options): () => Util.SentenceWords => {
  const selectedVariation = options.selectedVariation;
  const selectedTheme = options.selectedTheme;

  switch(`${selectedTheme}${selectedVariation}`) {
    case `${THEMES_DEFAULT}${T}`:     return () => genTSV({ topic: filterSpecifcWordNoun(nouns, 'person') });
    case `${THEMES_DEFAULT}${WA_TS}`: return () => genTSV({ topic: getRandomWordViaCategoryNoun(nouns, CATEGORY_HUMAN_NAME), subject: filterSpecifcWordNoun(nouns, 'person') });
    case `${THEMES_DEFAULT}${MO_TS}`: return () => genTSV({ topic: getRandomWordViaCategoryNoun(nouns, CATEGORY_HUMAN_NAME), subject: filterSpecifcWordNoun(nouns, 'person') });
    case `${THEMES_DEFAULT}${GA_TS}`: return () => genTSV({ topic: getRandomWordViaCategoryNoun(nouns, CATEGORY_HUMAN_NAME), subject: filterSpecifcWordNoun(nouns, 'person') });
    case `${THEMES_DEFAULT}${V}`:     return () => genTSV({ verb: getRandomWordVerb(verbs) });
    case `${THEMES_DEFAULT}${WO_SV}`: return () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, CATEGORY_FOOD), verb: filterSpecifcWordVerb(verbs, 'eat') });
    case `${THEMES_DEFAULT}${NI_SV}`: return () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, CATEGORY_LOCATION), verb: filterSpecifcWordVerb(verbs, 'go') });
    case `${THEMES_DEFAULT}${DE_SV}`: return () => genTSV({ subject: getRandomWordViaCategoryNoun(nouns, CATEGORY_LOCATION), verb: filterSpecifcWordVerb(verbs, 'go') });
    case `${THEMES_DEFAULT}${KARA_TS}`: 
    case `${THEMES_DEFAULT}${MADE_TS}`:
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `Your options variation ${selectedTheme}${selectedVariation} does not exist`));
};

export default generateWords;




// switch(selectedVariation) {
//   case VARIATION_T: {
//     const topic = generateTopicWord(nouns, selectedTheme, selectedVariation);
//     return () => genTSV({ topic, subject: undefined, verb: undefined });
//   };
//   case VARIATION_TS: {
//     const { topic, subject } = generateTopicSubjectWord(nouns, selectedTheme, selectedVariation);
//     return () => genTSV({ topic, subject, verb: undefined });
//   };
//   case VARIATION_V: {
//     const verb = generateVerbWord(verbs, selectedTheme, selectedVariation);
//     return () => genTSV({ topic: undefined, subject: undefined, verb, });
//   };
//   case VARIATION_SV: {
//     const { subject, verb } = generateSubjectVerbWord(nouns, verbs, selectedTheme, selectedVariation);
//     return () => genTSV({ topic: undefined, subject, verb, });
//   };
// }
// throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${selectedVariation} does not exist`));


// const generateTopicSubjectWord = (nouns: Util.Noun[], selectedTheme: string, filteredVariation: string): { topic: Util.Noun, subject: Util.Noun } => {
//   switch(`${selectedTheme}${filteredVariation}`) {
//     case `${THEMES_DEFAULT}${VARIATION_TS}`: return { topic: getRandomWordViaCategoryNoun(nouns, CATEGORY_HUMAN_NAME), subject: filterSpecifcWordNoun(nouns, 'person') };
//   };
//   throw new Error(createError('conjugations/generateWords.tsx', 'generateTopicSubjectWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
// };

// const generateVerbWord = (verbs: Util.Verb[], selectedTheme: string, filteredVariation: string): Util.Verb => {
//   switch(`${selectedTheme}${filteredVariation}`) {
//     case `${THEMES_DEFAULT}${VARIATION_V}`: return getRandomWordVerb(verbs);
//   };
//   throw new Error(createError('conjugations/generateWords.tsx', 'generateVerbWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
// };

// const generateSubjectVerbWord = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string, filteredVariation: string): { subject: Util.Noun, verb: Util.Verb } => {
//   switch(`${selectedTheme}${filteredVariation}`) {
//     case `${THEMES_DEFAULT}${VARIATION_SV}`: return { subject: getRandomWordViaCategoryNoun(nouns, CATEGORY_LOCATION), verb: filterSpecifcWordVerb(verbs, 'eat') };
//   };
//   throw new Error(createError('conjugations/generateWords.tsx', 'generateSubjectVerbWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
// };