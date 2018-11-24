import {
  createError, 
} from '../../functions';

import {
  filtersentenceType,
  createWord,
  getInitialVerbStem,
  getLastLetterVerb,
  determineJapaneseTense,
} from '../utilConjugation';

import {
  SENTENCE_TYPE_VERB_TYPE_U_RU_VERBS,
  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
  SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
} from '../../constants/wordConstants';

import {
  TENSE_PRESENT,
  TENSE_PAST,

  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,
} from '../../constants/optionsConstants';

import {
  JAPANESE_POLARITY,
  JAPANESE_VERB_STEM,
} from '../../constants/wordConstants';

import {
  __TYPENAME_CONJUGATED_JAPANESE_VERB,
} from '../../constants/typeNameConstants';

import {
  uVerbEnding,
  uVerbEndingA,
  uVerbEndingPositivePast,
  uVerbEndingFormal,
} from '../../constants/katakana';

// Formal U Verbs
const uVerbEndingFormalValue = (verbEnding: string): string[] => {
  switch(verbEnding) {
    case uVerbEnding.HIRAGANA_U: return [ uVerbEndingFormal.HIRAGANA_I ]; 
    case uVerbEnding.HIRAGANA_SU: return [ uVerbEndingFormal.HIRAGANA_SHI ]; 
    case uVerbEnding.HIRAGANA_KU: return [ uVerbEndingFormal.HIRAGANA_KI ]; 
    case uVerbEnding.HIRAGANA_GU: return [ uVerbEndingFormal.HIRAGANA_GI ]; 
    case uVerbEnding.HIRAGANA_BU: return [ uVerbEndingFormal.HIRAGANA_BI ]; 
    case uVerbEnding.HIRAGANA_TSU: return [ uVerbEndingFormal.HIRAGANA_CHI ]; 
    case uVerbEnding.HIRAGANA_MU: return [ uVerbEndingFormal.HIRAGANA_MI ]; 
    case uVerbEnding.HIRAGANA_RU: return [ uVerbEndingFormal.HIRAGANA_RI ]; 
    case uVerbEnding.HIRAGANA_NU: return [ uVerbEndingFormal.HIRAGANA_NI ]; 
  }
  throw new Error(createError('verbConjugationJapanese', 'uVerbEndingFormal', `${verbEnding} does not exist.`));
};

// Negative U Verbs
const uVerbEndingCasualNegativeValue = (verbEnding: string): string[] => {
  switch(verbEnding) {
    case uVerbEnding.HIRAGANA_U: return [ uVerbEndingA.HIRAGANA_A ]; 
    case uVerbEnding.HIRAGANA_SU: return [ uVerbEndingA.HIRAGANA_SA ]; 
    case uVerbEnding.HIRAGANA_KU: return [ uVerbEndingA.HIRAGANA_KA ]; 
    case uVerbEnding.HIRAGANA_GU: return [ uVerbEndingA.HIRAGANA_GA ]; 
    case uVerbEnding.HIRAGANA_BU: return [ uVerbEndingA.HIRAGANA_BA ]; 
    case uVerbEnding.HIRAGANA_TSU: return [ uVerbEndingA.HIRAGANA_TA ]; 
    case uVerbEnding.HIRAGANA_MU: return [ uVerbEndingA.HIRAGANA_MA ]; 
    case uVerbEnding.HIRAGANA_RU: return [ uVerbEndingA.HIRAGANA_RA ]; 
    case uVerbEnding.HIRAGANA_NU: return [ uVerbEndingA.HIRAGANA_NA ]; 
  }
  throw new Error(createError('verbConjugationJapanese', 'uVerbEndingFormalPastNegativeValue', `${verbEnding} does not exist.`));
};

// Positive Past
const uVerbEndingPositivePastValue = (verbEnding: string): string[] => {
  switch(verbEnding) {
    case uVerbEnding.HIRAGANA_U: return [ uVerbEndingPositivePast.HIRAGANA_TSU_LINKING ]; 
    case uVerbEnding.HIRAGANA_SU: return [ uVerbEndingPositivePast.HIRAGANA_SHI ]; 
    case uVerbEnding.HIRAGANA_KU: return [ uVerbEndingPositivePast.HIRAGANA_I ]; 
    case uVerbEnding.HIRAGANA_GU: return [ uVerbEndingPositivePast.HIRAGANA_I ]; 
    case uVerbEnding.HIRAGANA_BU: return [ uVerbEndingPositivePast.HIRAGANA_N ]; 
    case uVerbEnding.HIRAGANA_TSU: return [ uVerbEndingPositivePast.HIRAGANA_TSU_LINKING ]; 
    case uVerbEnding.HIRAGANA_MU: return [ uVerbEndingPositivePast.HIRAGANA_N ]; 
    case uVerbEnding.HIRAGANA_RU: return [ uVerbEndingPositivePast.HIRAGANA_TSU_LINKING ]; 
    case uVerbEnding.HIRAGANA_NU: return [ uVerbEndingPositivePast.HIRAGANA_N ]; 
  }
  throw new Error(createError('verbConjugationJapanese', 'uVerbEndingPositivePastValue', `${verbEnding} does not exist.`));
};


const getVerbStem = (verb: Util.Verb, options: Util.Options, initialStemArray: string[], verbLastLetter: string, japaneseTense: string): string[] => {
  switch(verb.verbJapaneseType) {
    case SENTENCE_TYPE_VERB_TYPE_U_RU_VERBS: throw new Error('you must code this bro.');
    case SENTENCE_TYPE_VERB_TYPE_RU: return initialStemArray;
    case SENTENCE_TYPE_VERB_TYPE_U:
      switch(`${options.selectedPoliteness}${options.selectedPolarity}${japaneseTense}`) { // 飲む
        case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return verb.verbJapanese.kanji.split(''); // 飲む
        case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return initialStemArray.concat(uVerbEndingCasualNegativeValue(verbLastLetter)); // 飲まない
        case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return initialStemArray.concat(uVerbEndingPositivePastValue(verbLastLetter)); // 飲んだ
        case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return initialStemArray.concat(uVerbEndingCasualNegativeValue(verbLastLetter)); // 飲まなかった

        case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return initialStemArray.concat(uVerbEndingFormalValue(verbLastLetter)); // 飲みます
        case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return initialStemArray.concat(uVerbEndingFormalValue(verbLastLetter)); // 飲みません
        case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return initialStemArray.concat(uVerbEndingFormalValue(verbLastLetter)); // 飲みました
        case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return initialStemArray.concat(uVerbEndingFormalValue(verbLastLetter)); // 飲みませんでした
      }

    // NOTE: This is blatantly incorrect, will need to place correct logic at some point. 
    case SENTENCE_TYPE_VERB_TYPE_IRREGULAR:
      switch(verb.verbJapanese.kanji) {
        case '行く':
          switch(`${options.selectedPoliteness}${options.selectedPolarity}${japaneseTense}`) {
            case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return verb.verbJapanese.kanji.split('');
            case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return [ 'いか' ];
            case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return [ 'い' ];
            case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return [ 'いか' ];

            case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return [ 'いき' ];
            case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return [ 'いき' ];
            case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return [ 'いき' ];
            case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return [ 'いき' ];

          }
        case 'する':
          switch(`${options.selectedPoliteness}${options.selectedPolarity}${japaneseTense}`) {
            case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return verb.verbJapanese.kanji.split('');
            case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return [ 'し' ]
            case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return [ 'し' ]
            case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return [ 'し' ]

            case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return [ 'し' ] 
            case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return [ 'し' ]
            case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return [ 'し' ]
            case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return [ 'し' ]
          }
        case '来る':
          switch(`${options.selectedPoliteness}${options.selectedPolarity}${japaneseTense}`) {
            case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return verb.verbJapanese.kanji.split('');
            case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return [ 'こ' ];
            case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return [ 'き' ];
            case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return [ 'き' ];

            case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return [ 'き' ];
            case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return [ 'き' ];
            case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return [ 'こ' ];
            case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return [ 'き' ];

          }
        case 'ある':
          switch(`${options.selectedPoliteness}${options.selectedPolarity}${japaneseTense}`) {
            case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return verb.verbJapanese.kanji.split('');
            case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return [ '' ]
            case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return [ 'あ' ]
            case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return [ '' ]

            case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return [ 'あり' ] 
            case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return [ 'あり' ]
            case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:    return [ 'あり' ]
            case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:    return [ 'あり' ]
          }          
      }
  }
  throw new Error(createError('verbConjugationJapanese.ts', 'getVerbStem', `${verb.verbJapanese.kanji} - ${verb.verbJapaneseType} - ${options.selectedPoliteness}${options.selectedPolarity} does not exist.`));
};

const determineCasualPositivePastEnding = (verbJapaneseType: string, verbLastLetter: string) => {
  switch(verbJapaneseType) {
    case SENTENCE_TYPE_VERB_TYPE_U_RU_VERBS: throw new Error('you must code this bro.');
    case SENTENCE_TYPE_VERB_TYPE_IRREGULAR: return [ 'た' ];
    case SENTENCE_TYPE_VERB_TYPE_RU: return [ 'た' ];
    case SENTENCE_TYPE_VERB_TYPE_U: 
      switch(verbLastLetter) {
        case uVerbEnding.HIRAGANA_U: return [ 'た' ]; 
        case uVerbEnding.HIRAGANA_SU: return [ 'た' ]; 
        case uVerbEnding.HIRAGANA_KU: return [ 'た' ]; 
        case uVerbEnding.HIRAGANA_GU: return [ 'だ' ]; 
        case uVerbEnding.HIRAGANA_BU: return [ 'だ' ]; 
        case uVerbEnding.HIRAGANA_TSU: return [ 'た' ]; 
        case uVerbEnding.HIRAGANA_MU: return [ 'だ' ]; 
        case uVerbEnding.HIRAGANA_RU: return [ 'た' ]; 
        case uVerbEnding.HIRAGANA_NU: return [ 'だ' ]; 
      }
  }
  throw new Error(createError('verbConjugationJapanese.ts', 'determineCasualPositivePastEnding', `${verbJapaneseType}${verbLastLetter} does not exist.`));
};

const determineVerbConjugationJapanese = (verb: Util.Verb, options: Util.Options, sentenceContext: Util.SentenceContext): { verbStem: Util.WordArrayElement[], verbPolarity: Util.WordArrayElement[] } => {
  const initialStemArray = getInitialVerbStem(verb.verbJapanese.kanji) as string[];
  const verbLastLetter = getLastLetterVerb(verb.verbJapanese.kanji) as string;
  const japaneseTense = determineJapaneseTense(sentenceContext) as string;

  const verbStem = getVerbStem(verb, options, initialStemArray, verbLastLetter, japaneseTense);

  switch(`${options.selectedPoliteness}${options.selectedPolarity}${japaneseTense}`) {
    case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), verbPolarity: createWord([''], JAPANESE_POLARITY)  };
    case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), verbPolarity: createWord(['な','い'], JAPANESE_POLARITY)  };
    case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), verbPolarity: createWord(determineCasualPositivePastEnding(verb.verbJapaneseType, verbLastLetter), JAPANESE_POLARITY)  }; // this is variable depending on the end, so I will have to configure this myself. 
    case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), verbPolarity: createWord(['な','か', 'っ', 'た'], JAPANESE_POLARITY)  };

    case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), verbPolarity: createWord(['ま','す'], JAPANESE_POLARITY)  };
    case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), verbPolarity: createWord(['ま','せ','ん'], JAPANESE_POLARITY)  };
    case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), verbPolarity: createWord(['ま','し', 'た'], JAPANESE_POLARITY)  };
    case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`: return { verbStem: createWord(verbStem, JAPANESE_VERB_STEM), verbPolarity: createWord(['ま','せ','ん', 'で', 'し', 'た'], JAPANESE_POLARITY)  };

  }
  throw new Error(createError('verbConjugationJapanese', 'determineVerbConjugationJapanese', `${options.selectedPoliteness}${options.selectedPolarity} unknown`));
};

const verbConjugationJapanese = (words: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  const verb = filtersentenceType(words, sentenceType) as Util.Verb;
  
  const { verbStem, verbPolarity } = determineVerbConjugationJapanese(verb, options, sentenceContext);
  
  return verbStem.concat(verbPolarity);
};

export default verbConjugationJapanese;