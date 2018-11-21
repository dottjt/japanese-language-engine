
import {
  NA,

  T,

  WA_TS,
  MO_TS,
  GA_TS,

  V,

  WO_SV,
  NI_SV,
  DE_SV,

  KARA_TS,
  MADE_TS,

  GENDER_MASCULINE,
  // GENDER_FEMININE,
  // GENDER_RANDOM,

  POLITENESS_CASUAL,
  // POLITENESS_FORMAL,
  // POLITENESS_HUMBLE,
  // POLITENESS_HONORIFIC,
  // POLITENESS_RANDOM,

  // TENSE_PRESENT,
  // TENSE_PAST,
  TENSE_RANDOM,

  // POLARITY_POSITIVE,
  // POLARITY_NEGATIVE,
  POLARITY_RANDOM,

  // SENTENCE_ENDING_NE,
  // SENTENCE_ENDING_YO,
  // SENTENCE_ENDING_YO_NE,
  // SENTENCE_ENDING_RANDOM,

  // HAS_QUESTION,
  NOT_QUESTION,
  THEMES_DEFAULT,
  // RANDOM_QUESTION,
  // RANDOM_QUESTION,

} from '../constants/optionsConstants';

import {
  __TYPENAME_OPTIONS,
  __TYPENAME_MODIFIERS,
  __TYPENAME_SENTENCE_CONTEXT,
} from '../constants/typeNameConstants';


const LESSON_VARIATION = {
  L001: [ T ],
  L002: [ WA_TS, MO_TS ],
  L003: [ GA_TS ],
  L004: [ WA_TS, GA_TS ],
  L005: [ WA_TS, MO_TS, GA_TS ],
  L006: [ V ],
  L007: [ V ],
  L008: [ V ],
  L009: [ WO_SV ],
  L010: [ NI_SV ],
  L011: [ DE_SV ],
  L012: [ WO_SV, NI_SV ],
  L013: [ NI_SV, DE_SV ],
  L014: [ DE_SV, WO_SV ],
  L015: [ WA_TS, MO_TS, GA_TS ],
  L016: [ KARA_TS ],
  L017: [ MADE_TS ],
  L018: [ NA ],
  L019: [ T ],
  L020: [ T ],
  // L021:
  // L022: 
  // L023: 
  // L024: 
  // L025: 
  // L026: 
  // L027: 
};

export const LESSON_OPTIONS = {
  L001: { variation: LESSON_VARIATION.L001, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // T
  L002: { variation: LESSON_VARIATION.L002, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // WA_TS, MO_TS
  L003: { variation: LESSON_VARIATION.L003, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // GA_TS
  L004: { variation: LESSON_VARIATION.L004, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // WA_TS, GA_TS
  L005: { variation: LESSON_VARIATION.L005, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // WA_TS, MO_TS, GA_TS
  L006: { variation: LESSON_VARIATION.L006, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // V
  L007: { variation: LESSON_VARIATION.L007, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // V
  L008: { variation: LESSON_VARIATION.L008, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // V
  L009: { variation: LESSON_VARIATION.L009, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // WO_SV
  L010: { variation: LESSON_VARIATION.L010, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // NI_SV
  L011: { variation: LESSON_VARIATION.L011, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // DE_SV
  L012: { variation: LESSON_VARIATION.L012, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // WO_SV, NI_SV
  L013: { variation: LESSON_VARIATION.L013, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // NI_SV, DE_SV
  L014: { variation: LESSON_VARIATION.L014, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // DE_SV, WO_SV
  L015: { variation: LESSON_VARIATION.L015, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // WO_SV, NI_SV, DE_SV
  L016: { variation: LESSON_VARIATION.L016, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // KARA_SV
  L017: { variation: LESSON_VARIATION.L017, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // MADE_SV
  L018: { variation: LESSON_VARIATION.L018, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // NA - T_NO
  L019: { variation: LESSON_VARIATION.L019, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // T - T_ADJ
  L020: { variation: LESSON_VARIATION.L020, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS, themes: [ THEMES_DEFAULT ] }, // T - T_ADV
  // L021:
  // L022: 
  // L023: 
  // L024: 
  // L025: 
  // L026: 
  // L027: 
};



