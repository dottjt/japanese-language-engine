
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
  // NOTE: Noun Plural?

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
  L015: '015 - ' + 'Grammar Basics: Present and Past る verb conjugations',
  L016: '016 - ' + 'Grammar Basics: Future る verb conjugations',
  L017: '017 - ' + 'Grammar Basics: Negative る verb conjugations',
  L018: '018 - ' + 'Grammar Basics: Present and Past う verb conjugations',
  L019: '019 - ' + 'Grammar Basics: Future う verb conjugations',
  L020: '020 - ' + 'Grammar Basics: Negative う verb conjugations',
  L021: '021 - ' + 'Grammar Basics: Present and Past Irregular verb conjugations',
  L022: '022 - ' + 'Grammar Basics: Future Irregular verb conjugations',
  L023: '023 - ' + 'Grammar Basics: Negative Irregular verb conjugations',
  L024: '024 - ' + 'Exercise Challenge: Present, Past, Future and Negative verb conjugations',

  L025: '025 - ' + 'Essential Linguistics: Verb / Subject agreement',
  L026: '026 - ' + 'Grammar Basics: を Verb Statements',
  L027: '027 - ' + 'Grammar Basics: に Verb Statements',
  L028: '028 - ' + 'Grammar Basics: で Verb Statements',
  L029: '029 - ' + 'Grammar Comparison: を vs に Verb Statements', // NOTE: dunno if each different thing should be it's own module.
  L030: '030 - ' + 'Grammar Comparison: に vs で Verb Statements',
  L031: '031 - ' + 'Grammar Comparison: で vs を Verb Statements',
  L032: '032 - ' + 'Exercise Challenge: を vs に vs で verb statements',
  L033: '033 - ' + 'から from statement',
  L034: '034 - ' + 'まで until statement',
  L035: '035 - ' + 'の noun modifiers',
  L036: '036 - ' + 'Japanese adjective modifiers',
  L037: '037 - ' + 'Japanese adverb modifiers',
  // L038: '038 - ' + 
  // L039: '039 - ' + 
  // L040: '040 - ' + 
  // L041: '041 - ' + 
  // L042: '042 - ' + 
  // L043: '043 - ' + 
  // L044: '044 - ' + 
  // L045: '045 - ' + 
  // L046: '046 - ' + 
  // L047: '047 - ' + 
  // L048: '048 - ' + 
  // L049: '049 - ' + 
  // L050: '050 - ' + 
  // L051: '051 - ' + 
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
  L032: '',
  L033: '',
  L034: '',
  L035: '',
  L036: '',
  L037: '',
  L038: '',
  L039: '',
  L040: '',
  // L041: '041 - ' + 
};

export const lessonPathArray = [ LESSON_PATH.L001, LESSON_PATH.L002, LESSON_PATH.L003, LESSON_PATH.L004, LESSON_PATH.L005, LESSON_PATH.L006, LESSON_PATH.L007, LESSON_PATH.L008, LESSON_PATH.L009 ];

export const LESSON_EXPLANATION = {
  L001: ['The topic refers to the main theme or idea of a sentence.',
         'The topic is a really important concept in a language like Japanese, because unlike in English, Japanese is a language which distinguishes between the topic and the subject (or the thing that is being talked about in the sentence).',
         'So in a statement like \"the cat\", the topic is obvious in a language like English. However in a language like Japanese, it may not be so obvious (hint: It may not be the cat, as you will come to learn).',
         'Sounds confusing?',
         'Well, that\'s okay! Better to be confused now, rather than later :)',
         'In order to gain an intuitive understanding of this idea of the topic, let us use noun delcarations as a strong foundational starting point.',
         'When you declare a noun, the topic is rather obvious. The topic is the noun you are declaring.',
         'When you say \"cat\" the cat is the topic.',
         'When you say \"I\", the topic refers to yourself.',
         'However, if you were to say something like "the cat" or "a frog" then you are no longer declaring something, so much as you are stating something. And in the next lesson, I will make it quite clear as to what exactly what this means.',
         '#Topic Prominent Languages',
         'As mentioned earlier, the concept of the topic is important in Japanese because languages such as Japanese, Korean and Chinese are topic prominent languages.', 
         'In other words, these languages distinguish between the topic and the subject, whereas in English,they are usually the same thing (although need not worry about what a \'subject\' is for the time being).',
         'As a result, Japanese makes identifying the topic of the sentence super easy! In fact, there are a number of dedicated topic particles (は, も, が etc.) in Japanese that help us identify the topic of a sentence.',
         'Of course, the topic particle (as with any particle in Japanese) is only truly necessary if there is not enough context to figure out what one is saying.',
         'And in fact, as you\'ll come to learn through out your Japanese studies, Japanese is a language built around using context to remove unnecessary words from a sentence, in order to make a message as concise as possible (unlike in English which utilises a heap of helping verbs, prepositions etc. to help glue it all together).'
        ], // Essential Linguistics: Topic
  L002: ['The reason why I\'ve decided to introduce you to this concept of the topic is because it will help you understand how words are used in Japanese.', 
         'This is important because Japanese is a very concise language by design, so ', 
         '',
        ], // Essential Linguistics: Understanding Topic Intent - to be, to have, to do
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
  L021: [''],
  L022: [''],
  L023: [''],
  L024: [''],
  L025: [''],
  L026: [''],
  L027: [''],
  L028: [''],
  L029: [''],
  L030: [''],
  L031: [''],
  L032: [''],
  L033: [''],
  L034: [''],
  L035: [''],
  L036: [''],
  L037: [''],
  L038: [''],
  L039: [''],
  L040: [''],
  L041: [''],
  L042: [''],
  L043: [''],
  L044: [''],
  L045: [''],
  L046: [''],
  L047: [''],
  L048: [''],
  L049: [''],
  L050: [''],
  L051: [''],

};


export const LESSON_DESCRIPTION = {
  // NOTE: Noun Plural?

  L001: '',
  L002: '',
  L003: '',
  L004: '',
  L005: '',
  L006: '',
  L007: '',
  L008: '',
  L009: '',
  L010: '',
  L011: '',
  L012: '',
  L013: '',
  L014: '',
  L015: '',
  L016: '',
  L017: '',
  L018: '',
  L019: '',
  L020: '',
  L021: '',
  L022: '',
  L023: '',
  L024: '',
  L025: '',
  L026: '',
  L027: '',
  L028: '',
  L029: '',
  L030: '',
  L031: '',
  L032: '',
  L033: '',
  L034: '',
  L035: '',
  L036: '',
  L037: '',
  L038: '',
  L039: '',
  L040: '',
  L041: '',
  L042: '',
  L043: '',
  L044: '',
  L045: '',
  L046: '',
  L047: '',
  L048: '',
  L049: '',
  L050: '',
  L051: '',
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
  L022: [],
  L021: [],
  L023: [],
  L024: [],
  L025: [],
  L026: [],
  L027: [],
  L028: [],
  L029: [],
  L030: [],
  L031: [],
  L032: [],
  L033: [],
  L034: [],
  L035: [],
  L036: [],
  L037: [],
  L038: [],
  L039: [],
  L040: [],
  L041: [],
  L042: [],
  L043: [],
  L044: [],
  L045: [],
  L046: [],
  L047: [],
  L048: [],
  L049: [],
  L050: [],
  L051: [],
}
