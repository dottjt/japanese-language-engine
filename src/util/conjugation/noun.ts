import {
  // POLITENESS_TYPE_CASUAL,
  POLITENESS_TYPE_FORMAL,

  // VARIATION_POSITIVE,
  VARIATION_NEGATIVE,
} from '../constants';

export const nounConjugationJapanese = (noun: string, options: Util.Options): string => {
  if (options.sentencePoliteness === POLITENESS_TYPE_FORMAL) {
    if (options.sentenceVariation === VARIATION_NEGATIVE) {
      return `${noun}じゃありません`;
    };
    return `${noun}です`;
  };
  if (options.sentenceVariation === VARIATION_NEGATIVE) {
    return `${noun}じゃない`;
  };
  return `${noun}`;
};


export const nounConjugationEnglish = (noun: string, options: Util.Options): string => {
  if (options.sentenceVariation === VARIATION_NEGATIVE) {
    switch (noun) {
      case 'is':
        return `${noun} not`;
      case 'yes':
        return 'no';
    }
  };
  return `${noun}`;
};
