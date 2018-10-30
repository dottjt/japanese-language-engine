declare namespace Util {
  // ui types

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
    polarityTenseHover: Boolean,
    politenessHover: Boolean,
    questionHover: Boolean,
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

  export type ConjugatedJapaneseWord = {
    type: string; // noun, verb
    word: Word; // noun, verb
    nounCategoryEnding: WordElement; // noun
    nounEnding: WordElement; // noun
    nounTopicParticle: WordElement; // noun
    conjugatedVerb: WordElement; // verb
    __typename: string; // noun, verb
  };

  export type ConjugatedEnglishWord = {
    type: string; // noun, verb
    tense: WordElement; // noun
    polarity: WordElement; // noun, verb
    indefiniteArticle: WordElement; // noun
    word: Word; // noun, verb
    __typename: string; // noun, verb
  };

  export type Options = {
    __typename: string;
    politeness: string; // POLITENESS_CASUAL, POLITENESS_FORMAL
    variation: string; // wa-sob,
    polarity: string; // POLARITY_POSITIVE, POLARITY_NEGATIVE
    tense: string; // TENSE_PRESENT, TENSE_PAST
    gender: string; // GENDER_MASCULINE, GENDER_FEMININE
    question: string; // HAS_QUESTION, NOT_QUESTION
  };

  export type EnglishJapaneseSentence = {
    englishSentence: ConjugatedEnglishWord[];
    japaneseSentence: ConjugatedJapaneseWord[];
    __typename: string;
  };

  export type EnglishJapaneseOptionsSentence = {
    englishSentence: ConjugatedEnglishWord[];
    japaneseSentence: ConjugatedJapaneseWord[];
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
