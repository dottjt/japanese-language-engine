import {
  randomArrayElement
} from './functions';

export const filterSpecifcWordNoun = (nouns: Util.Noun[], englishName: string): Util.Noun => (
  nouns.filter((noun: Util.Noun): boolean => (
    noun.nounEnglish.singular === englishName
  ))[0]
);

export const filterSpecifcCategoryNoun = (nouns: Util.Noun[], category: string): Util.Noun[] => (
  nouns.filter((noun: Util.Noun) => {
    const checkIfCategoryExistsInCategoryArray = noun.nounCategory.filter(nounCategory => nounCategory === category).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
);

export const getRandomWordNoun = (nouns: Util.Noun[]): Util.Noun => (
  nouns[randomArrayElement(nouns.length)]
);

export const getRandomWordViaCategoryNoun = (nouns: Util.Noun[], category: string): Util.Noun => {
  const getCategoryWords = filterSpecifcCategoryNoun(nouns, category);
  return getCategoryWords[randomArrayElement(getCategoryWords.length)]
}



// ---------------
// verb Methods

export const filterSpecifcWordVerb = (verbs: Util.Verb[], englishName: string): Util.Verb => (
  verbs.filter((noun: Util.Verb): boolean => (
    noun.verbEnglish.infinitive === englishName
  ))[0]
);

export const filterSpecifcCategoryVerb = (verbs: Util.Verb[], category: string): Util.Verb[] => (
  verbs.filter((noun: Util.Verb) => {
    const checkIfCategoryExistsInCategoryArray = noun.verbCategory.filter(nounCategory => nounCategory === category).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
);

export const getRandomWordVerb = (verbs: Util.Verb[]): Util.Verb => (
  verbs[randomArrayElement(verbs.length)]
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

