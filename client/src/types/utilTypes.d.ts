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
    variation: string; // wa-sob,
    polarity: string; // positive, negative
    tense: string; // past, present
    gender: string; // masculine, feminine
    question: boolean; // true, false
  };

  export type Sentence = string;

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
    topic: Word;
    predicateNoun: Word;
  };

  export type BasicStatementString = {
    topic: string;
    predicateNoun: string;
  };

  export type BasicStatementStringsWithOptions = {
    topic: string;
    predicateNoun: string;
    options: Options;
  };

  // SENTENCE TYPE - TOPIC - PREDICATE
  export type Topic = Word;
  export type Verb = Word;
  export type Subject = Word;

  export type Predicate = {
    subject?: Subject;
    verb?: Verb;
  }

  export type SentenceWords = {
    topic?: Topic;
    predicate?: Predicate;
  };

  export type SentenceWordsOrganised = {
    topic?: Topic;
    subject?: Subject;
    verb?: Verb;
  };


  // export type Predicate = {
  //   verb?: Word;
  //   subject?: Word;
  // };
  
  // export type TopicPredicate = {
  //   topic: Word;
  //   subject?: Word;
  //   verb?: Word;
  // };
}
