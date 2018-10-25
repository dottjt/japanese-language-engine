// RESOURCES

export const RESOURCE_TAE_KIM = 'Tae Kim\'s Guide to Learning Japanese';
export const RESOURCE_WASABI = 'Wasabi';
export const RESOURCE_TAE_KIM_WEBSITE = 'http://www.guidetojapanese.org';
export const RESOURCE_WASABI_WEBSITE = 'https://www.wasabi-jpn.com';

import {
  randomArrayElement,
} from '../functions';

import {
  T,

  WA_TS,
  MO_TS,
  GA_TS,

  V,

  WO_SV,
  NI_SV,
  DE_SV,

  POLITENESS_CASUAL,

  // HAS_QUESTION,
  NOT_QUESTION,
} from './optionsConstants';

import {
} from './wordConstants';

import generateExercises from '../conjugations/generateExercises';

import { 
  politenessArray,
  polarityArray,
  tenseArray,
  genderArray,
  questionArray,

  politenessArrayLength,
  polarityArrayLength,
  tenseArrayLength,
  questionArrayLength,
  
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS ,
} from './optionsConstants';

const createRes = (resourceType: string, urlString: string): Util.Resource => {
  if (resourceType === RESOURCE_TAE_KIM) {
    return {
      url: `${RESOURCE_TAE_KIM_WEBSITE}${urlString}`,
      website: RESOURCE_TAE_KIM_WEBSITE,
    }
  } else {
    return {
      url: `${RESOURCE_WASABI_WEBSITE}${urlString}`,
      website: RESOURCE_WASABI_WEBSITE,
    }
  };
};

export const LESSON_PATH = {
  WELCOME: '/welcome',
  CONTENTS: '/contents',
  PREREQ: '/prerequisites',
  
  L001: '/japanese-noun-statements',
  L002: '/japanese-wa-and-mo-noun-statements',
  L003: '/japanese-ga-noun-statements',
  L004: '/japanese-wa-and-mo-and-ga-noun-statements',

  L005: '/japanese-verb-statements',
  L006: '/japanese-wo-verb-statements',
  L007: '/japanese-ni-verb-statements',
  L008: '/japanese-de-verb-statements',
  L009: '/japanese-wo-and-ni-and-de-verb-statements',
  // L010: 
  // L011: 
  // L012: 
  // L013: 
  // L014: 
}

export const LESSON_TITLE = {
  WELCOME: 'Welcome',
  CONTENTS: 'Contents',
  PREREQ: 'Prerequisites',

  L001: 'Noun statements',
  L002: 'は and も statements',
  L003: 'が noun statements',
  L004: 'は and も and が statements',

  L005: 'Verb statements',
  L006: 'を verb statements',
  L007: 'に verb statements',
  L008: 'で verb statements',
  L009: 'を and に and で statements',

  // L010: 
  // L011: 
  // L012: 
  // L013: 
  // L014: 
  // L018: 
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
};

const LESSON_EXPLANATION = {
  L001: ['Nouns when used by themselves can be used as a kind of declaration of it\'s existence.', 'Unlike in English where one must use additional grammatical constructs in order to declare/describe something i.e. "this is a car" in Japanese it is as simple as declaring the noun.', 'You will find this pattern repeated throughout the language, especially when it comes to verbs which we will get to soon.', 'We will also learn basic Japanese noun conjugations which include present tense, past tense, present negative and past negative.'],
  L002: ['In this lesson we utilise the は and も particles in order to describe nouns.', 'They are both designed to introduce the topic of a sentence. The topic is what the sentence is refering to.', 'In simple terms they introduce what the speaker is refering to.'],
  L003: ['From the perspective of English, the は and が particles are almost identical and more-or-less translate into the same thing.', 'Of course, this is only from the perspective of English translation. In Japanese they serve quite different purposes.'],
  L004: [''],
  L005: [''],
  L006: [''],
  L007: [''],
  L008: [''],
  L009: [''],
  // L010: '',
  // L011: '',
  // L012: '',
  // L013: '',
  // L014
  // L015
  // L016
  // L017
  // L018
  // L019
  // L020
  // L021
};

const LESSON_VARIATION = {
  L001: T, // T
  L002: [ WA_TS, MO_TS ], // WA_TS, MO_TS
  L003: GA_TS, // GA_TS
  L004: [ WA_TS, MO_TS, GA_TS ], // WA_TS, MO_TS, GA_TS
  L005: V,
  L006: WO_SV,
  L007: NI_SV,
  L008: DE_SV,
  L009: [ WA_TS, MO_TS, GA_TS ],
  // L010: 
  // L011: 
  // L012: 
  // L013: 
  // L014:
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
};



const LESSON_RESOURCES = {
  L001: [ createRes(RESOURCE_TAE_KIM, '/learn/complete/stateofbeing'), createRes(RESOURCE_TAE_KIM, '/learn/grammar/stateofbeing'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-nouns-state-of-being/') ], // T
  L002: [ createRes(RESOURCE_TAE_KIM, '/learn/'), createRes(RESOURCE_TAE_KIM, '/learn/grammar/particlesintro'), createRes(RESOURCE_WASABI, '/japanese-grammar/topic-particle-wa-and-particle-mo/') ], // WA_TS, MO_TS
  L003: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-adjectives-with-particle-ga/') ], // GA_TS
  L004: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/subjects-of-japanese-verbs-with-the-particles-wa-and-ga/') ], // WA_TS, MO_TS, GA_TS
  L005: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-verbs-u-verbs-and-ru-verbs-and-conjugation/') ], // V
  L006: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/objects-of-japanese-verbs-with-particles-o-ni-and-to/') ], // WO_SV
  L007: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/objects-of-japanese-verbs-with-particles-o-ni-and-to/') ], // NI_SV
  L008: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // DE_SV
  L009: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WO_SV, NI_SV, DE_SV
  // L010: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // NI_SV
  // L011: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // NI_SV_QUESTION
  // L012: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // DE_SV
  // L013: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // DE_SV_QUESTION
  // L014:
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
}

const randomVariationValue = (variationArray: string[]): string => variationArray[randomArrayElement(variationArray.length)];
const randomPolitenessValue = (): string => politenessArray[randomArrayElement(politenessArrayLength)];
const randomPolarityValue = (): string =>  polarityArray[randomArrayElement(polarityArrayLength)];
const randomTenseValue = (): string => tenseArray[randomArrayElement(tenseArrayLength)];
const randomQuestionValue = (): string => questionArray[randomArrayElement(questionArrayLength)];

const createLessonOptions = ( variation: string | string[], politeness?: string, polarity?: string, tense?: string, question?: string, gender?: string): Util.Options => {
 
  return {
    __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
    variation: typeof variation === 'string' ? variation : randomVariationValue(variation),
    question: question ? question : randomQuestionValue(),
    politeness: politeness ? politeness : randomPolitenessValue(),
    polarity: polarity ? polarity : randomPolarityValue(),
    tense: tense ? tense : randomTenseValue(),
    gender: gender ? gender : genderArray[0],  
  }
};



export const LESSON_OPTIONS = {
  L001: () => createLessonOptions(LESSON_VARIATION.L001, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // T
  L002: () => createLessonOptions(LESSON_VARIATION.L002, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // WA_TS, MO_TS
  L003: () => createLessonOptions(LESSON_VARIATION.L003, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // GA_TS
  L004: () => createLessonOptions(LESSON_VARIATION.L004, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // WA_TS, MO_TS, GA_TS
  L005: () => createLessonOptions(LESSON_VARIATION.L005, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // V
  L006: () => createLessonOptions(LESSON_VARIATION.L006, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // WO_SV
  L007: () => createLessonOptions(LESSON_VARIATION.L007, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // NI_SV
  L008: () => createLessonOptions(LESSON_VARIATION.L008, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // DE_SV
  L009: () => createLessonOptions(LESSON_VARIATION.L009, POLITENESS_CASUAL, randomPolarityValue(), randomTenseValue(), NOT_QUESTION ), // WO_SV, NI_SV, DE_SV
  // L010: () => 
  // L011: () => 
  // L012: () => 
  // L013: () => 
  // L014:
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
};

export const L001 = {
  LESSON_TITLE: LESSON_TITLE.L001,
  LESSON_OPTIONS: LESSON_OPTIONS.L001,
  LESSON_VARIATION: LESSON_TITLE.L001,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L001,
  LESSON_RESOURCES: LESSON_RESOURCES.L001,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L001(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L001, nouns, /* LESSON_WORDS.L001(nouns) as any,*/ LESSON_OPTIONS.L001, 10),
};

export const L002 = {
  LESSON_TITLE: LESSON_TITLE.L002,
  LESSON_OPTIONS: LESSON_OPTIONS.L002,
  LESSON_VARIATION: LESSON_TITLE.L002,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L002,
  LESSON_RESOURCES: LESSON_RESOURCES.L002,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L002(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L002, nouns, /* LESSON_WORDS.L002(nouns) as any,*/ LESSON_OPTIONS.L002, 10),
};

export const L003 = {
  LESSON_TITLE: LESSON_TITLE.L003,
  LESSON_OPTIONS: LESSON_OPTIONS.L003,
  LESSON_VARIATION: LESSON_TITLE.L003,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L003,
  LESSON_RESOURCES: LESSON_RESOURCES.L003,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L003(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L003, nouns, /* LESSON_WORDS.L003(nouns) as any,*/ LESSON_OPTIONS.L003, 10),
};

export const L004 = {
  LESSON_TITLE: LESSON_TITLE.L004,
  LESSON_OPTIONS: LESSON_OPTIONS.L004,
  LESSON_VARIATION: LESSON_TITLE.L004,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L004,
  LESSON_RESOURCES: LESSON_RESOURCES.L004,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L004(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L004, nouns, /* LESSON_WORDS.L004(nouns) as any,*/ LESSON_OPTIONS.L004, 10),
};

export const L005 = {
  LESSON_TITLE: LESSON_TITLE.L005,
  LESSON_OPTIONS: LESSON_OPTIONS.L005,
  LESSON_VARIATION: LESSON_TITLE.L005,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L005,
  LESSON_RESOURCES: LESSON_RESOURCES.L005,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L005(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L005, nouns, /* LESSON_WORDS.L005(nouns) as any,*/ LESSON_OPTIONS.L005, 10),
};

export const L006 = {
  LESSON_TITLE: LESSON_TITLE.L006,
  LESSON_OPTIONS: LESSON_OPTIONS.L006,
  LESSON_VARIATION: LESSON_TITLE.L006,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L006,
  LESSON_RESOURCES: LESSON_RESOURCES.L006,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L006(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L006, nouns, /* LESSON_WORDS.L006(nouns) as any,*/ LESSON_OPTIONS.L006, 10),
};

export const L007 = {
  LESSON_TITLE: LESSON_TITLE.L007,
  LESSON_OPTIONS: LESSON_OPTIONS.L007,
  LESSON_VARIATION: LESSON_TITLE.L007,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L007,
  LESSON_RESOURCES: LESSON_RESOURCES.L007,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L007(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L007, nouns, /* LESSON_WORDS.L007(nouns) as any,*/ LESSON_OPTIONS.L007, 10),
};

export const L008 = {
  LESSON_TITLE: LESSON_TITLE.L008,
  LESSON_OPTIONS: LESSON_OPTIONS.L008,
  LESSON_VARIATION: LESSON_TITLE.L008,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L008,
  LESSON_RESOURCES: LESSON_RESOURCES.L008,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L008(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L008, nouns, /* LESSON_WORDS.L008(nouns) as any,*/ LESSON_OPTIONS.L008, 10),
};

export const L009 = {
  LESSON_TITLE: LESSON_TITLE.L009,
  LESSON_OPTIONS: LESSON_OPTIONS.L009,
  LESSON_VARIATION: LESSON_TITLE.L009,  
  LESSON_EXPLANATION: LESSON_EXPLANATION.L009,
  LESSON_RESOURCES: LESSON_RESOURCES.L009,
  // LESSON_WORDS: (nouns: Util.Word[]) => LESSON_WORDS.L009(nouns),
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_VARIATION.L009, nouns, /* LESSON_WORDS.L009(nouns) as any,*/ LESSON_OPTIONS.L009, 10),
};

// export const L010 = {
//   LESSON_TITLE: LESSON_TITLE.L010,
//   LESSON_OPTIONS: LESSON_OPTIONS.L010,
//   LESSON_VARIATION: LESSON_TITLE.L010,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L010,
//   LESSON_RESOURCES: LESSON_RESOURCES.L010,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L010, nouns, /* LESSON_WORDS.L010(nouns) as any,*/ LESSON_OPTIONS.L010, 10),
// };

// export const L011 = {
//   LESSON_TITLE: LESSON_TITLE.L011,
//   LESSON_OPTIONS: LESSON_OPTIONS.L011,
//   LESSON_VARIATION: LESSON_TITLE.L011,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L011,
//   LESSON_RESOURCES: LESSON_RESOURCES.L011,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L011, nouns, /* LESSON_WORDS.L011(nouns) as any,*/ LESSON_OPTIONS.L011, 10),
// };

// export const L012 = {
//   LESSON_TITLE: LESSON_TITLE.L012,
//   LESSON_OPTIONS: LESSON_OPTIONS.L012,
//   LESSON_VARIATION: LESSON_TITLE.L012,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L012,
//   LESSON_RESOURCES: LESSON_RESOURCES.L012,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L012, nouns, /* LESSON_WORDS.L012(nouns) as any,*/ LESSON_OPTIONS.L012, 10),
// };

// export const L013 = {
//   LESSON_TITLE: LESSON_TITLE.L013,
//   LESSON_OPTIONS: LESSON_OPTIONS.L013,
//   LESSON_VARIATION: LESSON_TITLE.L013,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L013,
//   LESSON_RESOURCES: LESSON_RESOURCES.L013,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L013, nouns, /* LESSON_WORDS.L013(nouns) as any,*/ LESSON_OPTIONS.L013, 10),
// };

// export const L014 = {
//   LESSON_TITLE: LESSON_TITLE.L014,
//   LESSON_OPTIONS: LESSON_OPTIONS.L014,
//   LESSON_VARIATION: LESSON_TITLE.L014,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L014,
//   LESSON_RESOURCES: LESSON_RESOURCES.L014,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L014, nouns, /* LESSON_WORDS.L014(nouns) as any,*/ LESSON_OPTIONS.L014, 10),
// };

// export const L015 = {
//   LESSON_TITLE: LESSON_TITLE.L015,
//   LESSON_OPTIONS: LESSON_OPTIONS.L015,
//   LESSON_VARIATION: LESSON_TITLE.L015,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L015,
//   LESSON_RESOURCES: LESSON_RESOURCES.L015,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L015, nouns, /* LESSON_WORDS.L015(nouns) as any,*/ LESSON_OPTIONS.L015, 10),
// };

// export const L016 = {
//   LESSON_TITLE: LESSON_TITLE.L016,
//   LESSON_OPTIONS: LESSON_OPTIONS.L016,
//   LESSON_VARIATION: LESSON_TITLE.L016,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L016,
//   LESSON_RESOURCES: LESSON_RESOURCES.L016,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L016, nouns, /* LESSON_WORDS.L016(nouns) as any,*/ LESSON_OPTIONS.L016, 10),
// };

// export const L017 = {
//   LESSON_TITLE: LESSON_TITLE.L017,
//   LESSON_OPTIONS: LESSON_OPTIONS.L017,
//   LESSON_VARIATION: LESSON_TITLE.L017,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L017,
//   LESSON_RESOURCES: LESSON_RESOURCES.L017,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L017, nouns, /* LESSON_WORDS.L017(nouns) as any,*/ LESSON_OPTIONS.L017, 10),
// };

// export const L018 = {
//   LESSON_TITLE: LESSON_TITLE.L018,
//   LESSON_OPTIONS: LESSON_OPTIONS.L018,
//   LESSON_VARIATION: LESSON_TITLE.L018,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L018,
//   LESSON_RESOURCES: LESSON_RESOURCES.L018,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L018, nouns, /* LESSON_WORDS.L018(nouns) as any,*/ LESSON_OPTIONS.L018, 10),
// };

// export const L019 = {
//   LESSON_TITLE: LESSON_TITLE.L019,
//   LESSON_OPTIONS: LESSON_OPTIONS.L019,
//   LESSON_VARIATION: LESSON_TITLE.L019,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L019,
//   LESSON_RESOURCES: LESSON_RESOURCES.L019,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L019, nouns, /* LESSON_WORDS.L019(nouns) as any,*/ LESSON_OPTIONS.L019, 10),
// };

// export const L020 = {
//   LESSON_TITLE: LESSON_TITLE.L020,
//   LESSON_OPTIONS: LESSON_OPTIONS.L020,
//   LESSON_VARIATION: LESSON_VARIATION.L020,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L020,
//   LESSON_RESOURCES: LESSON_RESOURCES.L020,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_VARIATION.L020, nouns, /* LESSON_WORDS.L020(nouns) as any,*/ LESSON_OPTIONS.L020, 10),
// };








// export const LESSON_WORDS = {
//   L001: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: filterSpecifcWord(nouns, 'person') }), // T
//   L002: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // WA_TS, MO_TS
//   L003: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // GA_TS
//   L004: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // WA_TS, MO_TS, GA_TS
//   L005: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: {                                              verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB) }, }), // V
//   L006: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: filterSpecifcWord(nouns, 'person'), verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB) }, }), // WO_SV
//   L007: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: getRandomWordViaCategory(nouns, CATEGORY_LOCATION), verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB) }, }), // NI_SV
//   L008: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: getRandomWordViaCategory(nouns, CATEGORY_LOCATION), verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB) }, }), // DE_SV
//   L009: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: filterSpecifcWord(nouns, 'person'), verb: getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB) }, }), // WO_SV, NI_SV, DE_SV
//   // L010: 
//   // L011:
//   // L012: 
//   // L013:
//   // L014:
//   // L015:
//   // L016:
//   // L017:
//   // L018:
//   // L019:
//   // L020:
//   // L021:
// };
