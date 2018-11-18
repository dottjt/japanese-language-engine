import {
  createError, 
  emptyWordElement,
} from '../../functions';

import {
  returnSentenceParts,
  filtersentenceType,
  createWord,
} from '../utilConjugation';

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

  JAPANESE_CONJUGATION,
  JAPANESE_TOPIC_PARTICLE,
  JAPANESE_CATEGORY_ENDING,
  JAPANESE_TENSE,
  JAPANESE_POLARITY,
} from '../../constants/optionsConstants';

const determinecategoryEnding = (noun: Util.Noun): Util.WordElement => {
  const endingsArray = noun.nounCategory.map(categoryString => {
    switch(categoryString) {
      case `${CATEGORY_HUMAN_NAME}`: return createWord(['さ','ん'], JAPANESE_CATEGORY_ENDING);
      default: return createWord([''], JAPANESE_CATEGORY_ENDING);
    } 
  }).filter(categoryString => categoryString.wordArray[0] !== '');

  return endingsArray.length > 0 ? endingsArray[0] : createWord([''], JAPANESE_CATEGORY_ENDING);
};

const determineTopicParticleJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounParticlePermissions(topic as Util.JapaneseNoun, subject as Util.JapaneseNoun, verb as Util.JapaneseVerb, sentenceType);

  if (permissions) {
    switch (options.selectedVariation) {
      case T:     return createWord(['は'], JAPANESE_TOPIC_PARTICLE);
      case WA_TS: return createWord(['は'], JAPANESE_TOPIC_PARTICLE);
      case MO_TS: return createWord(['も'], JAPANESE_TOPIC_PARTICLE);
      case GA_TS: return createWord(['が'], JAPANESE_TOPIC_PARTICLE);
      case WO_SV: return createWord(['を'], JAPANESE_TOPIC_PARTICLE);
      case NI_SV: return createWord(['に'], JAPANESE_TOPIC_PARTICLE);
      case DE_SV: return createWord(['で'], JAPANESE_TOPIC_PARTICLE);
    }
    throw new Error(createError('conjugations/noun/nounConjugationJapanese', 'determineTopicParticleJapanese', 'options.variation unknown'));
  }
  return createWord([''], JAPANESE_TOPIC_PARTICLE);
};

const determineNounConjugationJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): { polarity: Util.WordElement, tense: Util.WordElement } => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounConjugationPermissions(topic as Util.JapaneseNoun, subject as Util.JapaneseNoun, verb as Util.JapaneseVerb, sentenceType);

  const emptyWord = createWord([''], JAPANESE_CONJUGATION);

  if (permissions) {
    switch(`${options.politeness}${options.polarity}${options.tense}`) {

      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return { tense: emptyWord, polarity: emptyWord };
        
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return { tense: createWord(['だ','っ','た'], JAPANESE_TENSE), polarity: emptyWord };

      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return { tense: emptyWord, polarity: createWord(['じ','ゃ','な','い'], JAPANESE_POLARITY) };

      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return { tense: createWord(['か','っ','た'], JAPANESE_TENSE), polarity: createWord(['じ','ゃ','な'], JAPANESE_POLARITY) };

      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return { tense: createWord(['で','す'], JAPANESE_TENSE), polarity: emptyWord };

      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return { tense: createWord(['で','し','た'], JAPANESE_TENSE), polarity: emptyWord };

      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return { tense: emptyWord, polarity: createWord(['じ','ゃ', 'あ','り','ま','せ','ん'], JAPANESE_POLARITY) };

      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return { tense: createWord(['で','し','た'], JAPANESE_TENSE), polarity: createWord(['じ','ゃ','あ','り','ま','せ','ん'], JAPANESE_POLARITY) };
    }
    throw new Error(createError('conjugations/noun', 'determineNounConjugationJapanese', `${options.politeness}${options.polarity}${options.tense} unknown`));
  }
  return { tense: emptyWord, polarity: emptyWord };
};

const nounConjugationJapanese = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceType: string): Util.ConjugatedJapaneseWord => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_NOUN_JAPANESE;

  const { tense, polarity } = determineNounConjugationJapanese(words, options, sentenceType);
  const categoryEnding = determinecategoryEnding(word);
  const topicParticle = determineTopicParticleJapanese(words, options, sentenceType);

  return {
    word,
    categoryEnding,
    topicParticle,
    tense,
    verbStem: emptyWordElement(),
    polarity, 
    type,
    sentenceType,
    __typename: __TYPENAME_CONJUGATED_JAPANESE_NOUN,
  }
};

export default nounConjugationJapanese;
