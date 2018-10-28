import {
  createError,
} from '../../functions';

import {
  filtersentenceType,
  returnSentenceParts,
  createWord,  
} from '../../utilConjugation';

import {
  polarityPermissions, 
  nounConjugationPermissionsEnglish,
  indefiniteArticlePermissionsEnglish,
} from './nounPermissions';

import {
  __TYPENAME_CONJUGATED_ENGLISH_NOUN,
} from '../../constants/typeNameConstants';

import {
  NOUN_ENGLISH_CONJUGATION,
  NOUN_ENGLISH_POLARITY,
  NOUN_ENGLISH_INDEFINITE_ARTICLE,

  T,
  WA_TS,
  MO_TS,
  GA_TS,

  // WO_SV,
  // NI_SV,
  // DE_SV,
  
  // SENTENCE_TYPE_VERB,
  // SENTENCE_TYPE_TOPIC,
  // SENTENCE_TYPE_SUBJECT,

  // POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,

  CONJUGATION_TYPE_NOUN_ENGLISH,
} from '../../constants/optionsConstants';

const determineNounIndefiniteArticle = (words: Util.SentenceWords, noun: Util.Word, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = indefiniteArticlePermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    const vowels = 'aeiou';
    const firstLetter = noun.english[0];

    if (vowels.includes(firstLetter)) {
      return createWord(['an'], NOUN_ENGLISH_INDEFINITE_ARTICLE);
    } else {
      return createWord(['a'], NOUN_ENGLISH_INDEFINITE_ARTICLE);
    };    
  };
  return createWord([''], NOUN_ENGLISH_INDEFINITE_ARTICLE);
};

const determineNounPolarity = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = polarityPermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    if (options.polarity === POLARITY_NEGATIVE) {
      return createWord(['not'], NOUN_ENGLISH_POLARITY);
    }  
  }
  return createWord([''], NOUN_ENGLISH_POLARITY);
};

const determineNounConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounConjugationPermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    if (options.variation === WA_TS || options.variation === T) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is'], NOUN_ENGLISH_CONJUGATION);
        case `${TENSE_PAST}`: return createWord(['was'], NOUN_ENGLISH_CONJUGATION);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - WA_TS', `${options.polarity}${options.tense} unknown`));
    }
  
    if (options.variation === MO_TS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is', 'also'], NOUN_ENGLISH_CONJUGATION);
        case `${TENSE_PAST}`: return createWord(['was', 'also'], NOUN_ENGLISH_CONJUGATION);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - MO_TS', `${options.tense} unknown`));
    }
    
    if (options.variation === GA_TS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is', 'the', 'one', 'that', 'is'], NOUN_ENGLISH_CONJUGATION);
        case `${TENSE_PAST}`: return createWord(['is', 'the', 'one', 'that', 'was'], NOUN_ENGLISH_CONJUGATION);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - GA_TS', `${options.tense} unknown`));
    }  
  }
  return createWord([''], NOUN_ENGLISH_CONJUGATION);
};

const nounConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.ConjugatedEnglishWord => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_NOUN_ENGLISH;

  const indefiniteArticle = determineNounIndefiniteArticle(words, word, sentenceType);
  const polarity = determineNounPolarity(words, options, sentenceType);
  const tense = determineNounConjugationEnglish(words, options, sentenceType);

  return {
    tense,
    polarity,
    indefiniteArticle,
    word,
    type,
    __typename: __TYPENAME_CONJUGATED_ENGLISH_NOUN,
  };
};

export default nounConjugationEnglish;