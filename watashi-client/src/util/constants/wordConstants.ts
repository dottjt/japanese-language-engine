// word element types

export const ENGLISH_TOPIC = 'ENGLISH_TOPIC';
export const ENGLISH_SUBJECT = 'ENGLISH_SUBJECT';
export const ENGLISH_VERB = 'ENGLISH_VERB';
export const ENGLISH_VERB_HELPING = 'ENGLISH_VERB_HELPING';
export const ENGLISH_ADVERB = 'ENGLISH_ADVERB';
export const ENGLISH_ADJECTIVE = 'ENGLISH_ADJECTIVE';

export const ENGLISH_NOUN_DECLENSION = 'ENGLISH_NOUN_DECLENSION';
export const ENGLISH_TENSE = 'ENGLISH_TENSE';
export const ENGLISH_POLARITY = 'ENGLISH_POLARITY';
export const ENGLISH_INDEFINITE_ARTICLE = 'ENGLISH_INDEFINITE_ARTICLE';
export const ENGLISH_PREPOSITION = 'ENGLISH_PREPOSITION';


export const JAPANESE_TOPIC = 'JAPANESE_TOPIC';
export const JAPANESE_SUBJECT = 'JAPANESE_SUBJECT';

export const JAPANESE_NOUN_DECLENSION = 'JAPANESE_NOUN_DECLENSION';
export const JAPANESE_TENSE = 'JAPANESE_TENSE';
export const JAPANESE_POLARITY = 'JAPANESE_POLARITY';
export const JAPANESE_VERB_STEM = 'JAPANESE_VERB_STEM';
export const JAPANESE_POLITENESS = 'JAPANESE_POLITENESS';
export const JAPANESE_CONJUGATION = 'JAPANESE_CONJUGATION';
export const JAPANESE_TOPIC_PARTICLE = 'JAPANESE_TOPIC_PARTICLE';
export const JAPANESE_CATEGORY_ENDING = 'JAPANESE_CATEGORY_ENDING';

// WORD SENTENCE TYPES

export const SENTENCE_TYPE_VERB = 'SENTENCE_TYPE_VERB';
export const SENTENCE_TYPE_VERB_HELPING = 'SENTENCE_TYPE_VERB_HELPING';
export const SENTENCE_TYPE_ADVERB = 'SENTENCE_TYPE_ADVERB';
export const SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE = 'SENTENCE_TYPE_ADJECTIVE_INDEFINITE_ARTICLE';

export const SENTENCE_TYPE_SUBJECT = 'SENTENCE_TYPE_SUBJECT';
export const SENTENCE_TYPE_TOPIC = 'SENTENCE_TYPE_TOPIC';
export const SENTENCE_TYPE_PREPOSITION = 'SENTENCE_TYPE_PREPOSITION';

// VERB ACTION TYPES

export const VERB_ACTION_STATIC = 'VERB_ACTION_STATIC';
export const VERB_ACTION_MOVEMENT = 'VERB_ACTION_MOVEMENT';
export const VERB_ACTION_POSESSION = 'VERB_ACTION_POSESSION';

export const VERB_TYPE_ACTION_TRANSITIVE = 'VERB_TYPE_ACTION_TRANSITIVE';
export const VERB_TYPE_ACTION_INTRANSITIVE = 'VERB_TYPE_ACTION_INTRANSITIVE';
export const VERB_TYPE_ACTION_BOTH = 'VERB_TYPE_ACTION_BOTH';
export const VERB_TYPE_HELPING = 'VERB_TYPE_HELPING';
export const VERB_TYPE_LINKING = 'VERB_TYPE_LINKING';
export const VERB_TYPE_LINKING_OR_ACTION = 'VERB_TYPE_LINKING_OR_ACTION';
export const VERB_TYPE_TO_BE = 'VERB_TYPE_TO_BE';

// ADJECTIVE TYPES 

export const ADJECTIVE_TYPE_INDEFINITE_ARTICLE = 'ADJECTIVE_TYPE_INDEFINITE_ARTICLE';
export const ADJECTIVE_TYPE_DESCRIPTIVE = 'ADJECTIVE_TYPE_DESCRIPTIVE';
export const ADJECTIVE_TYPE_QUANTITATIVE = 'ADJECTIVE_TYPE_QUANTITATIVE';
export const ADJECTIVE_TYPE_DEMONSTRATIVE = 'ADJECTIVE_TYPE_DEMONSTRATIVE';
export const ADJECTIVE_TYPE_POSSESSIVE = 'ADJECTIVE_TYPE_POSSESSIVE';
export const ADJECTIVE_TYPE_INTERROGATIVE = 'ADJECTIVE_TYPE_INTERROGATIVE';
export const ADJECTIVE_TYPE_DISTRIBUTIVE = 'ADJECTIVE_TYPE_DISTRIBUTIVE';

// noun.category[]

export const CATEGORY_TOPIC_UNKNOWN = 'CATEGORY_TOPIC_UNKNOWN';
export const CATEGORY_SUBJECT_UNKNOWN = 'CATEGORY_SUBJECT_UNKNOWN';
export const CATEGORY_VERB_UNKNOWN = 'CATEGORY_VERB_UNKNOWN';

export const CATEGORY_ANIMATE = 'CATEGORY_ANIMATE';
export const CATEGORY_INANIMATE = 'CATEGORY_INANIMATE';

export const CATEGORY_HUMAN_NAME = 'CATEGORY_HUMAN_NAME';
export const CATEGORY_HUMAN = 'CATEGORY_HUMAN';
export const CATEGORY_ANIMAL = 'CATEGORY_ANIMAL';

export const CATEGORY_RESPONSE = 'CATEGORY_RESPONSE';

export const CATEGORY_FOOD_GENERAL = 'CATEGORY_FOOD_GENERAL';
export const CATEGORY_FOOD = 'CATEGORY_FOOD';

export const CATEGORY_FOOD_FRUIT = 'CATEGORY_FOOD_FRUIT';
export const CATEGORY_FOOD_DESSERT = 'CATEGORY_FOOD_DESSERT';
export const CATEGORY_FOOD_ALCOHOL = 'CATEGORY_FOOD_ALCOHOL';
export const CATEGORY_FOOD_DISH = 'CATEGORY_FOOD_DISH';
export const CATEGORY_FOOD_BEVERAGE = 'CATEGORY_FOOD_BEVERAGE';
export const CATEGORY_FOOD_LOCATION = 'CATEGORY_FOOD_LOCATION';
export const CATEGORY_FOOD_MEAT_FISH = 'CATEGORY_FOOD_MEAT_FISH';
export const CATEGORY_FOOD_SAUCE_SPICE = 'CATEGORY_FOOD_SAUCE_SPICE';

export const CATEGORY_FOOD_COOK_ACTION_PREPARTION = 'CATEGORY_FOOD_COOK_ACTION_PREPARTION';

export const CATEGORY_DRINK = 'CATEGORY_DRINK';

// verb.category[]

export const CATEGORY_VERB_ACTION_MOVEMENT = 'CATEGORY_VERB_ACTION_MOVEMENT';
export const CATEGORY_VERB_ACTION_STATIC = 'CATEGORY_VERB_ACTION_STATIC';
export const CATEGORY_VERB_ACTION_POSSESSION = 'CATEGORY_VERB_ACTION_POSSESSION';

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

export const SENTENCE_TYPE_VERB_TYPE_U_RU_VERBS = 'SENTENCE_TYPE_VERB_TYPE_U_RU_VERBS';
export const SENTENCE_TYPE_VERB_TYPE_RU = 'SENTENCE_TYPE_VERB_TYPE_RU';
export const SENTENCE_TYPE_VERB_TYPE_U = 'SENTENCE_TYPE_VERB_TYPE_U';
export const SENTENCE_TYPE_VERB_TYPE_IRREGULAR = 'SENTENCE_TYPE_VERB_TYPE_IRREGULAR';

export const NOUN_PLURAL_EXCEPTION = "NOUN_PLURAL_EXCEPTION";
export const NOUN_PLURAL_ONLY = "NOUN_PLURAL_ONLY";
export const NOUN_PLURAL_SINGLE_ONLY = "NOUN_PLURAL_SINGLE_ONLY";
export const NOUN_PLURAL_IRREGULAR = "NOUN_PLURAL_IRREGULAR";
export const NOUN_PLURAL_GENERAL = "NOUN_PLURAL_GENERAL";
export const NOUN_PLURAL_NAME = "NOUN_PLURAL_NAME";

export const verbTypeArray = [
  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
  SENTENCE_TYPE_VERB_TYPE_IRREGULAR,

  NOUN_PLURAL_EXCEPTION,
  NOUN_PLURAL_ONLY,
  NOUN_PLURAL_SINGLE_ONLY,
  NOUN_PLURAL_IRREGULAR,
  NOUN_PLURAL_GENERAL,
  NOUN_PLURAL_NAME,
];

// WORD TENSE

export const TENSE_SIMPLE_PRESENT = "TENSE_SIMPLE_PRESENT";
export const TENSE_PRESENT_CONTINUOUS = "TENSE_PRESENT_CONTINUOUS";
export const TENSE_PRESENT_PERFECT = "TENSE_PRESENT_PERFECT";
export const TENSE_PRESENT_PERFECT_CONTINUOUS = "TENSE_PRESENT_PERFECT_CONTINUOUS";

export const TENSE_SIMPLE_PAST = "TENSE_SIMPLE_PAST";
export const TENSE_PAST_CONTINUOUS = "TENSE_PAST_CONTINUOUS";
export const TENSE_PAST_PERFECT = "TENSE_PAST_PERFECT";
export const TENSE_PAST_PERFECT_CONTINUOUS = "TENSE_PAST_PERFECT_CONTINUOUS";

export const TENSE_SIMPLE_FUTURE = "TENSE_SIMPLE_FUTURE";
export const TENSE_FUTURE_CONTINUOUS = "TENSE_FUTURE_CONTINUOUS";
export const TENSE_FUTURE_PERFECT = "TENSE_FUTURE_PERFECT";
export const TENSE_FUTURE_PERFECT_CONTINUOUS = "TENSE_FUTURE_PERFECT_CONTINUOUS";



// word.type

// ADJECTIVE TYPES

export const ADJECTIVE_DESCRIPTIVE_POSITIVE = 'ADJECTIVE_DESCRIPTIVE_POSITIVE';
export const ADJECTIVE_DESCRIPTIVE_COMPARATIVE = 'ADJECTIVE_DESCRIPTIVE_COMPARATIVE';
export const ADJECTIVE_DESCRIPTIVE_SUPERLATIVE = 'ADJECTIVE_DESCRIPTIVE_SUPERLATIVE';
export const ADJECTIVE_QUANTITATIVE = 'ADJECTIVE_QUANTITATIVE';
export const ADJECTIVE_DEMONSTRATIVE = 'ADJECTIVE_DEMONSTRATIVE';
export const ADJECTIVE_POSSESSIVE = 'ADJECTIVE_POSSESSIVE';
export const ADJECTIVE_INTERROGATIVE = 'ADJECTIVE_INTERROGATIVE';
export const ADJECTIVE_DISTRIBUTIVE = 'ADJECTIVE_DISTRIBUTIVE';
export const ADJECTIVE_ARTICLE_DISTRIBUTIVE = 'ADJECTIVE_ARTICLE_DISTRIBUTIVE';

// NOUN TYPE TIME 

// Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
export const NOUN_TYPE_DAY_OF_WEEK = 'NOUN_TYPE_DAY_OF_WEEK';

// Morning, Afternoon, Evening
export const NOUN_TYPE_POINT_OF_DAY = 'NOUN_TYPE_POINT_OF_DAY';

// Night
export const NOUN_TYPE_POINT_OF_DAY_NIGHT = 'NOUN_TYPE_POINT_OF_DAY_NIGHT';

// January, February, March, April, May, June, July, August, September, October, November, December
export const NOUN_TYPE_MONTH = 'NOUN_TYPE_MONTH';

// Spring, Summer, Autumn, Winter 
export const NOUN_TYPE_SEASON = 'NOUN_TYPE_SEASON';

// 1980, 170
export const NOUN_TYPE_YEAR_DATE = 'NOUN_TYPE_YEAR_DATE';

// half past nine, 5th of August
export const NOUN_TYPE_CLOCK_DATE = 'NOUN_TYPE_CLOCK_DATE';

// year, day, week, month
export const NOUN_TYPE_PERIOD_DESCRIPTOR = 'NOUN_TYPE_PERIOD_DESCRIPTOR';

// 1, 3, 5, 7,
export const NOUN_TYPE_NUMBER = 'NOUN_TYPE_NUMBER';

// 1 - 12
export const NOUN_TYPE_NUMBER_HOUR = 'NOUN_TYPE_NUMBER_HOUR';

// 1 - 60
export const NOUN_TYPE_NUMBER_MINUTE = 'NOUN_TYPE_NUMBER_MINUTE';


// WORD TYPE DIRECTION

export const NOUN_TYPE_SPACE = 'NOUN_TYPE_SPACE';

export const NOUN_TYPE_ABSTRACT = 'NOUN_TYPE_ABSTRACT';


