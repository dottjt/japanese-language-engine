export const sentenceTypes = `
  type WordElement = {
    wordArray: [ String ]
    wordType: String
  }

  type TypeMeta {
    verbType: String
  }

  type Word {
    japanese: String
    english: String
    primaryType: String
    category: [ String ]
    meta: TypeMeta
  }  

  type ConjugatedJapaneseWord {
    type: String
    word: Word
    categoryEnding: WordElement
    tense: WordElement
    polarity: WordElement
    topicParticle: WordElement
  }

  type ConjugatedEnglishWord {
    type: String
    tense: WordElement
    polarity: WordElement
    indefiniteArticle: WordElement
    word: Word
  }

  type ConjugatedEnglishWord {
    type: String
  }

  type EnglishJapaneseOptionsSentence {
    englishSentence: [ ConjugatedEnglishWord ]
    japaneseSentence: [ ConjugatedJapaneseWord ] 
    options: Options
  }
`;

export const optionTypes = `
  type SentenceStats {
    politenessHover: Boolean
    politenessHover: Boolean
    questionHover: Boolean
    selectedExerciseNumber: Int
  }

  type SentenceDisplayOptions {
    toggleSentenceStats: Boolean
  }

  type Options {
    politeness: String
    variation: String
    polarity: String
    tense: String
    gender: String
    question: String
  }
`;

export const index = `
  type Mutation {
    updateOptionsTone(value: String)
  }

  type Query {
    exercises?: [ EnglishJapaneseOptionsSentence ]
    sentenceStats: SentenceStats
    sentenceDisplayOptions: SentenceDisplayOptions
    nouns: [ Word ]
  }
`;