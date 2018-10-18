import { createError } from '../functions';

import {
  TOPIC,
  PREDICATE,
  TOPIC_PREDICATE,
} from '../constants/optionsConstants';

import generateTopicSentence from './topic';
import generatePredicateSentence from './predicate';
import generateTopicPredicateSentence from './topicPredicate';

const generateSentences = (options: Util.Options, words: Util.Topic | Util.Predicate | Util.TopicPredicate): Util.EnglishJapaneseSentence => {
  console.log('generateSentences', words);
  switch(options.sentenceType) {
    case TOPIC: 
      return generateTopicSentence(options, words as Util.Topic);
    case PREDICATE:
      return generatePredicateSentence(options, words as Util.Predicate);
    case TOPIC_PREDICATE:
      return generateTopicPredicateSentence(options, words as Util.TopicPredicate);
    default: 
      return {
        englishSentence: { type: createError('sentences', 'generateSentences', `${options.sentenceType} does not exist.`) },
        japaneseSentence: { type: createError('sentences', 'generateSentences', `${options.sentenceType} does not exist.`) }
      }
  }
};

// const generateWords = (options: Util.Options, nouns: Util.Word[]): Util.Topic | Util.Predicate | Util.TopicPredicate => {
//   switch(options.sentenceType) {
//     case TOPIC: 
//       return generateTopicWords(nouns);
//     case PREDICATE:
//       return generatePredicateWords(nouns);
//     case TOPIC_PREDICATE:
//       return generateTopicPredicateWords(nouns);
//     default: 
//       return { topic: { english: '', japanese: '', primaryType: '', category: [], meta: {} }, }
//   }
// };

const generateExercises = (words: Util.Topic | Util.Predicate | Util.TopicPredicate, options: Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] =>
  Array.from(Array(numberOfExercises)).map(() => ({
    options,
    ...generateSentences(options, words)
  }))

export default generateExercises