import {
  createError,
  // removeGapIfValueEmpty,
  returnSentenceParts,
  filtersentenceType,
} from '../../functions';

// import { 
//   LANG_JAPANESE, 
//   // LANG_ENGLISH, 
// } from '../../constants/generalConstants';

import {
  nounParticlePermissions,
  nounConjugationPermissions,
} from './nounPermissions';

import {
  CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import {
  T,

  WA_TS,
  MO_TS,
  GA_TS,

  WO_SV,
  NI_SV,
  DE_SV,
  
  // SENTENCE_TYPE_VERB,
  // SENTENCE_TYPE_TOPIC,
  // SENTENCE_TYPE_SUBJECT,

  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,

  CONJUGATION_TYPE_VERB_JAPANESE,
} from '../../constants/optionsConstants';

const determineNounCategoryEnding = (noun: Util.Word): string => {
  const endingsArray = noun.category.map(categoryString => {
    switch(categoryString) {
      case `${CATEGORY_HUMAN_NAME}`: return 'さん';
      default: return '';
    } 
  }).filter(categoryString => categoryString !== '');

  return endingsArray.length > 0 ? endingsArray[0] : '';
};

const determineTopicParticleJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): string => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounParticlePermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    switch (options.variation) {
      case T: return 'は';
      case WA_TS: return 'は';
      case MO_TS: return 'も';
      case GA_TS: return 'が';
      case WO_SV: return 'を';
      case NI_SV: return 'に';
      case DE_SV: return 'で';
      default: throw new Error(createError('conjugations/noun/nounConjugationJapanese', 'determineTopicParticleJapanese', 'options.variation unknown'));
    }
  }

  return '';
};

const determineNounConjugationJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): string => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounConjugationPermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

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
          'determineNounConjugationJapanese',
          `${options.politeness}${options.polarity}${options.tense} unknown`,
        );
    }
  }
  return '';
};

const nounConjugationJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.ConjugatedJapaneseNoun => {
  const noun = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_VERB_JAPANESE;

  const nounEnding = determineNounConjugationJapanese(words, options, sentenceType);
  const nounCategoryEnding = determineNounCategoryEnding(noun);
  const nounTopicParticle = determineTopicParticleJapanese(words, options, sentenceType);

  return {
    noun,
    nounCategoryEnding,
    nounEnding,
    nounTopicParticle,
    type,
  }
  // return `${word.japanese}${nounCategoryEnding}${nounEnding}${nounTopicParticle}`.trim();
};

export default nounConjugationJapanese;
