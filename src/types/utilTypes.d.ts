declare namespace Util {
  // primary
  export type SentenceDisplayOptions = {
    showSentenceHints: boolean;
  }

  export type Resource = {
    website: string;
    url: string;
  };

  export type Word = {
    japanese: string;
    english: string;
    primaryType: string;
    category: string[];
    meta: {
      verbType?: string 
    };
  };

  export type Options = {
    __typename: string;
    politeness: string; // casual, formal
    sentenceType: string; // topicPredicate
    variation: string; // wa-sob,
    polarity: string; // positive, negative
    tense: string; // past, present
  };

  export type Sentence = {
    type: string;
    question: string;
    answer: string;
    statement: string;
  };

  export type EnglishJapaneseSentence = {
    englishSentence: Sentence;
    japaneseSentence: Sentence;
  };

  export type EnglishJapaneseOptionsSentence = {
    englishSentence: Sentence;
    japaneseSentence: Sentence;
    options: Options,
  };

  // SENTENCE TYPE - BASIC QUESTION
  export type BasicQuestion = {
    questionTopicNoun: Word;
    questionPredicateNoun: Word;
    answerResponse: Word;
    answerPredicateNoun: Word;
  };

  export type BasicQuestionString = {
    questionTopicNoun: string;
    questionPredicateNoun: string;
    answerResponse: string;
    answerPredicateNoun: string;
  };

  export type BasicQuestionStringsWithOptions = {
    questionTopicNoun: string;
    questionPredicateNoun: string;
    answerResponse: string;
    answerPredicateNoun: string;
    options: Options;
  };

  // SENTENCE TYPE - BASIC STATEMENT
  export type BasicStatement = {
    topicNoun: Word;
    predicateNoun: Word;
  };

  export type BasicStatementString = {
    topicNoun: string;
    predicateNoun: string;
  };

  export type BasicStatementStringsWithOptions = {
    topicNoun: string;
    predicateNoun: string;
    options: Options;
  };

  // SENTENCE TYPE - BASIC STATEMENT
  export type BasicVerb = {
    topicNoun: Word;
    predicateVerb: Word;
  };

  export type BasicVerbString = {
    topicNoun: string;
    predicateVerb: string;
  };

  export type BasicVerbStringsWithOptions = {
    topicNoun: string;
    predicateVerb: string;
    options: Options;
  };

  // SENTENCE TYPE - TOPIC - PREDICATE
  export type TopicPredicate = {
    topicNoun: Word;
    predicate: Word;
  };

  export type TopicPredicateString = {
    topicNoun: string;
    predicate: string;
  };

  export type TopicPredicateStringsWithOptions = {
    topicNoun: string;
    predicate: string;
    options: Options;
  };
}
