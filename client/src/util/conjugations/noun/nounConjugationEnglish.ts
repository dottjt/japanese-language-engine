import {
  createError,
  removeGapIfValueEmpty,
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
  const vowels = ['a','e','i','o','u'];
  const firstLetter = word.english[0];

  if (identifier === TOPIC ||
      identifier === SUBJECT) {
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

const nounConjugationEnglish = (noun: Util.Word, options: Util.Options, sentenceIdentifier: string): string => {
  const nounEnding = determineNounEndingEnglish(options, sentenceIdentifier);
  const nounBeginning = determineNounBeginingEnglish(noun, sentenceIdentifier);

  return `${nounBeginning} ${noun.english}${removeGapIfValueEmpty(nounEnding)}`.trim();
};

export default nounConjugationEnglish;