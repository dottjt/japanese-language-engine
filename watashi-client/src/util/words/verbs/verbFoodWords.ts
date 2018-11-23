import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_COOK_PREPARTION_ACTIONS,

  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
  // SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';

// In the case of rice or noodles (“fried rice,” “stir-fried noodles” and so on), this means “to stir-fry” or “to pan fry.” The next verb below is used with meat, vegetables and sautéing. 焼く is for baking pastries, frying pancakes or omelets, grilling, roasting in the oven, pan searing (steak, etc.) and the aforementioned stir-fried noodles and rice.

// to fry, grill, roast, bake: 焼く (やく)
// NOTE: I need to create a link between words where the japanese is multiple english things

const wordStirFry = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '炒める',
  katakana: 'いためる',
  infinitive: 'fry', // grill, roast, bake
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});


const wordDeepFry = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '揚げる',
  katakana: 'あげる',
  infinitive: 'deep fry',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordSteam = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_U,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '蒸す',
  katakana: 'むす',
  infinitive: 'steam',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordCut = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '切る',
  katakana: 'きる',
  infinitive: 'cut',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordHeat = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '熱する',
  katakana: 'ねっする',
  infinitive: 'heat',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordPreHeat = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '予熱をする',
  katakana: 'よねつをする',
  infinitive: 'pre-heat',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordMixTogether = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '混ぜる',
  katakana: 'まぜる',
  infinitive: 'mix together',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordServe = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '盛り付ける',
  katakana: 'もりつける',
  infinitive: 'serve',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordGrate = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_U,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '卸す',
  katakana: 'おろす',
  infinitive: 'grate', //  (ginger, sesame seeds, etc.)
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordAdd = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '加える',
  katakana: 'くわえる',
  infinitive: 'add',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

// 茹でる and 煮る both mean “to boil,” but the former implies cooking an object in boiling liquid: e.g., hard-boiled eggs, 茹で卵 (ゆでたまご). The latter means “to boil” or “to simmer” a liquid, either with the goal of reducing it (stews and braises) or cooking what’s inside.

const wordStewFood = createVerbWord({ // cooking object in water
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '茹でる',
  katakana: 'ゆでる',
  infinitive: 'stew',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordBoilWater = createVerbWord({ // 
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '煮る',
  katakana: 'にる',
  infinitive: 'boil', // stew, simmer
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const wordSimmer = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_U,
  verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  verbType: '',
  kanji: '煮立つ',
  katakana: 'にたつ',
  infinitive: 'simmer', // come to a simmer
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});


// 煮立つ, is the intransitive verb: the stew “boils” or “comes to a simmer.” 

const verbArray = [
  wordStirFry,
  wordDeepFry,
  wordSteam,
  wordCut,
  wordHeat,
  wordPreHeat,
  wordMixTogether,
  wordServe,
  wordGrate,
  wordAdd,
  wordStewFood,
  wordBoilWater,
  wordSimmer,
]

  // wordTurnOffTheStove,

  // const wordTurnOffTheStove = createVerbWord({
  //   verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_U,
  //   verbCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_COOK_PREPARTION_ACTIONS ],
  //   verbType: '',
  //   kanji: '火を止める',
  //   katakana: 'ひをとめる',
  //   infinitive: 'turn off', // turn off the stove
  //   presentParticiple: '',
  //   pastParticiple: '',
  //   preterite: '',
  //   simplePresentContinuousHeSheIt: '',
  // });

export default verbArray;