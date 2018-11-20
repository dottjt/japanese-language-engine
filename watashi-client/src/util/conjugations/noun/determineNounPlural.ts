import {
  createError,
} from '../../functions';

import {
  createWord,
} from '../utilConjugation';

import {
  NOUN_PLURAL_ONLY,
  NOUN_PLURAL_SINGLE_ONLY,
  NOUN_PLURAL_IRREGULAR, 
  NOUN_PLURAL_EXCEPTION,
  NOUN_PLURAL_GENERAL,
  NOUN_PLURAL_NAME,
} from '../../constants/wordConstants';

import {
  ENGLISH_DECLENSION,
} from '../../constants/optionsConstants'

const determineNounPluralOnly = (noun: string): string => {
  return noun; 
  // throw new Error(createError('pluralNounConjugation.ts', 'determineNounPluralOnly', `${noun} value not recognised.`));
};

const determineNounSingleOnly = (noun: string): string => {
  return noun; 
  // throw new Error(createError('pluralNounConjugation.ts', 'determineNounSingleOnly', `${noun} value not recognised.`));
};


const determineNounNameOnly = (noun: string): string => {
  return noun; 
  // throw new Error(createError('pluralNounConjugation.ts', 'determineNounSingleOnly', `${noun} value not recognised.`));
};


const determineNounIrregular = (noun: string): string => {
  switch(noun) {
    case 'yolo': return 'yolo'; 
  }
  throw new Error(createError('pluralNounConjugation.ts', 'determineNounIrregular', `${noun} value not recognised.`));
};

const determineNounException = (noun: string): string => {
  const lastLetter = noun.slice(-1);
  const lastTwoLetters = noun.slice(-2);

  if (lastLetter === 'o') {
    return `${noun}es`;
  }
  
  if (lastLetter === 'f') {
    return `${noun.slice(0, -1)}ves`;
  }

  if (lastTwoLetters === 'fe') {
    return `${noun.slice(0, -2)}ves`;
  }
  
  if (lastTwoLetters === 'on') {
    return `${noun.slice(0, -2)}a`;
  }
  throw new Error(createError('pluralNounConjugation.ts', 'determineNounException', `${noun} values not recognised.`));
};


const determineNounGeneral = (noun: string): string => {
  const lastLetter = noun.slice(-1);
  const lastTwoLetters = noun.slice(-2);

  if (lastTwoLetters === 'th' || lastTwoLetters === 'ph' ||
      lastLetter === 'o' ||
      lastLetter === 'f' || lastTwoLetters === 'fe' ||
      lastTwoLetters === 'on'
      ) {
      return `${noun}s`;
  }
  
  if (lastTwoLetters === 'ch' || 
      lastTwoLetters === 'sh' || 
      lastLetter === 'x' || 
      lastLetter === 's' || 
      lastLetter === 'z'
      ) {
      return `${noun}es`;
  }
  
  if (lastTwoLetters === 'is') {
    return `${noun.slice(0, -2)}es`;
  }
  
  if (lastLetter === 'y') {
    if ('aeiou'.includes(lastTwoLetters[0])) {
      return `${noun}s`;
    }

    return `${noun.slice(0, -1)}ies`;
  }
  
  if (lastTwoLetters === 'us') {
    return `${noun.slice(0, -2)}i`;
  }

  return `${noun}s`;

};

const determineNounPlural = (noun: Util.Noun): Util.WordArrayElement[] => {
  switch(noun.nounPluralType) {
    case NOUN_PLURAL_ONLY: return createWord([determineNounPluralOnly(noun.nounEnglish.singular)], ENGLISH_DECLENSION);
    case NOUN_PLURAL_SINGLE_ONLY: return createWord([determineNounSingleOnly(noun.nounEnglish.singular)], ENGLISH_DECLENSION);
    case NOUN_PLURAL_IRREGULAR: return createWord([determineNounIrregular(noun.nounEnglish.singular)], ENGLISH_DECLENSION);
    case NOUN_PLURAL_EXCEPTION: return createWord([determineNounException(noun.nounEnglish.singular)], ENGLISH_DECLENSION);
    case NOUN_PLURAL_GENERAL: return createWord([determineNounGeneral(noun.nounEnglish.singular)], ENGLISH_DECLENSION);
    case NOUN_PLURAL_NAME: return createWord([determineNounNameOnly(noun.nounEnglish.singular)], ENGLISH_DECLENSION);
  }  

  throw new Error(createError('determineNounPlural.ts', 'determineNounPlural', `${noun.nounPluralType} not recognised on noun.`));
}

export default determineNounPlural;