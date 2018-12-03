import {
  uTop,
  top,
  adjTop,
  uTop_uSub,
  uTop_Sub,
  uTop_adjSub,
  top_Sub,
  top_adjSub,
  verb,
  verbAdv,
  verb_Sub,
  
  THEMES_DEFAULT,
  POLITENESS_CASUAL,
  POLARITY_POSITIVE,
  GENDER_MASCULINE,
  NOT_QUESTION,
} from '../constants/optionsConstants';

import {
  CONTEXT_INTENT_EXISTENCE,
  CONTEXT_PROXIMITY_NEAR,
  CONTEXT_TOPIC_DESTINATION_NONE,
  CONTEXT_DIRECTION_NONE,
  CONTEXT_EVENT_OCCURANCE_NOW,
  CONTEXT_EVENT_DURATION_SINGLE,
  CONTEXT_POV_SELF_SINGULAR,
  CONTEXT_SUBJECT_CONNECTION_INDEPENDENT,
  CONTEXT_SUBJECT_ROLE_DIRECT,
  CONTEXT_SUBJECT_QUANTITY_SINGLE,
} from '../constants/contextConstants';

import {
  __TYPENAME_PRE_OPTIONS,
  __TYPENAME_PRE_MODIFIERS,
  __TYPENAME_PRE_SENTENCE_CONTEXT,
} from '../constants/typeNameConstants';

import {
  PLAYGROUND_TITLE,
} from '../constants/playgroundConstants';

// NOTE: The way this is built could cause problems
const playgroundPreOptionsStem = (variation): Util.PreOptions => ({
  politenessArray: [ POLITENESS_CASUAL ],
  variationArray: [ variation ],
  polarityArray: [ POLARITY_POSITIVE ],
  genderArray: [ GENDER_MASCULINE ],
  questionArray: [ NOT_QUESTION ],
  // sentenceEnding: [],
  themesArray: [ THEMES_DEFAULT ],
  __typename: __TYPENAME_PRE_OPTIONS,
});

export const PLAYGROUND_PRE_OPTIONS = {
  uTop: playgroundPreOptionsStem(uTop),
  top: playgroundPreOptionsStem(top),
  adjTop: playgroundPreOptionsStem(adjTop),
  
  uTop_uSub: playgroundPreOptionsStem(uTop_uSub),
  uTop_Sub: playgroundPreOptionsStem(uTop_Sub),
  uTop_adjSub: playgroundPreOptionsStem(uTop_adjSub),
  top_Sub: playgroundPreOptionsStem(top_Sub),
  top_adjSub: playgroundPreOptionsStem(top_adjSub),

  verb: playgroundPreOptionsStem(verb),
  verbAdv: playgroundPreOptionsStem(verbAdv),
  verb_Sub: playgroundPreOptionsStem(verb_Sub),
};

const playgroundPreModifiersStem = (variation) => ({
  __typename: __TYPENAME_PRE_MODIFIERS,
  topicNoArray: [ 'MODIFIERS_NA' ],
  subjectNoArray: [ 'MODIFIERS_NA' ],
  topicAdjectiveArray: [ 'MODIFIERS_NA' ],
  topicAdverbArray: [ 'MODIFIERS_NA' ],
  subjectAdjectiveArray: [ 'MODIFIERS_NA' ],
  subjectAdverbArray: [ 'MODIFIERS_NA' ],
});

export const PLAYGROUND_PRE_MODIFIERS = {
  uTop: playgroundPreModifiersStem(uTop),
  top: playgroundPreModifiersStem(top),
  adjTop: playgroundPreModifiersStem(adjTop),
  
  uTop_uSub: playgroundPreModifiersStem(uTop_uSub),
  uTop_Sub: playgroundPreModifiersStem(uTop_Sub),
  uTop_adjSub: playgroundPreModifiersStem(uTop_adjSub),
  top_Sub: playgroundPreModifiersStem(top_Sub),
  top_adjSub: playgroundPreModifiersStem(top_adjSub),

  verb: playgroundPreModifiersStem(verb),
  verbAdv: playgroundPreModifiersStem(verbAdv),
  verb_Sub: playgroundPreModifiersStem(verb_Sub),
};

const playgroundSentenceContextStem = () => ({
  __typename: __TYPENAME_PRE_SENTENCE_CONTEXT,
  topicIntentArray: [ CONTEXT_INTENT_EXISTENCE ],
  topicProximityArray: [ CONTEXT_PROXIMITY_NEAR ],
  topicDestinationArray: [ CONTEXT_TOPIC_DESTINATION_NONE ],
  eventDirectionArray: [ CONTEXT_DIRECTION_NONE ],
  eventOccuranceArray: [ CONTEXT_EVENT_OCCURANCE_NOW ],
  eventDurationArray: [ CONTEXT_EVENT_DURATION_SINGLE ],
  eventPOVArray: [ CONTEXT_POV_SELF_SINGULAR ],
  subjectConnectionArray: [ CONTEXT_SUBJECT_CONNECTION_INDEPENDENT ],
  subjectRoleArray: [ CONTEXT_SUBJECT_ROLE_DIRECT ],
  subjectQuantityArray: [ CONTEXT_SUBJECT_QUANTITY_SINGLE ],
});

export const PLAYGROUND_PRE_SENTENCE_CONTEXT = {
  uTop: playgroundSentenceContextStem(),
  top: playgroundSentenceContextStem(),
  adjTop: playgroundSentenceContextStem(),
  
  uTop_uSub: playgroundSentenceContextStem(),
  uTop_Sub: playgroundSentenceContextStem(),
  uTop_adjSub: playgroundSentenceContextStem(),
  top_Sub: playgroundSentenceContextStem(),
  top_adjSub: playgroundSentenceContextStem(),

  verb: playgroundSentenceContextStem(),
  verbAdv: playgroundSentenceContextStem(),
  verb_Sub: playgroundSentenceContextStem(),
};


// ACTUAL PLAYGROUNDS

export const uTopPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop,
  preOptions: PLAYGROUND_PRE_OPTIONS.uTop,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.uTop,
  title: PLAYGROUND_TITLE.uTop,
};

export const topPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.top,
  preOptions: PLAYGROUND_PRE_OPTIONS.top,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.top,
  title: PLAYGROUND_TITLE.top,
};

export const adjTopPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.adjTop,
  preOptions: PLAYGROUND_PRE_OPTIONS.adjTop,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.adjTop,
  title: PLAYGROUND_TITLE.adjTop,
};

export const uTop_uSubPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop_uSub,
  preOptions: PLAYGROUND_PRE_OPTIONS.uTop_uSub,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.uTop_uSub,
  title: PLAYGROUND_TITLE.uTop_uSub,
};

export const uTop_SubPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop_Sub,
  preOptions: PLAYGROUND_PRE_OPTIONS.uTop_Sub,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.uTop_Sub,
  title: PLAYGROUND_TITLE.uTop_Sub,
};

export const uTop_adjSubPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.uTop_adjSub,
  preOptions: PLAYGROUND_PRE_OPTIONS.uTop_adjSub,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.uTop_adjSub,
  title: PLAYGROUND_TITLE.uTop_adjSub,
};

export const top_SubPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.top_Sub,
  preOptions: PLAYGROUND_PRE_OPTIONS.top_Sub,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.top_Sub,
  title: PLAYGROUND_TITLE.top_Sub,
};

export const top_adjSubPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.top_adjSub,
  preOptions: PLAYGROUND_PRE_OPTIONS.top_adjSub,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.top_adjSub,
  title: PLAYGROUND_TITLE.top_adjSub,
};

export const verbPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.verb,
  preOptions: PLAYGROUND_PRE_OPTIONS.verb,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.verb,
  title: PLAYGROUND_TITLE.verb,
};

export const verbAdvPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.verbAdv,
  preOptions: PLAYGROUND_PRE_OPTIONS.verbAdv,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.verbAdv,
  title: PLAYGROUND_TITLE.verbAdv,
};

export const verb_SubPlayground = {
  preSentenceContext: PLAYGROUND_PRE_SENTENCE_CONTEXT.verb_Sub,
  preOptions: PLAYGROUND_PRE_OPTIONS.verb_Sub,
  preModifiers: PLAYGROUND_PRE_MODIFIERS.verb_Sub,
  title: PLAYGROUND_TITLE.verb_Sub,
};



