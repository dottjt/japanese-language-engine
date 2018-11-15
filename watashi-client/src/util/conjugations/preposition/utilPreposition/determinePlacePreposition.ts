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

import {

  
} from '../../../constants/wordConstants';

export const determineTimePrepositionDayOfWeek = (eventContext): string => {
  
  const contextTopicPosition = eventContext.topicPosition;
  const contextTopicDestination = eventContext.topicDestination;
  const contextEventDirection = eventContext.eventDirection;

  // Car, London

  if(CONTEXT_DIRECTION_NONE) {
    if (CONTEXT_TOPIC_POSITION_NEAR) {
      switch(`${contextTopicDestination}`) {
        case `${CONTEXT_TOPIC_DESTINATION_NONE}`: return 'right near';
        case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return 'right above';
        case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return 'right below';
        case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return 'right behind';
        case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return 'right in front';
        case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return 'right along';
        case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return 'right beside';
        case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return 'right with';
        case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return 'right between';
        case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return 'right throughout';
        case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return 'right inside';
        case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return 'right outside';
      }
    }

    if (CONTEXT_TOPIC_POSITION_FAR) {
      switch(`${contextTopicDestination}`) {
        case `${CONTEXT_TOPIC_DESTINATION_NONE}`: return 'far from';
        case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return 'far above';
        case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return 'far below';
        case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return 'far behind';
        case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return 'far in front';
        case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return 'far along';
        case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return 'far beside';
        case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return 'far with';
        case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return 'far between';
        case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return 'far throughout';
        case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return 'far inside';
        case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return 'far outside';
      }
    }

    if (CONTEXT_TOPIC_POSITION_AT) {
      switch(`${contextTopicDestination}`) {
        case `${CONTEXT_TOPIC_DESTINATION_NONE}`: return 'at';
        case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return 'above';
        case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return 'below';
        case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return 'behind';
        case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return 'in front';
        case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return 'along';
        case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return 'beside';
        case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return 'with';
        case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return 'between';
        case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return 'throughout';
        case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return 'inside';
        case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return 'outside';  
      }
    }

    if (CONTEXT_TOPIC_POSITION_INSIDE) {
      switch(`${contextTopicDestination}`) {
        case `${CONTEXT_TOPIC_DESTINATION_NONE}`: return 'inside London';
        case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return 'from inside above';
        case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return 'from inside below';
        case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return 'from inside behind';
        case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return 'from inside in front';
        case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return 'from inside along';
        case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return 'from inside beside';
        case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return 'from inside with';
        case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return 'from inside between';
        case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return 'from inside throughout';
        case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return 'from inside inside';
        case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return 'from inside outside';
      }
    }

  // anything other than CONTEXT_DIRECTION_NONE
  } else if (CONTEXT_DIRECTION_TOWARD) {
    switch(`${contextTopicDestination}`) {
      case `${CONTEXT_TOPIC_DESTINATION_NONE}`: return 'to';
      case `${CONTEXT_Y_TOPIC_DESTINATION_ABOVE}`: return 'above';
      case `${CONTEXT_Y_TOPIC_DESTINATION_BELOW}`: return 'below';
      case `${CONTEXT_Y_TOPIC_DESTINATION_BEHIND}`: return 'behind';
      case `${CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT}`: return 'in front';
      case `${CONTEXT_TOPIC_DESTINATION_ALONG}`: return 'along';
      case `${CONTEXT_TOPIC_DESTINATION_BESIDE}`: return 'beside';
      case `${CONTEXT_TOPIC_DESTINATION_WITH}`: return 'with';
      case `${CONTEXT_TOPIC_DESTINATION_BETWEEN}`: return 'between';
      case `${CONTEXT_TOPIC_DESTINATION_THROUGH}`: return 'throughout';
      case `${CONTEXT_TOPIC_DESTINATION_INSIDE}`: return 'inside';
      case `${CONTEXT_TOPIC_DESTINATION_OUTSIDE}`: return 'outside';
    }
  } else if () {

  }

    // DIRECTION TOWARDS

    // run above London
  
    // topic direction
    CONTEXT_DIRECTION_NONE
    CONTEXT_DIRECTION_TOWARD
    CONTEXT_DIRECTION_AWAY
    CONTEXT_Y_DIRECTION_UP
    CONTEXT_Y_DIRECTION_DOWN
    CONTEXT_X_DIRECTION_LEFT
    CONTEXT_X_DIRECTION_RIGHT
    CONTEXT_X_DIRECTION_ACROSS

    // in London. 
    case `${CONTEXT_WHEN_PRESENT}${CONTEXT_DURATION_CONTINUOUS}`:




    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_PAST}${CONTEXT_DURATION_DEFINITE}`: 
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_CONTINUOUS}`:
    case `${CONTEXT_WHEN_FUTURE}${CONTEXT_DURATION_DEFINITE}`: 
  };
};



const determinePlacePreposition = () => {
  // in the kitchen, in London - in the car, in a taxi - in the picture, in the world - in the book
  if (CONTEXT_TOPIC_POSITION_INSIDE) { 
    return 'in'; // inside, within
  }

  // outside the house
  if (CONTEXT_TOPIC_POSITION_NEAR || CONTEXT_TOPIC_POSITION_FAR || CONTEXT_TOPIC_POSITION_AT) {
    return 'out of'; // outside of
  }

  // the fish are below the surface - the bag is under the table
  if (CONTEXT_Y_TOPIC_DESTINATION_BELOW) {
    return 'below'; // under, underneath, beneath
  }

  // put a jacket over your shirt - over 16 years of age - walk over the bridge - climb over the wall - a path above the lake
  if (CONTEXT_Y_TOPIC_DESTINATION_ABOVE) {
    return 'above'; // over
  }

  if (CONTEXT_TOPIC_POSITION_AT) {
    // the picture on the wall - London lies on the Thames. - on the left - on the table - on the first floor - on the bus, on a plane - on TV, on the radio
    if (CONTEXT_Y_TOPIC_DESTINATION_ABOVE) {
      return 'on';
    }

    // at the door, at the station - at the table - at a concert, at the party - at the cinema, at school, at work
    return 'at';
  }

  // beside the door
  if (CONTEXT_TOPIC_POSITION_NEAR || 
     (CONTEXT_Y_TOPIC_DESTINATION_ABOVE || 
      CONTEXT_Y_TOPIC_DESTINATION_BELOW || 
      CONTEXT_Y_TOPIC_DESTINATION_BEHIND || 
      CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT || 
      CONTEXT_TOPIC_DESTINATION_BESIDE
      )) {
    return 'beside'; // along, next, to
  }

  if (CONTEXT_TOPIC_RELATIVE_TOPIC_DESTINATION_ON && CONTEXT_DIRECTION_TOWARD) {
    return 'onto'; 
  }

  // Jane is standing by / next to / beside the car.
  if (CONTEXT_TOPIC_DESTINATION_BESIDE) {
    return 'by'; // next // to // beside
  }

  throw new Error(createError('prepositionConjugationEnglish.ts', '', ''))
}

export default determinePlacePreposition;