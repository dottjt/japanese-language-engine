import {
  createError,
  removeGapIfValueEmpty,
} from '../functions';

import {
  WA_SOB,
  WA_SOB_QUESTION,

  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,

  PREDICATE_IDENTIFIER,
  TOPIC_IDENTIFIER,

  CATEGORY_HUMAN_NAME,
} from '../constants/constants';

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
  // POSSIBLE OPTIMISATION IF TOO SLOW: REMOVE politeness since it's irrelevant :)
  if (identifier === TOPIC_IDENTIFIER) {
    switch(`${options.politeness}${options.polarity}${options.tense}`) {
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return 'is';
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return 'was';

      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return 'is not';
      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return 'was not';

      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return 'is';
      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return 'was';

      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return 'is not';
      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return 'was not';

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

  // NOTE: Create a function which removes the space if the variable doesn't exist. 

  return `${nounBeginning} ${noun.english}${removeGapIfValueEmpty(nounEnding)}${sentenceIdentifierEnding}`.trim();
};
