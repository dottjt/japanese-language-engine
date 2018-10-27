import { 
  createError,
  // capitalise,
} from '../functions';

import {
  returnSentenceParts,
  generateSentenceTypes,
} from '../utilConjugation';

import { 
  filterSpecifcWord,
  getRandomWordViaCategory,
  getRandomWordViaPrimaryType,
} from '../filters';

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

  T,
  WA_TS,
  MO_TS,
  GA_TS,
  V,
  WO_SV,
  NI_SV,
  DE_SV,  
} from '../constants/optionsConstants';

import {
//   // PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
//   // PRIMARY_TYPE_ADJECTIVE,

  CATEGORY_HUMAN_NAME,
  CATEGORY_LOCATION,
} from '../constants/wordConstants';


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

  throw new Error(createError('conjugations/generateExercises.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (words: Util.SentenceWords, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedJapaneseNoun | Util.ConjugatedJapaneseVerb => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationJapanese(words, options, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationJapanese(words, options, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationJapanese(words, options, sentenceType);
  }

  throw new Error(createError('conjugations/generateExercises.tsx', 'generateJapaneseWord', 'sentenceType does not exist'));
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
  throw new Error(createError('conjugations/generateExercises.tsx', 'generateSentences', 'sentenceType does not exist'));
};

const genTSV = ({ topic, subject, verb }: { topic?: Util.Topic, subject?: Util.Subject, verb?: Util.Verb } ): Util.SentenceWords => {
  if (topic && !subject && !verb) {
    return { topic };
  }
  if (topic && subject && !verb) {
    return { topic, predicate: { subject } };
  }
  if (!topic && subject && verb) {
    return { predicate: { subject, verb } };
  }
  if (!topic && !subject && verb) {
    return { predicate: { verb }};
  }
  if (topic && subject && verb) {
    return { topic, predicate: { subject, verb } };
  }

  throw new Error(createError('conjugations/generateExercises.tsx', 'genTSV', `Your sentence variation does not exist`));
} 


const generateWords = (nouns: Util.Word[], variation: string): () => Util.SentenceWords => {
  switch(variation) {
    case T:     return () => genTSV({ topic: filterSpecifcWord(nouns, 'person'), subject: undefined, verb: undefined });                                                                 // T
    case WA_TS: return () => genTSV({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), subject: filterSpecifcWord(nouns, 'person'), verb: undefined });                      // WA_TS
    case MO_TS: return () => genTSV({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), subject: filterSpecifcWord(nouns, 'person'), verb: undefined });                      // MO_TS
    case GA_TS: return () => genTSV({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), subject: filterSpecifcWord(nouns, 'person'), verb: undefined });                      // GA_TS
    case V:     return () => genTSV({ topic: undefined, subject: undefined, verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB) });                                              // V
    case WO_SV: return () => genTSV({ topic: undefined, subject: filterSpecifcWord(nouns, 'person'), verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB) });                     // WO_SV
    case NI_SV: return () => genTSV({ topic: undefined, subject: getRandomWordViaCategory(nouns, CATEGORY_LOCATION), verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB) });     // NI_SV
    case DE_SV: return () => genTSV({ topic: undefined, subject: getRandomWordViaCategory(nouns, CATEGORY_LOCATION), verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB)});      // DE_SV
  }
  throw new Error(createError('conjugations/generateExercises.tsx', 'generateWords', `${variation} does not exist`));
};


const generateExercises = (words: Util.Word[], optionsLambda: () => Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => 
  Array.from(Array(numberOfExercises)).map(() => {

    const options = optionsLambda();
    const variationWords = generateWords(words, options.variation);
    return {
      options,
      ...generateSentences(variationWords(), options)  
    }
  })

export default generateExercises;
