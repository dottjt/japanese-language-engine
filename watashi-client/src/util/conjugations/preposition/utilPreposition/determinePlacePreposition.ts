import {
  createError,
} from '../../../functions';

import {
  createWord,
} from '../../utilConjugation';

import {
  CONTEXT_TOPIC_POSITION_NEAR,
  CONTEXT_TOPIC_POSITION_FAR,
  CONTEXT_TOPIC_POSITION_AT,
  CONTEXT_TOPIC_POSITION_INSIDE,

  CONTEXT_TOPIC_DESTINATION_NONE,
  CONTEXT_Y_TOPIC_DESTINATION_ABOVE,
  CONTEXT_Y_TOPIC_DESTINATION_BELOW,
  CONTEXT_Y_TOPIC_DESTINATION_BEHIND,
  CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT,
  CONTEXT_TOPIC_DESTINATION_ALONG,
  CONTEXT_TOPIC_DESTINATION_BESIDE,
  CONTEXT_TOPIC_DESTINATION_WITH,
  CONTEXT_TOPIC_DESTINATION_BETWEEN,
  CONTEXT_TOPIC_DESTINATION_THROUGH,
  CONTEXT_TOPIC_DESTINATION_INSIDE,
  CONTEXT_TOPIC_DESTINATION_OUTSIDE,
  
  CONTEXT_DIRECTION_NONE,
  CONTEXT_DIRECTION_TOWARD,
  CONTEXT_DIRECTION_AWAY,
  CONTEXT_Y_DIRECTION_UP,
  CONTEXT_Y_DIRECTION_DOWN,
  CONTEXT_X_DIRECTION_LEFT,
  CONTEXT_X_DIRECTION_RIGHT,
  CONTEXT_X_DIRECTION_ACROSS,
} from '../../../constants/contextConstants';



import {
  ENGLISH_PREPOSITION,
} from '../../../constants/optionsConstants';

export const determinePlacePreposition = (sentenceContext: Util.SentenceContext): Util.WordElement => {
  
  const contextTopicPosition = sentenceContext.topicPosition;
  const contextTopicDestination = sentenceContext.topicDestination;
  const contextEventDirection = sentenceContext.eventDirection;

  // NOTES: First we check if there is no destination, implying that we will be describing a relative position.
  // NOTES: Otherwise, if there is a destination then it implies we will be describing motion instead.

  if (contextTopicDestination === CONTEXT_TOPIC_DESTINATION_NONE) {
    if (contextTopicPosition === CONTEXT_TOPIC_POSITION_NEAR) {
      switch(contextEventDirection) {
        case CONTEXT_DIRECTION_NONE: return createWord(['at'], ENGLISH_PREPOSITION);
        case CONTEXT_DIRECTION_TOWARD: return createWord(['facing'], ENGLISH_PREPOSITION);
        case CONTEXT_DIRECTION_AWAY: return createWord(['back', 'towards'], ENGLISH_PREPOSITION);
        case CONTEXT_Y_DIRECTION_UP: return createWord(['above'], ENGLISH_PREPOSITION);
        case CONTEXT_Y_DIRECTION_DOWN: return createWord(['below'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_LEFT: return createWord(['on', 'the', 'left', 'of'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_RIGHT: return createWord(['on', 'the', 'right', 'of'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_ACROSS: return createWord(['across'], ENGLISH_PREPOSITION);
      }
    }

    if (contextTopicPosition === CONTEXT_TOPIC_POSITION_FAR) {
      switch(contextEventDirection) {
        case CONTEXT_DIRECTION_NONE: return createWord(['far', 'from'], ENGLISH_PREPOSITION);
        case CONTEXT_DIRECTION_TOWARD: return createWord(['facing'], ENGLISH_PREPOSITION);
        case CONTEXT_DIRECTION_AWAY: return createWord(['back', 'towards'], ENGLISH_PREPOSITION);
        case CONTEXT_Y_DIRECTION_UP: return createWord(['far', 'away', 'above'], ENGLISH_PREPOSITION);
        case CONTEXT_Y_DIRECTION_DOWN: return createWord(['far', 'away', 'below'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_LEFT: return createWord(['far', 'away', 'to', 'the', 'left', 'of'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_RIGHT: return createWord(['far', 'away', 'to', 'the', 'right', 'of'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_ACROSS: return createWord(['far', 'away', 'across'], ENGLISH_PREPOSITION);
      }
    }

    if (contextTopicPosition === CONTEXT_TOPIC_POSITION_AT) {
      switch(contextEventDirection) {
        case CONTEXT_DIRECTION_NONE: return createWord(['on'], ENGLISH_PREPOSITION); // onto
        case CONTEXT_DIRECTION_TOWARD: return createWord(['facing'], ENGLISH_PREPOSITION);
        case CONTEXT_DIRECTION_AWAY: return createWord(['back', 'towards'], ENGLISH_PREPOSITION);
        case CONTEXT_Y_DIRECTION_UP: return createWord(['above'], ENGLISH_PREPOSITION);
        case CONTEXT_Y_DIRECTION_DOWN: return createWord(['below'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_LEFT: return createWord(['left', 'of'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_RIGHT: return createWord(['right', 'of'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_ACROSS: return createWord(['across'], ENGLISH_PREPOSITION);
      }
    }

    if (contextTopicPosition === CONTEXT_TOPIC_POSITION_INSIDE) {
      switch(contextEventDirection) {
        case CONTEXT_DIRECTION_NONE: return createWord(['in'], ENGLISH_PREPOSITION); // inside, within
        case CONTEXT_DIRECTION_TOWARD: return createWord(['from', 'inside', 'towards'], ENGLISH_PREPOSITION);
        case CONTEXT_DIRECTION_AWAY: return createWord(['from', 'inside', 'away'], ENGLISH_PREPOSITION);
        case CONTEXT_Y_DIRECTION_UP: return createWord(['from', 'inside', 'above'], ENGLISH_PREPOSITION);
        case CONTEXT_Y_DIRECTION_DOWN: return createWord(['from', 'inside', 'below'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_LEFT: return createWord(['from', 'inside', 'to', 'the', 'left', 'of'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_RIGHT: return createWord(['from', 'inside', 'to', 'the', 'right', 'of'], ENGLISH_PREPOSITION);
        case CONTEXT_X_DIRECTION_ACROSS: return createWord(['from', 'inside', 'to', 'across', 'of'], ENGLISH_PREPOSITION);
      }
    }
  }

  // 
  if (CONTEXT_TOPIC_POSITION_NEAR) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return createWord(['right', 'above'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return createWord(['right', 'below'], ENGLISH_PREPOSITION); // under, underneath, beneath
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return createWord(['right', 'behind'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return createWord(['right', 'in', 'front'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return createWord(['right', 'along'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return createWord(['right', 'beside'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return createWord(['right', 'with'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return createWord(['right', 'between'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return createWord(['right', 'through'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return createWord(['right', 'inside'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return createWord(['right', 'outside', 'of'], ENGLISH_PREPOSITION);  // out of 
    }
  }

  if (CONTEXT_TOPIC_POSITION_FAR) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return createWord(['far', 'above'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return createWord(['far', 'below'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return createWord(['far', 'behind'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return createWord(['far', 'in', 'front'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return createWord(['far', 'along'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return createWord(['far', 'beside'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return createWord(['far', 'with'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return createWord(['far', 'between'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return createWord(['far', 'through'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return createWord(['far', 'inside'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return createWord(['far', 'outside', 'of'], ENGLISH_PREPOSITION); // out of 
    }
  }

  if (CONTEXT_TOPIC_POSITION_AT) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return createWord(['above'], ENGLISH_PREPOSITION);  // over
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return createWord(['below'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return createWord(['behind'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return createWord(['in', 'front'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return createWord(['along'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return createWord(['beside'], ENGLISH_PREPOSITION); // along, next, to, by
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return createWord(['with'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return createWord(['between'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return createWord(['through'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return createWord(['inside'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return createWord(['outside', 'of'], ENGLISH_PREPOSITION); // out of 
    }
  }

  if (CONTEXT_TOPIC_POSITION_INSIDE) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return createWord(['from', 'inside', 'above'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return createWord(['from', 'inside', 'below'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return createWord(['from', 'inside', 'behind'], ENGLISH_PREPOSITION);
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return createWord(['from', 'inside', 'in', 'front'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return createWord(['from', 'inside', 'along'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return createWord(['from', 'inside', 'beside'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return createWord(['from', 'inside', 'with'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return createWord(['from', 'inside', 'between'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return createWord(['from', 'inside', 'through'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return createWord(['from', 'inside', 'inside'], ENGLISH_PREPOSITION);
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return createWord(['from', 'inside', 'outside'], ENGLISH_PREPOSITION);
    }
  }

  throw new Error(createError('determinePlacePreposition.ts', '', 'Some kind of condition does not exist.'))
};

  // in the kitchen, in London - in the car, in a taxi - in the picture, in the world - in the book
  // the fish are below the surface - the bag is under the table
  // put a jacket over your shirt - over 16 years of age - walk over the bridge - climb over the wall - a path above the lake
  // the picture on the wall - London lies on the Thames. - on the left - on the table - on the first floor - on the bus, on a plane - on TV, on the radio
  // at the door, at the station - at the table - at a concert, at the party - at the cinema, at school, at work
  // beside the door
  // Jane is standing by / next to / beside the car.

  // walk across the bridge - swim across the lake
  // drive through the tunnel
  // go into the kitchen
  // jump onto the table
  // go 5 steps towards the house
  // go to the cinema
  // go to London / Ireland
  // go to bed
  // a flower from the garden

export default determinePlacePreposition;