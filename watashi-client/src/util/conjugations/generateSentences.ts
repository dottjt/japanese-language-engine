import { 
  createError,
  // capitalise,
} from '../functions';

import {
  returnSentenceParts,
  generateSentenceTypes,
} from '../utilConjugation';

import { 
  LANG_JAPANESE,
  LANG_ENGLISH,
} from '../constants/generalConstants';

import {
  // POLITENESS_CASUAL,
  
  // HAS_QUESTION,

  SENTENCE_TYPE_VERB,
  SENTENCE_TYPE_SUBJECT,
  SENTENCE_TYPE_TOPIC,
} from '../constants/optionsConstants';

import {
  __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
  __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
} from '../constants/typeNameConstants';

import nounConjugationJapanese from './noun/nounConjugationJapanese';
import nounConjugationEnglish from './noun/nounConjugationEnglish';

import verbConjugationJapanese from './verb/verbConjugationJapanese';
import verbConjugationEnglish from './verb/verbConjugationEnglish';

import generateWordModifiers from './generateWordModifiers';
import generateWords from './generateWords';

const generateEnglishWord = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedEnglishWord | Util.ConjugatedEnglishWord => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationEnglish(words, modifiers, options, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationEnglish(words, modifiers, options, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationEnglish(words, modifiers, options, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedJapaneseWord | Util.ConjugatedJapaneseWord => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationJapanese(words, modifiers, options, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationJapanese(words, modifiers, options, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationJapanese(words, modifiers, options, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateJapaneseWord', 'sentenceType does not exist'));
};

const generatePhrases = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options): Util.EnglishJapaneseSentence => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const { onlyTopic, onlySubject, onlyVerb, onlyTopicAndSubject, onlySubjectAndVerb } = generateSentenceTypes(topic, subject, verb);

  if (onlyTopic) {
    return {
      japaneseSentence: [ generateJapaneseWord(words, modifiers, options, SENTENCE_TYPE_TOPIC, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, modifiers, options, SENTENCE_TYPE_TOPIC, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };
  };
  if (onlySubject) {
    return {
      japaneseSentence: [ generateJapaneseWord(words, modifiers, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, modifiers, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    }
  };
  if (onlyVerb) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, modifiers, options, SENTENCE_TYPE_VERB, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, modifiers, options, SENTENCE_TYPE_VERB, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };
  };
  if (onlyTopicAndSubject) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, modifiers, options, SENTENCE_TYPE_TOPIC, LANG_JAPANESE), generateJapaneseWord(words, modifiers, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, modifiers, options, SENTENCE_TYPE_TOPIC, LANG_ENGLISH), generateEnglishWord(words, modifiers, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };  
  };
  if (onlySubjectAndVerb) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, modifiers, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE), generateJapaneseWord(words, modifiers, options, SENTENCE_TYPE_VERB, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, modifiers, options, SENTENCE_TYPE_VERB, LANG_ENGLISH), generateEnglishWord(words, modifiers, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };  
  };
  throw new Error(createError('conjugations/generateSentences.tsx', 'generateSentences', 'sentenceType does not exist'));
};

const generateSentences = (words: Util.Word[], modifiersLambda: () => Util.Modifiers, optionsLambda: () => Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => 
  Array.from(Array(numberOfExercises)).map(() => {

    const options = optionsLambda();
    const modifiers = modifiersLambda();

    const variationWords = generateWords(words, options.selectedVariation);
    const modifierWords = generateWordModifiers(words, modifiers);

    const { englishSentence, japaneseSentence } = generatePhrases(variationWords(), modifierWords, options);

    return {
      options,
      modifiers,
      englishSentence, 
      japaneseSentence, 
      __typename: __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
    }  
  })

export default generateSentences;
