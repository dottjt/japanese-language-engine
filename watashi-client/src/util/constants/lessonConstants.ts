// RESOURCES

export const RESOURCE_TAE_KIM = 'Tae Kim\'s Guide to Learning Japanese';
export const RESOURCE_WASABI = 'Wasabi';
export const RESOURCE_TAE_KIM_WEBSITE = 'http://www.guidetojapanese.org';
export const RESOURCE_WASABI_WEBSITE = 'https://www.wasabi-jpn.com';

import {
  randomArrayElement,
} from '../functions';

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
  // RANDOM_QUESTION,
  // RANDOM_QUESTION,

} from './optionsConstants';

import {
} from './wordConstants';


import {
  topicNoArray,
  subjectNoArray,
  topicAdjectiveArray,
  topicAdverbArray,
  subjectAdjectiveArray,
  subjectAdverbArray,
  
  MODIFIERS_NA,
} from './modifiersConstants';

import {
  __TYPENAME_OPTIONS,
  __TYPENAME_MODIFIERS,
} from './typeNameConstants';

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
  L001: '/japanese-noun-congjuations',
  L002: '/japanese-wa-and-mo-noun-statements',
  L003: '/japanese-ga-noun-statements',
  L004: '/japanese-wa-vs-ga-noun-statements',
  L005: '/japanese-wa-vs-mo-vs-ga-noun-statements',

  L006: '/japanese-ru-verb-conjugations',
  L007: '/japanese-u-verb-conjugations',
  L008: '/japanese-irregular-verb-conjugations',
  L009: '/japanese-wo-verb-statements',
  L010: '/japanese-ni-verb-statements',
  L011: '/japanese-de-verb-statements',
  L012: '/japanese-wo-vs-ni-verb-statements',
  L013: '/japanese-ni-vs-de-verb-statements',
  L014: '/japanese-de-vs-wo-verb-statements',
  L015: '/japanese-wo-vs-ni-vs-de-verb-statements',

  L016: '/japanese-location-from',
  L017: '/japanese-location-up-until', // NOTE: Will probably want a kara-made combination. Will have to introduce clause types. 
  L018: '/japanese-no-modifiers',
  L019: '/japanese-adjective-modifiers',
  L020: '/japanese-adverb-modifiers',
  // L021: 
  // L022: 
  // L023: 
  // L024: 
  // L025: 
  // L026: 
  // L027: 
}

export const lessonPathArray = [LESSON_PATH.L001, LESSON_PATH.L002, LESSON_PATH.L003, LESSON_PATH.L004, LESSON_PATH.L005, LESSON_PATH.L006, LESSON_PATH.L007, LESSON_PATH.L008, LESSON_PATH.L009 ];

export const LESSON_TITLE = {
  L001: 'Noun conjugations',

  L002: 'は and も noun statements',
  L003: 'が noun statements',
  L004: 'は vs が noun statements',
  L005: 'は vs も vs が noun statements',

  L006: 'る verb conjugations',
  L007: 'う verb conjugations',
  L008: 'Irregular verb conjugations',

  L009: 'を verb statements',
  L010: 'に verb statements',
  L011: 'で verb statements',
  L012: 'を vs に verb statements',
  L013: 'に vs で verb statements',
  L014: 'で vs を verb statements',
  L015: 'を vs に vs で verb statements',

  L016: 'から from statement',
  L017: 'まで until statement',

  L018: 'の noun modifiers',
  L019: 'Japanese adjective modifiers',
  L020: 'Japanese adverb modifiers',
  // L021: 
  // L022: 
  // L023: 
  // L024: 
  // L025: 
  // L026: 
  // L027: 
};


export const LESSON_DESCRIPTION = {
  L001: 'Noun conjugations',

  L002: 'は and も noun statements',
  L003: 'が noun statements',
  L004: 'は vs が noun statements',
  L005: 'は vs も vs が noun statements',

  L006: 'る verb conjugations',
  L007: 'う verb conjugations',
  L008: 'Irregular verb conjugations',

  L009: 'を verb statements',
  L010: 'に verb statements',
  L011: 'で verb statements',
  L012: 'を vs に verb statements',
  L013: 'に vs で verb statements',
  L014: 'で vs を verb statements',
  L015: 'を vs に vs で verb statements',

  L016: 'から from statement',
  L017: 'まで until statement',

  L018: 'の noun modifiers',
  L019: 'Japanese adjective modifiers',
  L020: 'Japanese adverb modifiers',
  // L021: 
  // L022: 
  // L023: 
  // L024: 
  // L025: 
  // L026: 
  // L027: 
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
  L010: [''], 
  L011: [''], 
  L012: [''], 
  L013: [''], 
  L014: [''],
  L015: [''],
  L016: [''],
  L017: [''],
  L018: [''],
  L019: [''],
  L020: [''],
  // L021: [''],
  // L022: [''],
  // L023: [''],
  // L024: [''],
  // L025: [''],
  // L026: [''],
  // L027: [''],
};

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

const LESSON_RESOURCES = {
  L001: [ createRes(RESOURCE_TAE_KIM, '/learn/complete/stateofbeing'), createRes(RESOURCE_TAE_KIM, '/learn/grammar/stateofbeing'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-nouns-state-of-being/') ], // T
  L002: [ createRes(RESOURCE_TAE_KIM, '/learn/'), createRes(RESOURCE_TAE_KIM, '/learn/grammar/particlesintro'), createRes(RESOURCE_WASABI, '/japanese-grammar/topic-particle-wa-and-particle-mo/') ], // WA_TS, MO_TS
  L003: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-adjectives-with-particle-ga/') ], // GA_TS
  L004: [], // WA_TS, GA_TS
  L005: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/subjects-of-japanese-verbs-with-the-particles-wa-and-ga/') ], // WA_TS, MO_TS, GA_TS
  L006: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-verbs-u-verbs-and-ru-verbs-and-conjugation/') ], // V
  L007: [], // V
  L008: [], // V
  L009: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/objects-of-japanese-verbs-with-particles-o-ni-and-to/') ], // WO_SV
  L010: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/objects-of-japanese-verbs-with-particles-o-ni-and-to/') ], // NI_SV
  L011: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // DE_SV
  L012: [], // WO_SV, NI_SV
  L013: [], // DE_SV, NI_SV
  L014: [], // DE_SV, WO_SV
  L015: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WO_SV, NI_SV, DE_SV
  L016: [], // KARA_TS
  L017: [], // MADE_TS
  L018: [], // NA - TNO
  L019: [], // T - 
  L020: [], // T - 
  // L021:
  // L022: 
  // L023: 
  // L024: 
  // L025: 
  // L026: 
  // L027: 
}

export const LESSON_OPTIONS = {
  L001: { variation: LESSON_VARIATION.L001, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // T
  L002: { variation: LESSON_VARIATION.L002, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // WA_TS, MO_TS
  L003: { variation: LESSON_VARIATION.L003, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // GA_TS
  L004: { variation: LESSON_VARIATION.L003, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // WA_TS, GA_TS
  L005: { variation: LESSON_VARIATION.L004, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // WA_TS, MO_TS, GA_TS
  L006: { variation: LESSON_VARIATION.L005, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // V
  L007: { variation: LESSON_VARIATION.L005, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // V
  L008: { variation: LESSON_VARIATION.L005, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // V
  L009: { variation: LESSON_VARIATION.L006, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // WO_SV
  L010: { variation: LESSON_VARIATION.L007, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // NI_SV
  L011: { variation: LESSON_VARIATION.L008, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // DE_SV
  L012: { variation: LESSON_VARIATION.L006, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // WO_SV, NI_SV
  L013: { variation: LESSON_VARIATION.L007, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // NI_SV, DE_SV
  L014: { variation: LESSON_VARIATION.L008, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // DE_SV, WO_SV
  L015: { variation: LESSON_VARIATION.L009, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // WO_SV, NI_SV, DE_SV
  L016: { variation: LESSON_VARIATION.L009, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // KARA_SV
  L017: { variation: LESSON_VARIATION.L009, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // MADE_SV
  L018: { variation: LESSON_VARIATION.L009, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // NA - T_NO
  L019: { variation: LESSON_VARIATION.L009, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // T - T_ADJ
  L020: { variation: LESSON_VARIATION.L009, politeness: POLITENESS_CASUAL, polarity: POLARITY_RANDOM, tense: TENSE_RANDOM, question: NOT_QUESTION, gender: GENDER_MASCULINE, __typename: __TYPENAME_OPTIONS }, // T - T_ADV
  // L021:
  // L022: 
  // L023: 
  // L024: 
  // L025: 
  // L026: 
  // L027: 
};

const randomTopicNo = (): string => topicNoArray[randomArrayElement(topicNoArray.length)];
const randomSubjectNoValue = (): string => subjectNoArray[randomArrayElement(subjectNoArray.length)];
const randomTopicAdjectiveValue = (): string =>  topicAdjectiveArray[randomArrayElement(topicAdjectiveArray.length)];
const randomTopicAdverbValue = (): string => topicAdverbArray[randomArrayElement(topicAdverbArray.length)];
const randomSubjectAdjectiveValue = (): string => subjectAdjectiveArray[randomArrayElement(subjectAdjectiveArray.length)];
const randomSubjectAdverbValue = (): string => subjectAdverbArray[randomArrayElement(subjectAdverbArray.length)];

const createLessonModifiers = ( topicNo?: string, subjectNo?: string, topicAdjective?: string, topicAdverb?: string, subjectAdjective?: string, subjectAdverb?: string): Util.Modifiers => {
  return {
    __typename: __TYPENAME_MODIFIERS,
    topicNo: topicNo ? topicNo : randomTopicNo(),
    subjectNo: subjectNo ? subjectNo : randomSubjectNoValue(),
    topicAdjective: topicAdjective ? topicAdjective : randomTopicAdjectiveValue(),
    topicAdverb: topicAdverb ? topicAdverb : randomTopicAdverbValue(),
    subjectAdjective: subjectAdjective ? subjectAdjective : randomSubjectAdjectiveValue(),
    subjectAdverb: subjectAdverb ? subjectAdverb : randomSubjectAdverbValue(),  
  }
};

export const LESSON_MODIFIERS = {
  L001: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // T
  L002: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // WA_TS, MO_TS
  L003: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // GA_TS
  L004: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // WA_TS, GA_TS
  L005: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // WA_TS, MO_TS, GA_TS
  L006: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // V
  L007: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // V
  L008: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // V
  L009: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // WO_SV
  L010: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // NI_SV
  L011: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // DE_SV
  L012: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // WO_SV, NI_SV
  L013: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // NI_SV, DE_SV
  L014: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // DE_SV, WO_SV
  L015: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // WO_SV, NI_SV, DE_SV
  L016: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // KARA_SV
  L017: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // MADE_SV
  L018: () => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // NA - T_NO
  L019:() => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // T - T_ADJ
  L020:() => createLessonModifiers(MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA, MODIFIERS_NA), // T - T_ADV
  // L021:
};

export const L001 = {
  LESSON_TITLE: LESSON_TITLE.L001,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L001,
  LESSON_OPTIONS: LESSON_OPTIONS.L001,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L001,
  LESSON_RESOURCES: LESSON_RESOURCES.L001,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L001,
};

export const L002 = {
  LESSON_TITLE: LESSON_TITLE.L002,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L002,
  LESSON_OPTIONS: LESSON_OPTIONS.L002,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L002,
  LESSON_RESOURCES: LESSON_RESOURCES.L002,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L002,
};

export const L003 = {
  LESSON_TITLE: LESSON_TITLE.L003,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L003,
  LESSON_OPTIONS: LESSON_OPTIONS.L003,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L003,
  LESSON_RESOURCES: LESSON_RESOURCES.L003,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L003,
};

export const L004 = {
  LESSON_TITLE: LESSON_TITLE.L004,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L004,
  LESSON_OPTIONS: LESSON_OPTIONS.L004,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L004,
  LESSON_RESOURCES: LESSON_RESOURCES.L004,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L004,
};

export const L005 = {
  LESSON_TITLE: LESSON_TITLE.L005,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L005,
  LESSON_OPTIONS: LESSON_OPTIONS.L005,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L005,
  LESSON_RESOURCES: LESSON_RESOURCES.L005,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L005,
};

export const L006 = {
  LESSON_TITLE: LESSON_TITLE.L006,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L006,
  LESSON_OPTIONS: LESSON_OPTIONS.L006,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L006,
  LESSON_RESOURCES: LESSON_RESOURCES.L006,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L006,
};

export const L007 = {
  LESSON_TITLE: LESSON_TITLE.L007,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L007,
  LESSON_OPTIONS: LESSON_OPTIONS.L007,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L007,
  LESSON_RESOURCES: LESSON_RESOURCES.L007,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L007,
};

export const L008 = {
  LESSON_TITLE: LESSON_TITLE.L008,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L008,
  LESSON_OPTIONS: LESSON_OPTIONS.L008,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L008,
  LESSON_RESOURCES: LESSON_RESOURCES.L008,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L008,
};

export const L009 = {
  LESSON_TITLE: LESSON_TITLE.L009,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L009,
  LESSON_OPTIONS: LESSON_OPTIONS.L009,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L009,
  LESSON_RESOURCES: LESSON_RESOURCES.L009,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L009,
};

export const L010 = {
  LESSON_TITLE: LESSON_TITLE.L010,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L010,
  LESSON_OPTIONS: LESSON_OPTIONS.L010,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L010,
  LESSON_RESOURCES: LESSON_RESOURCES.L010,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L010,
};

export const L011 = {
  LESSON_TITLE: LESSON_TITLE.L011,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L011,
  LESSON_OPTIONS: LESSON_OPTIONS.L011,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L011,
  LESSON_RESOURCES: LESSON_RESOURCES.L011,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L011,
};

export const L012 = {
  LESSON_TITLE: LESSON_TITLE.L012,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L012,
  LESSON_OPTIONS: LESSON_OPTIONS.L012,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L012,
  LESSON_RESOURCES: LESSON_RESOURCES.L012,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L012,
};

export const L013 = {
  LESSON_TITLE: LESSON_TITLE.L013,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L013,
  LESSON_OPTIONS: LESSON_OPTIONS.L013,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L013,
  LESSON_RESOURCES: LESSON_RESOURCES.L013,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L013,
};

export const L014 = {
  LESSON_TITLE: LESSON_TITLE.L014,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L014,
  LESSON_OPTIONS: LESSON_OPTIONS.L014,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L014,
  LESSON_RESOURCES: LESSON_RESOURCES.L014,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L014,
};

export const L015 = {
  LESSON_TITLE: LESSON_TITLE.L015,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L015,
  LESSON_OPTIONS: LESSON_OPTIONS.L015,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L015,
  LESSON_RESOURCES: LESSON_RESOURCES.L015,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L015,
};

export const L016 = {
  LESSON_TITLE: LESSON_TITLE.L016,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L016,
  LESSON_OPTIONS: LESSON_OPTIONS.L016,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L016,
  LESSON_RESOURCES: LESSON_RESOURCES.L016,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L016,
};

export const L017 = {
  LESSON_TITLE: LESSON_TITLE.L017,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L017,
  LESSON_OPTIONS: LESSON_OPTIONS.L017,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L017,
  LESSON_RESOURCES: LESSON_RESOURCES.L017,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L017,
};

export const L018 = {
  LESSON_TITLE: LESSON_TITLE.L018,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L018,
  LESSON_OPTIONS: LESSON_OPTIONS.L018,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L018,
  LESSON_RESOURCES: LESSON_RESOURCES.L018,
  LESSON_MODIFIERS: LESSON_MODIFIERS.L018,
};

export const L019 = {
  LESSON_TITLE: LESSON_TITLE.L019,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L019,
  LESSON_OPTIONS: LESSON_OPTIONS.L019,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L019,
  LESSON_RESOURCES: LESSON_RESOURCES.L019,
};

export const L020 = {
  LESSON_TITLE: LESSON_TITLE.L020,
  LESSON_DESCRIPTION: LESSON_DESCRIPTION.L020,
  LESSON_OPTIONS: LESSON_OPTIONS.L020,
  LESSON_VARIATION: LESSON_VARIATION.L020,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L020,
  LESSON_RESOURCES: LESSON_RESOURCES.L020,
};



