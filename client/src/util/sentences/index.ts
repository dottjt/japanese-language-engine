import { createError } from '../functions';

import { 
  LANG_JAPANESE,
  LANG_ENGLISH,
} from '../constants/generalConstants';

import {
  VERB,
  SUBJECT,
  TOPIC,
} from '../constants/optionsConstants';

import {
  nounConjugationJapanese,
  nounConjugationEnglish,
} from "../conjugations/noun/nounConjugationJapanese";

import {
  verbConjugationJapanese,
  verbConjugationEnglish,
} from "../conjugations/verbConjugation";


const sentenceOptions = (sentence: Util.EnglishJapaneseSentence, options: Util.Options): Util.EnglishJapaneseSentence => {
  if (identifier === PREDICATE || 
    identifier === TOPIC_PREDICATE ||
    identifier === SUBJECT) {
  if (options.variation === WA_NS_QUESTION || 
      options.variation === MO_NS_QUESTION || 
      options.variation === GA_NS_QUESTION) 
    {
      return 'か？';
    } else {
      return '。';
    }
  }    

  if (identifier === TOPIC) {
    return '。';
  }

};

const generateWord = (words: Util.SentenceWords, options: Util.Options, identifier: string, lang: string): string => {
  const nounConjugation = lang === LANG_JAPANESE ? nounConjugationJapanese : nounConjugationJapanese
  const verbConjugation = lang === LANG_JAPANESE ? verbConjugationJapanese : verbConjugationJapanese 

  switch (identifier) {
    case TOPIC:
      return nounConjugation(words, options, identifier);
    case SUBJECT:
      return nounConjugation(words, options, identifier);
    case VERB:
      return verbConjugation(words, options, identifier);
  }
};

const generateSentences = (words: Util.SentenceWords, options: Util.Options): Util.EnglishJapaneseSentence => {
  const { topic, predicate: { subject, verb } } = words as any;

  if (!topic) {
    if (subject && !verb) {
      return  {
        japaneseSentence: sentenceOptions(`${generateWord(words, options, SUBJECT, LANG_JAPANESE)}`, options),
        englishSentence: sentenceOptions(`${generateWord(words, options, SUBJECT, LANG_ENGLISH)}`, options),
      };
    }
    if (!subject && verb) {
      return  {
        japaneseSentence: sentenceOptions(`${generateWord(words, options, VERB, LANG_JAPANESE)}`, options),
        englishSentence: sentenceOptions(`${generateWord(words, options, VERB, LANG_ENGLISH)}`, options),
      };
    }
    if (subject && verb) {
      return  {
        japaneseSentence: sentenceOptions(`${generateWord(words, options, SUBJECT, LANG_JAPANESE)}${generateWord(words, options, VERB, LANG_JAPANESE)}`, options),
        englishSentence: sentenceOptions(`${generateWord(words, options, SUBJECT, LANG_ENGLISH)}${generateWord(words, options, VERB, LANG_ENGLISH)}`, options),
      };
    }
  };
  return  {
    japaneseSentence: sentenceOptions(`${generateWord(words, options, TOPIC, LANG_JAPANESE)}`, options),
    englishSentence: sentenceOptions(`${generateWord(words, options, TOPIC, LANG_ENGLISH)}`, options),
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