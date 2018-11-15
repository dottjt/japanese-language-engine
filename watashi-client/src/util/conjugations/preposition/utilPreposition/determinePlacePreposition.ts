import {
  createError,
} from '../../../functions';

import {
  CONTEXT_TOPIC_DESTINATION_BESIDE,

  CONTEXT_TOPIC_POSITION_INSIDE,
  CONTEXT_TOPIC_POSITION_NEAR,
  CONTEXT_TOPIC_POSITION_FAR,
  CONTEXT_TOPIC_POSITION_AT,

  CONTEXT_Y_TOPIC_DESTINATION_ABOVE,
  CONTEXT_Y_TOPIC_DESTINATION_BELOW,
  CONTEXT_Y_TOPIC_DESTINATION_BEHIND,
  CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT,

} from '../../../constants/contextConstants';

import {

  
} from '../../../constants/wordConstants';

// I think I need to keep in count sentence structure as well to determine what these things mean.


// car // building // field
// export const WORD_TYPE_LOCATION = "WORD_TYPE_LOCATION";
// export const WORD_TYPE_LOCATION = "WORD_TYPE_LOCATION";
  


// field 
// const Building


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