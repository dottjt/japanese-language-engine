import { 
  createError,
  // capitalise,
} from '../functions';

import {
  returnSentenceParts,
  generateSentenceTypes,
} from './utilConjugation';

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
  SENTENCE_TYPE_PREPOSITION,
} from '../constants/optionsConstants';

import {
  __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
  __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
} from '../constants/typeNameConstants';

import nounConjugationJapanese from './noun/nounConjugationJapanese';
import nounConjugationEnglish from './noun/nounConjugationEnglish';

import verbConjugationJapanese from './verb/verbConjugationJapanese';
import verbConjugationEnglish from './verb/verbConjugationEnglish';
import prepositionConjugationEnglish from './preposition/prepositionConjugationEnglish';

import generateWordModifiers from './generateWordModifiers';
import generateWords from './generateWords';

const generateEnglishWord = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string, lang: string): Util.ConjugatedEnglishWord => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_PREPOSITION: return prepositionConjugationEnglish(sentenceWords, modifiers, options, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string, lang: string): Util.ConjugatedJapaneseWord | Util.ConjugatedJapaneseWord => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateJapaneseWord', 'sentenceType does not exist'));
};

const generatePhrases = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, sentenceContext: Util.SentenceContext, options: Util.Options): Util.EnglishJapaneseSentence => {
  const { topic, subject, verb } = returnSentenceParts(sentenceWords);
  const { onlyTopic, onlyVerb, onlyTopicAndSubject, onlySubjectAndVerb } = generateSentenceTypes(topic, subject, verb);
  
  if (onlyTopic) {

    const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, LANG_JAPANESE);
    const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, LANG_ENGLISH)
  
    return {
      japaneseSentence: [ topicJapanese ],
      englishSentence: [ topicEnglish ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };
  };
  if (onlyVerb) {

    const verbJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB, LANG_JAPANESE);
    const verbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB, LANG_ENGLISH)

    return  {
      japaneseSentence: [ verbJapanese ],
      englishSentence: [ verbEnglish ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };
  };
  if (onlyTopicAndSubject) {

    const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, LANG_JAPANESE);
    const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, LANG_ENGLISH);

    const subjectJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE);
    const subjectEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH);

    return  {
      japaneseSentence: [ topicJapanese, subjectJapanese ],
      englishSentence: [ topicEnglish, subjectEnglish ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };  
  };
  if (onlySubjectAndVerb) {

    const subjectJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT, LANG_JAPANESE);
    const subjectEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT, LANG_ENGLISH);

    const verbJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB, LANG_JAPANESE);
    const verbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB, LANG_ENGLISH);

    const prepositionEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_PREPOSITION, LANG_ENGLISH);

    return  {
      japaneseSentence: [ subjectJapanese, verbJapanese ],
      englishSentence: [ verbEnglish, prepositionEnglish, subjectEnglish ],
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };  
  };
  throw new Error(createError('conjugations/generateSentences.tsx', 'generateSentences', 'sentenceType does not exist'));
};

const generateSentences = (nouns: Util.Noun[], verbs: Util.Verb[], modifiersLambda: () => Util.Modifiers, optionsLambda: () => Util.Options, sentenceContextLambda: () => Util.SentenceContext, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => 
  Array.from(Array(numberOfExercises)).map(() => {

    const options = optionsLambda();
    const modifiers = modifiersLambda();
    const sentenceContext = sentenceContextLambda();

    console.log(sentenceContext);

    const sentenceWords = generateWords(nouns, verbs, options);
    const modifierWords = generateWordModifiers(nouns, verbs, modifiers);

    const { englishSentence, japaneseSentence } = generatePhrases(sentenceWords(), modifierWords, sentenceContext, options);

    return {
      options,
      modifiers,
      englishSentence, 
      japaneseSentence, 
      __typename: __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
    }  
  })

export default generateSentences;
