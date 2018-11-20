import {
  randomArrayElement,
  createError,
} from './functions';

const checkIfValueExists = (word: Util.Noun | Util.Verb, englishName: string): Util.Noun | Util.Verb => {
  if (word === undefined) {
    throw new Error(createError('filters.ts', 'checkIfValueExists', `${englishName} does not exist`))
  } 
  return word;
};

export const filterSpecifcWordNoun = (nouns: Util.Noun[], englishName: string): Util.Noun => (
  checkIfValueExists(nouns.filter((noun: Util.Noun): boolean => (
    noun.nounEnglish.singular === englishName
  ))[0], englishName) as Util.Noun
);

export const getRandomWordNoun = (nouns: Util.Noun[]): Util.Noun => (
  nouns[randomArrayElement(nouns.length)]
);

const filterSpecifcCategoryNoun = (nouns: Util.Noun[], category: string): Util.Noun[] => (
  nouns.filter((noun: Util.Noun) => {
    const checkIfCategoryExistsInCategoryArray = noun.nounCategory.filter(nounCategory => nounCategory === category).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
);

export const getRandomWordViaCategoryNoun = (nouns: Util.Noun[], category: string): Util.Noun => {
  const getCategoryWords = filterSpecifcCategoryNoun(nouns, category);
  return getCategoryWords[randomArrayElement(getCategoryWords.length)]
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

const filterSpecifcCategoryVerb = (verbs: Util.Verb[], category: string): Util.Verb[] => (
  verbs.filter((noun: Util.Verb) => {
    const checkIfCategoryExistsInCategoryArray = noun.verbCategory.filter(nounCategory => nounCategory === category).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
);

export const getRandomWordViaCategoryVerb = (verbs: Util.Verb[], category: string): Util.Verb => {
  const getCategoryWords = filterSpecifcCategoryVerb(verbs, category);
  return getCategoryWords[randomArrayElement(getCategoryWords.length)]
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

