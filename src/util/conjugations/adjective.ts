import {
  // createError
} from '../functions';

import {
  // POLITENESS_CASUAL,
  // POLITENESS_FORMAL,

  // POLARITY_POSITIVE,
  // POLARITY_NEGATIVE,

  // PREDICATE_IDENTIFIER,
  // TOPIC_IDENTIFIER,

  // CATEGORY_HUMAN_NAME,
} from '../constants/constants';


const determineAdjectiveCategoryEnding = (word: Util.Word): string => {
  // const endingsArray = word.category.map(categoryString => {
  //   switch(categoryString) {
  //     case `${CATEGORY_HUMAN_NAME}`:
  //       return 'さん';
  //     default:
  //       return '';
  //   } 
  // }).filter(categoryString => categoryString !== '');

  // if (endingsArray.length > 0) {
  //   return endingsArray[0];
  // }
  return '';
}

const determineAdjectiveEndingJapanese = (options: Util.Options): string => {
  // switch(`${options.polarity}${options.politeness}`) {
  //   case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}`:
      return '';
  //   case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}`:
  //     return 'じゃない';
  //   case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}`:
  //     return 'です';
  //   case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}`:
  //     return 'じゃありません';
  //   default: 
  //     return createError(
  //       'conjugations/noun',
  //       'nounPolarity',
  //       `options.polarity unknown`,
  //     );
  // }
};

export const determineSentenceIdentifierEndingJapanese = (identifier: string): string => {
  // switch(identifier) {
  //   case PREDICATE_IDENTIFIER:
  //     return ''; // I've completely forgotten what I was trying to express here. 
  //   case TOPIC_IDENTIFIER:
  //     return '';
  //   default:
      return '';
  // }
};


export const adjectiveConjugationJapanese = (adjective: Util.Word, options: Util.Options, sentenceIdentifier: string): string => {
  const adjectiveEnding = determineAdjectiveEndingJapanese(options);
  const adjectiveCategoryEnding = determineAdjectiveCategoryEnding(adjective)
  const sentenceIdentifierEnding = determineSentenceIdentifierEndingJapanese(sentenceIdentifier);

  return `${adjective.japanese}${adjectiveCategoryEnding}${adjectiveEnding}${sentenceIdentifierEnding}`;
};