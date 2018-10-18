import {
  topicConjugationJapanese,
  topicConjugationEnglish,
} from "../conjugations/topicConjugation";

import {
  LANG_ENGLISH,
  LANG_JAPANESE,
} from "../constants/generalConstants";

import {
  TOPIC,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../constants/optionsConstants";

const determineStatement = (topic: Util.Word, options: Util.Options, type: string): string => (
  type === LANG_JAPANESE ? (
    // 人だ。
    // 人じゃない。
    `${topicConjugationJapanese(topic, options)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${topicConjugationEnglish(topic, options)}`
  )
);

const determineTopic = (words: Util.Topic, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes("QUESTION") ? ({
    type: TOPIC,
    question: determineStatement(words.topic, options, type),
    answer: determineStatement(words.topic, options, type),
  }) : ({
    type: TOPIC,
    statement: determineStatement(words.topic, options, type)  
  })
);

const generateTopicSentence = (options: Util.Options, words: Util.Topic): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determineTopic(words, options, LANG_JAPANESE),
  englishSentence: determineTopic(words, options, LANG_ENGLISH)
});

export default generateTopicSentence;
