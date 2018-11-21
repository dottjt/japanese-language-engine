
export const RESOURCE_TAE_KIM = 'Tae Kim\'s Guide to Learning Japanese';
export const RESOURCE_WASABI = 'Wasabi';
export const RESOURCE_TAE_KIM_WEBSITE = 'http://www.guidetojapanese.org';
export const RESOURCE_WASABI_WEBSITE = 'https://www.wasabi-jpn.com';

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

export const LESSON_SECTIONS_PREMIUM = {
  S00: false,
  S01: false,
  S02: false,
  S03: false,
  S04: false,
  S05: true,
  S06: true,
};

export const LESSON_SECTIONS = {
  S00: 'Introduction',
  S01: 'Noun Conjugation Basics',
  S02: 'Noun Basics',
  S03: 'Verb Conjugation Basics',
  S04: 'Verb Basics',
  S05: 'From / Until statements',
  S06: 'Modifier Basics',
  // S07: '07',
}

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
  L001: '01 - Noun conjugations',

  L002: '02 - は and も noun statements',
  L003: '03 - が noun statements',
  L004: '04 - は vs が noun statements',
  L005: '05 - は vs も vs が noun statements',

  L006: '06 - る verb conjugations',
  L007: '07 - う verb conjugations',
  L008: '08 - Irregular verb conjugations',

  L009: '09 - を verb statements',
  L010: '10 - に verb statements',
  L011: '11 - で verb statements',
  L012: '12 - を vs に verb statements',
  L013: '13 - に vs で verb statements',
  L014: '14 - で vs を verb statements',
  L015: '15 - を vs に vs で verb statements',

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


export const LESSON_EXPLANATION = {
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


export const LESSON_RESOURCES = {
  L001: [ createRes(RESOURCE_TAE_KIM, '/learn/complete/stateofbeing'), createRes(RESOURCE_TAE_KIM, '/learn/grammar/stateofbeing'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-nouns-state-of-being/') ], // T
  L002: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/'), createRes(RESOURCE_TAE_KIM, '/learn/grammar/particlesintro'), createRes(RESOURCE_WASABI, '/japanese-grammar/topic-particle-wa-and-particle-mo/') ], // WA_TS, MO_TS
  L003: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-adjectives-with-particle-ga/') ], // GA_TS
  L004: [], // [], // WA_TS, GA_TS
  L005: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/subjects-of-japanese-verbs-with-the-particles-wa-and-ga/') ], // WA_TS, MO_TS, GA_TS
  L006: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-verbs-u-verbs-and-ru-verbs-and-conjugation/') ], // V
  L007: [], // [], // V
  L008: [], // [], // V
  L009: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/objects-of-japanese-verbs-with-particles-o-ni-and-to/') ], // WO_SV
  L010: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/objects-of-japanese-verbs-with-particles-o-ni-and-to/') ], // NI_SV
  L011: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // DE_SV
  L012: [], // [], // WO_SV, NI_SV
  L013: [], // [], // DE_SV, NI_SV
  L014: [], // [], // DE_SV, WO_SV
  L015: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WO_SV, NI_SV, DE_SV
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
