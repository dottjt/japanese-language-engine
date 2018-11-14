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
} from '../../constants/optionsConstants';

const determineNounIndefiniteArticle = (words: Util.SentenceWords, noun: Util.Word, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = indefiniteArticlePermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    const vowels = 'aeiou';
    const firstLetter = noun.english[0];

    if (vowels.includes(firstLetter)) {
      return createWord(['an'], ENGLISH_INDEFINITE_ARTICLE);
    } else {
      return createWord(['a'], ENGLISH_INDEFINITE_ARTICLE);
    };    
  };
  return createWord([''], ENGLISH_INDEFINITE_ARTICLE);
};

export default determineNounIndefiniteArticle;