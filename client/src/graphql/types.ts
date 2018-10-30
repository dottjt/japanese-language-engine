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
    sentenceType: String
    word: Word
    categoryEnding: WordElement
    verbStem: WordElement
    tense: WordElement
    polarity: WordElement
    topicParticle: WordElement
  }

  type ConjugatedEnglishWord {
    type: String
    sentenceType: String
    tense: WordElement
    polarity: WordElement
    indefiniteArticle: WordElement
    word: Word
  }

  type EnglishJapaneseOptionsSentence {
    englishSentence: [ ConjugatedEnglishWord ]
    japaneseSentence: [ ConjugatedJapaneseWord ] 
    options: Options
  }
`;

export const optionTypes = `
  type SentenceStats {
    topicHover: Boolean
    subjectHover: Boolean
    verbHover: Boolean
    tenseHover: Boolean
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