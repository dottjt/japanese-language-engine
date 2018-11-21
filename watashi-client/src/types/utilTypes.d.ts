declare namespace Util {

  export type User = {
    username: string;
    email: string;
    thumbUrl: string;
    
    accessToken: string;
    idToken: string;
    expiresAt: string;
  };
  
  export type WordArrayElement = {
    word: string;
    tag: string;
    __typename: string;
  };

  // primary
  export type SentenceDisplayOptions = {
    toggleSentenceStats: boolean;
    toggleSentenceOrder: boolean;
    toggleSentenceHide: boolean;
    __typename: string;
  }

  export type SentenceStats = {
    topicHover: Boolean;
    subjectHover: Boolean;
    verbHover: Boolean;

    polarityHover: Boolean;
    tenseHover: Boolean;
    politenessHover: Boolean;
    questionHover: Boolean;
    selectedExerciseNumber: number | undefined;
    __typename: string;
  }

  export type WordElement = {
    wordArray: string[];
    wordType: string;
    __typename: string;
  };

  export type EnglishVerb = {
    infinitive: string;
    presentParticiple: string;
    pastParticiple: string;
    simplePresentContinuousHeSheIt: string;
    __typename: string;
  }
  
  export type EnglishNoun = {
    singular: string;
    __typename: string;
  }

  export type JapaneseNoun = {
    kanji: string;
    __typename: string;
  }

  export type JapaneseVerb = {
    kanji: string;
    __typename: string;
  }

  export type Noun = {
    nounJapanese: JapaneseNoun;
    nounEnglish: EnglishNoun;
    nounCategory: string[];
    nounWordType: string;
    nounPluralType: string;
    __typename: string;
  };

  export type Verb = {
    verbJapanese: JapaneseVerb;
    verbEnglish: EnglishVerb;
    verbJapaneseType: string;
    verbCategory: string[];
    __typename: string;
  };

  export type Options = {
    politeness: string; // POLITENESS_CASUAL, POLITENESS_FORMAL
    variation: string[]; // wa-sob,
    selectedVariation?: string; // wa-sob,
    polarity: string; // POLARITY_POSITIVE, POLARITY_NEGATIVE
    tense: string; // TENSE_PRESENT, TENSE_PAST
    gender: string; // GENDER_MASCULINE, GENDER_FEMININE
    question: string; // HAS_QUESTION, NOT_QUESTION
    // sentenceEnding: string;
    themes: string[];
    selectedTheme?: string;
    __typename: string;
  };

  export type ControlPanelOptions = {
    controlPanelPoliteness?: string;
    controlPanelVariation?: string;
    controlPanelPolarity?: string;
    controlPanelTense?: string;
    controlPanelGender?: string;
    controlPanelQuestion?: string;
    controlPanelSentenceEnding?: string;
  };

  export type Modifiers = {
    __typename: string;
    topicNo: string;
    subjectNo: string;
    topicAdjective: string;
    topicAdverb: string;
    subjectAdjective: string;
    subjectAdverb: string;
  };

  export type EnglishJapaneseSentence = {
    englishSentence: WordArrayElement[]; // (ConjugatedEnglishNoun | ConjugatedEnglishVerb | ConjugatedEnglishPreposition)[];
    japaneseSentence: WordArrayElement[];  // (ConjugatedJapaneseNoun | ConjugatedJapaneseVerb)[];
    __typename: string;
  };

  export type EnglishJapaneseOptionsSentence = {
    englishSentence: WordArrayElement[]; // (ConjugatedEnglishNoun | ConjugatedEnglishVerb | ConjugatedEnglishPreposition)[];
    japaneseSentence: WordArrayElement[]; // (ConjugatedJapaneseNoun | ConjugatedJapaneseVerb)[];
    options: Options;
    modifiers: Modifiers;
    sentenceContext: SentenceContext;
    __typename: string;
  };

  export type Resource = {
    url: string;
    website: string;
  };

  // SENTENCE TYPE - SENTENCE_TYPE_TOPIC
  export type Topic = Noun;
  export type Verb = Verb;
  export type Subject = Noun;

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

  export type SentenceWordModifiers = {
    tAdj?: WordModifier;
    tAdv?: WordModifier;

    sAdj?: WordModifier;
    sAdv?: WordModifier;

    tNo?: WordModifierNo;
    sNo?: WordModifierNo;
  };

  export type WordModifier = {
    type: string;
    word: Word;
  };

  export type WordModifierNo = {
    no1?: WordModifier;
    no2?: WordModifier;
    no3?: WordModifier;
  };

  export type SentenceContext = {    
    topicIntent: string,

    topicProximity: string,
    topicDestination: string,
    eventDirection: string,

    eventOccurance: string,
    eventDuration: string,
    eventPOV: string,

    subjectConnection: string,
    subjectRole: string,
    subjectQuantity: string,
    
    __typename: string,
  }

  // MISC

  export type IButtonValues = {
    value: string,
    selected: boolean,
  };
}



// export type ConjugatedJapaneseVerb = {
//   type: string;
//   sentenceType: string;
//   verbStem: WordElement;
//   verbPolarity: WordElement;
//   __typename: string; 
// };

// export type ConjugatedJapaneseNoun = {
//   type: string; 
//   sentenceType: string; 
//   nounDeclension: WordElement;
//   nounTense: WordElement; 
//   nounPolarity: WordElement;
//   nounCategoryEnding: WordElement; 
//   nounTopicParticle: WordElement; 
//   __typename: string; 
// };

// export type ConjugatedEnglishNoun = {
//   type: string;
//   sentenceType: string;
//   nounDeclension: WordElement;
//   nounTense: WordElement;
//   nounPolarity: WordElement;
//   nounIndefiniteArticle: WordElement;
//   __typename: string;
// }

// export type ConjugatedEnglishVerb = {
//   type: string;
//   sentenceType: string;
//   verbConjugation: WordElement;
//   verbPolarity: WordElement;
//   __typename: string;
// }

// export type ConjugatedEnglishPreposition = {
//   type: string;
//   sentenceType: string;
//   preposition: WordElement;
//   __typename: string;
// };


