import {
  NOUN,

  HUMAN_NAME,
  HUMAN,
  RESPONSE,

  __TYPENAME_WORDS,
} from '../util/constants';

export const wordKobayashi = {
  japanese: '小林さん',
  english: 'Kobayashi',
  primaryType: NOUN,
  category: [ HUMAN_NAME ],
  typeMeta: {},
  __typename: __TYPENAME_WORDS,
};

export const wordPerson = {
  japanese: '人',
  english: 'person',
  primaryType: NOUN,
  category: [ HUMAN ],
  typeMeta: {},
  __typename: __TYPENAME_WORDS,
};

export const wordNo = {
  japanese: 'いいえ',
  english: 'no',
  primaryType: NOUN,
  category: [ RESPONSE ],
  typeMeta: {},
  __typename: __TYPENAME_WORDS,
}
