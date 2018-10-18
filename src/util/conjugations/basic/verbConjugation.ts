simport {
  createError
} from '../../functions';

import {
  VERB_TYPE_RU,
  VERB_TYPE_U,

  // CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import {
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  // PREDICATE_IDENTIFIER,
  // TOPIC_IDENTIFIER,
} from '../../constants/optionsConstants';

import {
  uVerbEndingU,
  uVerbEndingA,
  uVerbEndingI,
} from '../../constants/katakana';

// used for negative u verbs
const uVerbEndingToI = (verbEnding: string): string => {
  switch(verbEnding) {
    case uVerbEndingU.HIRAGANA_U:
      return uVerbEndingI.HIRAGANA_I; 
    case uVerbEndingU.HIRAGANA_SU:
      return uVerbEndingI.HIRAGANA_SHI; 
    case uVerbEndingU.HIRAGANA_KU:
      return uVerbEndingI.HIRAGANA_KI; 
    case uVerbEndingU.HIRAGANA_GU:
      return uVerbEndingI.HIRAGANA_GI; 
    case uVerbEndingU.HIRAGANA_BU:
      return uVerbEndingI.HIRAGANA_BI; 
    case uVerbEndingU.HIRAGANA_TSU:
      return uVerbEndingI.HIRAGANA_CHI; 
    case uVerbEndingU.HIRAGANA_MU:
      return uVerbEndingI.HIRAGANA_MI; 
    case uVerbEndingU.HIRAGANA_RU:
      return uVerbEndingI.HIRAGANA_RI; 
    case uVerbEndingU.HIRAGANA_NU:
      return uVerbEndingI.HIRAGANA_NI; 
    default:
      return createError('conjugations/verb', 'uVerbEndingToI', `${verbEnding} does not exist.`);
  }
}

// used for negative u verbs
const uVerbEndingToA = (verbEnding: string): string => {
  switch(verbEnding) {
    case uVerbEndingU.HIRAGANA_U:
      return uVerbEndingA.HIRAGANA_A; 
    case uVerbEndingU.HIRAGANA_SU:
      return uVerbEndingA.HIRAGANA_SA; 
    case uVerbEndingU.HIRAGANA_KU:
      return uVerbEndingA.HIRAGANA_KA; 
    case uVerbEndingU.HIRAGANA_GU:
      return uVerbEndingA.HIRAGANA_GA; 
    case uVerbEndingU.HIRAGANA_BU:
      return uVerbEndingA.HIRAGANA_BA; 
    case uVerbEndingU.HIRAGANA_TSU:
      return uVerbEndingA.HIRAGANA_TA; 
    case uVerbEndingU.HIRAGANA_MU:
      return uVerbEndingA.HIRAGANA_MA; 
    case uVerbEndingU.HIRAGANA_RU:
      return uVerbEndingA.HIRAGANA_RA; 
    case uVerbEndingU.HIRAGANA_NU:
      return uVerbEndingA.HIRAGANA_NA; 
    default:
      return createError('conjugations/verb', 'uVerbEndingToA', `${verbEnding} does not exist.`);
  }
}

const getVerbStem = (verb: Util.Word, options: Util.Options): string => {
  const everythingExceptLastLetter = verb.japanese.slice(0, -1);
  
  if (verb.meta.verbType === VERB_TYPE_RU) {
    return everythingExceptLastLetter;
  };

  if (verb.meta.verbType === VERB_TYPE_U) {
    const verbLastLetter = verb.japanese.slice(-1);
    switch(`${options.politeness}${options.polarity}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`:
        return `${verb}`;
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}`:
        return `${everythingExceptLastLetter}${uVerbEndingToA(verbLastLetter)}`;
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`:
        return `${everythingExceptLastLetter}${uVerbEndingToI(verbLastLetter)}`;
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`:
      return `${everythingExceptLastLetter}${uVerbEndingToI(verbLastLetter)}`;
      default:
        return createError('conjugations/verb', 'getVerbStem', `${options.politeness}${options.polarity} does not exist.`);
    }
  };

  return createError('conjugations/verb', 'getVerbStem', `You broke getVerbStem. Why you do this!`);
};

const determineVerbConjugationJapanese = (verb: Util.Word, options: Util.Options): string => {
  const verbStem = getVerbStem(verb, options);
  switch(`${options.politeness}${options.polarity}`) {
    case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`:
      return `${verb.japanese}`;
    case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}`:
      return `${verbStem}ない`;
    case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`:
      return `${verbStem}ます`;
    case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`:
      return `${verbStem}ません`;
    default: 
      return createError(
        'conjugations/verb',
        'determineVerbConjugationJapanese',
        `${options.polarity}${options.politeness} unknown`,
      );
  }
};

export const verbConjugationJapanese = (verb: Util.Word, options: Util.Options, sentenceIdentifier: string): string => {
  const conjugatedVerb = determineVerbConjugationJapanese(verb, options);

  return `${conjugatedVerb}`;
};