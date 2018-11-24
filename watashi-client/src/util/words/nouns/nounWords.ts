import {
  CATEGORY_HUMAN,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,

  CATEGORY_SUBJECT_UNKNOWN,
  CATEGORY_TOPIC_UNKNOWN,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// MISC

const unknownSubject = createNounWord({
  nounWordType: '',
  nounPluralType: '',
  nounCategory: [ CATEGORY_SUBJECT_UNKNOWN ],
  kanji: '',
  hiragana: '',
  singular: '',
});

const unknownTopic = createNounWord({
  nounWordType: '',
  nounPluralType: '',
  nounCategory: [ CATEGORY_TOPIC_UNKNOWN ],
  kanji: '',
  hiragana: '',
  singular: '',
});


// HUMAN

const wordPerson = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_HUMAN ],
  kanji: '人',
  hiragana: 'ひと',
  singular: 'person',
});

const nounArray = [
  unknownSubject,
  unknownTopic,

  wordPerson,
];

export default nounArray;
