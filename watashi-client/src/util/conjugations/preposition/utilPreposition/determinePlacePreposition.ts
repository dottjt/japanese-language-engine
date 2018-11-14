import {
  createError,
} from '../../../functions';

import {
  CONTEXT_DESTINATION_BESIDE,

  CONTEXT_SITUATION_INSIDE,
  CONTEXT_SITUATION_OUTSIDE,

  CONTEXT_DISTANCE_NEAR,
  // CONTEXT_DISTANCE_FAR,
  CONTEXT_DISTANCE_AT,

  CONTEXT_Y_DESTINATION_ABOVE,
  CONTEXT_Y_DESTINATION_BELOW,
  CONTEXT_Y_DESTINATION_BEHIND,
  CONTEXT_Y_DESTINATION_IN_FRONT,

} from '../../../constants/contextConstants';

import {

  
} from '../../../constants/wordConstants';

// I think I need to keep in count sentence structure as well to determine what these things mean.


const determinePlacePreposition = () => {
  // in the kitchen, in London - in the book - in the car, in a taxi - in the picture, in the world
  if (CONTEXT_SITUATION_INSIDE) {
    return 'in'; // inside, within
  }

  // outside the house
  if (CONTEXT_SITUATION_OUTSIDE) {
    return 'out of'; // outside of
  }

  // the fish are below the surface - the bag is under the table
  if (CONTEXT_Y_DESTINATION_BELOW) {
    return 'below'; // under, underneath, beneath
  }

  // put a jacket over your shirt - over 16 years of age - walk over the bridge - climb over the wall - a path above the lake
  if (CONTEXT_Y_DESTINATION_ABOVE) {
    return 'above'; // over
  }

  if (CONTEXT_DISTANCE_AT) {
    // the picture on the wall - London lies on the Thames. - on the left - on the table - on the first floor - on the bus, on a plane - on TV, on the radio
    if (CONTEXT_Y_DESTINATION_ABOVE) {
      return 'on';
    }

    // at the door, at the station - at the table - at a concert, at the party - at the cinema, at school, at work
    return 'at';
  }

  // beside the door
  if (CONTEXT_DISTANCE_NEAR || 
     (CONTEXT_Y_DESTINATION_ABOVE || 
      CONTEXT_Y_DESTINATION_BELOW || 
      CONTEXT_Y_DESTINATION_BEHIND || 
      CONTEXT_Y_DESTINATION_IN_FRONT || 
      CONTEXT_DESTINATION_BESIDE
      )) {
    return 'beside'; // along, next, to
  }

  if (CONTEXT_TOPIC_RELATIVE_DESTINATION_ON && CONTEXT_DIRECTION_TOWARD) {
    return 'onto'; 
  }

  // Jane is standing by / next to / beside the car.
  if (CONTEXT_DESTINATION_BESIDE) {
    return 'by'; // next // to // beside
  }


  throw new Error(createError('prepositionConjugationEnglish.ts', '', ''))
}

export default determinePlacePreposition;