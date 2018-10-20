import { 
  // createError,
  returnSentenceParts,
} from '../functions';

import { 
  LANG_JAPANESE,
  LANG_ENGLISH,
} from '../constants/generalConstants';

import {
  VERB,
  SUBJECT,
  TOPIC,
} from '../constants/optionsConstants';

import nounConjugationJapanese from "./noun/nounConjugationJapanese";
import nounConjugationEnglish from "./noun/nounConjugationEnglish";

import verbConjugationJapanese from "./verb/verbConjugationJapanese";
import verbConjugationEnglish from "./verb/verbConjugationEnglish";


const sentenceOptions = (sentence: Util.Sentence, options: Util.Options, lang: string): Util.Sentence => {
  const questionEnding = lang === LANG_JAPANESE ? 'か？' : '?';
  const normalEnding = lang === LANG_JAPANESE ? '。' : '.';

  if (options.question) {
    return { ...sentence, sentence: `${sentence}${questionEnding}` }
  } else {
    return { ...sentence, sentence: `${sentence}${normalEnding}` }
  }
};

const generateWord = (words: Util.SentenceWords, options: Util.Options, wordType: string, lang: string): string => {
  const nounConjugation = lang === LANG_JAPANESE ? nounConjugationJapanese : nounConjugationEnglish;
  const verbConjugation = lang === LANG_JAPANESE ? verbConjugationJapanese : verbConjugationEnglish; 

  switch (wordType) {
    case TOPIC: return nounConjugation(words, options, wordType);
    case SUBJECT: return nounConjugation(words, options, wordType);
    default: return verbConjugation(words, options, wordType);
  }
};

const generateSentences = (words: Util.SentenceWords, options: Util.Options): Util.EnglishJapaneseSentence => {
  const { topic, subject, verb } = returnSentenceParts(words);

  if (!topic) {
    if (subject && !verb) {
      return  {
        japaneseSentence: sentenceOptions(`${generateWord(words, options, SUBJECT, LANG_JAPANESE)}`, options, LANG_JAPANESE),
        englishSentence: sentenceOptions(`${generateWord(words, options, SUBJECT, LANG_ENGLISH)}`, options, LANG_ENGLISH),
      };
    }
    if (!subject && verb) {
      return  {
        japaneseSentence: sentenceOptions(`${generateWord(words, options, VERB, LANG_JAPANESE)}`, options, LANG_JAPANESE),
        englishSentence: sentenceOptions(`${generateWord(words, options, VERB, LANG_ENGLISH)}`, options, LANG_ENGLISH),
      };
    }
    if (subject && verb) {
      return  {
        japaneseSentence: sentenceOptions(`${generateWord(words, options, SUBJECT, LANG_JAPANESE)}${generateWord(words, options, VERB, LANG_JAPANESE)}`, options, LANG_JAPANESE),
        englishSentence: sentenceOptions(`${generateWord(words, options, VERB, LANG_ENGLISH)}${generateWord(words, options, SUBJECT, LANG_ENGLISH)}`, options, LANG_ENGLISH),
      };
    }
  };


  // topic only
  return  {
    japaneseSentence: sentenceOptions(`${generateWord(words, options, TOPIC, LANG_JAPANESE)}`, options, LANG_JAPANESE),
    englishSentence: sentenceOptions(`${generateWord(words, options, TOPIC, LANG_ENGLISH)}`, options, LANG_ENGLISH),
  };
};

const generateExercises = (words: Util.SentenceWords, optionsLambda: () => Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] =>
  Array.from(Array(numberOfExercises)).map(() => {
    const options = optionsLambda();
    return {
      options,
      ...generateSentences(words, options)  
    }
  })

export default generateExercises;