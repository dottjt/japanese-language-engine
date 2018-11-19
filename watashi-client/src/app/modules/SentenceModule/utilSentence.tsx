import {
  createError,
} from '../../../util/functions';

import {
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  POLITENESS_HUMBLE,
  POLITENESS_HONORIFIC,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,

  HAS_QUESTION,

  // SENTENCE_TYPE_TOPIC,

  JAPANESE_TOPIC,
  JAPANESE_SUBJECT,
  JAPANESE_VERB_STEM,
  JAPANESE_TENSE,
  JAPANESE_POLARITY,
  // JAPANESE_TOPIC_PARTICLE,
  // JAPANESE_CATEGORY_ENDING,

  ENGLISH_TOPIC,
  ENGLISH_SUBJECT,
  ENGLISH_VERB,
  ENGLISH_POLARITY,
  ENGLISH_TENSE,
  ENGLISH_INDEFINITE_ARTICLE,

  // CONJUGATION_TYPE_NOUN_ENGLISH,
  // CONJUGATION_TYPE_VERB_ENGLISH,
  // CONJUGATION_TYPE_PREPOSITION_ENGLISH,

  // CONJUGATION_TYPE_NOUN_JAPANESE,
  // CONJUGATION_TYPE_VERB_JAPANESE,

  T,
  WA_TS,
  MO_TS,
  GA_TS,
  V,
  WO_SV,
  NI_SV,
  DE_SV,
} from '../../../util/constants/optionsConstants';

import {
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from '../../../util/constants/typeNameConstants';

// SENTENCE STATS

const determinePolarityTense = (polarity: string, tense: string): string | undefined => {
  switch(`${polarity}${tense}`) {
    case `${POLARITY_POSITIVE}${TENSE_PRESENT}`: return 'Positive Present';
    case `${POLARITY_POSITIVE}${TENSE_PAST}`: return 'Positive Past';
    case `${POLARITY_NEGATIVE}${TENSE_PRESENT}`: return 'Negative Present';
    case `${POLARITY_NEGATIVE}${TENSE_PAST}`: return 'Negative Past';
    default: return undefined;
  }
};

export const convertPolitenessIntoValue = (politeness: string): string | undefined => {
  switch(politeness) {
    case POLITENESS_CASUAL: return 'Casual Politeness';
    case POLITENESS_FORMAL: return 'Formal Politeness';
    case POLITENESS_HUMBLE: return 'Humble Politeness';
    case POLITENESS_HONORIFIC: return 'Honorific Politeness';
    default: return undefined;
  }
};

const determineTopicSubjectVerb = (variation: string): { topic: boolean, subject: boolean, verb: boolean } => {
  switch(variation) {
    case T:     return { topic: true, subject: false, verb: false };
    case WA_TS: return { topic: true, subject: true, verb: false };
    case MO_TS: return { topic: true, subject: true, verb: false };
    case GA_TS: return { topic: true, subject: true, verb: false };
    case V:     return { topic: false, subject: false, verb: true };
    case WO_SV: return { topic: false, subject: true, verb: true };
    case NI_SV: return { topic: false, subject: true, verb: true };
    case DE_SV: return { topic: false, subject: true, verb: true };
  }
  throw new Error(createError('utilSentence.tsx', 'determineTopicSubjectVerb', `${variation} does not exist.`));    
};

const convertQuestionIntoValue = (question: string): string | undefined => 
  question === HAS_QUESTION ? 'Question' : undefined;

export const determineStatTypes = (options: Util.Options) => {
  const { politeness, polarity, tense, question, selectedVariation, /* variation, gender */ } = options;
    
  const politenessValue = convertPolitenessIntoValue(politeness);
  const polarityTenseValue = determinePolarityTense(polarity, tense);
  const questionValue = convertQuestionIntoValue(question);
  const { topic, subject, verb } = determineTopicSubjectVerb(selectedVariation);

  return {
    polarityTenseValue,
    questionValue,
    politenessValue,
    topic,
    subject,
    verb,
  }
};

export const changeSentenceStats = (client: any, sentenceStatsFields: any): void => {
  try {
    client.writeData({
      data: { sentenceStats: { __typename: __TYPENAME_SENTENCE_STATS, ...sentenceStatsFields }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
    });
  } catch(error) {
    throw new Error(createError('utilSentence.tsx', 'changeSentenceStats', `Error: ${error}. Unable to update local graphql cache.`));    
  }
};

export const convertSentenceStatsEnglish = (sentenceStats: Util.SentenceStats, exerciseIndex: number, tag: string): string | undefined => {
  if (sentenceStats && exerciseIndex === sentenceStats.selectedExerciseNumber) {
    if (sentenceStats.topicHover &&
       (tag === ENGLISH_TOPIC /*|| tag === ENGLISH_TENSE */)) {
      return 'yellow';
    }
    if (sentenceStats.subjectHover &&
       (tag === ENGLISH_SUBJECT || tag === ENGLISH_POLARITY || tag === ENGLISH_INDEFINITE_ARTICLE)) {
      return 'yellow';      
    }
    if (sentenceStats.verbHover && tag === ENGLISH_VERB) {
      return 'yellow';      
    }
    if ((sentenceStats.polarityHover && sentenceStats.tenseHover) &&
        (tag === ENGLISH_POLARITY || tag === ENGLISH_TENSE)) {
          return 'red';
    }
    if (sentenceStats.questionHover) {
      return 'blue';
    }
  }
  return undefined;
};

export const convertSentenceStatsJapanese = (sentenceStats: Util.SentenceStats, exerciseIndex: number, tag: string): string | undefined => {
  if (sentenceStats && exerciseIndex === sentenceStats.selectedExerciseNumber) {
    if (sentenceStats.topicHover && 
       (tag === JAPANESE_TOPIC)) {
      return 'yellow';
    }
    if (sentenceStats.subjectHover && 
       (tag === JAPANESE_SUBJECT || tag === JAPANESE_TENSE)) {
      return 'yellow';      
    }
    if (sentenceStats.verbHover && tag === JAPANESE_VERB_STEM) {
      return 'yellow';      
    }
    if ((sentenceStats.tenseHover && sentenceStats.polarityHover) &&
        (tag === JAPANESE_TENSE || tag === JAPANESE_POLARITY)) {
          return 'red';
    }
    if (sentenceStats.questionHover) {
      return 'blue';
    }
  }
  return undefined;
};

// SENTENCE ENGLISH && JAPANESE 

// const tagArray = (array: string[], tag: string): Util.WordArrayElement[] => array.map(word => ({ word, tag }));

// export const createTaggedArrayEnglish = (phrase: Util.ConjugatedEnglishNoun | Util.ConjugatedEnglishVerb | Util.ConjugatedEnglishPreposition): Util.WordArrayElement[] => {
  
//   switch(phrase.type) {
//     case CONJUGATION_TYPE_NOUN_ENGLISH:
//       const nounEnglish = phrase as Util.ConjugatedEnglishNoun;
//       const nounDeclension = nounEnglish.sentenceType === SENTENCE_TYPE_TOPIC ? tagArray(nounEnglish.nounDeclension.wordArray, JAPANESE_TOPIC) : tagArray(nounEnglish.nounDeclension.wordArray, JAPANESE_SUBJECT);
//       const nounTense = tagArray(nounEnglish.nounTense.wordArray, nounEnglish.nounTense.wordType);
//       const nounPolarity = tagArray(nounEnglish.nounPolarity.wordArray, nounEnglish.nounPolarity.wordType);
//       const nounIndefiniteArticle = tagArray(nounEnglish.nounIndefiniteArticle.wordArray, nounEnglish.nounIndefiniteArticle.wordType);
//       return nounTense.concat(nounPolarity).concat(nounIndefiniteArticle).concat(nounDeclension); 

//     case CONJUGATION_TYPE_VERB_ENGLISH: 
//       const verbEnglish = phrase as Util.ConjugatedEnglishVerb;
//       const verbPolarity = tagArray(verbEnglish.verbPolarity.wordArray, verbEnglish.verbPolarity.wordType);  
//       const verbConjugation = tagArray(verbEnglish.verbConjugation.wordArray, verbEnglish.verbConjugation.wordType);
//       return verbConjugation.concat(verbPolarity);

//     case CONJUGATION_TYPE_PREPOSITION_ENGLISH: 
//       const preposition = phrase as Util.ConjugatedEnglishPreposition;
      
//       return tagArray(preposition.preposition.wordArray, preposition.preposition.wordType);

//   }
//   throw new Error(createError('SentenceModule/sentenceUtil', 'createTaggedArrayEnglish', `${phrase.type} does not exist.`));    
// };


// export const createTaggedArrayJapanese = (phrase: Util.ConjugatedJapaneseNoun | Util.ConjugatedJapaneseVerb): Util.WordArrayElement[] => {
  
//   switch(phrase.type) {
//     case CONJUGATION_TYPE_NOUN_JAPANESE: 
//       const nounJapanese = phrase as Util.ConjugatedJapaneseNoun;
//       const nounDeclension = nounJapanese.sentenceType === SENTENCE_TYPE_TOPIC ? tagArray(nounJapanese.nounDeclension.wordArray, JAPANESE_TOPIC) : tagArray(nounJapanese.nounDeclension.wordArray, JAPANESE_SUBJECT);
//       const nounPolarity = tagArray(nounJapanese.nounPolarity.wordArray, nounJapanese.nounPolarity.wordType);
//       const nounCategoryEnding = tagArray(nounJapanese.nounCategoryEnding.wordArray, nounJapanese.nounCategoryEnding.wordType);
//       const nounTense = tagArray(nounJapanese.nounTense.wordArray, nounJapanese.nounTense.wordType);
//       const nounTopicParticle = tagArray(nounJapanese.nounTopicParticle.wordArray, nounJapanese.nounTopicParticle.wordType);
//       return nounDeclension.concat(nounCategoryEnding).concat(nounPolarity).concat(nounTense).concat(nounTopicParticle);

//     case CONJUGATION_TYPE_VERB_JAPANESE: 
//     const verbJapanese = phrase as Util.ConjugatedJapaneseVerb;
//     const verbStem = tagArray(verbJapanese.verbStem.wordArray, verbJapanese.verbStem.wordType);
//     const verbPolarity = tagArray(verbJapanese.verbPolarity.wordArray, verbJapanese.verbPolarity.wordType);
//     console.log(verbStem.concat(verbPolarity));
//     return verbStem.concat(verbPolarity);
//   }
//   throw new Error(createError('utilSentence.tsx', 'createTaggedArrayJapanese', `${phrase.type} does not exist.`));    
// };
