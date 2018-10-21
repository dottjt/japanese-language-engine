// import { 
//   LANG_JAPANESE, 
//   // LANG_ENGLISH, 
// } from './constants/generalConstants';

import {
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  // POLITENESS_HUMBLE,
  // POLITENESS_HONORIFIC,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  // SENTENCE_TYPE_VERB,
  SENTENCE_TYPE_TOPIC,
  SENTENCE_TYPE_SUBJECT,

  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from './constants/optionsConstants';

export const capitalise = (sentence: string): string => sentence[0].toUpperCase() + sentence.slice(1);
export const randomArrayElement = (arrayLength: number): number => Math.floor(Math.random() * arrayLength);

interface IValues {
  value: string,
  selected: boolean,
};

export const convertValuesIntoButtonArray = (values: string[]): IValues[] =>
  values.map((value, index) => {
    if (index === 0) {
      return { value, selected: true }
    }
    return { value, selected: false }
  });

export const createError = (fileLocation: string, functionName: string, errorMessage: string): string => {
  return `Error. file: ${fileLocation}, function: ${functionName}, ${errorMessage}`;
};


export const convertPolitenessIntoValue = (politeness: string): string => {
  switch(politeness) {
    case POLITENESS_CASUAL:
      return 'Casual Politeness';
    case POLITENESS_FORMAL: 
      return 'Formal Politeness'
    default: 
      return createError('util/functions', 'convertPolitenessIntoValue', `${politeness} value does not exist.`);
  }
};

export const convertPolarityIntoValue = (polarity: string): string => {
  switch(polarity) {
    case POLARITY_POSITIVE:
      return 'Positive Sentence';
    case POLARITY_NEGATIVE: 
      return 'Negative Sentence';
    default: 
      return createError('util/functions', 'convertPolarityIntoValue', `${polarity} value does not exist.`);
  }
};

export const removeGapIfValueEmpty = (value: string): string => value !== '' ? ` ${value}` : '';

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
