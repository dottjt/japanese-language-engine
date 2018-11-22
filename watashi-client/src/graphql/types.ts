export const sentenceTypes = `
  type WordElement {
    wordArray: [ String ]
    wordType: String
  }

  type EnglishVerb {
    infinitive: String
    presentParticiple: String
    pastParticiple: String
    simplePresentContinuousHeSheIt: String
  }
  
  type EnglishNoun {
    singular: String
  }

  type JapaneseNoun {
    kanji: String
  }

  type JapaneseVerb {
    kanji: String
  }

  type Noun {
    nounJapanese: JapaneseNoun
    nounEnglish: EnglishNoun
    nounCategory: string[]
    nounWordType: String
    nounPluralType: String
    __typename: String
  }

  type Verb {
    verbJapanese: JapaneseVerb
    verbEnglish: EnglishVerb
    verbJapaneseType: String
    verbCategory: string[]
    __typename: String
  }

  type WordArrayElement {
    word: String
    tag: String
    __typename: String
  }

  type EnglishJapaneseOptionsSentence {
    englishSentence: [ WordArrayElement ]
    japaneseSentence: [ WordArrayElement ] 
    modifiers: Modifiers
    options: Options
    sentenceContext: SentenceContext
  }
`

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
    toggleSentenceOrder: Boolean
    toggleSentenceHide: Boolean
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
    gender: String
    question: String
    sentenceEnding: String
    themes: String[]
    selectedTheme?: String
  }

  type User {
    username: String
    email: String
    thumbUrl: String
    accessToken: String
    idToken: String
    expiresAt: String
  }

  type SentenceContext {
    topicIntent: String

    topicProximity: String
    topicDestination: String
    eventDirection: String

    eventOccurance: String
    eventDuration: String
    eventPOV: String
    
    subjectConnection: String
    subjectRole: String
    subjectQuantity: String
  }
`

export const index = `
  type Query {
    sentenceStats: SentenceStats
    sentenceDisplayOptions: SentenceDisplayOptions
    nouns: [ Noun ]
    verbs: [ Verb ]

    exercises?: [ EnglishJapaneseOptionsSentence ]
    
    preModifiers?: Modifiers
    preOptions?: Options
    preSentenceContext?: SentenceContext
    user?: User
  }
`

// exercises(path: String, numberOfExercises: Int)?: [ EnglishJapaneseOptionsSentence ]

// type ConjugatedJapaneseVerb {
//   type: String
//   sentenceType: String
//   verbStem: WordElement
//   verbPolarity: WordElement
// }

// type ConjugatedJapaneseNoun {
//   type: String
//   sentenceType: String
//   nounCategoryEnding: WordElement
//   nounTense: WordElement
//   nounPolarity: WordElement
//   nounTopicParticle: WordElement
// }

// type ConjugatedEnglishNoun {
//   type: String
//   sentenceType: String
//   nounDeclension: WordElement
//   nounTense: WordElement
//   nounPolarity: WordElement
//   nounIndefiniteArticle: WordElement
// }

// type ConjugatedEnglishVerb {
//   type: String
//   sentenceType: String
//   verbConjugation: WordElement
//   verbPolarity: WordElement
// }

// type ConjugatedEnglishPreposition {
//   type: String
//   sentenceType: String
//   preposition: WordElement
// }

// union EnglishSentence = ConjugatedEnglishNoun | ConjugatedEnglishVerb | ConjugatedEnglishPreposition
// union JapaneseSentence = ConjugatedJapaneseNoun | ConjugatedJapaneseVerb
