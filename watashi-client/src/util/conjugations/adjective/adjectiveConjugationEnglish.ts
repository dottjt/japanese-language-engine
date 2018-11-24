import {
  createError,
} from '../../functions';

// import {
//   indefiniteArticlePermissionsEnglish,
// } from './adjectivePermissions';

// import {
//   T,
//   WA_TS,
//   MO_TS,
//   GA_TS,

//   // WO_SV,
//   // NI_SV,
//   // DE_SV,

//   // POLARITY_POSITIVE,
//   POLARITY_NEGATIVE,

//   // TENSE_PRESENT,
//   // TENSE_PAST,
// } from '../../constants/optionsConstants';

import {
  returnSentenceParts,
  createEmptyWord,
  createWord,  
} from '../utilConjugation';

import {
  __TYPENAME_CONJUGATED_ENGLISH_NOUN,
} from '../../constants/typeNameConstants';

import {
  ENGLISH_INDEFINITE_ARTICLE,

  // ADJECTIVE_TYPE_INDEFINITE_ARTICLE,
  ADJECTIVE_TYPE_DESCRIPTIVE,
  ADJECTIVE_TYPE_QUANTITATIVE,
  ADJECTIVE_TYPE_DEMONSTRATIVE,
  ADJECTIVE_TYPE_POSSESSIVE,
  ADJECTIVE_TYPE_INTERROGATIVE,
  ADJECTIVE_TYPE_DISTRIBUTIVE,
} from '../../constants/wordConstants';

import {
  CONTEXT_POV_SELF_SINGULAR,
  CONTEXT_POV_YOU_SINGULAR,
  CONTEXT_POV_HESHEIT_SINGULAR,
  CONTEXT_POV_WE_PLURAL,
  CONTEXT_POV_YOU_PLURAL,
  CONTEXT_POV_THEYTHOSE_PLURAL,

  CONTEXT_PROXIMITY_NEAR,
  CONTEXT_PROXIMITY_FAR,
} from '../../constants/contextConstants';


// https://www.fluentu.com/blog/english/english-adjectives/

export const adjectiveConjugationIndefiniteArticleEnglish = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  const { topic, /*subject, verb*/ } = returnSentenceParts(sentenceWords);

  // NOTE: Need a query to check if what is being spoken about is specific, or general in order to know whether to use the or a. 
  // a new sentenceContext, essentially. 

  // const permissions = indefiniteArticlePermissionsEnglish(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  // Simply put, when you’re talking about something general, use a and an. When you’re speaking about something specific, use the. “A cat” can be used to refer to any cat in the world. “The cat” is used to refer to the cat that just walked by.

  // if (permissions) {
    const vowels = 'aeiou';
    // NOTE: This is not correct, because we don't know if it will be a topic or not. Will have to provide more context. 
    const firstLetter = topic.nounEnglish.singular[0];

    if (vowels.includes(firstLetter)) {
      return createWord(['an'], ENGLISH_INDEFINITE_ARTICLE);
    } else {
      return createWord(['a'], ENGLISH_INDEFINITE_ARTICLE);
    };    
  // };

  // if ("SPECIFIC") {
  //   return createWord(['the'], ENGLISH_INDEFINITE_ARTICLE);
  // }

  // return createEmptyWord(ENGLISH_INDEFINITE_ARTICLE);
};

export const adjectiveConjugationDescriptiveEnglish = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  // const { topic, /*subject, verb*/ } = returnSentenceParts(sentenceWords);

  
  switch('TODO') {
    // case 'TODO': return createWord([ positive ], ADJECTIVE_TYPE_DESCRIPTIVE); 
    // case 'TODO': return createWord([ comparative ], ADJECTIVE_TYPE_DESCRIPTIVE);
    // case 'TODO': return createWord([ superlative ], ADJECTIVE_TYPE_DESCRIPTIVE);
  }

  return createEmptyWord(ADJECTIVE_TYPE_DESCRIPTIVE);
};



export const adjectiveConjugationQuantitativeEnglish = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {

  // In other words, they answer the question “how much?” or “how many?” 
  // numbers
  // general words

  // switch() {
    
  // }
  // MANY
  // one
  // many 
  // whole
  // few 
  // half
  // a lot 

  return createWord([''], ADJECTIVE_TYPE_QUANTITATIVE);
};

export const adjectiveConjugationDemonstrativeEnglish = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {

  // Demonstrative adjectives always come before the word they’re modifying.
  // A demonstrative adjective describes “which” noun or pronoun you’re referring to. 

  // Sometimes, like when you’re responding to a question, you can leave off the noun being described and only use the adjective. For example, if someone asks you how many cakes you want to buy you can respond: “I want to buy two cakes,” or you can just say: “I want to buy two.”

  const topicProximity = sentenceContext.selectedTopicProximity;
  const subjectQuantity = sentenceContext.selectedSubjectQuantity;

  switch(`${topicProximity}${subjectQuantity}`) {
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_POV_HESHEIT_SINGULAR}`:
      return createWord(['this'], ADJECTIVE_TYPE_DEMONSTRATIVE);

    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_POV_HESHEIT_SINGULAR}`:
      return createWord(['that'], ADJECTIVE_TYPE_DEMONSTRATIVE);
  
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return createWord(['these'], ADJECTIVE_TYPE_DEMONSTRATIVE);
    
    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return createWord(['those'], ADJECTIVE_TYPE_DEMONSTRATIVE);
  }

  throw new Error(createError('adjectiveConjugationEnglish.tsx', 'adjectiveConjugationDemonstrativeEnglish', 'no value'));
};
  


export const adjectiveConjugationPossessiveEnglish = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {

  // Possessive adjectives show possession. 
  // They describe to whom a thing belongs. 
  // Some of the most common possessive adjectives include:

  // NOTE: I may possibly need another sentence context field to determine who possesses the subject. 

  const selectedEventPOV = sentenceContext.selectedEventPOV;

  switch(selectedEventPOV) {
    case CONTEXT_POV_SELF_SINGULAR: return createWord(['my'], ADJECTIVE_TYPE_POSSESSIVE); 
    case CONTEXT_POV_YOU_SINGULAR: return createWord(['his'], ADJECTIVE_TYPE_POSSESSIVE); 
    case CONTEXT_POV_HESHEIT_SINGULAR: return createWord(['her'], ADJECTIVE_TYPE_POSSESSIVE); 
    case CONTEXT_POV_WE_PLURAL: return createWord(['their'], ADJECTIVE_TYPE_POSSESSIVE); 
    case CONTEXT_POV_YOU_PLURAL: return createWord(['your'], ADJECTIVE_TYPE_POSSESSIVE); 
    case CONTEXT_POV_THEYTHOSE_PLURAL: return createWord(['our'], ADJECTIVE_TYPE_POSSESSIVE); 
  }

  // All these adjectives, except the word his, can only be used before a noun. You can’t just say “That’s my,” you have to say “That’s my pen.” When you want to leave off the noun or pronoun being modified, use these possessive adjectives instead:

  // Mine
  // His
  // Hers
  // Theirs
  // Yours
  // Ours
  
  // For example, even though saying “That’s my” is incorrect, saying “That’s mine” is perfectly fine.
  throw new Error(createError('adjectiveConjugationEnglish.tsx', 'adjectiveConjugationDemonstrativeEnglish', 'no value'));
};
    
  
export const adjectiveConjugationInterrogativeEnglish = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {

  // permissions is question. 

  // Interrogative adjectives interrogate, meaning that they ask a question. 
  // These adjectives are always followed by a noun or a pronoun, and are used to form questions. 
  // The interrogative adjectives are:

  // const selectedEventPOV = sentenceContext.selectedSelectedEventPOV;

  // switch() {

  // }

  return createWord([''], ADJECTIVE_TYPE_INTERROGATIVE);


  //   Which — Asks to make a choice between options.
  // What — Asks to make a choice (in general).
  // Whose — Asks who something belongs to.


  // Other question words, like “who” or “how,” aren’t adjectives since they don’t modify nouns. 
  // For example, you can say “whose coat is this?” but you can’t say “who coat?”


  // Which, what and whose are only considered adjectives if they’re immediately followed by a noun. 
  // The word which is an adjective in this sentence: “Which color is your favorite?” 
  // But not in this one: “Which is your favorite color?”

};
  


export const adjectiveConjugationDistributiveEnglish = (sentenceWords: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {

  // Distributive adjectives describe specific members out of a group. These adjectives are used to single out one or more individual items or people. Some of the most common distributive adjectives include:

  // These adjectives are always followed by the noun or pronoun they’re modifying.

  

  // Each — Every single one of a group (used to speak about group members individually).
  // Every — Every single one of a group (used to make generalizations).
  // Either — One between a choice of two.
  // Neither — Not one or the other between a choice of two.
  // Any — One or some things out of any number of choices. This is also used when the choice is irrelevant, like: “it doesn’t matter, I’ll take any of them.”
  

  // switch() {

  // }
  return createWord([''], ADJECTIVE_TYPE_DISTRIBUTIVE);

};
  