import {
  randomArrayElement
} from './functions';

export const filterSpecifcWord = (nouns: Util.Word[], englishName: string): Util.Word => (
  nouns.filter((noun: Util.Word): boolean => (
    noun.english === englishName
  ))[0]
);

export const filterSpecifcCategory = (nouns: Util.Word[], category: string): Util.Word[] => (
  nouns.filter((noun: Util.Word) => {
    const checkIfCategoryExistsInCategoryArray = noun.category.filter(nounCategory => nounCategory === category).length > 0
    return checkIfCategoryExistsInCategoryArray ? true : false 
  })
);



  // const filteredCategories = (mappedCategoriesParameter: { string }) => mappedCategoriesParameter.filter((categoryArray: string[]): boolean => categoryArray.indexOf(category) !== -1 ? true : false)

  // // this makes all the relevant categories
  // return filteredCategories(nouns).map((noun) => noun.category.map((nounCategory => { if(filteredCategories(nouns)) { return noun } }) ));

  // // this filters all the categories to the ones that 



export const filterSpecifcPrimaryType = (nouns: Util.Word[], primaryType: string): Util.Word[] => (
  nouns.filter((noun: Util.Word): boolean => (
    noun.primaryType === primaryType
  ))
);

export const filterSpecifcMeta = (nouns: Util.Word[], metaProperty: string): Util.Word[] => (
  nouns.filter((noun: Util.Word): boolean => (
    Object.keys(noun.meta).indexOf(metaProperty) > -1
  ))
);

export const getRandomWord = (nouns: Util.Word[]): Util.Word => (
  nouns[randomArrayElement(nouns.length)]
);

export const getRandomWordViaCategory = (nouns: Util.Word[], category: string): Util.Word => {
  const getCategoryWords = filterSpecifcCategory(nouns, category);
  console.log('filter', getCategoryWords);
  return getCategoryWords[randomArrayElement(getCategoryWords.length)]
}

export const getRandomWordViaPrimaryType = (nouns: Util.Word[], primaryType: string): Util.Word => (
  filterSpecifcPrimaryType(nouns, primaryType)[randomArrayElement(nouns.length)]
);

export const getRandomWordViaMeta = (nouns: Util.Word[], metaProperty: string): Util.Word => (
  filterSpecifcMeta(nouns, metaProperty)[randomArrayElement(nouns.length)]
);
