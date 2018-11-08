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

  export type MetaType = {
    verbType?: string;
    __typename: string;
  };

  export type English = {
    present: string;
    past: string;
    __typename: string;
  }

  export type Japanese = {
    kanji: string;
    // hiragana: string;
    // furigana: string;
    __typename: string;
  }

  export type Word = {
    japanese: Japanese;
    english: English;
    primaryType: string;
    category: string[];
    meta: MetaType;
    __typename: string;
  };

  export type ConjugatedJapaneseWord = {
    type: string; // noun, verb
    sentenceType: string; // noun
    word: Word; // noun, verb
    categoryEnding: WordElement; // noun
    verbStem: WordElement; // verb
    tense: WordElement; // noun
    polarity: WordElement;// noun, verb
    topicParticle: WordElement; // noun
    __typename: string; // noun, verb
  };

  export type ConjugatedEnglishWord = {
    type: string; // noun, verb
    sentenceType: string; // noun
    word: Word; // noun, verb
    tense: WordElement; // noun
    polarity: WordElement; // noun, verb
    indefiniteArticle: WordElement; // noun
    __typename: string; // noun, verb
  };

  export type Options = {
    __typename: string;
    politeness: string; // POLITENESS_CASUAL, POLITENESS_FORMAL
    variation: string[]; // wa-sob,
    selectedVariation?: string; // wa-sob,
    polarity: string; // POLARITY_POSITIVE, POLARITY_NEGATIVE
    tense: string; // TENSE_PRESENT, TENSE_PAST
    gender: string; // GENDER_MASCULINE, GENDER_FEMININE
    question: string; // HAS_QUESTION, NOT_QUESTION
    themes: string[];
    // sentenceEnding: string;
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

  export type Themes = string[];

  export type EnglishJapaneseSentence = {
    englishSentence: ConjugatedEnglishWord[];
    japaneseSentence: ConjugatedJapaneseWord[];
    __typename: string;
  };

  export type EnglishJapaneseOptionsSentence = {
    englishSentence: ConjugatedEnglishWord[];
    japaneseSentence: ConjugatedJapaneseWord[];
    options: Options;
    modifiers: Modifiers;
    __typename: string;
  };

  export type Resource = {
    url: string;
    website: string;
  };

  // SENTENCE TYPE - SENTENCE_TYPE_TOPIC
  export type Topic = Word;
  export type Verb = Word;
  export type Subject = Word;

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


  // MISC

  export type IButtonValues = {
    value: string,
    selected: boolean,
  };
}
