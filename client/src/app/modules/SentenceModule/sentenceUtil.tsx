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

  NOUN_ENGLISH,
  VERB_ENGLISH,

  NOUN_JAPANESE,
  VERB_JAPANESE,

  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,
  CONJUGATION_TYPE_NOUN_JAPANESE,
  CONJUGATION_TYPE_VERB_JAPANESE,
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



// SENTENCE ENGLISH && JAPANESE 

const tagArray = (array: string[], tag: string): Util.WordArrayElement[] => array.map(word => ({ word, tag }));

export const createTaggedArrayEnglish = (phrase: Util.ConjugatedEnglishWord): Util.WordArrayElement[] => {
  const polarity = tagArray(phrase.polarity.wordArray, phrase.polarity.wordType);

  switch(phrase.type) {
    case CONJUGATION_TYPE_NOUN_ENGLISH: 
      const tense = tagArray(phrase.tense.wordArray, phrase.tense.wordType);
      const indefiniteArticle = tagArray(phrase.indefiniteArticle.wordArray, phrase.indefiniteArticle.wordType);
      const noun = tagArray([phrase.word.english.present], NOUN_ENGLISH);
      return tense.concat(polarity).concat(indefiniteArticle).concat(noun); 

    case CONJUGATION_TYPE_VERB_ENGLISH: 
      const verb = tagArray([phrase.word.english.present], VERB_ENGLISH);
      return polarity.concat(verb);
  }
  throw new Error(createError('SentenceModule/sentenceUtil', 'createTaggedArrayEnglish', `${phrase.type} does not exist.`));    
};


export const createTaggedArrayJapanese = (phrase: Util.ConjugatedJapaneseWord): Util.WordArrayElement[] => {
  switch(phrase.type) {
    case CONJUGATION_TYPE_NOUN_JAPANESE: 
      const noun = tagArray([phrase.word.japanese.kanji], NOUN_JAPANESE);
      const nounCategoryEnding = tagArray(phrase.nounCategoryEnding.wordArray, phrase.nounCategoryEnding.wordType);
      const nounEnding = tagArray(phrase.nounEnding.wordArray, phrase.nounEnding.wordType);
      const nounTopicParticle = tagArray(phrase.nounTopicParticle.wordArray, phrase.nounTopicParticle.wordType);

      return noun.concat(nounCategoryEnding).concat(nounEnding).concat(nounTopicParticle);

    case CONJUGATION_TYPE_VERB_JAPANESE: 
      const verb = tagArray(phrase.conjugatedVerb.wordArray, VERB_JAPANESE);

      return verb;
  }
  throw new Error(createError('SentenceModule/sentenceUtil', 'createTaggedArrayJapanese', `${phrase.type} does not exist.`));    
};
