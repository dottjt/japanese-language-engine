import {
  createError,
} from '../functions';

import {
  SENTENCE_TYPE_VERB,
  SENTENCE_TYPE_TOPIC,
  SENTENCE_TYPE_SUBJECT,
} from '../constants/wordConstants';

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_WORD_ARRAY_ELEMENT,
} from "../constants/typeNameConstants";

export const createWord = (array: string[], tag: string): Util.WordArrayElement[] => array.map(word => ({ word, tag, __typename: __TYPENAME_WORD_ARRAY_ELEMENT }));
export const createEmptyWord = (tag: string) => createWord([''], tag);

export const getInitialVerbStem = (word: string): string[] => word.slice(0, -1).split('');
export const getLastLetterVerb = (word: string): string => word.slice(-1);

export const genTSV = ({ topic, subject, verb }: { topic?: Util.Topic, subject?: Util.Subject, verb?: Util.Verb } ): Util.SentenceWords => {
  if (topic && !subject && !verb) {
    return { topic };
  }
  if (topic && subject && !verb) {
    return { topic, predicate: { subject } };
  }
  if (!topic && subject && verb) {
    return { predicate: { subject, verb } };
  }
  if (!topic && !subject && verb) {
    return { predicate: { verb }};
  }
  if (topic && subject && verb) {
    return { topic, predicate: { subject, verb } };
  }

  throw new Error(createError('conjugations/generateWords.tsx', 'genTSV', `Your sentence variation does not exist`));
};

export const returnSentenceParts = (words: Util.SentenceWords): Util.SentenceWordsOrganised => {
  let topic;
  let subject;
  let verb;

  if (words.predicate) {
    if (words.predicate.subject) {
      subject = words.predicate.subject;
    } 
    if (words.predicate.verb) {
      verb = words.predicate.verb;
    }
  };
  if (words.topic) {
    topic = words.topic;
  };

  return {
    topic,
    subject,
    verb,
  };
};

export const filtersentenceType = (words: Util.SentenceWords, sentenceType: string): Util.Noun | Util.Verb => {
  const { topic, subject, verb } = returnSentenceParts(words);

  switch(sentenceType) {
    case SENTENCE_TYPE_TOPIC: return topic as Util.Noun;
    case SENTENCE_TYPE_SUBJECT: return subject as Util.Noun;
    case SENTENCE_TYPE_VERB: return verb as Util.Verb;
  }
  throw new Error(createError('utilConjugation.tsx', 'filtersentenceType', `${sentenceType} does not exist.`));    
};

export const createCommonPermissions = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string) => {
  const onlyTopic = (topic && !subject && !verb);
  const onlySubject = (!topic && subject && !verb);
  const onlyVerb = (!topic && !subject && verb);

  const onlySubjectAndVerb = (!topic && subject && verb);

  const onlyTopicAndSubjectTOPIC = (topic && subject && !verb && sentenceType === SENTENCE_TYPE_TOPIC);
  const onlyTopicAndSubjectSUBJECT = (topic && subject && !verb && sentenceType === SENTENCE_TYPE_SUBJECT);

  return {
    onlyTopic,
    onlySubject,
    onlyVerb,

    onlySubjectAndVerb,

    onlyTopicAndSubjectTOPIC,
    onlyTopicAndSubjectSUBJECT,
  };
};

export const generateSentenceTypes = (topic?: Util.Noun, subject?: Util.Noun, verb?: Util.Verb) => {
  const onlyTopic = (topic && !subject && !verb);
  // const onlySubject = (!topic && subject && !verb);
  const onlyVerb = (!topic && !subject && verb);

  const onlyTopicAndSubject =  (topic && subject && !verb);
  const onlySubjectAndVerb = (!topic && subject && verb);

  return {
    onlyTopic,
    // onlySubject,
    onlyVerb,
    onlyTopicAndSubject,
    onlySubjectAndVerb,
  };
};


