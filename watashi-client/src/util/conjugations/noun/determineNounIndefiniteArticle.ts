import {
  indefiniteArticlePermissionsEnglish,
} from './nounPermissions';

import {
  returnSentenceParts,
  createWord,  
} from '../utilConjugation';

import {
  __TYPENAME_CONJUGATED_ENGLISH_NOUN,
} from '../../constants/typeNameConstants';

import {
  ENGLISH_INDEFINITE_ARTICLE,
} from '../../constants/wordConstants';

const determineNounIndefiniteArticle = (words: Util.SentenceWords, noun: Util.Noun, sentenceType: string): Util.WordArrayElement[] => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = indefiniteArticlePermissionsEnglish(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  if (permissions) {
    const vowels = 'aeiou';
    const firstLetter = noun.nounEnglish.singular[0];

    if (vowels.includes(firstLetter)) {
      return createWord(['an'], ENGLISH_INDEFINITE_ARTICLE);
    } else {
      return createWord(['a'], ENGLISH_INDEFINITE_ARTICLE);
    };    
  };
  return createWord([''], ENGLISH_INDEFINITE_ARTICLE);
};

export default determineNounIndefiniteArticle;