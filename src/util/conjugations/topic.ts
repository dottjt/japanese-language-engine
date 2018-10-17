import {
  capitalise,
  createError
} from '../functions';

import { 
  nounConjugationJapanese,
  nounConjugationEnglish,
} from './noun';

import {
  WA_SOB,
  // WA_SOB_QUESTION,

  TOPIC_IDENTIFIER,

  PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  PRIMARY_TYPE_ADJECTIVE
} from '../constants/constants';

// JAPANESE


const determineTopicConjugationJapanese = (topic: Util.Word, options: Util.Options): string => {
  switch (topic.primaryType) {
    case PRIMARY_TYPE_NOUN:
      return nounConjugationJapanese(topic, options, TOPIC_IDENTIFIER);
    case PRIMARY_TYPE_VERB:
      return createError('conjugations/topic', 'topicConjugation', `topic.primaryType ${PRIMARY_TYPE_VERB} cannot exist for ${WA_SOB}`
      );
    case PRIMARY_TYPE_ADJECTIVE:
      return createError('conjugations/topic', 'topicConjugation', `topic.primaryType ${PRIMARY_TYPE_VERB} cannot exist for ${WA_SOB}`);
    default:
      return createError('conjugations/topic', 'topicConjugation', 'topic.primaryType unknown');
  }
};

export const topicConjugationJapanese = (topic: Util.Word, options: Util.Options): string => {
  const topicWord = determineTopicConjugationJapanese(topic, options);
  return `${topicWord}`;
};


// ENGLISH

const determineTopicConjugationEnglish = (topic: Util.Word, options: Util.Options): string => {
  switch (topic.primaryType) {
    case PRIMARY_TYPE_NOUN:
      return nounConjugationEnglish(topic, options, TOPIC_IDENTIFIER);
    case PRIMARY_TYPE_VERB:
      return createError('conjugations/topic', 'topicConjugation', `topic.primaryType ${PRIMARY_TYPE_VERB} cannot exist for ${WA_SOB}`);
    case PRIMARY_TYPE_ADJECTIVE:
      return createError('conjugations/topic', 'topicConjugation', `topic.primaryType ${PRIMARY_TYPE_VERB} cannot exist for ${WA_SOB}`);
    default:
      return createError('conjugations/topic', 'topicConjugation', 'topic.primaryType unknown');
  }
};

export const topicConjugationEnglish = (topic: Util.Word, options: Util.Options): string => {
  const topicWord = determineTopicConjugationEnglish(topic, options);

  return `${capitalise(topicWord)}`;
};