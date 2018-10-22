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

// const sentenceOptions = (sentence: string, options: Util.Options, lang: string): string => {
//   const japaneseQuestionEnding = options.politeness !== POLITENESS_CASUAL ? 'か？' : '？';
//   const questionEnding = lang === LANG_JAPANESE ? japaneseQuestionEnding : '?';
//   const normalEnding = lang === LANG_JAPANESE ? '。' : '.';

//   if (options.question === HAS_QUESTION) {
//     if (lang === LANG_ENGLISH) {
//       return capitalise(`${sentence.trim()}${questionEnding}`);
//     } 
//     return `${sentence.trim()}${questionEnding}`;
//   } else {
//     if (lang === LANG_ENGLISH) {
//       return capitalise(`${sentence.trim()}${normalEnding}`);
//     } 
//     return `${sentence.trim()}${normalEnding}`;
//   }
// };

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
  const { onlyTopic, /* onlySubject, onlyVerb, onlyTopicAndSubject, onlySubjectAndVerb */ } = generateSentenceTypes(topic, subject, verb);

  if (onlyTopic) {
    return {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_TOPIC, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_TOPIC, LANG_ENGLISH) ]
    };
  };
  // if (onlySubject) {
  //   return  {
  //     japaneseSentence: sentenceOptions(`${generateWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE)}`, options, LANG_JAPANESE),
  //     englishSentence: sentenceOptions(`${generateWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH)}`, options, LANG_ENGLISH),
  //   };
  // };
  // if (onlyVerb) {
  //   return  {
  //     japaneseSentence: sentenceOptions(`${generateWord(words, options, SENTENCE_TYPE_VERB, LANG_JAPANESE)}`, options, LANG_JAPANESE),
  //     englishSentence: sentenceOptions(`${generateWord(words, options, SENTENCE_TYPE_VERB, LANG_ENGLISH)}`, options, LANG_ENGLISH),
  //   };
  // };
  // if (onlyTopicAndSubject) {
  //   return  {
  //     japaneseSentence: sentenceOptions(`${generateWord(words, options, SENTENCE_TYPE_TOPIC, LANG_JAPANESE)}${generateWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE)}`, options, LANG_JAPANESE),
  //     englishSentence: sentenceOptions(`${generateWord(words, options, SENTENCE_TYPE_TOPIC, LANG_ENGLISH)} ${generateWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH)}`, options, LANG_ENGLISH),
  //   };  
  // };
  // if (onlySubjectAndVerb) {
  //   return  {
  //     japaneseSentence: sentenceOptions(`${generateWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE)}${generateWord(words, options, SENTENCE_TYPE_VERB, LANG_JAPANESE)}`, options, LANG_JAPANESE),
  //     englishSentence: sentenceOptions(`${generateWord(words, options, SENTENCE_TYPE_VERB, LANG_ENGLISH)} ${generateWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH)}`, options, LANG_ENGLISH),
  //   };  
  // };

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

const consoleLogExercises = (words: Util.SentenceWords, optionsLambda: () => Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => {
  const getExercises = generateExercises(words, optionsLambda, numberOfExercises);
  console.log('exercises', getExercises);
  return getExercises;
}

export default consoleLogExercises;