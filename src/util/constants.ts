// null

export const NULL = 'NULL';

// language

export const LANG_ENGLISH = 'LANG_ENGLISH';
export const LANG_JAPANESE = 'LANG_JAPANESE';

export const languageArray = [
  LANG_ENGLISH,
  LANG_JAPANESE,
];

// title

export const L00_CONTENTS = 'Grammar Boss Contents';
export const L01_LESSON_TITLE = 'Basic は、も and が statements';
export const L02_LESSON_TITLE = 'Basic は、も and が questions';

// conjugation identifier

export const PREDICATE_IDENTIFIER = 'predicate';
export const TOPIC_IDENTIFIER = 'topic';

export const identifierArray = [
  PREDICATE_IDENTIFIER,
  TOPIC_IDENTIFIER,
];

// options.sentenceType

export const TOPIC_PREDICATE = 'TOPIC_PREDICATE';

export const sentenceTypeArray = [
  TOPIC_PREDICATE,
];

// options.variation

export const WA_SOB = 'WA_SOB'; // WA - STATEMENT OF BEING
export const WA_SOB_QUESTION = 'WA_SOB_QUESTION'; // WA - STATEMENT OF BEING

export const variationArray = [
  WA_SOB,
  WA_SOB_QUESTION,
];

// options.polarity

export const POLARITY_POSITIVE = 'p';
export const POLARITY_NEGATIVE = 'n';

export const polarityArray = [ 
  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,
];

// options.politeness

export const POLITENESS_CASUAL = 'c';
export const POLITENESS_FORMAL = 'f';
export const POLITENESS_HUMBLE = 'hu';
export const POLITENESS_HONORIFIC = 'ho';

export const politenessArray = [ 
  POLITENESS_CASUAL,
  POLITENESS_FORMAL,
  // POLITENESS_HUMBLE,
  // POLITENESS_HONORIFIC,
];

// __typename

export const __TYPENAME_OPTIONS = 'options';
export const __TYPENAME_WORDS = 'words';

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

export const CATEGORY_HUMAN_NAME = 'human name';
export const CATEGORY_HUMAN = 'human';
export const CATEGORY_ANIMAL = 'animal';

export const CATEGORY_RESPONSE = 'response';
export const CATEGORY_FOOD = 'food';
export const CATEGORY_DRINK = 'drink';

export const categoryArray = [
  CATEGORY_HUMAN_NAME,
  CATEGORY_HUMAN,
  CATEGORY_ANIMAL,
  CATEGORY_RESPONSE,
  CATEGORY_FOOD,
  CATEGORY_DRINK,  
];

// resources

export const RESOURCE_TAE_KIM = 'Tae Kim\'s Guide to Learning Japanese';
export const RESOURCE_WASABI = 'Wasabi';
