// word.primaryType

export const PRIMARY_TYPE_NOUN = 'noun';
export const PRIMARY_TYPE_VERB = 'verb';
export const PRIMARY_TYPE_ADJECTIVE = 'adjective';

export const primaryTypeArray = [
  PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  PRIMARY_TYPE_ADJECTIVE,
];

// word.category[]

export const CATEGORY_HUMAN_NAME = 'CATEGORY_HUMAN_NAME';
export const CATEGORY_HUMAN = 'CATEGORY_HUMAN';
export const CATEGORY_ANIMAL = 'CATEGORY_ANIMAL';

// human related
export const CATEGORY_RESPONSE = 'CATEGORY_RESPONSE';
export const CATEGORY_FOOD = 'CATEGORY_FOOD';
export const CATEGORY_DRINK = 'CATEGORY_DRINK';
export const CATEGORY_HUMAN_ACTION = 'CATEGORY_HUMAN_ACTION'

export const CATEGORY_LOCATION = 'CATEGORY_LOCATION';

export const categoryArray = [
  CATEGORY_HUMAN_NAME,
  CATEGORY_HUMAN,
  CATEGORY_ANIMAL,
  CATEGORY_RESPONSE,
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_LOCATION,
];

// word.meta

export const SENTENCE_TYPE_VERB_TYPE_RU = 'ru verb';
export const SENTENCE_TYPE_VERB_TYPE_U = 'u verb';

export const verbTypeArray = [
  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
];

// word.type

// Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
export const WORD_TYPE_DAY_OF_WEEK = 'WORD_TYPE_DAY_OF_WEEK';

// Night, Morning, Afternoon, Evening
export const WORD_TYPE_POINT_OF_DAY = 'WORD_TYPE_POINT_OF_DAY';

// January, February, March, April, May, June, July, August, September, October, November, December
export const WORD_TYPE_MONTH = 'WORD_TYPE_MONTH';

// Spring, Summer, Autumn, Winter 
export const WORD_TYPE_SEASON = 'WORD_TYPE_SEASON';

// 1980, 170
export const WORD_TYPE_YEAR_DATE = 'WORD_TYPE_YEAR_DATE';

// half past nine, 5th of August
export const WORD_TYPE_CLOCK_DATE = 'WORD_TYPE_CLOCK_DATE';

// year, day, week, month
export const WORD_TYPE_PERIOD_DESCRIPTOR = 'WORD_TYPE_PERIOD_DESCRIPTOR';

// 1, 3, 5, 7,
export const WORD_TYPE_NUMBER = 'WORD_TYPE_NUMBER';

// 1 - 12
export const WORD_TYPE_NUMBER_HOUR = 'WORD_TYPE_NUMBER_HOUR';

// 1 - 60
export const WORD_TYPE_NUMBER_MINUTE = 'WORD_TYPE_NUMBER_MINUTE';

export const WORD_TYPE = 'WORD_TYPE';