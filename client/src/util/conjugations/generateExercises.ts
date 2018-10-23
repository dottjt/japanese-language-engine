import { 
  createError,
  // capitalise,
  returnSentenceParts,
  generateSentenceTypes,
} from '../functions';

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

import nounConjugationJapanese from "./noun/nounConjugationJapanese";
import nounConjugationEnglish from "./noun/nounConjugationEnglish";

import verbConjugationJapanese from "./verb/verbConjugationJapanese";
import verbConjugationEnglish from "./verb/verbConjugationEnglish";


const generateEnglishWord = (words: Util.SentenceWords, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedEnglishNoun | Util.ConjugatedEnglishVerb => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationEnglish(words, options, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationEnglish(words, options, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationEnglish(words, options, sentenceType);
  }

  throw new Error(createError('conjugations/index.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (words: Util.SentenceWords, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedJapaneseNoun | Util.ConjugatedJapaneseVerb => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationJapanese(words, options, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationJapanese(words, options, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationJapanese(words, options, sentenceType);
  }

  throw new Error(createError('conjugations/index.tsx', 'generateJapaneseWord', 'sentenceType does not exist'));
};

const generateSentences = (words: Util.SentenceWords, options: Util.Options): Util.EnglishJapaneseSentence => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const { onlyTopic, onlySubject, onlyVerb, onlyTopicAndSubject, onlySubjectAndVerb } = generateSentenceTypes(topic, subject, verb);

  if (onlyTopic) {
    return {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_TOPIC, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_TOPIC, LANG_ENGLISH) ]
    };
  };
  if (onlySubject) {
    return {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
    }
  };
  if (onlyVerb) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_VERB, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_VERB, LANG_ENGLISH) ],
    };
  };
  if (onlyTopicAndSubject) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_TOPIC, LANG_JAPANESE), generateJapaneseWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_TOPIC, LANG_ENGLISH), generateEnglishWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
    };  
  };
  if (onlySubjectAndVerb) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE), generateJapaneseWord(words, options, SENTENCE_TYPE_VERB, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_VERB, LANG_ENGLISH), generateEnglishWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
    };  
  };

  throw new Error(createError('conjugations/index.tsx', 'generateSentences', 'sentenceType does not exist'));
};

const generateExercises = (words: Util.SentenceWords, optionsLambda: () => Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => 
  Array.from(Array(numberOfExercises)).map(() => {
    const options = optionsLambda();
    return {
      options,
      ...generateSentences(words, options)  
    }
  })

// const consoleLogExercises = (words: Util.SentenceWords, optionsLambda: () => Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => {
//   const getExercises = generateExercises(words, optionsLambda, numberOfExercises);
//   console.log('exercises', getExercises);
//   return getExercises;
// }

export default generateExercises;
