import {
  createError,
} from '../../../functions';

import {
  // NOTE: What is the purpose of proxmity? Need to consider a lack of proximity.
  // CONTEXT_PROXIMITY_ALONE,
  CONTEXT_PROXIMITY_NEAR,
  CONTEXT_PROXIMITY_FAR,

  CONTEXT_TOPIC_DESTINATION_NONE, // when 
  CONTEXT_TOPIC_DESTINATION_IRRELEVANT,

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
} from '../../../constants/contextConstants';


// NOTE: In future will break these up into other switch statements in order for more precision.

const destinationSwitch = (contextTopicDestination: string): string[] => {
  switch(`${contextTopicDestination}`) {
    case CONTEXT_Y_TOPIC_DESTINATION_ABOVE: return [ 'above' ]; // on, onto, over
    case CONTEXT_Y_TOPIC_DESTINATION_BELOW: return [ 'below' ]; // under, underneath, beneath
    case CONTEXT_Y_TOPIC_DESTINATION_BEHIND: return [ 'behind' ];
    case CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT: return [ 'in', 'front' ];
    case CONTEXT_TOPIC_DESTINATION_INSIDE: return [ 'inside' ]; // in, into
    case CONTEXT_TOPIC_DESTINATION_OUTSIDE: return [ 'outside' ];

    case CONTEXT_TOPIC_DESTINATION_ALONG: return [ 'along' ];
    case CONTEXT_TOPIC_DESTINATION_BESIDE: return [ 'beside' ]; // to the left of, to the right of, next to

    case CONTEXT_TOPIC_DESTINATION_WITH: return [ 'with' ];
    case CONTEXT_TOPIC_DESTINATION_THROUGH: return [ 'through' ];
    case CONTEXT_TOPIC_DESTINATION_BETWEEN: return [ 'between' ];
    // across
  }
  throw new Error(createError('determinePlacePreposition.ts', 'destinationSwitch', `${contextTopicDestination} unknown.`));
}

// RULES: 
// - If you have a destination, then you must a direction set.
// - If direction is set to NONE, then direction must also be NONE 

export const determinePlacePreposition = (sentenceContext: Util.SentenceContext): string[] => {
  
  const contextProximity = sentenceContext.proximity;
  const contextTopicDestination = sentenceContext.topicDestination;
  const contextEventDirection = sentenceContext.eventDirection;

  if (contextTopicDestination === CONTEXT_TOPIC_DESTINATION_NONE && contextEventDirection !== CONTEXT_DIRECTION_NONE) {
    throw new Error(createError('determinePlacePreposition.ts', 'determinePlacePreposition', `If destination is ${contextTopicDestination} then contextEventDirection must be CONTEXT_DIRECTION_NONE`))
  }

  if (contextTopicDestination !== CONTEXT_TOPIC_DESTINATION_NONE && contextEventDirection === CONTEXT_DIRECTION_NONE) {
    throw new Error(createError('determinePlacePreposition.ts', 'determinePlacePreposition', `If destination is ${contextEventDirection} then contextEventDirection must be CONTEXT_TOPIC_DESTINATION_NONE`));
  }

  switch(`${contextProximity}${contextTopicDestination}${contextEventDirection}`) {
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_TOPIC_DESTINATION_NONE}${CONTEXT_DIRECTION_NONE}`: return [ 'at' ]; // on
    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_TOPIC_DESTINATION_NONE}${CONTEXT_DIRECTION_NONE}`: return [ 'far', 'from' ];
    
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_TOPIC_DESTINATION_IRRELEVANT}${CONTEXT_DIRECTION_TOWARD}`: return [ 'to' ]; // towards
    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_TOPIC_DESTINATION_IRRELEVANT}${CONTEXT_DIRECTION_TOWARD}`: return [ 'to' ]; // towards
    
    case `${CONTEXT_PROXIMITY_NEAR}${CONTEXT_TOPIC_DESTINATION_IRRELEVANT}${CONTEXT_DIRECTION_AWAY}`: return [ 'from' ];
    case `${CONTEXT_PROXIMITY_FAR}${CONTEXT_TOPIC_DESTINATION_IRRELEVANT}${CONTEXT_DIRECTION_AWAY}`: return [ 'from' ];

    default:
      switch(`${contextProximity}`) {
        case `${CONTEXT_PROXIMITY_NEAR}`: return destinationSwitch(contextTopicDestination);
        case `${CONTEXT_PROXIMITY_FAR}`: return [ 'far' ].concat(destinationSwitch(contextTopicDestination));
      }
    throw new Error(createError('determinePlacePreposition.ts', 'determinePlacePreposition', `${contextProximity}${contextTopicDestination}${contextEventDirection} unknown.`))
  }
};

export default determinePlacePreposition;
