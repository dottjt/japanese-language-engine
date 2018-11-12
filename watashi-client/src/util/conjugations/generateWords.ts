import {
  createError,
} from '../functions';

import { 
  filterSpecifcWord,
  getRandomWordViaCategory,
  getRandomWordViaPrimaryType,
} from '../filters';

import {
  NA,

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
  // PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  // PRIMARY_TYPE_ADJECTIVE,

  CATEGORY_HUMAN_NAME,
  CATEGORY_LOCATION,
} from '../constants/wordConstants';

const genTSV = ({ topic, subject, verb }: { topic?: Util.Topic, subject?: Util.Subject, verb?: Util.Verb } ): Util.SentenceWords => {
  if (topic && !subject && !verb) {
    return { topic };
  }
  if (topic && subject && !verb) {
    return { topic, predicate: { subject } };
  }
  if (!topic && subject && verb) {
    return { predicate: { subject, verb } };
  }
  if (!topic && !subject && verb) {
    return { predicate: { verb }};
  }
  if (topic && subject && verb) {
    return { topic, predicate: { subject, verb } };
  }

  throw new Error(createError('conjugations/generateWords.tsx', 'genTSV', `Your sentence variation does not exist`));
};

const VARIATION_T = 'VARIATION_T';
const VARIATION_TS = 'VARIATION_TS';
const VARIATION_V = 'VARIATION_V';
const VARIATION_SV = 'VARIATION_SV';
// const VARIATION_TSV = 'VARIATION_TSV';


const generateTopicWord = (nouns: Util.Word[], selectedTheme: string, filteredVariation: string): Util.Word => {
  // YES // VARIATION_T // VARIATION_TS
  // NO // VARIATION_V // VARIATION_SV

  switch(`${selectedTheme}${filteredVariation}`) {
    case `${THEMES_DEFAULT}${VARIATION_T}`: return filterSpecifcWord(nouns, 'person');
    case `${THEMES_DEFAULT}${VARIATION_TS}`: return getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME);
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateTopicWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
};

const generateSubjectWord = (nouns: Util.Word[], selectedTheme: string, filteredVariation: string): Util.Word => {
  // YES // VARIATION_SV // VARIATION_TS
  // NO // VARIATION_T // VARIATION_V

  switch(`${selectedTheme}${filteredVariation}`) {
    case `${THEMES_DEFAULT}${VARIATION_SV}`: return filterSpecifcWord(nouns, 'person');
    case `${THEMES_DEFAULT}${VARIATION_TS}`: return getRandomWordViaCategory(nouns, CATEGORY_LOCATION);
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateSubjectWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
};

const generateVerbWord = (nouns: Util.Word[], selectedTheme: string, filteredVariation: string): Util.Word => {
  // YES // VARIATION_V // VARIATION_SV
  // NO // VARIATION_T // VARIATION_TS

  switch(`${selectedTheme}${filteredVariation}`) {
    case `${THEMES_DEFAULT}${VARIATION_V}`: return getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB);
    case `${THEMES_DEFAULT}${VARIATION_SV}`: return getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB);
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateSubjectWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));

};

const filterDownVariationTypes = (variation: string): string => {
  switch(variation) {
    case NA: return 'NA';
    case T: return VARIATION_T;
    case WA_TS: return VARIATION_TS;
    case MO_TS: return VARIATION_TS;
    case GA_TS: return VARIATION_TS;
    case V: return VARIATION_V;
    case WO_SV: return VARIATION_SV;
    case NI_SV: return VARIATION_SV;
    case DE_SV: return VARIATION_SV;
    case KARA_TS: VARIATION_TS;
    case MADE_TS: VARIATION_TS;
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'filterDownVariationTypes', `Your options variation ${variation} does not exist`));
};

const generateWords = (nouns: Util.Word[], options: Util.Options): () => Util.SentenceWords => {
  const filteredVariation = filterDownVariationTypes(options.selectedVariation);
  // const selectedVariation = options.selectedVariation;
  const selectedTheme = options.selectedTheme;

  switch(filteredVariation) {
    case VARIATION_T: {
      const topic = generateTopicWord(nouns, selectedTheme, filteredVariation);
      return () => genTSV({ topic, subject: undefined, verb: undefined });
    };
    case VARIATION_TS: {
      const topic = generateTopicWord(nouns, selectedTheme, filteredVariation);
      const subject = generateSubjectWord(nouns, selectedTheme, filteredVariation);
      return () => genTSV({ topic, subject, verb: undefined });
    };
    case VARIATION_V: {
      const verb = generateVerbWord(nouns, selectedTheme, filteredVariation);
      return () => genTSV({ topic: undefined, subject: undefined, verb, });
    };
    case VARIATION_SV: {
      const subject = generateSubjectWord(nouns, selectedTheme, filteredVariation);
      const verb = generateVerbWord(nouns, selectedTheme, filteredVariation);
      return () => genTSV({ topic: undefined, subject, verb, });
    };
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${filteredVariation} does not exist`));
};

export default generateWords;