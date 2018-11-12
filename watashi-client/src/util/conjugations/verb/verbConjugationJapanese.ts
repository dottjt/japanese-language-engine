import {
  createError, 
  emptyWordElement,
} from '../../functions';

import {
  filtersentenceType,
  createWord,
  getInitialVerbStem,
  getLastLetterVerb,
} from '../../utilConjugation';

import {
  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
} from '../../constants/wordConstants';

import {
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  CONJUGATION_TYPE_VERB_JAPANESE,
  
  JAPANESE_POLARITY,
  JAPANESE_VERB_STEM,
} from '../../constants/optionsConstants';

import {
  __TYPENAME_CONJUGATED_JAPANESE_VERB,
} from '../../constants/typeNameConstants';

import {
  uVerbEndingU,
  uVerbEndingA,
  uVerbEndingI,
} from '../../constants/katakana';

// Polite U Verbs
const uVerbEndingToI = (verbEnding: string): string[] => {
  switch(verbEnding) {
    case uVerbEndingU.HIRAGANA_U: return [ uVerbEndingI.HIRAGANA_I ]; 
    case uVerbEndingU.HIRAGANA_SU: return [ uVerbEndingI.HIRAGANA_SHI ]; 
    case uVerbEndingU.HIRAGANA_KU: return [ uVerbEndingI.HIRAGANA_KI ]; 
    case uVerbEndingU.HIRAGANA_GU: return [ uVerbEndingI.HIRAGANA_GI ]; 
    case uVerbEndingU.HIRAGANA_BU: return [ uVerbEndingI.HIRAGANA_BI ]; 
    case uVerbEndingU.HIRAGANA_TSU: return [ uVerbEndingI.HIRAGANA_CHI ]; 
    case uVerbEndingU.HIRAGANA_MU: return [ uVerbEndingI.HIRAGANA_MI ]; 
    case uVerbEndingU.HIRAGANA_RU: return [ uVerbEndingI.HIRAGANA_RI ]; 
    case uVerbEndingU.HIRAGANA_NU: return [ uVerbEndingI.HIRAGANA_NI ]; 
  }
  throw new Error(createError('conjugations/verb', 'uVerbEndingToI', `${verbEnding} does not exist.`));
};

// Negative U Verbs
const uVerbEndingToA = (verbEnding: string): string[] => {
  switch(verbEnding) {
    case uVerbEndingU.HIRAGANA_U: return [ uVerbEndingA.HIRAGANA_A ]; 
    case uVerbEndingU.HIRAGANA_SU: return [ uVerbEndingA.HIRAGANA_SA ]; 
    case uVerbEndingU.HIRAGANA_KU: return [ uVerbEndingA.HIRAGANA_KA ]; 
    case uVerbEndingU.HIRAGANA_GU: return [ uVerbEndingA.HIRAGANA_GA ]; 
    case uVerbEndingU.HIRAGANA_BU: return [ uVerbEndingA.HIRAGANA_BA ]; 
    case uVerbEndingU.HIRAGANA_TSU: return [ uVerbEndingA.HIRAGANA_TA ]; 
    case uVerbEndingU.HIRAGANA_MU: return [ uVerbEndingA.HIRAGANA_MA ]; 
    case uVerbEndingU.HIRAGANA_RU: return [ uVerbEndingA.HIRAGANA_RA ]; 
    case uVerbEndingU.HIRAGANA_NU: return [ uVerbEndingA.HIRAGANA_NA ]; 
  }
  throw new Error(createError('conjugations/verb', 'uVerbEndingToA', `${verbEnding} does not exist.`));
};

const getVerbStem = (verb: Util.Word, options: Util.Options): string[] => {
  const verbAsArray = verb.japanese.kanji.split('');
  const initialStemArray = getInitialVerbStem(verb.japanese.kanji);
  const verbLastLetter = getLastLetterVerb(verb.japanese.kanji);

  if (verb.meta.verbType === SENTENCE_TYPE_VERB_TYPE_RU) { return initialStemArray };
  if (verb.meta.verbType === SENTENCE_TYPE_VERB_TYPE_U) {
    switch(`${options.politeness}${options.polarity}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`: return verbAsArray;
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}`: return initialStemArray.concat(uVerbEndingToA(verbLastLetter));
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`: return initialStemArray.concat(uVerbEndingToI(verbLastLetter));
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`: return initialStemArray.concat(uVerbEndingToI(verbLastLetter));
    }
  };
  throw new Error(createError('conjugations/verb', 'getVerbStem', `Verb meta.verbType does not exist.`));
};

const determineVerbConjugationJapanese = (verb: Util.Word, options: Util.Options): { verbStem: Util.WordElement, polarity: Util.WordElement } => {
  const verbStem = getVerbStem(verb, options);
  switch(`${options.politeness}${options.polarity}`) {
    case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`: return { verbStem: createWord(verb.japanese.kanji.split(''), JAPANESE_VERB_STEM), polarity: createWord([''], JAPANESE_POLARITY)  };
    case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), polarity: createWord(['な','い'], JAPANESE_POLARITY)  };
    case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), polarity: createWord(['ま','す'], JAPANESE_POLARITY)  };
    case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), polarity: createWord(['ま','せ','ん'], JAPANESE_POLARITY)  };
  }
  throw new Error(createError('conjugations/verb', 'determineVerbConjugationJapanese', `${options.polarity}${options.politeness} unknown`));
};

const verbConjugationJapanese = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceType: string): Util.ConjugatedJapaneseWord => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_VERB_JAPANESE;
  const { verbStem, polarity } = determineVerbConjugationJapanese(word, options);

  return {
    type,
    sentenceType,
    word,
    verbStem, 
    polarity,
    categoryEnding: emptyWordElement(),
    tense: emptyWordElement(),
    topicParticle: emptyWordElement(),
    __typename: __TYPENAME_CONJUGATED_JAPANESE_VERB,
  }
};

export default verbConjugationJapanese;