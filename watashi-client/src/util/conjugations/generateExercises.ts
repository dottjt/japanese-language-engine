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

  NA,

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

} from '../constants/optionsConstants';

import {
  T_ADJ,
  T_ADV,

  S_ADJ,
  S_ADV,

  T_NO1,
  T_NO2,
  T_NO3,
  S_NO1,
  S_NO2,
  S_NO3,

  TOPIC_NO,
  SUBJECT_NO,
  TOPIC_ADJECTIVE,
  TOPIC_ADVERB,
  SUBJECT_ADJECTIVE,
  SUBJECT_ADVERB,
} from '../constants/modifiersConstants';

import {
  // PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  // PRIMARY_TYPE_ADJECTIVE,

  CATEGORY_HUMAN_NAME,
  CATEGORY_LOCATION,
} from '../constants/wordConstants';

import {
  __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
  __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
} from '../constants/typeNameConstants';



import nounConjugationJapanese from './noun/nounConjugationJapanese';
import nounConjugationEnglish from './noun/nounConjugationEnglish';

import verbConjugationJapanese from './verb/verbConjugationJapanese';
import verbConjugationEnglish from './verb/verbConjugationEnglish';


const generateEnglishWord = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedEnglishWord | Util.ConjugatedEnglishWord => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationEnglish(words, modifiers, options, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationEnglish(words, modifiers, options, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationEnglish(words, modifiers, options, sentenceType);
  }

  throw new Error(createError('conjugations/generateExercises.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceType: string, lang: string): Util.ConjugatedJapaneseWord | Util.ConjugatedJapaneseWord => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationJapanese(words, modifiers, options, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationJapanese(words, modifiers, options, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationJapanese(words, modifiers, options, sentenceType);
  }

  throw new Error(createError('conjugations/generateExercises.tsx', 'generateJapaneseWord', 'sentenceType does not exist'));
};

const generateSentences = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options): Util.EnglishJapaneseSentence => {
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
    case NA:    return () =>   genTSV({ topic: undefined,       subject: undefined,          verb: undefined })
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

const createWordModifier = (type: string, word: Util.Word): Util.WordModifier => ({ type, word });

const generateWordModifiers = (nouns: Util.Word[], modifiers: Util.Modifiers): Util.SentenceWordModifiers => {

  const modifiersKeys = Object.keys(modifiers);
  const sentenceWordModifiers: Util.SentenceWordModifiers = {
    tNo: {
      no1: undefined,
      no2: undefined,
      no3: undefined,
    },
    sNo: {
      no1: undefined,
      no2: undefined,
      no3: undefined,
    },

    tAdj: undefined,
    tAdv: undefined,

    sAdj: undefined,
    sAdv: undefined,
  };

  const word = filterSpecifcWord(nouns, 'person');

  modifiersKeys.forEach((modifierField: string): void => {
    if (modifiers[modifierField] !== undefined) {
      if (modifierField === TOPIC_NO) {
        switch(modifiers[modifierField]) { 
          case T_NO1: sentenceWordModifiers.tNo = { no1: createWordModifier(T_NO1, word) }; return;
          case T_NO2: sentenceWordModifiers.tNo = { no1: createWordModifier(T_NO2, word), no2: createWordModifier(T_NO2, word) }; return;
          case T_NO3: sentenceWordModifiers.tNo = { no1: createWordModifier(T_NO3, word), no2: createWordModifier(T_NO3, word), no3: createWordModifier(T_NO3, word) }; return;
        }
      }
      if (modifierField === SUBJECT_NO) {
        switch(modifiers[modifierField]) {
          case S_NO1: sentenceWordModifiers.sNo = { no1: createWordModifier(T_NO1, word) }; return;
          case S_NO2: sentenceWordModifiers.sNo = { no1: createWordModifier(T_NO2, word), no2: createWordModifier(T_NO2, word) }; return;
          case S_NO3: sentenceWordModifiers.sNo = { no1: createWordModifier(T_NO3, word), no2: createWordModifier(T_NO3, word), no3: createWordModifier(T_NO3, word) }; return;
        }
      }
      if (modifierField === TOPIC_ADJECTIVE) {
        sentenceWordModifiers.tAdj = createWordModifier(T_ADJ, word); return;
      }
      if (modifierField === TOPIC_ADVERB) {
        sentenceWordModifiers.tAdv = createWordModifier(T_ADV, word); return;
      }
      if (modifierField === SUBJECT_ADJECTIVE) {
        sentenceWordModifiers.sAdj = createWordModifier(S_ADJ, word); return;
      }
      if (modifierField === SUBJECT_ADVERB) {
        sentenceWordModifiers.sAdv = createWordModifier(S_ADV, word); return;
      }
    }
  });
  return sentenceWordModifiers;
};

const generateExercises = (words: Util.Word[], modifiersLambda: () => Util.Modifiers, optionsLambda: () => Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => 
  Array.from(Array(numberOfExercises)).map(() => {
    const options = optionsLambda();
    const modifiers = modifiersLambda();
    
    const variationWords = generateWords(words, options.variation);
    const modifierWords = generateWordModifiers(words, modifiers);

    const { englishSentence, japaneseSentence } = generateSentences(variationWords(), modifierWords, options);

    return {
      options,
      modifiers,
      englishSentence, 
      japaneseSentence,
      __typename: __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE
    }  
  })

export default generateExercises;
