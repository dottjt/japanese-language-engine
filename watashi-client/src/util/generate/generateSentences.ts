import { 
  createError,
  // capitalise,
} from '../functions';

import {
  createEmptyWord,
  returnSentenceParts,
  generateSentenceTypes,
} from '../conjugations/utilConjugation';

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
  uTop,
  top,
  adjTop,

  uTop_uSub,
  uTop_Sub,
  uTop_adjSub,
  top_Sub,
  top_adjSub,

  verb,
  verbAdv,
  verb_Sub,

  HAS_QUESTION,
} from '../constants/optionsConstants';

import {
  __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
  __TYPENAME_ENGLISH_JAPANESE_OPTIONS_SENTENCE,
} from '../constants/typeNameConstants';

import nounConjugationJapanese from '../conjugations/noun/nounConjugationJapanese';
import verbConjugationJapanese from '../conjugations/verb/verbConjugationJapanese';

import nounConjugationEnglish from '../conjugations/noun/nounConjugationEnglish';
import prepositionConjugationEnglish from '../conjugations/preposition/prepositionConjugationEnglish';

import verbConjugationEnglish from '../conjugations/verb/verbConjugationEnglish';
import verbConjugationHelpingEnglish from '../conjugations/verb/verbConjugationHelpingEnglish';
import adverbConjugationEnglish from '../conjugations/adverb/adverbConjugationEnglish';
import { adjectiveConjugationIndefiniteArticleEnglish } from '../conjugations/adjective/adjectiveConjugationEnglish';

// import generateWordModifiers from './generateWordModifiers';
import generateWords from './generateWords';

const generateEnglishWord = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string, additionalContext: string): Util.WordArrayElement[]  => {
  switch (sentenceType) {
    case SENTENCE_TYPE_VERB: return verbConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType, additionalContext);
    case SENTENCE_TYPE_VERB_HELPING: return verbConjugationHelpingEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_ADVERB: return adverbConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE: return adjectiveConjugationIndefiniteArticleEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);

    case SENTENCE_TYPE_TOPIC: return nounConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_PREPOSITION: return prepositionConjugationEnglish(sentenceWords, modifiers, options, sentenceContext, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateEnglishWord', 'sentenceType does not exist'));
};

const generateJapaneseWord = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string, additionalContext: string): Util.WordArrayElement[] => {
  switch (sentenceType) {
    case SENTENCE_TYPE_VERB: return verbConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_TOPIC: return nounConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
    case SENTENCE_TYPE_SUBJECT: return nounConjugationJapanese(sentenceWords, modifiers, options, sentenceContext, sentenceType);
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'generateJapaneseWord', 'sentenceType does not exist'));
};

export const generatePhrases = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, sentenceContext: Util.SentenceContext, options: Util.Options): Util.EnglishJapaneseSentence => {
  const { topic, subject, verb } = returnSentenceParts(sentenceWords);
  const { onlyTopic, onlyVerb, onlyTopicAndSubject, onlySubjectAndVerb } = generateSentenceTypes(topic, subject, verb);
  const isQuestion = options.selectedQuestion === HAS_QUESTION;

  if (onlyTopic) {

    // NOTE: We can use the specifier to determine ownership. 
    
    // possessive
    // my, his,

    // CAN
    // indefinite article. - a - the 
    // demonstrative. - this, that, these, those

    // CANNOT
    // descriptive // good. // maybe?
    // quantitative. // maybe? 
    // interrogative. // which, what, whose
    // distributive. // each, every, either, neither, any
    // So, I can make separate categories for it. Or I can just say that it depends on the theme.

    // ''. - the. - a. - my. - your. - his. - their. - this.
    if (options.selectedVariation === uTop) {
      const nothingJapanese = createEmptyWord('EMPTY WORD')

      const adjectiveIndefiniteArticleEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE, "NA");    
      return {
        japaneseSentence: nothingJapanese,
        englishSentence: adjectiveIndefiniteArticleEnglish,
        __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      };
    };

    // apple. - the apple. - an apple.
    if (options.selectedVariation === top) {
      const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, "NA");

      const adjectiveIndefiniteArticleEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE, "NA");    
      const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, "NA");
      
      return {
        japaneseSentence: topicJapanese,
        englishSentence: adjectiveIndefiniteArticleEnglish.concat(topicEnglish),
        __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      };
    };

    // tasty apple. - the tasty apple. - a tasty apple.
    if (options.selectedVariation === adjTop) {
      const adjectiveIndefiniteArticleEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE, "NA");    
      // const adjectiveEnglish = 
      const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, "NA");
      
      const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, "NA");

      return {
        japaneseSentence: topicJapanese,
        englishSentence: adjectiveIndefiniteArticleEnglish.concat(topicEnglish),
        __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      };

    };

    // if (!isQuestion) {
    //   return {
    //     japaneseSentence: topicJapanese, 
    //     englishSentence: topicEnglish,
    //     __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
    //   };
    // } else {
      // return {
      //   japaneseSentence: topicJapanese,
      //   englishSentence: topicEnglish,
      //   __typename: __TYPENAME_ENGLISH_JAPANESE_SENTENCE,
      // };
    // }
  };
  if (onlyVerb) {
    verb
    verbAdv
    


    const verbJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB, "NA");

    const helpingVerbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB_HELPING, "NA");    
    const adverbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADVERB, "NA");    
    const verbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB, "NA");
    
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

    uTop_uSub
    uTop_Sub
    uTop_adjSub
    top_Sub
    top_adjSub

    const topicJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, "NA");
    const subjectJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT, "NA");
    
    const topicEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_TOPIC, "NA");  
    const helpingVerbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB_HELPING, "NA");    
    const adverbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADVERB, "NA");    
    const adjectiveIndefiniteArticleEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE, "NA");    
    const subjectEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT, "NA");

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
    verb_Sub

    const verbJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB, "NA");
    const subjectJapanese = generateJapaneseWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT, "NA");

    const verbEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_VERB, "NA");

    const subjectEnglish = generateEnglishWord(sentenceWords, modifiers, options, sentenceContext, SENTENCE_TYPE_SUBJECT, "NA");
    
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

const generateSentences = (nouns: Util.Noun[], verbs: Util.Verb[], adjectives: Util.Adjective[], modifiersLambda: () => Util.Modifiers, optionsLambda: () => Util.Options, sentenceContextLambda: () => Util.SentenceContext, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] => 
  Array.from(Array(numberOfExercises)).map(() => {

    const options = optionsLambda();
    const modifiers = modifiersLambda();
    const sentenceContext = sentenceContextLambda();

    const { sentenceWords, sentenceModifiers } = generateWords(nouns, verbs, adjectives, options, modifiers);

    const phrases = generatePhrases(sentenceWords(), sentenceModifiers(), sentenceContext, options);

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
