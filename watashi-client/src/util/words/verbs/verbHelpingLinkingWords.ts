import {
  // CATEGORY_FOOD,
  // CATEGORY_DRINK,
  // CATEGORY_HUMAN_ACTION,

  // CATEGORY_LOCATION,

  // SENTENCE_TYPE_VERB_TYPE_RU,
  // SENTENCE_TYPE_VERB_TYPE_U,
  SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';


// // linking verbs.
// Am • Are . Is • Was • Were


// // sometimes linking, sometimes action verbs.
// To appear • To continue • To feel • To grow • To look • To prove • To remain • To sound • To stay • To smell • To taste • To turn

// linking + helping.

// NOTE: I'm not 100% sure on this, however 
const wordBe = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR, 
  verbCategory: [],
  verbType: 'NA',
  kanji: 'ある',
  infinitive: 'be',
  presentParticiple: 'being',
  pastParticiple: 'been',
  simplePresentContinuousHeSheIt: 'is', 
});

// linking + helping.
const wordDo = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR, 
  verbCategory: [],
  verbType: 'NA',
  kanji: 'する',
  infinitive: 'did',
  presentParticiple: 'do',
  pastParticiple: 'done',
  simplePresentContinuousHeSheIt: 'does', 
});

// linking + helping.
const wordHave = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR, 
  verbCategory: [],
  verbType: 'NA',
  kanji: 'ある',
  infinitive: 'have',
  presentParticiple: 'having',
  pastParticiple: 'had',
  simplePresentContinuousHeSheIt: 'has', 
});






const wordCan = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR, 
  verbCategory: [],
  verbType: 'NA',
  kanji: '出来る',
  infinitive: 'can',
  presentParticiple: 'NA',
  pastParticiple: 'could',
  simplePresentContinuousHeSheIt: 'NA', 
});

const wordMay = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR, 
  verbCategory: [],
  verbType: 'NA',
  kanji: '出来る',
  infinitive: 'may',
  presentParticiple: 'NA',
  pastParticiple: 'might',
  simplePresentContinuousHeSheIt: 'NA', 
});

const wordMust = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR, 
  verbCategory: [],
  verbType: 'NA',
  kanji: 'ければ',
  infinitive: 'must',
  presentParticiple: 'NA',
  pastParticiple: 'ought to',
  simplePresentContinuousHeSheIt: 'NA', 
});

const wordShall = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR, 
  verbCategory: [],
  verbType: 'NA',
  kanji: 'TODO',
  infinitive: 'shall',
  presentParticiple: 'NA',
  pastParticiple: 'should',
  simplePresentContinuousHeSheIt: 'NA', 
});

const wordWill = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR, 
  verbCategory: [],
  verbType: 'NA',
  kanji: 'TODO',
  infinitive: 'will',
  presentParticiple: 'NA',
  pastParticiple: 'would',
  simplePresentContinuousHeSheIt: 'NA', 
});

const verbArray = [
  wordBe,
  wordDo,
  wordHave,
  wordCan,
  wordMay,
  wordMust,
  wordShall,
  wordWill,
]

export default verbArray;