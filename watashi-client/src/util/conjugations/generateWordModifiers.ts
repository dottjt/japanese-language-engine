// import { 
//   filterSpecifcWordNoun,
//   // getRandomWordViaCategory,
//   // getRandomWordViaPrimaryType,
// } from '../generators';

// import {
//   T_ADJ,
//   T_ADV,

//   S_ADJ,
//   S_ADV,

//   T_NO1,
//   T_NO2,
//   T_NO3,
//   S_NO1,
//   S_NO2,
//   S_NO3,

//   TOPIC_NO,
//   SUBJECT_NO,
//   TOPIC_ADJECTIVE,
//   TOPIC_ADVERB,
//   SUBJECT_ADJECTIVE,
//   SUBJECT_ADVERB,
// } from '../constants/modifiersConstants';

// const createWordModifier = (type: string, word: Util.Noun): Util.WordModifier => ({ type, word });

// const generateWordModifiers = (nouns: Util.Noun[], verbs: Util.Verb[], modifiers: Util.Modifiers): Util.SentenceModifierWords => {

//   const modifiersKeys = Object.keys(modifiers);
//   const sentenceModifierWords: Util.SentenceModifierWords = {
//     tNo: {
//       no1: undefined,
//       no2: undefined,
//       no3: undefined,
//     },
//     sNo: {
//       no1: undefined,
//       no2: undefined,
//       no3: undefined,
//     },

//     tAdj: undefined,
//     tAdv: undefined,

//     sAdj: undefined,
//     sAdv: undefined,
//   };

//   const word = filterSpecifcWordNoun(nouns, 'person');

//   modifiersKeys.forEach((modifierField: string): void => {
//     if (modifiers[modifierField] !== undefined) {
//       if (modifierField === TOPIC_NO) {
//         switch(modifiers[modifierField]) { 
//           case T_NO1: sentenceModifierWords.tNo = { no1: createWordModifier(T_NO1, word) }; return;
//           case T_NO2: sentenceModifierWords.tNo = { no1: createWordModifier(T_NO2, word), no2: createWordModifier(T_NO2, word) }; return;
//           case T_NO3: sentenceModifierWords.tNo = { no1: createWordModifier(T_NO3, word), no2: createWordModifier(T_NO3, word), no3: createWordModifier(T_NO3, word) }; return;
//         }
//       }
//       if (modifierField === SUBJECT_NO) {
//         switch(modifiers[modifierField]) {
//           case S_NO1: sentenceModifierWords.sNo = { no1: createWordModifier(T_NO1, word) }; return;
//           case S_NO2: sentenceModifierWords.sNo = { no1: createWordModifier(T_NO2, word), no2: createWordModifier(T_NO2, word) }; return;
//           case S_NO3: sentenceModifierWords.sNo = { no1: createWordModifier(T_NO3, word), no2: createWordModifier(T_NO3, word), no3: createWordModifier(T_NO3, word) }; return;
//         }
//       }
//       if (modifierField === TOPIC_ADJECTIVE) {
//         sentenceModifierWords.tAdj = createWordModifier(T_ADJ, word); return;
//       }
//       if (modifierField === TOPIC_ADVERB) {
//         sentenceModifierWords.tAdv = createWordModifier(T_ADV, word); return;
//       }
//       if (modifierField === SUBJECT_ADJECTIVE) {
//         sentenceModifierWords.sAdj = createWordModifier(S_ADJ, word); return;
//       }
//       if (modifierField === SUBJECT_ADVERB) {
//         sentenceModifierWords.sAdv = createWordModifier(S_ADV, word); return;
//       }
//     }
//   });
//   return sentenceModifierWords;
// };

// export default generateWordModifiers;
export default [];