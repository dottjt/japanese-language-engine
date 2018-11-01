import {
  randomArrayElement
} from './functions';

export const filterSpecifcWord = (nouns: Util.Word[], englishName: string): Util.Word => (
  nouns.filter((noun: Util.Word): boolean => (
    noun.english.present === englishName
  ))[0]
);

export const filterSpecifcCategory = (nouns: Util.Word[], category: string): Util.Word[] => (
  nouns.filter((noun: Util.Word) => {
    const checkIfCategoryExistsInCategoryArray = noun.category.filter(nounCategory => nounCategory === category).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
);

export const filterSpecifcPrimaryType = (nouns: Util.Word[], primaryType: string): Util.Word[] => (
  nouns.filter((noun: Util.Word): boolean => (
    noun.primaryType === primaryType
  ))
);

export const filterSpecifcMeta = (nouns: Util.Word[], metaProperty: string): Util.Word[] => (
  nouns.filter((noun: Util.Word): boolean => (
    // noun.verbType !== undefined && noun.verbType === metaProperty
    Object.keys(noun.meta).indexOf(metaProperty) > -1
  ))
);

export const getRandomWord = (nouns: Util.Word[]): Util.Word => (
  nouns[randomArrayElement(nouns.length)]
);

export const getRandomWordViaCategory = (nouns: Util.Word[], category: string): Util.Word => {
  const getCategoryWords = filterSpecifcCategory(nouns, category);
  return getCategoryWords[randomArrayElement(getCategoryWords.length)]
}

export const getRandomWordViaPrimaryType = (nouns: Util.Word[], primaryType: string): Util.Word => {
  const getPrimaryWords = filterSpecifcPrimaryType(nouns, primaryType);
  return getPrimaryWords[randomArrayElement(getPrimaryWords.length)]
};

export const getRandomWordViaMeta = (nouns: Util.Word[], metaProperty: string): Util.Word => (
  filterSpecifcMeta(nouns, metaProperty)[randomArrayElement(nouns.length)]
);
