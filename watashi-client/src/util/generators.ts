import {
  randomArrayElement,
  createError,
} from './functions';

// generatorUtils

const checkIfValueExists = (word: Util.Noun | Util.Verb | Util.Adjective, englishName: string | string[]): Util.Noun | Util.Verb | Util.Adjective => {
  if (word === undefined) {
    throw new Error(createError('filters.ts', 'checkIfValueExists', `${englishName} - word: '${word}' does not exist`))
  };
  return word;
};



// ---------------
// noun Methods

export const filterSpecifcWordNoun = (nouns: Util.Noun[], englishName: string): Util.Noun => (
  checkIfValueExists(nouns.filter((noun: Util.Noun): boolean => (
    noun.nounEnglish.singular === englishName
  ))[0], englishName) as Util.Noun
);

export const getRandomWordNoun = (nouns: Util.Noun[]): Util.Noun => (
  nouns[randomArrayElement(nouns.length)]
);

const filterSpecifcCategoriesNoun = (nouns: Util.Noun[], categories: string[]): Util.Noun[] => {
  const randomCategory = categories[randomArrayElement(categories.length)];

  return nouns.filter((noun: Util.Noun) => {
    const checkIfCategoryExistsInCategoryArray = noun.nounCategory.filter(nounCategory => nounCategory === randomCategory).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
};

export const getRandomWordViaCategoryNoun = (nouns: Util.Noun[], categories: string[]): Util.Noun => {
  const getCategoryWords = filterSpecifcCategoriesNoun(nouns, categories);
  return checkIfValueExists(getCategoryWords[randomArrayElement(getCategoryWords.length)], categories) as Util.Noun
}



// ---------------
// verb Methods

export const filterSpecifcWordVerb = (verbs: Util.Verb[], englishName: string): Util.Verb => (
  checkIfValueExists(verbs.filter((noun: Util.Verb): boolean => (
    noun.verbEnglish.infinitive === englishName
  ))[0], englishName) as Util.Verb
);

export const getRandomWordVerb = (verbs: Util.Verb[]): Util.Verb => (
  verbs[randomArrayElement(verbs.length)]
);

const filterSpecifcCategoriesVerb = (verbs: Util.Verb[], categories: string[]): Util.Verb[] => {
  const randomCategory = categories[randomArrayElement(categories.length)];

  return verbs.filter((noun: Util.Verb) => {
    const checkIfCategoryExistsInCategoryArray = noun.verbCategory.filter(nounCategory => nounCategory === randomCategory).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
};

export const getRandomWordViaCategoryVerb = (verbs: Util.Verb[], categories: string[]): Util.Verb => {
  const getCategoryWords = filterSpecifcCategoriesVerb(verbs, categories);
  return checkIfValueExists(getCategoryWords[randomArrayElement(getCategoryWords.length)], categories) as Util.Verb
}



// ---------------
// adjective Methods

export const filterSpecifcWordAdjective = (adjectives: Util.Adjective[], englishName: string): Util.Adjective => (
  checkIfValueExists(adjectives.filter((noun: Util.Adjective): boolean => (
    noun.adjectiveEnglish.positive === englishName
  ))[0], englishName) as Util.Adjective
);

export const getRandomWordAdjective = (adjectives: Util.Adjective[]): Util.Adjective => (
  adjectives[randomArrayElement(adjectives.length)]
);

const filterSpecifcCategoriesAdjective = (adjectives: Util.Adjective[], categories: string[]): Util.Adjective[] => {
  const randomCategory = categories[randomArrayElement(categories.length)];
  return adjectives.filter((noun: Util.Adjective) => {
    const checkIfCategoryExistsInCategoryArray = noun.adjectiveCategory.filter(nounCategory => nounCategory === randomCategory).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
};

export const getRandomWordViaCategoryAdjective = (adjectives: Util.Adjective[], categories: string[]): Util.Adjective => {
  const getCategoryWords = filterSpecifcCategoriesAdjective(adjectives, categories);
  return checkIfValueExists(getCategoryWords[randomArrayElement(getCategoryWords.length)], categories) as Util.Adjective
}

// export const filterSpecifcMetaVerb = (nouns: Util.Verb[], metaProperty: string): Util.Verb[] => (
//   nouns.filter((noun: Util.Verb): boolean => (
//     // noun.verbType !== undefined && noun.verbType === metaProperty
//     Object.keys(noun.meta).indexOf(metaProperty) > -1
//   ))
// );

// export const getRandomWordViaMetaNoun = (nouns: Util.Noun[], metaProperty: string): Util.Noun => (
//   filterSpecifcMeta(nouns, metaProperty)[randomArrayElement(nouns.length)]
// );

