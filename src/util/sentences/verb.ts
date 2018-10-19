import {
  createError,
} from '../functions';

import {
  LANG_ENGLISH,
  LANG_JAPANESE,
} from "../constants/generalConstants";

import {
  verbConjugationJapanese,
  // verbConjugationEnglish,
} from "../conjugations/verbConjugation";

import {  
  PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  PRIMARY_TYPE_ADJECTIVE,
} from '../constants/wordConstants';

import {
  VERB,
} from "../constants/optionsConstants";


const determineVerbConjugation = (verb: Util.Word, options: Util.Options, type: string, identifier: string): string => {
  if (type === LANG_JAPANESE) {
    switch (verb.primaryType) {
      case PRIMARY_TYPE_NOUN:
        return createError('conjugations/verb', 'verbConjugation', `verb.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      case PRIMARY_TYPE_VERB:
        return verbConjugationJapanese(verb, options, identifier);
      case PRIMARY_TYPE_ADJECTIVE:
        return createError('conjugations/verb', 'verbConjugation', `verb.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      default:
        return createError('conjugations/verb', 'verbConjugation', `${verb.primaryType} unknown`);
    }
  } else {
    switch (verb.primaryType) {
      case PRIMARY_TYPE_NOUN:
        return createError('conjugations/verb', 'verbConjugation', `verb.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      case PRIMARY_TYPE_VERB:
        return verbConjugationJapanese(verb, options, identifier);
      case PRIMARY_TYPE_ADJECTIVE:
        return createError('conjugations/verb', 'verbConjugation', `verb.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      default:
        return createError('conjugations/verb', 'verbConjugation', 'verb.primaryType unknown');
    }
  }
};

const verbConjugation = (verb: Util.Word, options: Util.Options, type: string, identifier: string): string => (
  type === LANG_JAPANESE ? (
    // 人だ。
    // 人じゃない。
    `${determineVerbConjugation(verb, options, LANG_JAPANESE, identifier)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    // `${verbConjugationEnglish(verb, options, LANG_ENGLISH, identifier)}`
    'cake'
  )
);

const determineVerb = (words: Util.Verb, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes("QUESTION") ? ({
    type: VERB,
    question: verbConjugation(words.verb, options, type, VERB),
    answer: verbConjugation(words.verb, options, type, VERB),
  }) : ({
    type: VERB,
    statement: verbConjugation(words.verb, options, type, VERB)  
  })
);

const generateVerbSentence = (options: Util.Options, words: Util.Verb): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determineVerb(words, options, LANG_JAPANESE),
  englishSentence: determineVerb(words, options, LANG_ENGLISH)
});

export default generateVerbSentence;
