// import {  
//   MODIFIERS_NA,
// } from '../constants/modifiersConstants';

// import {
//   __TYPENAME_PRE_MODIFIERS,
// } from '../constants/typeNameConstants';

// NOTE: This will be incomplete/incorrect
// export const LESSON_PRE_MODIFIERS = {
//   L001: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T
//   L002: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // WA_TS, MO_TS
//   L003: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // GA_TS
//   L004: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // WA_TS, GA_TS
//   L005: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // WA_TS, MO_TS, GA_TS
//   L006: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // V
//   L007: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // V
//   L008: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // V
//   L009: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // WO_SV
//   L010: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // NI_SV
//   L011: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // DE_SV
//   L012: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // WO_SV, NI_SV
//   L013: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // NI_SV, DE_SV
//   L014: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // DE_SV, WO_SV
//   L015: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // WO_SV, NI_SV, DE_SV
//   L016: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // KARA_SV
//   L017: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // MADE_SV
//   L018: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // NA - T_NO
//   L019: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADJ
//   L020: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L021: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L022: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L023: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L024: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L025: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L026: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L027: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L028: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L029: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L030: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L031: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L032: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L033: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L034: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L035: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L036: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L037: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L038: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L039: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L040: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L041: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L042: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L043: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L044: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L045: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L046: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L047: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L048: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L049: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L050: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV
//   L051: { topicAdjArray: [MODIFIERS_NA], topicAdverbArray: [MODIFIERS_NA], subjectAdjectiveArray: [MODIFIERS_NA], subjectAdverbArray: [MODIFIERS_NA], __typename: __TYPENAME_PRE_MODIFIERS } as Util.PreModifiers, // T - T_ADV

// };


export default 'yay'