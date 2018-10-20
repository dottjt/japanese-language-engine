import {
  createError,
  removeGapIfValueEmpty,
  filterWordType,
} from '../../functions';

// import {
//   CATEGORY_HUMAN_NAME,
// } from '../../constants/wordConstants';

import {
  // WA_SOB,

  WA_NS,
  MO_NS,
  GA_NS,

  // WO_VS,
  // NI_VS,
  // DE_VS,
  
  // VERB,
  TOPIC,
  SUBJECT,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,
} from '../../constants/optionsConstants';

const determineNounBeginingEnglish = (word: Util.Word, identifier: string): string => {
  const vowels = 'aeiou';
  const firstLetter = word.english[0];

  if (identifier === TOPIC || identifier === SUBJECT) {
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
      identifier === SUBJECT) {
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
  return '';
};

const nounConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, wordType: string): string => {
  const word = filterWordType(words, wordType);

  const nounEnding = determineNounEndingEnglish(options, wordType);
  const nounBeginning = determineNounBeginingEnglish(word, wordType);

  return `${nounBeginning} ${word.english}${removeGapIfValueEmpty(nounEnding)}`.trim();
};

export default nounConjugationEnglish;