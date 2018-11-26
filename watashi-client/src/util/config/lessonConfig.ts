
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

export const LESSON_SECTIONS = {
  S00: 'Course Introduction',
  S01: 'The Topic',
  S02: 'The Subject',
  S03: 'The Verb',
  S04: 'The Verb / Subject Agreement',
  S05: '',
  S06: '',
  // S07: '07',
};

export const LESSON_TITLE = {

  L001: '001 - ' + 'Essential Linguistics: Topic', /* I am. 私 */
  L002: '002 - ' + 'Essential Linguistics: Understanding Topic Intent - to be, to have, to do', /* to be/to have/to do */
  L003: '003 - ' + 'Essential Linguistics: Topic POV - I, You, He/She/It, They, Us', /* he is, you are, they are. */
  L004: '004 - ' + 'Grammar Basics: Present and Past Japanese Noun Conjugations', /* past present. I am a person. */
  L005: '005 - ' + 'Grammar Basics: Future Japanese Noun Conjugations', /* I will be a person. */
  L006: '006 - ' + 'Grammar Basics: Negative Japanese Noun Conjugations', /* I am not a person */
  L007: '007 - ' + 'Exercise Challenge: Present, Past, Future and Negative Japanese Noun Conjugations',
  
  L008: '008 - ' + 'Essential Linguistics: Subject', /* I am a person. It is a bannana.  */
  L009: '009 - ' + 'Grammar Basics: Introducing the は and も Topic Particle', /* I am also a person.  */
  L010: '010 - ' + 'Grammar Basics: Introducing the が Topic Particle', /* I am the  */
  L011: '011 - ' + 'Grammar Comparison: Difference between は and が Noun Statements',
  L012: '012 - ' + 'Exercise Challenge: は vs も vs が Noun Statements',
  L013: '013 - ' + 'Watashi Engine Limitations: Topic, Subject and Japanese Nouns',

  L014: '014 - ' + 'Essential Linguistics: Verb',
  L015: '015 - ' + 'Grammar Basics: る verb conjugations',
  L016: '016 - ' + 'Grammar Basics: う verb conjugations',
  L017: '017 - ' + 'Grammar Basics: Irregular verb conjugations',
  L018: '018 - ' + 'Exercise Challenge: る vs も vs が verb conjugations',

  L019: '019 - ' + 'Essential Linguistics: Verb / Subject agreement',
  L020: '020 - ' + 'Grammar Basics: を Verb Statements',
  L021: '021 - ' + 'Grammar Basics: に Verb Statements',
  L022: '022 - ' + 'Grammar Basics: で Verb Statements',
  L023: '023 - ' + 'Grammar Comparison: を vs に Verb Statements', // dunno if each different thing should be it's own module.
  L024: '024 - ' + 'Grammar Comparison: に vs で Verb Statements',
  L025: '025 - ' + 'Grammar Comparison: で vs を Verb Statements',
  L026: '026 - ' + 'Exercise Challenge: を vs に vs で verb statements',

  L027: '027 - ' + 'から from statement',
  L028: '028 - ' + 'まで until statement',
  L029: '029 - ' + 'の noun modifiers',
  L030: '030 - ' + 'Japanese adjective modifiers',
  L031: '031 - ' + 'Japanese adverb modifiers',
  // L032: '032 - ' + 
  // L033: '033 - ' + 
  // L034: '034 - ' + 
  // L035: '035 - ' + 
  // L036: '036 - ' + 
  // L037: '037 - ' + 
  // L038: '038 - ' + 
  // L039: '039 - ' + 
  // L040: '040 - ' + 
  // L041: '041 - ' + 
};

export const LESSON_PATH = {
  L001: 'essential-linguistics-topic',
  L002: 'essential-linguistics-understanding-topic-intent',
  L003: 'essential-linguistics-topic-pov',
  L004: 'grammar-basics-present-and-past-japanese-noun-conjugations',
  L005: 'grammar-basics-future-japanese-noun-conjugations',
  L006: 'grammar-basics-negative-japanese-noun-conjugations',
  L007: 'exercise-challenge-present-past-future-and-negative-japanese-noun-conjugations',

  L008: 'essential-linguistics-subject',
  L009: 'grammar-basics-introducing-the-wa-and-mo-topic-particle',
  L010: 'grammar-basics-introducing-the-ga-topic-particle',
  L011: 'grammar-comparison-difference-between-wa-and-ga-noun-statements',
  L012: 'exercise-challenge-wa-mo-ga-noun-statements',
  L013: 'watashi-engine-imitations-topic-subject-and-japanese-nouns',

  L014: 'essential-linguistics-verb',
  L015: 'grammar-basics-ru-verb-conjugations',
  L016: 'grammar-basics-u-verb-conjugations',
  L017: 'grammar-basics-irregular-verb-conjugations',
  L018: 'exercise-challenge-ru-u-ga-verb-conjugations',
  L019: 'essential-linguistics-verb-subject-agreement',
  L020: 'grammar-basics-wo-verb-statements',
  L021: 'grammar-basics-ni-verb-statements',
  L022: 'grammar-basics-de-verb-statements',
  L023: 'grammar-comparison-wo-ni-verb-statements', // dunno if each different thing should be it's own module.
  L024: 'grammar-comparison-ni-de-verb-statements',
  L025: 'grammar-comparison-de-wo-verb-statements',
  L026: 'exercise-challenge-wo-ni-de-verb-statements',

  L027: 'から-from-tatement',
  L028: 'まで-until-tatement',
  L029: 'の noun-modifiers',
  L030: 'japanese-adjective-modifiers',
  L031: 'japanese-adverb-modifiers',
  // L032: 
  // L033: 
  // L034: 
  // L035: 
  // L036: 
  // L037: 
  // L038: 
  // L039: '039 - ' + 
  // L040: '040 - ' + 
  // L041: '041 - ' + 
};

export const lessonPathArray = [ LESSON_PATH.L001, LESSON_PATH.L002, LESSON_PATH.L003, LESSON_PATH.L004, LESSON_PATH.L005, LESSON_PATH.L006, LESSON_PATH.L007, LESSON_PATH.L008, LESSON_PATH.L009 ];

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
