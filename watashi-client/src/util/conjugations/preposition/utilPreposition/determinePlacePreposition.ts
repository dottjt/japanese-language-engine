import {
  createError,
} from '../../../functions';

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

export const determinePlacePreposition = (sentenceContext: Util.SentenceContext): string[] => {
  
  const contextTopicPosition = sentenceContext.topicPosition;
  const contextTopicDestination = sentenceContext.topicDestination;
  const contextEventDirection = sentenceContext.eventDirection;

  // NOTES: First we check if there is no destination, implying that we will be describing a relative position.
  // NOTES: Otherwise, if there is a destination then it implies we will be describing motion instead.

  // I am not satisfied with this, should be one big CASE statement, I think.

  if (contextTopicDestination === CONTEXT_TOPIC_DESTINATION_NONE) {
    if (contextTopicPosition === CONTEXT_TOPIC_POSITION_NEAR) {
      switch(contextEventDirection) {
        case CONTEXT_DIRECTION_NONE: return ['at'];
        case CONTEXT_DIRECTION_TOWARD: return ['facing'];
        case CONTEXT_DIRECTION_AWAY: return ['back', 'towards'];
        case CONTEXT_Y_DIRECTION_UP: return ['above'];
        case CONTEXT_Y_DIRECTION_DOWN: return ['below'];
        case CONTEXT_X_DIRECTION_LEFT: return ['on', 'the', 'left', 'of'];
        case CONTEXT_X_DIRECTION_RIGHT: return ['on', 'the', 'right', 'of'];
        case CONTEXT_X_DIRECTION_ACROSS: return ['across'];
      }
    }

    if (contextTopicPosition === CONTEXT_TOPIC_POSITION_FAR) {
      switch(contextEventDirection) {
        case CONTEXT_DIRECTION_NONE: return ['far', 'from'];
        case CONTEXT_DIRECTION_TOWARD: return ['facing'];
        case CONTEXT_DIRECTION_AWAY: return ['back', 'towards'];
        case CONTEXT_Y_DIRECTION_UP: return ['far', 'away', 'above'];
        case CONTEXT_Y_DIRECTION_DOWN: return ['far', 'away', 'below'];
        case CONTEXT_X_DIRECTION_LEFT: return ['far', 'away', 'to', 'the', 'left', 'of'];
        case CONTEXT_X_DIRECTION_RIGHT: return ['far', 'away', 'to', 'the', 'right', 'of'];
        case CONTEXT_X_DIRECTION_ACROSS: return ['far', 'away', 'across'];
      }
    }

    if (contextTopicPosition === CONTEXT_TOPIC_POSITION_AT) {
      switch(contextEventDirection) {
        case CONTEXT_DIRECTION_NONE: return ['on']; // onto
        case CONTEXT_DIRECTION_TOWARD: return ['facing'];
        case CONTEXT_DIRECTION_AWAY: return ['back', 'towards'];
        case CONTEXT_Y_DIRECTION_UP: return ['above'];
        case CONTEXT_Y_DIRECTION_DOWN: return ['below'];
        case CONTEXT_X_DIRECTION_LEFT: return ['left', 'of'];
        case CONTEXT_X_DIRECTION_RIGHT: return ['right', 'of'];
        case CONTEXT_X_DIRECTION_ACROSS: return ['across'];
      }
    }

    if (contextTopicPosition === CONTEXT_TOPIC_POSITION_INSIDE) {
      switch(contextEventDirection) {
        case CONTEXT_DIRECTION_NONE: return ['in']; // inside, within
        case CONTEXT_DIRECTION_TOWARD: return ['from', 'inside', 'towards'];
        case CONTEXT_DIRECTION_AWAY: return ['from', 'inside', 'away'];
        case CONTEXT_Y_DIRECTION_UP: return ['from', 'inside', 'above'];
        case CONTEXT_Y_DIRECTION_DOWN: return ['from', 'inside', 'below'];
        case CONTEXT_X_DIRECTION_LEFT: return ['from', 'inside', 'to', 'the', 'left', 'of'];
        case CONTEXT_X_DIRECTION_RIGHT: return ['from', 'inside', 'to', 'the', 'right', 'of'];
        case CONTEXT_X_DIRECTION_ACROSS: return ['from', 'inside', 'to', 'across', 'of'];
      }
    }
  }

  // 
  if (CONTEXT_TOPIC_POSITION_NEAR) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return ['right', 'above'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return ['right', 'below']; // under, underneath, beneath
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return ['right', 'behind'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return ['right', 'in', 'front'];
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return ['right', 'along'];
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return ['right', 'beside'];
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return ['right', 'with'];
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return ['right', 'between'];
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return ['right', 'through'];
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return ['right', 'inside'];
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return ['right', 'outside', 'of'];  // out of 
    }
  }

  if (CONTEXT_TOPIC_POSITION_FAR) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return ['far', 'above'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return ['far', 'below'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return ['far', 'behind'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return ['far', 'in', 'front'];
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return ['far', 'along'];
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return ['far', 'beside'];
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return ['far', 'with'];
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return ['far', 'between'];
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return ['far', 'through'];
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return ['far', 'inside'];
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return ['far', 'outside', 'of']; // out of 
    }
  }

  if (CONTEXT_TOPIC_POSITION_AT) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return ['above'];  // over
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return ['below'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return ['behind'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return ['in', 'front'];
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return ['along'];
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return ['beside']; // along, next, to, by
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return ['with'];
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return ['between'];
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return ['through'];
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return ['inside'];
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return ['outside', 'of']; // out of 
    }
  }

  if (CONTEXT_TOPIC_POSITION_INSIDE) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return ['from', 'inside', 'above'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return ['from', 'inside', 'below'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return ['from', 'inside', 'behind'];
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return ['from', 'inside', 'in', 'front'];
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return ['from', 'inside', 'along'];
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return ['from', 'inside', 'beside'];
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return ['from', 'inside', 'with'];
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return ['from', 'inside', 'between'];
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return ['from', 'inside', 'through'];
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return ['from', 'inside', 'inside'];
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return ['from', 'inside', 'outside'];
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