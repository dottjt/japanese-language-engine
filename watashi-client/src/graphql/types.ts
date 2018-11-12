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
    modifiers: Modifiers
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
  
  type Modifiers {
    topicNo: String
    subjectNo: String
    topicAdjective: String
    topicAdverb: String
    subjectAdjective: String
    subjectAdverb: String
  }

  type Options {
    politeness: String 
    variation: [ String ]
    selectedVariation?: String
    polarity: String
    tense: String
    gender: String
    question: String
    sentenceEnding: String
    themes: String[]
    selectedTheme?: String;
  }

  type User {
    username: String
    email: String
    thumbUrl: String
    accessToken: String
    idToken: String
    expiresAt: String
  }
`;

export const index = `
  type Mutation {
    updateOptionsTone(value: String)
  }

  type Query {
    sentenceStats: SentenceStats
    sentenceDisplayOptions: SentenceDisplayOptions
    nouns: [ Word ]

    exercises?: [ EnglishJapaneseOptionsSentence ]
    preModifiers?: Modifiers
    preOptions?: Options
    user?: User
  }
`;