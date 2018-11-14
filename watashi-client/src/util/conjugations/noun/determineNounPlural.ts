import {
  createError,
} from '../../functions';

import {
  NOUN_PLURAL_ONLY,
  NOUN_PLURAL_SINGLE_ONLY,
  NOUN_PLURAL_IRREGULAR,
  NOUN_PLURAL_EXCEPTION,
  NOUN_PLURAL_GENERAL,
} from '../../constants/wordConstants';

const determineNounPluralOnly = (noun: string): string => {
  switch(noun) {
    case 'yolo': return 'yolo'; 
  }
  throw new Error(createError('pluralNounConjugation.ts', 'determineNounPluralOnly', `${noun} value not recognised.`));
};

const determineNounSingleOnly = (noun: string): string => {
  switch(noun) {
    case 'yolo': return 'yolo'; 
  }
  throw new Error(createError('pluralNounConjugation.ts', 'determineNounSingleOnly', `${noun} value not recognised.`));
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
  throw new Error(createError('pluralNounConjugation.ts', 'determineNounException', `${lastLetter} or ${lastTwoLetters} values not recognised.`));
};


const determineNounGeneral = (noun) => {
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
  throw new Error(createError('pluralNounConjugation.ts', 'determineNounGeneral', `${lastLetter} or ${lastTwoLetters} values not recognised.`));
};

const pluralNounConjugationSwitch = (noun: Util.Word) => {
  const nounString = noun.english.presentTense;

  switch(noun.english.metaType.nounPluralType) {
    case NOUN_PLURAL_ONLY: return determineNounPluralOnly(nounString);
    case NOUN_PLURAL_SINGLE_ONLY: return determineNounSingleOnly(nounString);
    case NOUN_PLURAL_IRREGULAR: return determineNounIrregular(nounString);
    case NOUN_PLURAL_EXCEPTION: return determineNounException(nounString);
    case NOUN_PLURAL_GENERAL: return determineNounGeneral(nounString);
  }

  throw new Error(createError('pluralNounConjugation.ts', 'determineNoun', `${noun.english.nounPluralType} not recognised on noun.`));
}

const determineNounPlural = (noun: Util.Word) => {
  noun.english.presentTense = pluralNounConjugationSwitch(noun);
  return noun;
}

export default determineNounPlural;