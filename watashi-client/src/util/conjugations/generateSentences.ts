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
  SENTENCE_TYPE_VERB_HELPING,
  SENTENCE_TYPE_ADVERB,
  SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE,

  SENTENCE_TYPE_SUBJECT,
  SENTENCE_TYPE_TOPIC,
  SENTENCE_TYPE_PREPOSITION,
} from '../constants/wordConstants';

import {
  HAS_QUESTION,
} from '../constants/optionsConstants';

import {
  __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
  __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
} from '../constants/typeNameConstants';

import nounConjugationJapanese from './noun/nounConjugationJapanese';
import verbConjugationJapanese from './verb/verbConjugationJapanese';

import nounConjugationEnglish from './noun/nounConjugationEnglish';
import prepositionConjugationEnglish from './preposition/prepositionConjugationEnglish';

import verbConjugationEnglish from './verb/verbConjugationEnglish';
import verbConjugationHelpingEnglish from './verb/verbConjugationHelpingEnglish';
import adverbConjugationEnglish from './adverb/adverbConjugationEnglish';
import { adjectiveConjugationIndefiniteArticleEnglish } from './adjective/adjectiveConjugationEnglish';

// import generateWordModifiers from './generateWordModifiers';
import generateWords from './generateWords';

const generateEnglishWord = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[]  => {
  switch (sentenceType) {
    case SENTENCE_TYPE_VERB: return verbConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_VERB_HELPING: return verbConjugationHelpingEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_ADVERB: return adverbConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE: return adjectiveConjugationIndefiniteArticleEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);

    case SENTENCE_TYPE_TOPIC: return nounConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_PREPOSITION: return prepositionConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  switch (sentenceType) {
    case SENTENCE_TYPE_TOPIC: return nounConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_VERB: return verbConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateJapaneseWord', 'sentenceType does not exist'));
};

const generatePhrases = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, sentenceContext: Util.SentenceContext, options: Util.Options): Util.EnglishJapaneseSentence => {
  const { topic, subject, verb } = returnSentenceParts(sentenceWords);
  const { onlyTopic, onlyVerb, onlyTopicAndSubject, onlySubjectAndVerb } = generateSentenceTypes(topic, subject, verb);
  const isQuestion = options.selectedQuestion === HAS_QUESTION;

  if (onlyTopic) {
    // NOTE: May need different types of sentences, depending if it's a question or not. :)
    // NOTE: May need sentenceContext for who is being talked to. // you, yourself. this is different to eventPOV. 
    const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC);
    
    const helpingVerbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB_HELPING);    
    const adverbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADVERB);    
    const adjectiveIndefiniteArticleEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE);    
    const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC);

    if (!isQuestion) {
      return {
        japaneseSentence: topicJapanese, 
        englishSentence: helpingVerbEnglish.concat(adverbEnglish).concat(adjectiveIndefiniteArticleEnglish).concat(topicEnglish),
        __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      };
    } else {
      return {
        japaneseSentence: topicJapanese,
        englishSentence: helpingVerbEnglish.concat(adverbEnglish).concat(adjectiveIndefiniteArticleEnglish).concat(topicEnglish),
        __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      };
    }
  };
  if (onlyVerb) {
    const verbJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB);

    const helpingVerbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB_HELPING);    
    const adverbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADVERB);    
    const verbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB);
    
    if (!isQuestion) {
      return  {
        japaneseSentence: verbJapanese,
        englishSentence: helpingVerbEnglish.concat(adverbEnglish).concat(verbEnglish),
        __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      };
    }
    throw new Error(`Question sentence for onlyVerb not created yet.`) 
  };

  if (onlyTopicAndSubject) {
    const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC);
    const subjectJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT);
    
    const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC);  
    const helpingVerbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB_HELPING);    
    const adverbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADVERB);    
    const adjectiveIndefiniteArticleEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE);    
    const subjectEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT);

    if (!isQuestion) {
      return  {
        japaneseSentence: topicJapanese.concat(subjectJapanese),
        englishSentence: topicEnglish.concat(helpingVerbEnglish).concat(adverbEnglish).concat(adjectiveIndefiniteArticleEnglish).concat(subjectEnglish),
        __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      };  
    }
    throw new Error(`Question sentence for onlyTopicAndSubject not created yet.`);
  };
  if (onlySubjectAndVerb) {
    const verbJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB);
    const subjectJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT);

    const verbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB);

    const subjectEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT);
    
    if (!isQuestion) {
      return {
        japaneseSentence: subjectJapanese.concat(verbJapanese),
        englishSentence: verbEnglish.concat(subjectEnglish),
        __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      };
    };
    throw new Error(`Question sentence for onlySubjectAndVerb not created yet.`);

  };
  throw new Error(createError('conjugations/generateSentences.tsx', 'generateSentences', 'sentenceType does not exist'));
};

const generateSentences = (nouns: Util.Noun[], verbs: Util.Verb[], modifiersLambda: () => Util.Modifiers, optionsLambda: () => Util.Options, sentenceContextLambda: () => Util.SentenceContext, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => 
  Array.from(Array(numberOfExercises)).map(() => {

    const options = optionsLambda();
    const modifiers = modifiersLambda();
    const sentenceContext = sentenceContextLambda();

    const { sentenceWords, modifierWords } = generateWords(nouns, verbs, options);

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
