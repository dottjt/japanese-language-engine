import {
  predicateConjugationJapanese,
  predicateConjugationEnglish,
} from "../conjugations/predicateConjugation";

import {
  LANG_ENGLISH,
  LANG_JAPANESE,
} from "../constants/generalConstants";

import {
  PREDICATE,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../constants/optionsConstants";

const determineStatement = (predicate: Util.Word, options: Util.Options, type: string): string => (
  type === LANG_JAPANESE ? (
    // 小林さんは人。
    // 小林さんは人じゃない。
    `${predicateConjugationJapanese(predicate, options)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${predicateConjugationEnglish(predicate, options)}`
  )
);

const determinePredicate = (words: Util.Predicate, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes("QUESTION") ? ({
    type: PREDICATE,
    question: determineStatement(words.predicate, options, type),
    answer: determineStatement(words.predicate, options, type),
  }) : ({
    type: PREDICATE,
    statement: determineStatement(words.predicate, options, type)  
  })
);

const generatePredicateSentence = (options: Util.Options, words: Util.Predicate): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determinePredicate(words, options, LANG_JAPANESE),
  englishSentence: determinePredicate(words, options, LANG_ENGLISH)
});

export default generatePredicateSentence;