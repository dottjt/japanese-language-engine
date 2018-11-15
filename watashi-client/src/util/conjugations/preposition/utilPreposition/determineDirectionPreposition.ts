import {
  createError,
} from '../../../functions';

import {
  CONTEXT_X_DIRECTION_ACROSS,
  CONTEXT_DIRECTION_TOWARD,
  CONTEXT_DIRECTION_AWAY,
  
  CONTEXT_Y_TOPIC_DESTINATION_ABOVE,
  CONTEXT_TOPIC_DESTINATION_INSIDE,
} from '../../../constants/contextConstants';

import {
  NOUN_TYPE_TRAVERSE_OPEN,
  NOUN_TYPE_TRAVERSE_CLOSE,
} from '../../../constants/wordConstants';

const determineDirectionPreposition = () => {
  // NOTE: Need to add certain word types to make this complete. 

  if (CONTEXT_X_DIRECTION_ACROSS) {
    // walk across the bridge
    // swim across the lake
    if (NOUN_TYPE_TRAVERSE_OPEN) {
      return 'across';
    }

    // drive through the tunnel
    if (NOUN_TYPE_TRAVERSE_CLOSE) {
      return 'through';
    }
  }
  
  if (CONTEXT_DIRECTION_TOWARD) {
    // go into the kitchen
    if (CONTEXT_TOPIC_DESTINATION_INSIDE) {
      return 'into';
    };

    // jump onto the table
    if (CONTEXT_Y_TOPIC_DESTINATION_ABOVE) {
      return 'onto';
    }

    // go 5 steps towards the house
    // go to the cinema
    // go to London / Ireland
    // go to bed
    return 'to'; // towards
  };

  // a flower from the garden
  if (CONTEXT_DIRECTION_AWAY) {
    return 'from'; // away
  }

  throw new Error(createError('prepositionConjugationEnglish.ts', '', ''))
};

export default determineDirectionPreposition;
