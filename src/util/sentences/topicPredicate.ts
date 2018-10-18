import {
  topicConjugationJapanese,
  topicConjugationEnglish,
} from "../conjugations/topicConjugation";

import {
  predicateConjugationJapanese,
  predicateConjugationEnglish,
} from "../conjugations/predicateConjugation";

import {
  LANG_ENGLISH,
  LANG_JAPANESE,
} from "../constants/generalConstants";

import {
  TOPIC_PREDICATE,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../constants/optionsConstants";

const determineStatement = (topic: Util.Word, predicate: Util.Word, options: Util.Options, type: string): string => (
  type === LANG_JAPANESE ? (
    // 小林さんは人。
    // 小林さんは人じゃない。
    `${topicConjugationJapanese(topic, options)}${predicateConjugationJapanese(predicate, options)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${topicConjugationEnglish(topic, options)} ${predicateConjugationEnglish(predicate, options)}`
  )
);

const determineTopicPredicate = (words: Util.TopicPredicate, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes("QUESTION") ? ({
    type: TOPIC_PREDICATE,
    question: determineStatement(words.topic, words.predicate, options, type),
    answer: determineStatement(words.topic, words.predicate, options, type),
  }) : ({
    type: TOPIC_PREDICATE,
    statement: determineStatement(words.topic, words.predicate, options, type)  
  })
);

const generateTopicPredicateSentence = (options: Util.Options, words: Util.TopicPredicate): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determineTopicPredicate(words, options, LANG_JAPANESE),
  englishSentence: determineTopicPredicate(words, options, LANG_ENGLISH)
});

export default generateTopicPredicateSentence;
