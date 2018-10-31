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
  KARA_TS,
  MADE_TS,
  
  S_ADJ,
  S_ADV,
  T_ADJ,
  T_ADV,
  T_NO1,
  T_NO2,
  T_NO3,
  S_NO1,
  S_NO2,
  S_NO3,
} from '../constants/optionsConstants';

import {
  // PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  // PRIMARY_TYPE_ADJECTIVE,

  CATEGORY_HUMAN_NAME,
  CATEGORY_LOCATION,
} from '../constants/wordConstants';

import {
  __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
} from '../constants/typeNameConstants';



import nounConjugationJapanese from "./noun/nounConjugationJapanese";
import nounConjugationEnglish from "./noun/nounConjugationEnglish";

import verbConjugationJapanese from "./verb/verbConjugationJapanese";
import verbConjugationEnglish from "./verb/verbConjugationEnglish";


const generateEnglishWord = (words: Util.SentenceWords, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedEnglishWord | Util.ConjugatedEnglishWord => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationEnglish(words, options, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationEnglish(words, options, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationEnglish(words, options, sentenceType);
  }

  throw new Error(createError('conjugations/generateExercises.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (words: Util.SentenceWords, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedJapaneseWord | Util.ConjugatedJapaneseWord => {
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
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_TOPIC, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };
  };
  if (onlySubject) {
    return {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    }
  };
  if (onlyVerb) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_VERB, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_VERB, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };
  };
  if (onlyTopicAndSubject) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_TOPIC, LANG_JAPANESE), generateJapaneseWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_TOPIC, LANG_ENGLISH), generateEnglishWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };  
  };
  if (onlySubjectAndVerb) {
    return  {
      japaneseSentence: [ generateJapaneseWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE), generateJapaneseWord(words, options, SENTENCE_TYPE_VERB, LANG_JAPANESE) ],
      englishSentence: [ generateEnglishWord(words, options, SENTENCE_TYPE_VERB, LANG_ENGLISH), generateEnglishWord(words, options, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH) ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
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
  const wordPerson = filterSpecifcWord(nouns, 'person');
  const randomHumanName = getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME);
  const randomLocationWord = getRandomWordViaCategory(nouns, CATEGORY_LOCATION);
  const randomVerb = getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB);

  switch(variation) {
    case T:     return () =>   genTSV({ topic: wordPerson,      subject: undefined,          verb: undefined });    // T                                                         
    case WA_TS: return () =>   genTSV({ topic: randomHumanName, subject: wordPerson,         verb: undefined });    // WA_TS
    case MO_TS: return () =>   genTSV({ topic: randomHumanName, subject: wordPerson,         verb: undefined });    // MO_TS
    case GA_TS: return () =>   genTSV({ topic: randomHumanName, subject: wordPerson,         verb: undefined });    // GA_TS
    case V:     return () =>   genTSV({ topic: undefined,       subject: undefined,          verb: randomVerb });   // V
    case WO_SV: return () =>   genTSV({ topic: undefined,       subject: wordPerson,         verb: randomVerb });   // WO_SV
    case NI_SV: return () =>   genTSV({ topic: undefined,       subject: randomLocationWord, verb: randomVerb });   // NI_SV
    case DE_SV: return () =>   genTSV({ topic: undefined,       subject: randomLocationWord, verb: randomVerb });   // DE_SV
    case KARA_TS: return () => genTSV({ topic: undefined,       subject: randomLocationWord, verb: randomVerb });   // KARA_TS
    case MADE_TS: return () => genTSV({ topic: undefined,       subject: randomLocationWord, verb: randomVerb });   // MADE_TS
  }
  throw new Error(createError('conjugations/generateExercises.tsx', 'generateWords', `${variation} does not exist`));
};

const generateWordModifiers = (nouns: Util.Word[], modifiers: string): () => Util.SentenceWords => {
  
  // modifiers
  switch(modifierType) {
    case S_ADJ: return { topicModifier: '', ;
    case S_ADV: return { topicModifier: '', ;
    case T_ADJ: return { topicModifier: '', ;
    case T_ADV: return { topicModifier: '', ;
    case T_NO1: return { topicModifier: '', ;
    case T_NO2: return { topicModifier: '', ;
    case T_NO3: return { topicModifier: '', ;
    case S_NO1: return { topicModifier: '', ;
    case S_NO2: return { topicModifier: '', ;
    case S_NO3: return { topicModifier: '', ;
  }
  throw new Error(createError('conjugations/generateExercises.tsx', 'generateWordModifiers', `${modifierType} does not exist`));
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
