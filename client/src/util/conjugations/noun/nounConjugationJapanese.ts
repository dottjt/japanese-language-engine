import {
  createError,
  // removeGapIfValueEmpty,
  returnSentenceParts,
  filterWordType,
} from '../../functions';

// import { 
//   LANG_JAPANESE, 
//   // LANG_ENGLISH, 
// } from '../../constants/generalConstants';

import {
  nounParticlePermissions,
  nounEndingPermissions
} from './nounPermissions';

import {
  CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import {
  WA_SOB,

  WA_NS,
  MO_NS,
  GA_NS,

  WO_VS,
  NI_VS,
  DE_VS,
  
  // VERB,
  // TOPIC,
  // SUBJECT,

  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,
} from '../../constants/optionsConstants';

const determineNounCategoryEnding = (word: Util.Word): string => {
  const endingsArray = word.category.map(categoryString => {
    switch(categoryString) {
      case `${CATEGORY_HUMAN_NAME}`: return 'さん';
      default: return '';
    } 
  }).filter(categoryString => categoryString !== '');

  return endingsArray.length > 0 ? endingsArray[0] : '';
};

const determineTopicParticleJapanese = (words: Util.SentenceWords, options: Util.Options, wordType: string): string => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounParticlePermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, wordType);

  if (permissions) {
    switch (options.variation) {
      case WA_SOB: return 'は';
      case WA_NS: return 'は';
      case MO_NS: return 'も';
      case GA_NS: return 'が';
      case WO_VS: return 'を';
      case NI_VS: return 'に';
      case DE_VS: return 'で';
      default: return createError('conjugations/topic', 'determineTopicParticle', 'options.variation unknown');
    }
  }

  return '';
};

const determineNounEndingJapanese = (words: Util.SentenceWords, options: Util.Options, wordType: string): string => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounEndingPermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, wordType);

  if (permissions) {
    switch(`${options.politeness}${options.polarity}${options.tense}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return '';
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return 'だった';

      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return 'じゃない';
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return 'じゃなかった';

      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return 'です';
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return 'でした';

      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return 'じゃありません';
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return 'じゃありませんでした';

      default: 
        return createError(
          'conjugations/noun',
          'determineNounEndingJapanese',
          `${options.politeness}${options.polarity}${options.tense} unknown`,
        );
    }
  }
  return '';
};

const nounConjugationJapanese = (words: Util.SentenceWords, options: Util.Options, wordType: string): string => {
  const word = filterWordType(words, wordType);

  const nounEnding = determineNounEndingJapanese(words, options, wordType);
  const nounCategoryEnding = determineNounCategoryEnding(word);
  const nounTopicParticle = determineTopicParticleJapanese(words, options, wordType);

  return `${word.japanese}${nounCategoryEnding}${nounEnding}${nounTopicParticle}`.trim();
};

export default nounConjugationJapanese;
