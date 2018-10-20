import {
  createError,
  removeGapIfValueEmpty,
} from '../../functions';

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
  TOPIC,
  SUBJECT,

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
};

const determineNounParticleJapanese = (options: Util.Options, identifier: string): string => {
  if ()

  switch (options.variation) {
    case WA_SOB: return 'は';
    case WA_NS: return 'は';
    case MO_NS: return 'も';
    case GA_NS: return 'が';
    case WO_VS: return 'を';
    case NI_VS: return 'に';
    case DE_VS: return 'で';
    default:
      return createError('conjugations/topic', 'determineTopicParticle', 'options.variation unknown');
  }
};

const determineNounEndingJapanese = (options: Util.Options, identifier: string): string => {
  if (identifier === TOPIC ||
      identifier === SUBJECT) {
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

export const nounConjugationJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceIdentifier: string): string => {
  const nounEnding = determineNounEndingJapanese(options, sentenceIdentifier);
  const nounCategoryEnding = determineNounCategoryEnding(noun)
  const nounParticle = determineNounParticleJapanese(options, sentenceIdentifier);

  return `${noun.japanese}${nounCategoryEnding}${nounEnding}${nounTopicParticle}`.trim();
};

// ENGLISH

const determineNounBeginingEnglish = (word: Util.Word, identifier: string): string => {
  const vowels = ['a','e','i','o','u'];
  const firstLetter = word.english[0];

  if (identifier === TOPIC ||
      identifier === PREDICATE ||
      identifier === TOPIC_PREDICATE ||
      identifier === SUBJECT
    ) {
    if (vowels.includes(firstLetter)) {
      return 'an';
    } else {
      return 'a';
    };
  }
  return '';
};

const determineNounEndingEnglish = (options: Util.Options, identifier: string): string => {
  if (identifier === TOPIC ||
      identifier === PREDICATE ||
      identifier === TOPIC_PREDICATE ||
      identifier === SUBJECT
    ) {
    if (options.variation === WA_NS) {
      switch(`${options.polarity}${options.tense}`) {
        case `${POLARITY_POSITIVE}${TENSE_PRESENT}`:
          return 'is';
        case `${POLARITY_POSITIVE}${TENSE_PAST}`:
          return 'was';
        case `${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
          return 'is not';
        case `${POLARITY_NEGATIVE}${TENSE_PAST}`:
          return 'was not';
        default:
          return createError(
            'conjugations/noun',
            'determineNounEndingEnglish - WA_NS',
            `${options.polarity}${options.tense} unknown`,
          );
      };
    }

    if (options.variation === MO_NS) {
      switch(`${options.polarity}${options.tense}`) {
        case `${POLARITY_POSITIVE}${TENSE_PRESENT}`:
          return 'is also';
        case `${POLARITY_POSITIVE}${TENSE_PAST}`:
          return 'was also';
        case `${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
          return 'is also not';
        case `${POLARITY_NEGATIVE}${TENSE_PAST}`:
          return 'was also not';
        default: 
          return createError(
            'conjugations/noun',
            'determineNounEndingEnglish - MO_NS',
            `${options.polarity}${options.tense} unknown`,
          );
      };
    }
    
    if (options.variation === GA_NS) {
      switch(`${options.polarity}${options.tense}`) {
        case `${POLARITY_POSITIVE}${TENSE_PRESENT}`:
          return 'is the one that is';
        case `${POLARITY_POSITIVE}${TENSE_PAST}`:
          return 'is the one that was';
        case `${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
          return 'is the one that is not';
        case `${POLARITY_NEGATIVE}${TENSE_PAST}`:
          return 'is the one that was not';
        default: 
          return createError(
            'conjugations/noun',
            'determineNounEndingEnglish - GA_NS',
            `${options.polarity}${options.tense} unknown`,
          );
      };
    } 
  }
  // If not topic identifier, then no need to return anything. 
  return '';
};

export const nounConjugationEnglish = (noun: Util.Word, options: Util.Options, sentenceIdentifier: string): string => {
  const nounEnding = determineNounEndingEnglish(options, sentenceIdentifier);
  const nounBeginning = determineNounBeginingEnglish(noun, sentenceIdentifier);

  // NOTE: Create a function which removes the space if the variable doesn't exist. 

  return `${nounBeginning} ${noun.english}${removeGapIfValueEmpty(nounEnding)}`.trim();
};
