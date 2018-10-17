import {
  createError
} from '../functions';

import {
  WA_SOB,
  WA_SOB_QUESTION,

  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  PREDICATE_IDENTIFIER,
  TOPIC_IDENTIFIER,

  CATEGORY_HUMAN_NAME,
} from '../constants';

const determineNounCategoryEnding = (word: Util.Word): string => {
  const endingsArray = word.category.map(categoryString => {
    switch(categoryString) {
      case `${CATEGORY_HUMAN_NAME}`:
        return 'さん';
      default:
        return '';
    } 
  }).filter(categoryString => categoryString !== '');

  if (endingsArray.length > 0) {
    return endingsArray[0];
  }
  return '';
}

const determineTopicParticleJapanese = (options: Util.Options, identifier: string): string => {
  if (identifier === TOPIC_IDENTIFIER) {
    switch (options.variation) {
      case WA_SOB:
        return 'は';
      case WA_SOB_QUESTION:
        return 'は';
      default:
        return createError('conjugations/topic', 'determineTopicParticle', 'options.variation unknown');
    }
  }
  return '';
};

const determineNounEndingJapanese = (options: Util.Options, identifier: string): string => {
  if (identifier === PREDICATE_IDENTIFIER) {
    switch(`${options.politeness}${options.polarity}`) {
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
          'conjugations/noun',
          'determineNounEndingJapanese',
          `options.polarity unknown`,
        );
    }
  } 
  return '';
};

const determineSentenceIdentifierEndingJapanese = (options: Util.Options, identifier: string): string => {
  switch(`${identifier}${options.variation}`) {
    case `${PREDICATE_IDENTIFIER}${WA_SOB}`:
      return '。';
    case `${PREDICATE_IDENTIFIER}${WA_SOB_QUESTION}`:
      return 'か？';
    case `${TOPIC_IDENTIFIER}${WA_SOB}`:
      return '';
    case `${TOPIC_IDENTIFIER}${WA_SOB_QUESTION}`:
      return '';
    default:
      return createError(
        'conjugations/noun',
        'determineSentenceIdentifierEndingJapanese',
        `${identifier}${options.variation} unknown`,
      );
  }
};

export const nounConjugationJapanese = (noun: Util.Word, options: Util.Options, sentenceIdentifier: string): string => {
  const nounEnding = determineNounEndingJapanese(options, sentenceIdentifier);
  const nounCategoryEnding = determineNounCategoryEnding(noun)
  const sentenceIdentifierEnding = determineSentenceIdentifierEndingJapanese(options, sentenceIdentifier);
  const nounTopicParticle = determineTopicParticleJapanese(options, sentenceIdentifier);

  return `${noun.japanese}${nounCategoryEnding}${nounEnding}${sentenceIdentifierEnding}${nounTopicParticle}`.trim();
};

// ENGLISH

const determineSentenceIdentifierEndingEnglish = (options: Util.Options, identifier: string): string => {
  switch(`${identifier}${options.variation}`) {
    case `${PREDICATE_IDENTIFIER}${WA_SOB}`:
      return '.';
    case `${PREDICATE_IDENTIFIER}${WA_SOB_QUESTION}`:
      return '?';
    case `${TOPIC_IDENTIFIER}${WA_SOB}`:
      return '';
    case `${TOPIC_IDENTIFIER}${WA_SOB_QUESTION}`:
      return '';
    default:
      return createError(
        'conjugations/noun',
        'determineSentenceIdentifierEndingJapanese',
        `${identifier}${options.variation} unknown`,
      );
  }
};

const determineNounBeginingEnglish = (word: Util.Word, identifier: string): string => {
  const vowels = ['a','e','i','o','u'];
  const firstLetter = word.english[0];

  if (identifier === PREDICATE_IDENTIFIER) {
    if (vowels.includes(firstLetter)) {
      return 'an';
    } else {
      return 'a';
    };
  }
  return '';
};

const determineNounEndingEnglish = (options: Util.Options, identifier: string): string => {
  // depending on the identifier aka position of the word in the code, it will display the language in different places. 
  if (identifier === TOPIC_IDENTIFIER) {
    switch(`${options.politeness}${options.polarity}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`:
        return ' is';
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}`:
        return ' is not';
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`:
        return ' is';
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`:
        return ' is not';

      default: 
        return createError(
          'conjugations/noun',
          'determineNounEndingEnglish',
          `options.polarity unknown`,
        );
    }
  }
  return '';
};


export const nounConjugationEnglish = (noun: Util.Word, options: Util.Options, sentenceIdentifier: string): string => {
  const nounEnding = determineNounEndingEnglish(options, sentenceIdentifier);
  const nounBeginning = determineNounBeginingEnglish(noun, sentenceIdentifier);
  const sentenceIdentifierEnding = determineSentenceIdentifierEndingEnglish(options, sentenceIdentifier);

  return `${nounBeginning} ${noun.english}${nounEnding}${sentenceIdentifierEnding}`.trim();
};
