declare namespace Util {
  // ui types

  export type WordArrayElement = {
    word: string;
    tag: string;
  };

  // primary
  export type SentenceDisplayOptions = {
    showSentenceStats: boolean;
    __typename: string;
  }

  export type SentenceStats = {
    nounPolarityHover: Boolean,
    nounPastHover: Boolean,
    selectedExerciseNumber: number | undefined,
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

  export type ConjugatedJapaneseNoun = {
    type: string;
    noun: Word;
    nounCategoryEnding: WordElement;
    nounEnding: WordElement;
    nounTopicParticle: WordElement;
    __typename: string;
  };

  export type ConjugatedEnglishNoun = {
    type: string;
    nounTense: WordElement;
    nounPolarity:  WordElement;
    nounIndefiniteArticle: WordElement;
    noun: Word;
    __typename: string;
  };

  export type ConjugatedJapaneseVerb = {
    type: string;
    conjugatedVerb: WordElement;
    verb: Word;
    __typename: string;
  };

  export type ConjugatedEnglishVerb = {
    verbPolarity: WordElement;
    verb: Word;
    type: string;
    __typename: string;
  };

  export type ConjugatedJapaneseArray = (ConjugatedJapaneseNoun|ConjugatedJapaneseVerb)[]
  export type ConjugatedEnglishArray = (ConjugatedEnglishNoun|ConjugatedEnglishVerb)[]

  export type Options = {
    __typename: string;
    politeness: string; // casual, formal
    variation: string; // wa-sob,
    polarity: string; // positive, negative
    tense: string; // past, present
    gender: string; // masculine, feminine
    question: string; // HAS_QUESTION, NOT_QUESTION
  };

  export type EnglishJapaneseSentence = {
    englishSentence: ConjugatedEnglishArray; // will change
    japaneseSentence: ConjugatedJapaneseArray; // will change
    __typename: string;
  };

  export type EnglishJapaneseOptionsSentence = {
    englishSentence: ConjugatedEnglishArray;
    japaneseSentence: ConjugatedJapaneseArray;
    options: Options,
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
}
