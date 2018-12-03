
// export const RESOURCE_TAE_KIM = 'Tae Kim\'s Guide to Learning Japanese';
// export const RESOURCE_WASABI = 'Wasabi';
// export const RESOURCE_TAE_KIM_WEBSITE = 'http://www.guidetojapanese.org';
// export const RESOURCE_WASABI_WEBSITE = 'https://www.wasabi-jpn.com';

// const createRes = (resourceType: string, urlString: string): Util.Resource => {
//   if (resourceType === RESOURCE_TAE_KIM) {
//     return {
//       url: `${RESOURCE_TAE_KIM_WEBSITE}${urlString}`,
//       website: RESOURCE_TAE_KIM_WEBSITE,
//     }
//   } else {
//     return {
//       url: `${RESOURCE_WASABI_WEBSITE}${urlString}`,
//       website: RESOURCE_WASABI_WEBSITE,
//     }
//   };
// };

// export const LESSON_SECTIONS = {
//   S00: 'Course Introduction',
//   S01: 'The Topic',
//   S02: 'The Subject',
//   S03: 'The Verb',
//   S04: 'The Verb / Subject Agreement',
//   S05: '',
//   S06: '',
//   // S07: '07',
// };

// export const LESSON_TITLE = {
//   // NOTE: Noun Plural?

//   L001: '001 - ' + 'Essential Linguistics: Topic', /* I am. 私 */
//   L002: '002 - ' + 'Essential Linguistics: Understanding Topic Intent - to be, to have, to do', /* to be/to have/to do */
//   L003: '003 - ' + 'Grammar Basics: Japanese Noun Conjugations', /* past present. I am a person. */
//   L004: '004 - ' + 'Essential Linguistics: Subject', /* I am a person. It is a bannana.  */
//   L005: '005 - ' + 'Grammar Basics: Introducing the は and も Topic Particle', /* I am also a person.  */
//   L006: '006 - ' + 'Grammar Basics: Introducing the が Topic Particle', /* I am the  */
//   L007: '007 - ' + 'Grammar Differences: は and が Topic Particles',
//   L008: '008 - ' + 'Essential Linguistics: Verb',
//   L009: '009 - ' + 'Grammar Basics: る verb conjugations',
//   L010: '010 - ' + 'Grammar Basics: う verb conjugations',
//   L011: '011 - ' + 'Grammar Basics: Irregular verb conjugations',
//   L012: '012 - ' + 'Essential Linguistics: Verb / Subject agreement',
//   L013: '013 - ' + 'Grammar Basics: を Verb Statements',
//   L014: '014 - ' + 'Grammar Basics: に Verb Statements',
//   L015: '015 - ' + 'Grammar Basics: で Verb Statements',
//   L016: '016 - ' + 'Grammar Differences: を vs に Verb Statements', // NOTE: dunno if each different thing should be it's own module.
//   L017: '017 - ' + 'Grammar Differences: に vs で Verb Statements',
//   L018: '018 - ' + 'Grammar Differences: で vs を Verb Statements',
//   L019: '019 - ' + 'Exercise Challenge: を vs に vs で verb statements',
//   L020: '020 - ' + 'から from statement',
//   L021: '021 - ' + 'まで until statement',
//   L022: '022 - ' + 'の noun modifiers',
//   L023: '023 - ' + 'Japanese adjective modifiers',
//   L024: '024 - ' + 'Japanese adverb modifiers',
//   L025: '025 - ' + '',
//   L026: '026 - ' + '',
//   L027: '027 - ' + '',
//   L028: '028 - ' + '',
//   L029: '029 - ' + '',
//   L030: '030 - ' + '',
//   L031: '031 - ' + '',
//   L032: '032 - ' + '',
//   L033: '033 - ' + '',
//   L034: '034 - ' + '',
//   L035: '035 - ' + '',
//   L036: '036 - ' + '',
//   L037: '037 - ' + '',
//   L038: '038 - ' + '',
//   L039: '039 - ' + '',
//   L040: '040 - ' +  '',
//   L041: '041 - ' + '',
//   L042: '042 - ' + '',
//   L043: '043 - ' + '',
//   L044: '044 - ' + '',
//   L045: '045 - ' + '',
//   L046: '046 - ' + '',
//   L047: '047 - ' + '',
//   L048: '048 - ' + '',
//   L049: '049 - ' + '',
//   L050: '050 - ' + '',
//   L051: '051 - ' + '',
// };

// export const LESSON_PATH = {
//   L001: '/essential-linguistics-topic',
//   L002: '/essential-linguistics-understanding-topic-intent',
//   L003: '/grammar-basics-japanese-noun-conjugations',
//   L004: '/essential-linguistics-subject',
//   L005: '/grammar-basics-introducing-the-wa-and-mo-topic-particle',
//   L006: '/grammar-basics-introducing-the-ga-topic-particle',
//   L007: '/grammar-comparison-difference-between-wa-and-ga-noun-statements',
//   L008: '/essential-linguistics-verb',
//   L009: '/grammar-basics-ru-verb-conjugations',
//   L010: '/grammar-basics-u-verb-conjugations',
//   L011: '/grammar-basics-irregular-verb-conjugations',
//   L012: '/essential-linguistics-verb-subject-agreement',
//   L013: '/grammar-basics-wo-verb-statements',
//   L014: '/grammar-basics-ni-verb-statements',
//   L015: '/grammar-basics-de-verb-statements',
//   L016: '/grammar-comparison-wo-ni-verb-statements', // dunno if each different thing should be it's own module.
//   L017: '/grammar-comparison-ni-de-verb-statements',
//   L018: '/grammar-comparison-de-wo-verb-statements',
//   L019: '/exercise-challenge-wo-ni-de-verb-statements',
//   // L020: 
//   // L021: 
//   // L022: 
//   // L023: 
//   // L024: 
//   // L025: 
//   // L026: 
//   // L027: '/から-from-tatement',
//   // L028: '/まで-until-tatement',
//   // L029: '/の noun-modifiers',
//   // L030: '/japanese-adjective-modifiers',
//   // L031: '/japanese-adverb-modifiers',
//   // L032: '',
//   // L033: '',
//   // L034: '',
//   // L035: '',
//   // L036: '',
//   // L037: '',
//   // L038: '',
//   // L039: '',
//   // L040: '',
//   // L041: '041 - ' + 
// };

// export const lessonPathArray = [ LESSON_PATH.L001, LESSON_PATH.L002, LESSON_PATH.L003, LESSON_PATH.L004, LESSON_PATH.L005, LESSON_PATH.L006, LESSON_PATH.L007, LESSON_PATH.L008, LESSON_PATH.L009 ];

// export const LESSON_EXPLANATION = {
//   L001: ['#What is the topic?',
//          'The topic refers to the main theme or idea of a sentence.',
//          'The topic is a really important concept in a language like Japanese, because unlike in English, Japanese is a language which distinguishes between the topic and the subject (or the thing that is being talked about in the sentence).',
//          'So in a statement like \"the cat\", the topic is obvious in a language like English. However in a language like Japanese, it may not be so obvious (hint: It may not be the cat, as you will come to learn).',
//          'Sounds confusing?',
//          'Well, that\'s okay! Better to be confused now, rather than later :)',
//          'In order to gain an intuitive understanding of this idea of the topic, let us use noun delcarations as a strong foundational starting point.',
//          'In order to make declarations in Japanese, you first state the noun followed by the declaration particle だ。',
//          'When you declare a noun, the topic is rather obvious. The topic is the noun you are declaring.',
//          'When you say \"cat\" the cat is the topic.',
//          'When you say \"I\", the topic refers to yourself.',
//          'However, if you were to say something like "the cat" or "a frog" then you are no longer declaring something, so much as you are stating something. And in the next lesson, I will make it quite clear as to what exactly what this means.',
//          '#Topic Prominent Languages',
//          'As mentioned earlier, the concept of the topic is important in Japanese because languages such as Japanese, Korean and Chinese are topic prominent languages.', 
//          'In other words, these languages distinguish between the topic and the subject, whereas in English,they are usually the same thing (although need not worry about what a \'subject\' is for the time being).',
//          'As a result, Japanese makes identifying the topic of the sentence super easy! In fact, there are a number of dedicated topic particles (は, も, が etc.) in Japanese that help us identify the topic of a sentence.',
//          'Of course, the topic particle (as with any particle in Japanese) is only truly necessary if there is not enough context to figure out what one is saying.',
//          'And in fact, as you\'ll come to learn through out your Japanese studies, Japanese is a language built around using context to remove unnecessary words from a sentence, in order to make a message as concise as possible (unlike in English which utilises a heap of helping verbs, prepositions etc. to help glue it all together).'
//         ], // Essential Linguistics: Topic
//   L002: ['In the previous lesson I briefly mentioned this idea that there is a difference between declarating something and stating something, and that\'s what I would like to explore in this lesson.', 
//          'You see, each sentence has what I would describe as an "intention" behind what is effectively trying to be conveyed.',
//          'These intentions are conveyed using three core verbs (also known as auxillary verbs) which help provide further context as to what exactly is actually going on.',
//          'In English these verbs are:',
//          '\"to be\" (which denotes declaration or existence) i.e. English: Cat is. Japanese: 猫だ。',
//          '\"to have\" (which denotes possession) i.e. Cat has.', 
//          '\"to do\" (which denotes action) i.e. Cat does.', 
//          'The topic is the thing that does the intent and with these three verbs we can basically establish the intent of a sentence. For the time being, we will just focus on declarations',
//          '#Explicit vs Implicit Intentions',
//          'When we say something like "Cat" we can generally imply that we\'re saying something along the lines of "Cat is", denoting the existence or declaration of a cat.',
//          'And no different to saying "Cat is" or "I am", you could still know the cat is the topic in both English and Japanese.',
//          'Where things get tricky is when you begin to say things like "Is a cat" or "Has a dog" because topic is not clear, especially in a topic prominent language such as Japanese.',
//          'In this instance, what exactly is a cat? We can infer that the topic of the sentence "Is a cat" is an actual cat, which explicitly we would say "The cat is a cat", but in a language like Japanese the topic cannot be inferred.',
//          'In simple sentences like "Cat is" the topic is not infered, however in sentences like "Is a cat" ',
//          'Why? Simply, because Japanese is topic prominent. Or in other words, you can think of it this rule as an appropriate convention to the Japanese language, no different to how saying "thank you" in a language like English to denote politeness. It may possibly seem silly to someone coming from the perspective of someone who natively knows a language that does not have any words for politeness, but that is not to say that it is not incorrect.'
//         ], // Essential Linguistics: Understanding Topic Intent - to be, to have, to do
//   L003: ['Before we continue onto more advanced sentences, let us first learn to use what we currently have.',
//          'I won\'t go into the specifics of it, given other resources already cover this quite well, however here is a table with all necessary conjugations.',
//         ], // Grammar Basics: Japanese Noun Conjugations
//   L004: ['Ah, the subject.',
//          'The subject refers to the thing that is being manipulated or is taking an action.',
//         ],  // Essential Linguistics: Subject
//   L005: [''], // Grammar Differences: は and が Topic Particles
//   L006: [''], // Grammar Basics: Introducing the が Topic Particle'
//   L007: [''], // Essential Linguistics: Verb

//   L008: [''], // Grammar Basics: る verb conjugations
//   L009: [''], // Grammar Basics: う verb conjugations
//   L010: [''], // Grammar Basics: Irregular verb conjugations 
//   L011: [''], // Essential Linguistics: Verb / Subject agreement
//   L012: [''], // Grammar Basics: を Verb Statements
//   L013: [''], // Grammar Basics: に Verb Statements

//   L014: [''], // Grammar Basics: で Verb Statements
//   L015: [''], // Grammar Differences: を vs に Verb Statements
//   L016: [''], // Grammar Differences: に vs で Verb Statements
//   L017: [''], // Grammar Differences: で vs を Verb Statements
//   L018: [''], // Exercise Challenge: を vs に vs で verb statements
//   L019: [''],
//   L020: [''],
//   L021: [''],
//   L022: [''],
//   L023: [''],
//   L024: [''],
//   L025: [''],
//   L026: [''],
//   L027: [''],
//   L028: [''],
//   L029: [''],
//   L030: [''],
//   L031: [''],
//   L032: [''],
//   L033: [''],
//   L034: [''],
//   L035: [''],
//   L036: [''],
//   L037: [''],
//   L038: [''],
//   L039: [''],
//   L040: [''],
//   L041: [''],
//   L042: [''],
//   L043: [''],
//   L044: [''],
//   L045: [''],
//   L046: [''],
//   L047: [''],
//   L048: [''],
//   L049: [''],
//   L050: [''],
//   L051: [''],

// };


// export const LESSON_DESCRIPTION = {
//   // NOTE: Noun Plural?

//   L001: '',
//   L002: '',
//   L003: '',
//   L004: '',
//   L005: '',
//   L006: '',
//   L007: '',
//   L008: '',
//   L009: '',
//   L010: '',
//   L011: '',
//   L012: '',
//   L013: '',
//   L014: '',
//   L015: '',
//   L016: '',
//   L017: '',
//   L018: '',
//   L019: '',
//   L020: '',
//   L021: '',
//   L022: '',
//   L023: '',
//   L024: '',
//   L025: '',
//   L026: '',
//   L027: '',
//   L028: '',
//   L029: '',
//   L030: '',
//   L031: '',
//   L032: '',
//   L033: '',
//   L034: '',
//   L035: '',
//   L036: '',
//   L037: '',
//   L038: '',
//   L039: '',
//   L040: '',
//   L041: '',
//   L042: '',
//   L043: '',
//   L044: '',
//   L045: '',
//   L046: '',
//   L047: '',
//   L048: '',
//   L049: '',
//   L050: '',
//   L051: '',
// };


// export const LESSON_RESOURCES = {
//   L001: [ createRes(RESOURCE_TAE_KIM, '/learn/complete/stateofbeing'), createRes(RESOURCE_TAE_KIM, '/learn/grammar/stateofbeing'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-nouns-state-of-being/') ], // T
//   L002: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/'), createRes(RESOURCE_TAE_KIM, '/learn/grammar/particlesintro'), createRes(RESOURCE_WASABI, '/japanese-grammar/topic-particle-wa-and-particle-mo/') ], // WA_TS, MO_TS
//   L003: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-adjectives-with-particle-ga/') ], // GA_TS
//   L004: [], // [], // WA_TS, GA_TS
//   L005: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/subjects-of-japanese-verbs-with-the-particles-wa-and-ga/') ], // WA_TS, MO_TS, GA_TS
//   L006: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/japanese-verbs-u-verbs-and-ru-verbs-and-conjugation/') ], // V
//   L007: [], // [], // V
//   L008: [], // [], // V
//   L009: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/objects-of-japanese-verbs-with-particles-o-ni-and-to/') ], // WO_SV
//   L010: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '/japanese-grammar/objects-of-japanese-verbs-with-particles-o-ni-and-to/') ], // NI_SV
//   L011: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // DE_SV
//   L012: [], // [], // WO_SV, NI_SV
//   L013: [], // [], // DE_SV, NI_SV
//   L014: [], // [], // DE_SV, WO_SV
//   L015: [], // [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WO_SV, NI_SV, DE_SV
//   L016: [], // KARA_TS
//   L017: [], // MADE_TS
//   L018: [], // NA - TNO
//   L019: [], // T - 
//   L020: [], // T - 
//   L022: [],
//   L021: [],
//   L023: [],
//   L024: [],
//   L025: [],
//   L026: [],
//   L027: [],
//   L028: [],
//   L029: [],
//   L030: [],
//   L031: [],
//   L032: [],
//   L033: [],
//   L034: [],
//   L035: [],
//   L036: [],
//   L037: [],
//   L038: [],
//   L039: [],
//   L040: [],
//   L041: [],
//   L042: [],
//   L043: [],
//   L044: [],
//   L045: [],
//   L046: [],
//   L047: [],
//   L048: [],
//   L049: [],
//   L050: [],
//   L051: [],
// }



export default 'yay';