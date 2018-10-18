import {
  createError,
  removeGapIfValueEmpty,
} from '../../functions';

import {
  CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import {
  WA_NS,
  WA_NS_QUESTION,
  MO_NS,
  MO_NS_QUESTION,
  GA_NS,
  GA_NS_QUESTION,
  
  WO_VS,
  WO_VS_QUESTION,
  NI_VS,
  NI_VS_QUESTION,
  DE_VS,
  DE_VS_QUESTION,
  
  PREDICATE_IDENTIFIER,
  TOPIC_IDENTIFIER,

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

const determineTopicParticleJapanese = (options: Util.Options, identifier: string): string => {
  if (identifier === TOPIC_IDENTIFIER) {
    switch (options.variation) {
      case WA_NS:
        return 'は';
      case WA_NS_QUESTION:
        return 'は';
      case MO_NS:
        return 'も';
      case MO_NS_QUESTION:
        return 'も';
      case GA_NS:
        return 'が';
      case GA_NS_QUESTION:
        return 'が';
      case WO_VS:
        return 'を';
      case WO_VS_QUESTION:
        return 'を';
      case NI_VS:
        return 'に';
      case NI_VS_QUESTION:
        return 'に';
      case DE_VS:
        return 'で';
      case DE_VS_QUESTION:
        return 'で';

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
          `${options.politeness}${options.polarity}${options.tense} unknown`,
        );
    }
  }
  return '';
};

const determineSentenceIdentifierEndingJapanese = (options: Util.Options, identifier: string): string => {
  
  if (identifier === PREDICATE_IDENTIFIER) {
    if (options.variation === WA_NS_QUESTION || options.variation === MO_NS_QUESTION || options.variation === GA_NS_QUESTION) {
      return 'か？';
    } else {
      return '。';
    }    
  }

  if (identifier === TOPIC_IDENTIFIER) {
    return '';
  }

  return createError(
    'conjugations/noun',
    'determineSentenceIdentifierEndingEnglish',
    `${identifier} unknown`,
  );
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

  if (identifier === PREDICATE_IDENTIFIER) {
    if (options.variation === WA_NS_QUESTION || options.variation === MO_NS_QUESTION || options.variation === GA_NS_QUESTION) {
      return '?';
    } else {
      return '.';
    }    
  }

  if (identifier === TOPIC_IDENTIFIER) {
    return '';
  }

  return createError(
    'conjugations/noun',
    'determineSentenceIdentifierEndingEnglish',
    `${identifier} unknown`,
  );
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
  if (identifier === TOPIC_IDENTIFIER) {
    if (options.variation === WA_NS || options.variation === WA_NS_QUESTION) {
      switch(`${options.polarity}${options.tense}`) {
        case `${POLARITY_POSITIVE}${TENSE_PRESENT}`:
          return 'is';
        case `${POLARITY_POSITIVE}${TENSE_PAST}`:
          return 'was';
        case `${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
          return 'is';
        case `${POLARITY_NEGATIVE}${TENSE_PAST}`:
          return 'was';
        default: 
          return createError(
            'conjugations/noun',
            'determineNounEndingEnglish - WA_NS',
            `${options.polarity}${options.tense} unknown`,
          );
      };
    }

    if (options.variation === MO_NS || options.variation === MO_NS_QUESTION) {
      switch(`${options.polarity}${options.tense}`) {
        case `${POLARITY_POSITIVE}${TENSE_PRESENT}`:
          return 'is also';
        case `${POLARITY_POSITIVE}${TENSE_PAST}`:
          return 'was also';
        case `${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
          return 'is also not';
        case `${POLARITY_NEGATIVE}${TENSE_PAST}`:
          return 'was also nto';
        default: 
          return createError(
            'conjugations/noun',
            'determineNounEndingEnglish - MO_NS',
            `${options.polarity}${options.tense} unknown`,
          );
      };
    }
    
    if (options.variation === GA_NS || options.variation === GA_NS_QUESTION) {
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
  const sentenceIdentifierEnding = determineSentenceIdentifierEndingEnglish(options, sentenceIdentifier);

  // NOTE: Create a function which removes the space if the variable doesn't exist. 

  return `${nounBeginning} ${noun.english}${removeGapIfValueEmpty(nounEnding)}${sentenceIdentifierEnding}`.trim();
};
