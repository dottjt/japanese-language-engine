import {
  createError
} from '../functions';

import {
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  // PREDICATE_IDENTIFIER,
  // TOPIC_IDENTIFIER,

  KATAKANA_U,
  KATAKANA_SU,
  KATAKANA_KU,
  KATAKANA_GU,
  KATAKANA_BU,
  KATAKANA_TSU,
  KATAKANA_MU,
  KATAKANA_RU,
  KATAKANA_NU,

  VERB_TYPE_RU,
  VERB_TYPE_U,

  // CATEGORY_HUMAN_NAME,
} from '../constants/constants';


const determineVerbCategoryEnding = (word: Util.Word): string => {
  // const endingsArray = word.category.map(categoryString => {
  //   switch(categoryString) {
  //     case `${CATEGORY_HUMAN_NAME}`:
  //       return 'さん';
  //     default:
  //       return '';
  //   } 
  // }).filter(categoryString => categoryString !== '');

  // if (endingsArray.length > 0) {
  //   return endingsArray[0];
  // }
  return '';
}


const uVerbEndingToA= (verbEnding) => {
  switch(`${verbEnding}`) {
    case KATAKANA_U:
      return 
    case KATAKANA_SU:
      return 
    case KATAKANA_KU:
      return 
    case KATAKANA_GU:
      return 
    case KATAKANA_BU:
      return 
    case KATAKANA_TSU:
      return 
    case KATAKANA_MU:
      return 
    case KATAKANA_RU:
      return 
    case KATAKANA_NU:
      return 
}

const getVerbStem = (verb: Util.Word, options: Util.Options): string => {
  if (verb.meta.verbType === VERB_TYPE_RU) {
    return verb.japanese.slice(0, -1);
  }
  if (verb.meta.verbType === VERB_TYPE_U) {
    const verbLastLetter = verb.japanese.slice(-1);

    if ()
    switch(`${options.politeness}${options.polarity}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`:
        return `${verb}`;
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${verbLastLetter}`:
        return `${}`;
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`:
        return 'です';
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`:
        return 'じゃありません';
      default:
        return 'error';
  } 
};



const determineVerbConjugationJapanese = (verb: Util.Word, options: Util.Options): string => {
  const verbStem = getVerbStem(verb, options);
  if (verb.meta.verbType === VERB_TYPE_RU) {
    switch(`${options.politeness}${options.polarity}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`:
        return `${verb}`;
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}`:
        return `${verbStem}`;
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`:
        return 'です';
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`:
        return 'じゃありません';
      default: 
        return createError(
          'conjugations/verb',
          'determineVerbConjugationJapanese',
          `${options.polarity}${options.politeness} unknown`,
        );
    }
  }
  if (verb.meta.verbType === VERB_TYPE_U) {
    switch(`${options.polarity}${options.politeness}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`:
        return '';
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}`:
        return 'じゃない';
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`:
        return 'です';
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`:
        return 'じゃありません';
      default: 
        return createError(
          'conjugations/verb',
          'nounPolarity',
          `options.polarity unknown`,
        );
    }
  }
  return '';
};

export const determineSentenceIdentifierEndingJapanese = (identifier: string): string => {
  // switch(identifier) {
  //   case PREDICATE_IDENTIFIER:
  //     return ''; // I've completely forgotten what I was trying to express here. 
  //   case TOPIC_IDENTIFIER:
  //     return '';
  //   default:
      return '';
  // }
};


export const verbConjugationJapanese = (verb: Util.Word, options: Util.Options, sentenceIdentifier: string): string => {
  const conjugatedVerb = determineVerbConjugationJapanese(verb, options);

  // const verbCategoryEnding = determineVerbCategoryEnding(verb)
  // const sentenceIdentifierEnding = determineSentenceIdentifierEndingJapanese(sentenceIdentifier);

  return `${conjugatedVerb}${verbCategoryEnding}${verbEnding}${sentenceIdentifierEnding}`;
};