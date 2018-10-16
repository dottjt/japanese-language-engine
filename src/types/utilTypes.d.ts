declare module Util {

  // primary 
  export type Resource = {
    website: string,
    url: string,
  }

  export type Word = {
    japanese: string,
    english: string,
    primaryType: string,
    category: string[],
    typeMeta: {},
  }

  export type Options = {
    __typename: string,
    sentencePoliteness: string,
    sentenceType: string,
    sentenceVariation: string,
  }

  export type Sentence = {
    type: string,
    question: string,
    answer: string,
    statement: string,
  }

  // composite
  export type EnglishJapaneseSentence = {
    englishSentence: Sentence,
    japaneseSentence: Sentence,
  }

  export type BasicQuestion = {
    questionTopicNoun: Word,
    questionPredicateNoun: Word,
    answerResponse: Word,
    answerPredicateNoun: Word,
  }

  export type BasicQuestionString = {
    questionTopicNoun: string,
    questionPredicateNoun: string,
    answerResponse: string,
    answerPredicateNoun: string,
  }

  export type BasicQuestionStringsWithOptions = {
    questionTopicNoun: string,
    questionPredicateNoun: string,
    answerResponse: string,
    answerPredicateNoun: string,
    options: Options,
  }


  export type BasicStatement = {
    topicNoun: Word,
    predicateNoun: Word,
  }

  export type BasicStatementString = {
    topicNoun: string,
    predicateNoun: string,
  }

  export type BasicStatementStringsWithOptions = {
    topicNoun: string,
    predicateNoun: string,
    options: Options,
  }
}
