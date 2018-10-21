import {
  randomArrayElement
} from './functions';

export const filterSpecifcWord = (nouns: Util.Word[], englishName: string): Util.Word => (
  nouns.filter((noun: Util.Word): boolean => (
    noun.english === englishName
  ))[0]
);

export const filterSpecifcCategory = (nouns: Util.Word[], category: string): Util.Word[] => (
  nouns.filter((noun: Util.Word) => 
    noun.category.filter((nounCategory: string): boolean => (
      nounCategory === category
    ))[0]
  )
);

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

export const getRandomWordViaCategory = (nouns: Util.Word[], category: string): Util.Word => (
  filterSpecifcCategory(nouns, category)[randomArrayElement(nouns.length)]
);

export const getRandomWordViaPrimaryType = (nouns: Util.Word[], primaryType: string): Util.Word => (
  filterSpecifcPrimaryType(nouns, primaryType)[randomArrayElement(nouns.length)]
);

export const getRandomWordViaMeta = (nouns: Util.Word[], metaProperty: string): Util.Word => (
  filterSpecifcMeta(nouns, metaProperty)[randomArrayElement(nouns.length)]
);
