import {
  createError,
} from '../functions';

import {
  LANG_ENGLISH,
  LANG_JAPANESE,
} from "../constants/generalConstants";

import {
  PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  PRIMARY_TYPE_ADJECTIVE,
} from '../constants/wordConstants';

import { 
  nounConjugationJapanese,
  nounConjugationEnglish,
} from '../conjugations/nounConjugation';

import {
  TOPIC,
} from '../constants/optionsConstants';

// JAPANESE

const determineTopicConjugation = (topic: Util.Word, options: Util.Options, type: string): string => {
  if (type === LANG_JAPANESE) {
    switch (topic.primaryType) {
      case PRIMARY_TYPE_NOUN:
        return nounConjugationJapanese(topic, options, TOPIC);
      case PRIMARY_TYPE_VERB:
        return createError('conjugations/topic', 'topicConjugation', `topic.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      case PRIMARY_TYPE_ADJECTIVE:
        return createError('conjugations/topic', 'topicConjugation', `topic.primaryType ${PRIMARY_TYPE_ADJECTIVE} cannot exist`);
      default:
        return createError('conjugations/topic', 'topicConjugation', `${topic.primaryType} unknown`);
    }
  } else {
    switch (topic.primaryType) {
      case PRIMARY_TYPE_NOUN:
        return nounConjugationEnglish(topic, options, TOPIC);
      case PRIMARY_TYPE_VERB:
        return createError('conjugations/topic', 'topicConjugation', `topic.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      case PRIMARY_TYPE_ADJECTIVE:
        return createError('conjugations/topic', 'topicConjugation', `topic.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      default:
        return createError('conjugations/topic', 'topicConjugation', 'topic.primaryType unknown');
    }
  }
};

export const topicConjugation = (topic: Util.Word, options: Util.Options, type: string): string =>
  type === LANG_JAPANESE ? (
    // 人だ。
    // 人じゃない。
    `${determineTopicConjugation(topic, options, LANG_JAPANESE)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${determineTopicConjugation(topic, options, LANG_ENGLISH)}`
  )

const determineTopic = (words: Util.Topic, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes("QUESTION") ? ({
    type: TOPIC,
    question: topicConjugation(words.topic, options, type),
    answer: topicConjugation(words.topic, options, type),
  }) : ({
    type: TOPIC,
    statement: topicConjugation(words.topic, options, type)  
  })
);

const generateTopicSentence = (options: Util.Options, words: Util.Topic): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determineTopic(words, options, LANG_JAPANESE),
  englishSentence: determineTopic(words, options, LANG_ENGLISH)
});

export default generateTopicSentence;
