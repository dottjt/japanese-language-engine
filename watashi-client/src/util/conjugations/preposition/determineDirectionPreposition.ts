import {
  createError,
} from '../../functions';

import {
  CONTEXT_X_DIRECTION_ACROSS,
  CONTEXT_DESTINATION_OUTSIDE,
  CONTEXT_DESTINATION_INSIDE,
  CONTEXT_DIRECTION_TOWARD,
  CONTEXT_DIRECTION_AWAY,
  CONTEXT_STATUS_CURRENTLY_DOING,
  CONTEXT_Y_DESTINATION_ABOVE,
} from '../../constants/contextConstants';

import {

  
} from '../../constants/wordConstants';

const determineDirectionPreposition = () => {
  // NOTE: Need to add certain word types to make this complete. 


  if (CONTEXT_X_DIRECTION_ACROSS) {
    // walk across the bridge
    // swim across the lake
    if (CONTEXT_DESTINATION_OUTSIDE) {
      return 'across';
    }

    // drive through the tunnel
    if (CONTEXT_DESTINATION_INSIDE) {
      return 'through';
    }
  }
  
  if (CONTEXT_DIRECTION_TOWARD) {
    // go into the kitchen
    if (CONTEXT_DESTINATION_INSIDE) {
      return 'into';
    };

        // jump onto the table
    if (CONTEXT_Y_DESTINATION_ABOVE) {
      return 'onto';
    }

    // go 5 steps towards the house
    if (CONTEXT_STATUS_CURRENTLY_DOING) {
      return 'towards';
    }

    // go to the cinema
    // go to London / Ireland
    // go to bed
    return 'to';
  };

  // a flower from the garden
  if (CONTEXT_DIRECTION_AWAY) {
    return 'from'; // away
  }

  throw new Error(createError('prepositionConjugationEnglish.ts', '', ''))
};

export default determineDirectionPreposition;
