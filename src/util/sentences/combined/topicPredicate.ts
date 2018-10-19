import {
  topicConjugation,
} from "../topic";

import {
  predicateConjugation,
} from "./predicate";

import {
  LANG_ENGLISH,
  LANG_JAPANESE,
} from "../../constants/generalConstants";

import {
  TOPIC_PREDICATE,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../../constants/optionsConstants";

const determineStatement = (topic: Util.Word | undefined, subject: Util.Word | undefined, verb: Util.Word | undefined, options: Util.Options, type: string): string => (
  type === LANG_JAPANESE ? (
    // 小林さんは人。
    // 小林さんは人じゃない。                                             // NOTE: This may not work, given verb might not exist so can't guarantee Util.Word
    `${topicConjugation(topic as Util.Word, options, LANG_JAPANESE, TOPIC_PREDICATE)}${predicateConjugation(subject as Util.Word, verb as Util.Word, options, LANG_JAPANESE, TOPIC_PREDICATE)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${topicConjugation(topic as Util.Word, options, LANG_ENGLISH, TOPIC_PREDICATE)} ${predicateConjugation(subject as Util.Word, verb as Util.Word, options, LANG_ENGLISH, TOPIC_PREDICATE)}`
  )
);

const determineTopicPredicate = (words: Util.TopicPredicate, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes("QUESTION") ? ({
    type: TOPIC_PREDICATE,
    question: determineStatement(words.topic, words.subject, words.verb, options, type),
    answer: determineStatement(words.topic, words.subject, words.verb, options, type),
  }) : ({
    type: TOPIC_PREDICATE,
    statement: determineStatement(words.topic, words.subject, words.verb, options, type)  
  })
);

const generateTopicPredicateSentence = (options: Util.Options, words: Util.TopicPredicate): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determineTopicPredicate(words, options, LANG_JAPANESE),
  englishSentence: determineTopicPredicate(words, options, LANG_ENGLISH)
});

export default generateTopicPredicateSentence;