export const sentenceTypes = `
  type PlaygroundArrayValue {
    value: String
    selected: Boolean
  }

  type WordElement {
    wordArray: [ String ]
    wordType: String
  }

  type EnglishVerb {
    infinitive: String
    presentParticiple: String
    preterite: String
    pastParticiple: String
    simplePresentContinuousHeSheIt: String
  }

  EnglishAdjective {
    positive: String
    comparative?: String
    superlative?: String
  }

  JapaneseAdjective {
    kanji: String
    hiragana: String
  }

  type EnglishNoun {
    singular: String
  }

  type JapaneseNoun {
    kanji: String
    hiragana: String
  }

  type JapaneseVerb {
    kanji: String
    hiragana: String
  }

  type Noun {
    nounJapanese: JapaneseNoun
    nounEnglish: EnglishNoun
    nounCategory: [ String ]
    nounWordType: String
    nounPluralType: String
  }

  type Verb {
    verbJapanese: JapaneseVerb
    verbEnglish: EnglishVerb
    verbJapaneseType: String
    verbCategory: [ String ]
  }

  type Adjective {
    adjectiveJapanese: JapaneseAdjective
    adjectiveEnglish: EnglishAdjective
    adjectiveCategory: [ String ]
    adjectiveType: String
  }

  type WordArrayElement {
    word: String
    tag: String
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
  
  PreModifiers {
    topicNoArray: [ String ]
    subjectNoArray: [ String ]
    topicAdjectiveArray: [ String ]
    topicAdverbArray: [ String ]
    subjectAdjectiveArray: [ String ]
    subjectAdverbArray: [ String ]
  };

  Modifiers {
    selectedTopicNo: String
    selectedSubjectNo: String
    selectedTopicAdjective: String
    selectedTopicAdverb: String
    selectedSubjectAdjective: String
    selectedSubjectAdverb: String
  };


  type PreOptions {
    politenessArray: [ String ]
    variationArray: [ String ]
    polarityArray: [ String ]
    genderArray: [ String ]
    questionArray: [ String ]
    themesArray: [ String ]
  }

  type Options {
    selectedPoliteness: String
    selectedVariation: String
    selectedPolarity: String
    selectedGender: String
    selectedQuestion: String
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

  type PreSentenceContext {    
    topicIntentArray: [ String ]

    topicProximityArray: [ String ]
    topicDestinationArray: [ String ]
    eventDirectionArray: [ String ]

    eventOccuranceArray: [ String ]
    eventDurationArray: [ String ]
    eventPOVArray: [ String ]

    subjectConnectionArray: [ String ]
    subjectRoleArray: [ String ]
    subjectQuantityArray: [ String ]
  }

  type SentenceContext {    
    selectedTopicIntent: String

    selectedTopicProximity: String
    selectedTopicDestination: String
    selectedEventDirection: String

    selectedEventOccurance: String
    selectedEventDuration: String
    selectedEventPOV: String

    selectedSubjectConnection: String
    selectedSubjectRole: String
    selectedSubjectQuantity: String
  }
`

export const index = `
  type Query {
    sentenceStats: SentenceStats
    sentenceDisplayOptions: SentenceDisplayOptions
    nouns: [ Noun ]
    verbs: [ Verb ]

    exercises?: [ EnglishJapaneseOptionsSentence ]
    
    preModifiers?: PreModifiers
    preOptions?: PreOptions
    preSentenceContext?: PreSentenceContext
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
