declare module Util {

  // primary 
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

  export interface BasicWaQuestion {
    questionTopicNoun: Word,
    questionPredicateNoun: Word,
    answerResponse: Word,
    answerPredicateNoun: Word,
  }

  export interface BasicWaQuestionStringsWithOptions {
    questionTopicNoun: string,
    questionPredicateNoun: string,
    answerResponse: string,
    answerPredicateNoun: string,
    options: Options,
  }
}
