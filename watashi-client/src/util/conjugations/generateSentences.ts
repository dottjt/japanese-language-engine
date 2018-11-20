import { 
  createError,
  // capitalise,
} from '../functions';

import {
  returnSentenceParts,
  generateSentenceTypes,
} from './utilConjugation';

import {
  SENTENCE_TYPE_VERB,
  SENTENCE_TYPE_SUBJECT,
  SENTENCE_TYPE_TOPIC,
  SENTENCE_TYPE_PREPOSITION_BEFORE,
  SENTENCE_TYPE_PREPOSITION_AFTER,
} from '../constants/wordConstants';

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

const generateEnglishWord = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[]  => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_PREPOSITION_BEFORE: return prepositionConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_PREPOSITION_AFTER: return prepositionConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
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

    const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC);

    const prepositionBeforeTopic = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_PREPOSITION_BEFORE);
    const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC);
    // const prepositionAfterTopic = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_PREPOSITION);

    return {
      japaneseSentence: topicJapanese,
      englishSentence: prepositionBeforeTopic.concat(topicEnglish), // .concat(prepositionAfterTopic),
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };
  };
  if (onlyVerb) {

    const verbJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB);
    const verbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB);
    
    return  {
      japaneseSentence: verbJapanese,
      englishSentence: verbEnglish,
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };
  };
  if (onlyTopicAndSubject) {

    const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC);
    const subjectJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT);
    
    // const prepositionBeforeTopic = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_PREPOSITION_BEFORE);
    const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC);  
    // const prepositionAfterTopic = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_PREPOSITION_AFTER);

    const prepositionBeforeSubject = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_PREPOSITION_BEFORE);
    const subjectEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT);
    // const prepositionAfterSubject = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_PREPOSITION_AFTER);

    return  {
      japaneseSentence: topicJapanese.concat(subjectJapanese),
      englishSentence: topicEnglish.concat(prepositionBeforeSubject).concat(subjectEnglish),
      __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    };  
  };
  if (onlySubjectAndVerb) {

    const subjectJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT);
    const verbJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB);

    const subjectEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT);
    const verbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB);
    
    const prepositionEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_PREPOSITION);

    return {
      japaneseSentence: subjectJapanese.concat(verbJapanese),
      englishSentence: verbEnglish.concat(prepositionEnglish).concat(subjectEnglish),
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

    const sentenceWords = generateWords(nouns, verbs, options);
    const modifierWords = generateWordModifiers(nouns, verbs, modifiers);

    const phrases = generatePhrases(sentenceWords(), modifierWords, sentenceContext, options);

    const englishSentence = phrases.englishSentence.filter(wordArrayElement => wordArrayElement.word !== '');
    const japaneseSentence = phrases.japaneseSentence.filter(wordArrayElement => wordArrayElement.word !== '');

    return {
      options,
      modifiers,
      sentenceContext,
      englishSentence,
      japaneseSentence, 
      __typename: __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
    }  
  })

export default generateSentences;
