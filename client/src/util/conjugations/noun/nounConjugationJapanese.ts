import {
  createError,
  emptyWordElement,
} from '../../functions';

import {
  returnSentenceParts,
  filtersentenceType,
  createWord,
} from '../../utilConjugation';

import {
  nounParticlePermissions,
  nounConjugationPermissions,
} from './nounPermissions';

import {
  CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import {
  __TYPENAME_CONJUGATED_JAPANESE_NOUN,
} from '../../constants/typeNameConstants';

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

  CONJUGATION_TYPE_NOUN_JAPANESE,

  NOUN_JAPANESE_CONJUGATION,
  NOUN_JAPANESE_TOPIC_PARTICLE,
  NOUN_JAPANESE_CATEGORY_ENDING,

} from '../../constants/optionsConstants';

const determineNounCategoryEnding = (noun: Util.Word): Util.WordElement => {
  const endingsArray = noun.category.map(categoryString => {
    switch(categoryString) {
      case `${CATEGORY_HUMAN_NAME}`: return createWord(['さ','ん'], NOUN_JAPANESE_CATEGORY_ENDING);
      default: return createWord([''], NOUN_JAPANESE_CATEGORY_ENDING);
    } 
  }).filter(categoryString => categoryString.wordArray[0] !== '');

  return endingsArray.length > 0 ? endingsArray[0] : createWord([''], NOUN_JAPANESE_CATEGORY_ENDING);
};

const determineTopicParticleJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounParticlePermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    switch (options.variation) {
      case T:     return createWord(['は'], NOUN_JAPANESE_TOPIC_PARTICLE);
      case WA_TS: return createWord(['は'], NOUN_JAPANESE_TOPIC_PARTICLE);
      case MO_TS: return createWord(['も'], NOUN_JAPANESE_TOPIC_PARTICLE);
      case GA_TS: return createWord(['が'], NOUN_JAPANESE_TOPIC_PARTICLE);
      case WO_SV: return createWord(['を'], NOUN_JAPANESE_TOPIC_PARTICLE);
      case NI_SV: return createWord(['に'], NOUN_JAPANESE_TOPIC_PARTICLE);
      case DE_SV: return createWord(['で'], NOUN_JAPANESE_TOPIC_PARTICLE);
    }
    throw new Error(createError('conjugations/noun/nounConjugationJapanese', 'determineTopicParticleJapanese', 'options.variation unknown'));
  }
  return createWord([''], NOUN_JAPANESE_TOPIC_PARTICLE);
};

const determineNounConjugationJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounConjugationPermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    switch(`${options.politeness}${options.polarity}${options.tense}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return createWord([''], NOUN_JAPANESE_CONJUGATION);
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return createWord(['だ','っ','た'], NOUN_JAPANESE_CONJUGATION);

      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return createWord(['じ','ゃ','な','い'], NOUN_JAPANESE_CONJUGATION);
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return createWord(['じ','ゃ','な','か','っ','た'], NOUN_JAPANESE_CONJUGATION);

      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return createWord(['で','す'], NOUN_JAPANESE_CONJUGATION);
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return createWord(['で','し','た'], NOUN_JAPANESE_CONJUGATION);

      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return createWord(['じ','ゃ','あ','り','ま','せ','ん'], NOUN_JAPANESE_CONJUGATION);
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return createWord(['じ','ゃ','あ','り','ま','せ','ん','で','し','た'], NOUN_JAPANESE_CONJUGATION);
    }
    throw new Error(createError('conjugations/noun', 'determineNounConjugationJapanese', `${options.politeness}${options.polarity}${options.tense} unknown`));
  }
  return createWord([''], NOUN_JAPANESE_CONJUGATION);
};

const nounConjugationJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.ConjugatedJapaneseWord => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_NOUN_JAPANESE;

  const nounEnding = determineNounConjugationJapanese(words, options, sentenceType);
  const nounCategoryEnding = determineNounCategoryEnding(word);
  const nounTopicParticle = determineTopicParticleJapanese(words, options, sentenceType);

  return {
    word,
    nounCategoryEnding,
    nounEnding,
    conjugatedVerb: emptyWordElement(),
    nounTopicParticle,
    type,
    __typename: __TYPENAME_CONJUGATED_JAPANESE_NOUN,
  }
};

export default nounConjugationJapanese;
