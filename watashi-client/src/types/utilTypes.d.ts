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

  export type EnglishAdjective = {
    positive: string;
    comparative: string;
    superlative: string;
    __typename: string;
  }

  export type EnglishVerb = {
    infinitive: string;
    presentParticiple: string;
    pastParticiple: string;
    preterite: string;
    simplePresentContinuousHeSheIt: string;
    __typename: string;
  }
  
  export type EnglishNoun = {
    singular: string;
    __typename: string;
  }

  export type JapaneseAdjective = {
    kanji: string;
    hiragana: string;
    __typename: string;
  }

  export type JapaneseVerb = {
    kanji: string;
    hiragana: string;
    __typename: string;
  }
  
  export type JapaneseNoun = {
    kanji: string;
    hiragana: string;
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

  export type Adjective = {
    adjectiveJapanese: JapaneseAdjective;
    adjectiveEnglish: EnglishAdjective;
    adjectiveCategory: string[];
    adjectiveType: string;
    __typename: string;
  };


  export type PreOptions = {
    politenessArray: string[]; // POLITENESS_CASUAL, POLITENESS_FORMAL
    variationArray: string[]; // wa-sob,
    polarityArray: string[]; // POLARITY_POSITIVE, POLARITY_NEGATIVE
    genderArray: string[]; // GENDER_MASCULINE, GENDER_FEMININE
    questionArray: string[]; // HAS_QUESTION, NOT_QUESTION
    // sentenceEnding: string;
    themesArray: string[];
    __typename: string;
  };

  export type Options = {
    selectedPoliteness: string; // POLITENESS_CASUAL, POLITENESS_FORMAL
    selectedVariation: string; // wa-sob,
    selectedPolarity: string; // POLARITY_POSITIVE, POLARITY_NEGATIVE
    selectedGender: string; // GENDER_MASCULINE, GENDER_FEMININE
    selectedQuestion: string; // HAS_QUESTION, NOT_QUESTION
    // selectedSentenceEnding: string;
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

  export type PreModifiers = {
    __typename: string;
    topicNoArray: string[];
    subjectNoArray: string[];
    topicAdjectiveArray: string[];
    topicAdverbArray: string[];
    subjectAdjectiveArray: string[];
    subjectAdverbArray: string[];
  };

  export type Modifiers = {
    __typename: string;
    selectedTopicNo: string;
    selectedSubjectNo: string;
    selectedTopicAdjective: string;
    selectedTopicAdverb: string;
    selectedSubjectAdjective: string;
    selectedSubjectAdverb: string;
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
    selectedTopicIntent: string,

    selectedTopicProximity: string,
    selectedTopicDestination: string,
    selectedEventDirection: string,

    selectedEventOccurance: string,
    selectedEventDuration: string,
    selectedEventPOV: string,

    selectedSubjectConnection: string,
    selectedSubjectRole: string,
    selectedSubjectQuantity: string,
    
    __typename: string,
  }

  export type PreSentenceContext = {    
    topicIntentArray: string[],

    topicProximityArray: string[],
    topicDestinationArray: string[],
    eventDirectionArray: string[],

    eventOccuranceArray: string[],
    eventDurationArray: string[],
    eventPOVArray: string[],

    subjectConnectionArray: string[],
    subjectRoleArray: string[],
    subjectQuantityArray: string[],
    
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


