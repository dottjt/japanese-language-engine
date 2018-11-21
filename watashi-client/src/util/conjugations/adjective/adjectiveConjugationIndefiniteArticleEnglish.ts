import {
  indefiniteArticlePermissionsEnglish,
} from './adjectivePermissions';

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

const adjectiveConjugationIndefiniteArticleEnglish = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  const { topic, subject, verb } = returnSentenceParts(sentenceWords);

  const permissions = indefiniteArticlePermissionsEnglish(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  if (permissions) {
    const vowels = 'aeiou';
    // NOTE: This is not correct, because we don't know if it will be a topic or not. Will have to provide more context. 
    const firstLetter = topic.nounEnglish.singular[0];

    if (vowels.includes(firstLetter)) {
      return createWord(['an'], ENGLISH_INDEFINITE_ARTICLE);
    } else {
      return createWord(['a'], ENGLISH_INDEFINITE_ARTICLE);
    };    
  };
  return createWord([''], ENGLISH_INDEFINITE_ARTICLE);
};

export default adjectiveConjugationIndefiniteArticleEnglish;