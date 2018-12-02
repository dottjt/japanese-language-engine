
import {
  // NA,

  T,

  WA_TS,
  MO_TS,
  GA_TS,

  V,

  WO_SV,
  NI_SV,
  DE_SV,

  // KARA_TS,
  // MADE_TS,

  GENDER_MASCULINE,
  GENDER_FEMININE,
  // GENDER_RANDOM,

  POLITENESS_CASUAL,
  // POLITENESS_FORMAL,
  // POLITENESS_HUMBLE,
  // POLITENESS_HONORIFIC,
  // POLITENESS_RANDOM,

  POLARITY_NEGATIVE,
  POLARITY_POSITIVE,

  // SENTENCE_ENDING_NE,
  // SENTENCE_ENDING_YO,
  // SENTENCE_ENDING_YO_NE,
  // SENTENCE_ENDING_RANDOM,

  // HAS_QUESTION,
  NOT_QUESTION,
  THEMES_DEFAULT,
  // THEMES_L001,
  // THEMES_L002,
  // THEMES_L003,
  // THEMES_L004,
  // THEMES_L005,
  // THEMES_L006,
  // THEMES_L007,
  // THEMES_L008,
  // THEMES_L009,
  // THEMES_L010,
  // THEMES_L011,
  // THEMES_L012,
  // THEMES_L013,
  // THEMES_L014,
  // THEMES_L015,
  // THEMES_L016,
  // THEMES_L017,
  // THEMES_L018,
  // THEMES_L019,
  // THEMES_L020,
  // THEMES_L021,
  // THEMES_L022,
  // THEMES_L023,
  // THEMES_L024,
  // THEMES_L025,
  // THEMES_L026,
  // THEMES_L027,
  // THEMES_L028,
  // THEMES_L029,
  // THEMES_L030,
  // THEMES_L031,
  // THEMES_L032,
  // THEMES_L033,
  // THEMES_L034,
  // THEMES_L035,
  // THEMES_L036,
  // THEMES_L037,
  // THEMES_L038,
  // THEMES_L039,
  // THEMES_L040,
  // RANDOM_QUESTION,
  // RANDOM_QUESTION,

} from '../constants/optionsConstants';

import {
  __TYPENAME_PRE_OPTIONS,
  __TYPENAME_MODIFIERS,
  __TYPENAME_SENTENCE_CONTEXT,
} from '../constants/typeNameConstants';


const LESSON_VARIATION = {
  L001: [ T ],
  L002: [ T ],
  L003: [ T ],
  L004: [ T ],
  L005: [ T ],
  L006: [ T ],
  L007: [ T ],

  L008: [ T ],
  L009: [ WA_TS, MO_TS ],
  L010: [ GA_TS ],
  L011: [ WA_TS, GA_TS ],
  L012: [ WA_TS, MO_TS, GA_TS ],
  L013: [ WA_TS, MO_TS, GA_TS ],

  L014: [ V ],  
  L015: [ V ],
  L016: [ V ],
  L017: [ V ],
  L018: [ V ],

  L019: [ WO_SV ],
  L020: [ WO_SV ],
  L021: [ NI_SV ],
  L022: [ DE_SV ],
  L023: [ WO_SV, NI_SV ],
  L024: [ NI_SV, DE_SV ],
  L025: [ DE_SV, WO_SV ],
  L026: [ DE_SV, WO_SV ],

  L027: [ ],
  L028: [ ],
  L029: [ ],
  L030: [ ],
  L031: [ ],
  L032: [ ],
  L033: [ ],
  L034: [ ],
  L035: [ ],
  L036: [ ],
  L037: [ ],
  L038: [ ],
  L039: [ ],
  L040: [ ],
  // L041:
  // L042:
  // L043:
};


const LESSON_POLITENESS = {
  L001: [ POLITENESS_CASUAL ],
  L002: [ POLITENESS_CASUAL ],
  L003: [ POLITENESS_CASUAL ],
  L004: [ POLITENESS_CASUAL ],
  L005: [ POLITENESS_CASUAL ],
  L006: [ POLITENESS_CASUAL ],
  L007: [ POLITENESS_CASUAL ],

  L008: [ POLITENESS_CASUAL ],
  L009: [ POLITENESS_CASUAL ],
  L010: [ POLITENESS_CASUAL ],
  L011: [ POLITENESS_CASUAL ],
  L012: [ POLITENESS_CASUAL ],
  L013: [ POLITENESS_CASUAL ],

  L014: [ POLITENESS_CASUAL ],
  L015: [ POLITENESS_CASUAL ],
  L016: [ POLITENESS_CASUAL ],
  L017: [ POLITENESS_CASUAL ],
  L018: [ POLITENESS_CASUAL ],

  L019: [ POLITENESS_CASUAL ],
  L020: [ POLITENESS_CASUAL ],
  L021: [ POLITENESS_CASUAL ],
  L022: [ POLITENESS_CASUAL ],
  L023: [ POLITENESS_CASUAL ],
  L024: [ POLITENESS_CASUAL ],
  L025: [ POLITENESS_CASUAL ],
  L026: [ POLITENESS_CASUAL ],
  L027: [ POLITENESS_CASUAL ],
  L028: [ POLITENESS_CASUAL ],
  L029: [ POLITENESS_CASUAL ],
  L030: [ POLITENESS_CASUAL ],
  L031: [ POLITENESS_CASUAL ],
  
  L032: [ POLITENESS_CASUAL ],
  L033: [ POLITENESS_CASUAL ],
  L034: [ POLITENESS_CASUAL ],
  L035: [ POLITENESS_CASUAL ],
  L036: [ POLITENESS_CASUAL ],
  L037: [ POLITENESS_CASUAL ],
  L038: [ POLITENESS_CASUAL ],
  L039: [ POLITENESS_CASUAL ],
  L040: [ POLITENESS_CASUAL ],
  // L041:
  // L042:
  // L043:
};


const LESSON_POLARITY = {
  L001: [ POLARITY_POSITIVE ],
  L002: [ POLARITY_POSITIVE ],
  L003: [ POLARITY_POSITIVE ],
  L004: [ POLARITY_POSITIVE ],
  L005: [ POLARITY_POSITIVE ],
  L006: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L007: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],

  L008: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L009: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L010: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L011: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L012: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L013: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],

  L014: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L015: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L016: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L017: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L018: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L019: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L020: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L021: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L022: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L023: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L024: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L025: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L026: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],

  L027: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L028: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L029: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L030: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L031: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L032: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L033: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L034: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L035: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L036: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L037: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L038: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L039: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  L040: [ POLARITY_POSITIVE, POLARITY_NEGATIVE ],
  // L041:
  // L042:
  // L043:
};


const LESSON_QUESTION = {
  L001: [ NOT_QUESTION ],
  L002: [ NOT_QUESTION ],
  L003: [ NOT_QUESTION ],
  L004: [ NOT_QUESTION ],
  L005: [ NOT_QUESTION ],
  L006: [ NOT_QUESTION ],
  L007: [ NOT_QUESTION ],
  L008: [ NOT_QUESTION ],
  L009: [ NOT_QUESTION ],
  L010: [ NOT_QUESTION ],
  L011: [ NOT_QUESTION ],
  L012: [ NOT_QUESTION ],
  L013: [ NOT_QUESTION ],
  L014: [ NOT_QUESTION ],
  L015: [ NOT_QUESTION ],
  L016: [ NOT_QUESTION ],
  L017: [ NOT_QUESTION ],
  L018: [ NOT_QUESTION ],
  L019: [ NOT_QUESTION ],
  L020: [ NOT_QUESTION ],
  L021: [ NOT_QUESTION ],
  L022: [ NOT_QUESTION ],
  L023: [ NOT_QUESTION ],
  L024: [ NOT_QUESTION ],
  L025: [ NOT_QUESTION ],
  L026: [ NOT_QUESTION ],
  L027: [ NOT_QUESTION ],
  L028: [ NOT_QUESTION ],
  L029: [ NOT_QUESTION ],
  L030: [ NOT_QUESTION ],
  L031: [ NOT_QUESTION ],
  L032: [ NOT_QUESTION ],
  L033: [ NOT_QUESTION ],
  L034: [ NOT_QUESTION ],
  L035: [ NOT_QUESTION ],
  L036: [ NOT_QUESTION ],
  L037: [ NOT_QUESTION ],
  L038: [ NOT_QUESTION ],
  L039: [ NOT_QUESTION ],
  L040: [ NOT_QUESTION ],
  // L041:
  // L042:
  // L043:
};


const LESSON_GENDER = {
  L001: [ GENDER_FEMININE ],
  L002: [ GENDER_MASCULINE ],
  L003: [ GENDER_MASCULINE ],
  L004: [ GENDER_MASCULINE ],
  L005: [ GENDER_MASCULINE ],
  L006: [ GENDER_MASCULINE ],
  L007: [ GENDER_MASCULINE ],
  L008: [ GENDER_MASCULINE ],
  L009: [ GENDER_MASCULINE ],
  L010: [ GENDER_MASCULINE ],
  L011: [ GENDER_MASCULINE ],
  L012: [ GENDER_MASCULINE ],
  L013: [ GENDER_MASCULINE ],
  L014: [ GENDER_MASCULINE ],
  L015: [ GENDER_MASCULINE ],
  L016: [ GENDER_MASCULINE ],
  L017: [ GENDER_MASCULINE ],
  L018: [ GENDER_MASCULINE ],
  L019: [ GENDER_MASCULINE ],
  L020: [ GENDER_MASCULINE ],
  L021: [ GENDER_MASCULINE ],
  L022: [ GENDER_MASCULINE ],
  L023: [ GENDER_MASCULINE ],
  L024: [ GENDER_MASCULINE ],
  L025: [ GENDER_MASCULINE ],
  L026: [ GENDER_MASCULINE ],
  L027: [ GENDER_MASCULINE ],
  L028: [ GENDER_MASCULINE ],
  L029: [ GENDER_MASCULINE ],
  L030: [ GENDER_MASCULINE ],
  L031: [ GENDER_MASCULINE ],
  L032: [ GENDER_MASCULINE ],
  L033: [ GENDER_MASCULINE ],
  L034: [ GENDER_MASCULINE ],
  L035: [ GENDER_MASCULINE ],
  L036: [ GENDER_MASCULINE ],
  L037: [ GENDER_MASCULINE ],
  L038: [ GENDER_MASCULINE ],
  L039: [ GENDER_MASCULINE ],
  L040: [ GENDER_MASCULINE ],
  // L041:
  // L042:
  // L043:
};

const LESSON_THEMES = {
  L001: [ THEMES_DEFAULT ],
  L002: [ THEMES_DEFAULT ],
  L003: [ THEMES_DEFAULT ],
  L004: [ THEMES_DEFAULT ],
  L005: [ THEMES_DEFAULT ],
  L006: [ THEMES_DEFAULT ],
  L007: [ THEMES_DEFAULT ],
  L008: [ THEMES_DEFAULT ],
  L009: [ THEMES_DEFAULT ],
  L010: [ THEMES_DEFAULT ],
  L011: [ THEMES_DEFAULT ],
  L012: [ THEMES_DEFAULT ],
  L013: [ THEMES_DEFAULT ],
  L014: [ THEMES_DEFAULT ],
  L015: [ THEMES_DEFAULT ],
  L016: [ THEMES_DEFAULT ],
  L017: [ THEMES_DEFAULT ],
  L018: [ THEMES_DEFAULT ],
  L019: [ THEMES_DEFAULT ],
  L020: [ THEMES_DEFAULT ],
  L021: [ THEMES_DEFAULT ],
  L022: [ THEMES_DEFAULT ],
  L023: [ THEMES_DEFAULT ],
  L024: [ THEMES_DEFAULT ],
  L025: [ THEMES_DEFAULT ],
  L026: [ THEMES_DEFAULT ],
  L027: [ THEMES_DEFAULT ],
  L028: [ THEMES_DEFAULT ],
  L029: [ THEMES_DEFAULT ],
  L030: [ THEMES_DEFAULT ],
  L031: [ THEMES_DEFAULT ],
  L032: [ THEMES_DEFAULT ],
  L033: [ THEMES_DEFAULT ],
  L034: [ THEMES_DEFAULT ],
  L035: [ THEMES_DEFAULT ],
  L036: [ THEMES_DEFAULT ],
  L037: [ THEMES_DEFAULT ],
  L038: [ THEMES_DEFAULT ],
  L039: [ THEMES_DEFAULT ],
  L040: [ THEMES_DEFAULT ],
  // L041:
  // L042:
  // L043:
};

// const LESSON_THEMES = {
//   L001: [ THEMES_L001 ],
//   L002: [ THEMES_L002 ],
//   L003: [ THEMES_L003 ],
//   L004: [ THEMES_L004 ],
//   L005: [ THEMES_L005 ],
//   L006: [ THEMES_L006 ],
//   L007: [ THEMES_L007 ],
//   L008: [ THEMES_L008 ],
//   L009: [ THEMES_L009 ],
//   L010: [ THEMES_L010 ],
//   L011: [ THEMES_L011 ],
//   L012: [ THEMES_L012 ],
//   L013: [ THEMES_L013 ],
//   L014: [ THEMES_L014 ],
//   L015: [ THEMES_L015 ],
//   L016: [ THEMES_L016 ],
//   L017: [ THEMES_L017 ],
//   L018: [ THEMES_L018 ],
//   L019: [ THEMES_L019 ],
//   L020: [ THEMES_L020 ],
//   L021: [ THEMES_L021 ],
//   L022: [ THEMES_L022 ],
//   L023: [ THEMES_L023 ],
//   L024: [ THEMES_L024 ],
//   L025: [ THEMES_L025 ],
//   L026: [ THEMES_L026 ],
//   L027: [ THEMES_L027 ],
//   L028: [ THEMES_L028 ],
//   L029: [ THEMES_L029 ],
//   L030: [ THEMES_L030 ],
//   L031: [ THEMES_L031 ],
//   L032: [ THEMES_L032 ],
//   L033: [ THEMES_L033 ],
//   L034: [ THEMES_L034 ],
//   L035: [ THEMES_L035 ],
//   L036: [ THEMES_L036 ],
//   L037: [ THEMES_L037 ],
//   L038: [ THEMES_L038 ],
//   L039: [ THEMES_L039 ],
//   L040: [ THEMES_L040 ],
//   // L041:
//   // L042:
//   // L043:
// };





export const LESSON_PRE_OPTIONS = {
  L001: { variationArray: LESSON_VARIATION.L001, politenessArray: LESSON_POLITENESS.L001, polarityArray: LESSON_POLARITY.L001, questionArray: LESSON_QUESTION.L001, genderArray: LESSON_GENDER.L001, themesArray: LESSON_THEMES.L001, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L002: { variationArray: LESSON_VARIATION.L002, politenessArray: LESSON_POLITENESS.L002, polarityArray: LESSON_POLARITY.L002, questionArray: LESSON_QUESTION.L002, genderArray: LESSON_GENDER.L002, themesArray: LESSON_THEMES.L002, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L003: { variationArray: LESSON_VARIATION.L003, politenessArray: LESSON_POLITENESS.L003, polarityArray: LESSON_POLARITY.L003, questionArray: LESSON_QUESTION.L003, genderArray: LESSON_GENDER.L003, themesArray: LESSON_THEMES.L003, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L004: { variationArray: LESSON_VARIATION.L004, politenessArray: LESSON_POLITENESS.L004, polarityArray: LESSON_POLARITY.L004, questionArray: LESSON_QUESTION.L004, genderArray: LESSON_GENDER.L004, themesArray: LESSON_THEMES.L004, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L005: { variationArray: LESSON_VARIATION.L005, politenessArray: LESSON_POLITENESS.L005, polarityArray: LESSON_POLARITY.L005, questionArray: LESSON_QUESTION.L005, genderArray: LESSON_GENDER.L005, themesArray: LESSON_THEMES.L005, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L006: { variationArray: LESSON_VARIATION.L006, politenessArray: LESSON_POLITENESS.L006, polarityArray: LESSON_POLARITY.L006, questionArray: LESSON_QUESTION.L006, genderArray: LESSON_GENDER.L006, themesArray: LESSON_THEMES.L006, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L007: { variationArray: LESSON_VARIATION.L007, politenessArray: LESSON_POLITENESS.L007, polarityArray: LESSON_POLARITY.L007, questionArray: LESSON_QUESTION.L007, genderArray: LESSON_GENDER.L007, themesArray: LESSON_THEMES.L007, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L008: { variationArray: LESSON_VARIATION.L008, politenessArray: LESSON_POLITENESS.L008, polarityArray: LESSON_POLARITY.L008, questionArray: LESSON_QUESTION.L008, genderArray: LESSON_GENDER.L008, themesArray: LESSON_THEMES.L008, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L009: { variationArray: LESSON_VARIATION.L009, politenessArray: LESSON_POLITENESS.L009, polarityArray: LESSON_POLARITY.L009, questionArray: LESSON_QUESTION.L009, genderArray: LESSON_GENDER.L009, themesArray: LESSON_THEMES.L009, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L010: { variationArray: LESSON_VARIATION.L010, politenessArray: LESSON_POLITENESS.L010, polarityArray: LESSON_POLARITY.L010, questionArray: LESSON_QUESTION.L010, genderArray: LESSON_GENDER.L010, themesArray: LESSON_THEMES.L010, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L011: { variationArray: LESSON_VARIATION.L011, politenessArray: LESSON_POLITENESS.L011, polarityArray: LESSON_POLARITY.L011, questionArray: LESSON_QUESTION.L011, genderArray: LESSON_GENDER.L011, themesArray: LESSON_THEMES.L011, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L012: { variationArray: LESSON_VARIATION.L012, politenessArray: LESSON_POLITENESS.L012, polarityArray: LESSON_POLARITY.L012, questionArray: LESSON_QUESTION.L012, genderArray: LESSON_GENDER.L012, themesArray: LESSON_THEMES.L012, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L013: { variationArray: LESSON_VARIATION.L013, politenessArray: LESSON_POLITENESS.L013, polarityArray: LESSON_POLARITY.L013, questionArray: LESSON_QUESTION.L013, genderArray: LESSON_GENDER.L013, themesArray: LESSON_THEMES.L013, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L014: { variationArray: LESSON_VARIATION.L014, politenessArray: LESSON_POLITENESS.L014, polarityArray: LESSON_POLARITY.L014, questionArray: LESSON_QUESTION.L014, genderArray: LESSON_GENDER.L014, themesArray: LESSON_THEMES.L014, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L015: { variationArray: LESSON_VARIATION.L015, politenessArray: LESSON_POLITENESS.L015, polarityArray: LESSON_POLARITY.L015, questionArray: LESSON_QUESTION.L015, genderArray: LESSON_GENDER.L015, themesArray: LESSON_THEMES.L015, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L016: { variationArray: LESSON_VARIATION.L016, politenessArray: LESSON_POLITENESS.L016, polarityArray: LESSON_POLARITY.L016, questionArray: LESSON_QUESTION.L016, genderArray: LESSON_GENDER.L016, themesArray: LESSON_THEMES.L016, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L017: { variationArray: LESSON_VARIATION.L017, politenessArray: LESSON_POLITENESS.L017, polarityArray: LESSON_POLARITY.L017, questionArray: LESSON_QUESTION.L017, genderArray: LESSON_GENDER.L017, themesArray: LESSON_THEMES.L017, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L018: { variationArray: LESSON_VARIATION.L018, politenessArray: LESSON_POLITENESS.L018, polarityArray: LESSON_POLARITY.L018, questionArray: LESSON_QUESTION.L018, genderArray: LESSON_GENDER.L018, themesArray: LESSON_THEMES.L018, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L019: { variationArray: LESSON_VARIATION.L019, politenessArray: LESSON_POLITENESS.L019, polarityArray: LESSON_POLARITY.L019, questionArray: LESSON_QUESTION.L019, genderArray: LESSON_GENDER.L019, themesArray: LESSON_THEMES.L019, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L020: { variationArray: LESSON_VARIATION.L020, politenessArray: LESSON_POLITENESS.L020, polarityArray: LESSON_POLARITY.L020, questionArray: LESSON_QUESTION.L020, genderArray: LESSON_GENDER.L020, themesArray: LESSON_THEMES.L020, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L021: { variationArray: LESSON_VARIATION.L021, politenessArray: LESSON_POLITENESS.L021, polarityArray: LESSON_POLARITY.L021, questionArray: LESSON_QUESTION.L021, genderArray: LESSON_GENDER.L021, themesArray: LESSON_THEMES.L021, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L022: { variationArray: LESSON_VARIATION.L022, politenessArray: LESSON_POLITENESS.L022, polarityArray: LESSON_POLARITY.L022, questionArray: LESSON_QUESTION.L022, genderArray: LESSON_GENDER.L022, themesArray: LESSON_THEMES.L022, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L023: { variationArray: LESSON_VARIATION.L023, politenessArray: LESSON_POLITENESS.L023, polarityArray: LESSON_POLARITY.L023, questionArray: LESSON_QUESTION.L023, genderArray: LESSON_GENDER.L023, themesArray: LESSON_THEMES.L023, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L024: { variationArray: LESSON_VARIATION.L024, politenessArray: LESSON_POLITENESS.L024, polarityArray: LESSON_POLARITY.L024, questionArray: LESSON_QUESTION.L024, genderArray: LESSON_GENDER.L024, themesArray: LESSON_THEMES.L024, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L025: { variationArray: LESSON_VARIATION.L025, politenessArray: LESSON_POLITENESS.L025, polarityArray: LESSON_POLARITY.L025, questionArray: LESSON_QUESTION.L025, genderArray: LESSON_GENDER.L025, themesArray: LESSON_THEMES.L025, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L026: { variationArray: LESSON_VARIATION.L026, politenessArray: LESSON_POLITENESS.L026, polarityArray: LESSON_POLARITY.L026, questionArray: LESSON_QUESTION.L026, genderArray: LESSON_GENDER.L026, themesArray: LESSON_THEMES.L026, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L027: { variationArray: LESSON_VARIATION.L027, politenessArray: LESSON_POLITENESS.L027, polarityArray: LESSON_POLARITY.L027, questionArray: LESSON_QUESTION.L027, genderArray: LESSON_GENDER.L027, themesArray: LESSON_THEMES.L027, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L028: { variationArray: LESSON_VARIATION.L028, politenessArray: LESSON_POLITENESS.L028, polarityArray: LESSON_POLARITY.L028, questionArray: LESSON_QUESTION.L028, genderArray: LESSON_GENDER.L028, themesArray: LESSON_THEMES.L028, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L029: { variationArray: LESSON_VARIATION.L029, politenessArray: LESSON_POLITENESS.L029, polarityArray: LESSON_POLARITY.L029, questionArray: LESSON_QUESTION.L029, genderArray: LESSON_GENDER.L029, themesArray: LESSON_THEMES.L029, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L030: { variationArray: LESSON_VARIATION.L030, politenessArray: LESSON_POLITENESS.L030, polarityArray: LESSON_POLARITY.L030, questionArray: LESSON_QUESTION.L030, genderArray: LESSON_GENDER.L030, themesArray: LESSON_THEMES.L030, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L031: { variationArray: LESSON_VARIATION.L031, politenessArray: LESSON_POLITENESS.L031, polarityArray: LESSON_POLARITY.L031, questionArray: LESSON_QUESTION.L031, genderArray: LESSON_GENDER.L031, themesArray: LESSON_THEMES.L031, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L032: { variationArray: LESSON_VARIATION.L032, politenessArray: LESSON_POLITENESS.L032, polarityArray: LESSON_POLARITY.L032, questionArray: LESSON_QUESTION.L032, genderArray: LESSON_GENDER.L032, themesArray: LESSON_THEMES.L032, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L033: { variationArray: LESSON_VARIATION.L033, politenessArray: LESSON_POLITENESS.L033, polarityArray: LESSON_POLARITY.L033, questionArray: LESSON_QUESTION.L033, genderArray: LESSON_GENDER.L033, themesArray: LESSON_THEMES.L033, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L034: { variationArray: LESSON_VARIATION.L034, politenessArray: LESSON_POLITENESS.L034, polarityArray: LESSON_POLARITY.L034, questionArray: LESSON_QUESTION.L034, genderArray: LESSON_GENDER.L034, themesArray: LESSON_THEMES.L034, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L035: { variationArray: LESSON_VARIATION.L035, politenessArray: LESSON_POLITENESS.L035, polarityArray: LESSON_POLARITY.L035, questionArray: LESSON_QUESTION.L035, genderArray: LESSON_GENDER.L035, themesArray: LESSON_THEMES.L035, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L036: { variationArray: LESSON_VARIATION.L036, politenessArray: LESSON_POLITENESS.L036, polarityArray: LESSON_POLARITY.L036, questionArray: LESSON_QUESTION.L036, genderArray: LESSON_GENDER.L036, themesArray: LESSON_THEMES.L036, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L037: { variationArray: LESSON_VARIATION.L037, politenessArray: LESSON_POLITENESS.L037, polarityArray: LESSON_POLARITY.L037, questionArray: LESSON_QUESTION.L037, genderArray: LESSON_GENDER.L037, themesArray: LESSON_THEMES.L037, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L038: { variationArray: LESSON_VARIATION.L038, politenessArray: LESSON_POLITENESS.L038, polarityArray: LESSON_POLARITY.L038, questionArray: LESSON_QUESTION.L038, genderArray: LESSON_GENDER.L038, themesArray: LESSON_THEMES.L038, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L039: { variationArray: LESSON_VARIATION.L039, politenessArray: LESSON_POLITENESS.L039, polarityArray: LESSON_POLARITY.L039, questionArray: LESSON_QUESTION.L039, genderArray: LESSON_GENDER.L039, themesArray: LESSON_THEMES.L039, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  L040: { variationArray: LESSON_VARIATION.L040, politenessArray: LESSON_POLITENESS.L040, polarityArray: LESSON_POLARITY.L040, questionArray: LESSON_QUESTION.L040, genderArray: LESSON_GENDER.L040, themesArray: LESSON_THEMES.L040, __typename: __TYPENAME_PRE_OPTIONS } as Util.PreOptions, 
  // L041:
  // L042:
  // L043:
};



