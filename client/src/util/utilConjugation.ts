import {
  // SENTENCE_TYPE_VERB,
  SENTENCE_TYPE_TOPIC,
  SENTENCE_TYPE_SUBJECT,
} from './constants/optionsConstants';

import {
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  __TYPENAME_WORD_ELEMENT,
} from "./constants/typeNameConstants";

export const createWord = (wordArray: string[], wordType: string): Util.WordElement => ({ wordArray, wordType, __typename:__TYPENAME_WORD_ELEMENT });
export const getInitialVerbStem = (word: string): string[] => word.slice(0, -1).split('');
export const getLastLetterVerb = (word: string): string => word.slice(-1);

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

export const filtersentenceType = (words: Util.SentenceWords, sentenceType: string): Util.Word => {
  const { topic, subject, verb } = returnSentenceParts(words);

  switch(sentenceType) {
    case SENTENCE_TYPE_TOPIC: return topic as Util.Word;
    case SENTENCE_TYPE_SUBJECT: return subject as Util.Word;
    default: return verb as Util.Word;
  }
};

export const createCommonPermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string) => {
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

export const generateSentenceTypes = (topic?: Util.Word, subject?: Util.Word, verb?: Util.Word) => {
  const onlyTopic = (topic && !subject && !verb);
  const onlySubject = (!topic && subject && !verb);
  const onlyVerb = (!topic && !subject && verb);

  const onlyTopicAndSubject =  (topic && subject && !verb);
  const onlySubjectAndVerb = (!topic && subject && verb);

  return {
    onlyTopic,
    onlySubject,
    onlyVerb,
    onlyTopicAndSubject,
    onlySubjectAndVerb,
  };
};


