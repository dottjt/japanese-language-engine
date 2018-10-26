declare namespace Util {
  // primary
  export type SentenceDisplayOptions = {
    showSentenceStats: boolean;
  }

  export type SentenceStats = {
    nounPolarityHover: Boolean,
    nounPastHover: Boolean,
    selectedExerciseNumber: number | undefined,
  }

  export type Resource = {
    website: string;
    url: string;
  };

  export type WordArrayElement = {
    word: string;
    tag: string;
  };

  export type WordElement = {
    wordArray: string[];
    wordType: string;
  };

  export type Word = {
    japanese: {
      kanji: string;
      // hiragana: string;
      // furigana: string;
    }
    english: {
      present: string;
      past: string;
    },
    primaryType: string;
    category: string[];
    meta: {
      verbType?: string 
    };
  };

  export type ConjugatedJapaneseNoun = {
    type: string;
    noun: Word;
    nounCategoryEnding: WordElement;
    nounEnding: WordElement;
    nounTopicParticle: WordElement;
  };

  export type ConjugatedEnglishNoun = {
    type: string;
    nounTense: WordElement;
    nounPolarity:  WordElement;
    nounIndefiniteArticle: WordElement;
    noun: Word;
  };

  export type ConjugatedJapaneseVerb = {
    type: string;
    conjugatedVerb: WordElement;
    verb: Word;
  };

  export type ConjugatedEnglishVerb = {
    verbPolarity: WordElement;
    verb: Word;
    type: string;
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

  // export type Sentence = string;

  export type EnglishJapaneseSentence = {
    englishSentence: ConjugatedEnglishArray; // will change
    japaneseSentence: ConjugatedJapaneseArray; // will change

    // ConjugatedJapaneseNoun
    // ConjugatedEnglishNoun
    // ConjugatedJapaneseVerb
    // ConjugatedEnglishVerb

    // englishSentence: any; // will change
    // japaneseSentence: any; // will change
  };


  export type EnglishJapaneseOptionsSentence = {
    englishSentence: ConjugatedEnglishArray;
    japaneseSentence: ConjugatedJapaneseArray;
    options: Options,
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
