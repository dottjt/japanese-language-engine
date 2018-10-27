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

  type ConjugatedJapaneseVerb {
    type: String
    conjugatedVerb: WordElement
    verb: Word
  }

  type ConjugatedJapaneseNoun {
    type: String
    noun: Word
    nounCategoryEnding: WordElement
    nounEnding: WordElement
    nounTopicParticle: WordElement
  }

  type ConjugatedEnglishNoun {
    type: String
    nounTense: WordElement
    nounPolarity: WordElement
    nounIndefiniteArticle: WordElement
    noun: Word
  }

  type ConjugatedEnglishVerb {
    verbPolarity: WordElement
    verb: Word
    type: String
  }

  union ConjugatedJapaneseArray = ConjugatedJapaneseNoun | ConjugatedJapaneseVerb
  union ConjugatedEnglishArray = ConjugatedEnglishNoun | ConjugatedEnglishVerb

  type EnglishJapaneseOptionsSentence {
    englishSentence: [ ConjugatedEnglishArray ]
    japaneseSentence: [ ConjugatedJapaneseArray ] 
    options: 
  }
`;

export const optionTypes = `
  type SentenceStats {
    nounPolarityHover: Boolean
    nounPastHover: Boolean
    selectedExerciseNumber: Int
  }

  type SentenceDisplayOptions {
    showSentenceStats: Boolean
  }

  type Options {
    politeness: String
    variation: String
    polarity: String
    tense: String
    gender: String
    question: String
  };


`;

export const index = `
  type Mutation {
    updateOptionsTone(value: String)
  }

  type Query {
    exercises: 
    sentenceStats: SentenceStats
    sentenceDisplayOptions: SentenceDisplayOptions
    nouns: [Word]
  }
`;