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

  ENGLISH,
  VERB_ENGLISH,
  // VERB_ENGLISH_CONJUGATION,
  ENGLISH_CONJUGATION,
  ENGLISH_POLARITY,
  // ENGLISH_INDEFINITE_ARTICLE,

  JAPANESE,
  // VERB_JAPANESE,
  JAPANESE_CONJUGATION,
  // JAPANESE_TOPIC_PARTICLE,
  // JAPANESE_CATEGORY_ENDING,


  CONJUGATION_TYPE_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,
  CONJUGATION_TYPE_JAPANESE,
  CONJUGATION_TYPE_VERB_JAPANESE,
  VERB_ENGLISH_CONJUGATION,
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

const convertPolitenessIntoValue = (politeness: string): string | undefined => {
  switch(politeness) {
    case POLITENESS_CASUAL: return 'Casual Politeness';
    case POLITENESS_FORMAL: return 'Formal Politeness';
    case POLITENESS_HUMBLE: return 'Humble Politeness';
    case POLITENESS_HONORIFIC: return 'Honorific Politeness';
    default: return undefined;
  }
};

const convertQuestionIntoValue = (question: string): string | undefined => 
  question === HAS_QUESTION ? 'Question' : undefined;

export const determineStatTypes = (options: Util.Options) => {
  const { politeness, polarity, tense, question, /* variation, gender */ } = options;
    
  const politenessValue = convertPolitenessIntoValue(politeness);
  const polarityTenseValue = determinePolarityTense(polarity, tense);
  const questionValue = convertQuestionIntoValue(question);

  return {
    polarityTenseValue,
    questionValue,
    politenessValue,
  }
};

export const changeSentenceStats = (client: any, sentenceStatsFields: any): void => {
  try {
    client.writeData({
      data: { sentenceStats: { __typename: __TYPENAME_SENTENCE_STATS, ...sentenceStatsFields }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
    });
  } catch(error) {
    throw new Error(createError('SentenceModule/SentenceStats', 'changeSentenceStats', `Error: ${error}. Unable to update local graphql cache.`));    
  }
};

export const convertSentenceStatsEnglish = (sentenceStats: Util.SentenceStats, exerciseIndex: number, tag: string): string | undefined => {
  if (sentenceStats && exerciseIndex === sentenceStats.selectedExerciseNumber) {
    if (sentenceStats.polarityTenseHover && 
        tag === ENGLISH_POLARITY ||
        tag === ENGLISH_CONJUGATION ||
        tag === VERB_ENGLISH_CONJUGATION) {
          return 'red';
    }
    // english does not have any politness values
    // if (sentenceStats.politenessHover) {
    //       return 'green';
    // }
    if (sentenceStats.questionHover && 
        tag === ENGLISH_CONJUGATION) {
          return 'blue';
    }
    // VERB_ENGLISH, VERB_ENGLISH_CONJUGATION, ENGLISH, ENGLISH_CONJUGATION, ENGLISH_POLARITY, ENGLISH_INDEFINITE_ARTICLE
  }
  return undefined;
};

export const convertSentenceStatsJapanese = (sentenceStats: Util.SentenceStats, exerciseIndex: number, tag: string): string | undefined => {
  if (sentenceStats && exerciseIndex === sentenceStats.selectedExerciseNumber) {
    if (sentenceStats.polarityTenseHover && 
        tag === JAPANESE_CONJUGATION) {
          return 'red';
    }
    // if (sentenceStats.politenessHover && 
    //     tag === JAPANESE_CONJUGATION) {
    //       return 'green';
    // }
    if (sentenceStats.questionHover && 
        tag === JAPANESE_CONJUGATION) {
          return 'blue';
    }
    // VERB_JAPANESE, VERB_JAPANESE_CONJUGATION, JAPANESE, JAPANESE_CONJUGATION, JAPANESE_TOPIC_PARTICLE, JAPANESE_CATEGORY_ENDING

  }
  return undefined;
};

// SENTENCE ENGLISH && JAPANESE 

const tagArray = (array: string[], tag: string): Util.WordArrayElement[] => array.map(word => ({ word, tag }));

export const createTaggedArrayEnglish = (phrase: Util.ConjugatedEnglishWord): Util.WordArrayElement[] => {
  const polarity = tagArray(phrase.polarity.wordArray, phrase.polarity.wordType);
  const tense = tagArray(phrase.tense.wordArray, phrase.tense.wordType);

  switch(phrase.type) {
    case CONJUGATION_TYPE_ENGLISH: 
      const indefiniteArticle = tagArray(phrase.indefiniteArticle.wordArray, phrase.indefiniteArticle.wordType);
      const noun = tagArray([phrase.word.english.present], ENGLISH);
      return tense.concat(polarity).concat(indefiniteArticle).concat(noun); 

    case CONJUGATION_TYPE_VERB_ENGLISH: 
      const verb = tagArray([phrase.word.english.present], VERB_ENGLISH);
      return tense.concat(polarity).concat(verb);
  }
  throw new Error(createError('SentenceModule/sentenceUtil', 'createTaggedArrayEnglish', `${phrase.type} does not exist.`));    
};


export const createTaggedArrayJapanese = (phrase: Util.ConjugatedJapaneseWord): Util.WordArrayElement[] => {
  const polarity = tagArray(phrase.polarity.wordArray, phrase.polarity.wordType);

  switch(phrase.type) {
    case CONJUGATION_TYPE_JAPANESE: 
      const noun = tagArray([phrase.word.japanese.kanji], JAPANESE);
      const categoryEnding = tagArray(phrase.categoryEnding.wordArray, phrase.categoryEnding.wordType);
      const tense = tagArray(phrase.tense.wordArray, phrase.tense.wordType);
      const topicParticle = tagArray(phrase.topicParticle.wordArray, phrase.topicParticle.wordType);

      return noun.concat(categoryEnding).concat(polarity).concat(tense).concat(topicParticle);

    case CONJUGATION_TYPE_VERB_JAPANESE: 
      return polarity;
  }
  throw new Error(createError('SentenceModule/sentenceUtil', 'createTaggedArrayJapanese', `${phrase.type} does not exist.`));    
};
