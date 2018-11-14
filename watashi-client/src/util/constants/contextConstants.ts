// preposition type

// describes a point in time.
export const PREPOSITION_TYPE_TIME = "PREPOSITION_TYPE_TIME";

// 
export const PREPOSITION_TYPE_PLACE = "PREPOSITION_TYPE_PLACE";
export const PREPOSITION_TYPE_DIRECTION = "PREPOSITION_TYPE_DIRECTION";
export const PREPOSITION_TYPE_AGENCY = "PREPOSITION_TYPE_AGENCY";
export const PREPOSITION_TYPE_PURPOSE = "PREPOSITION_TYPE_PURPOSE";
export const PREPOSITION_TYPE_REASON = "PREPOSITION_TYPE_REASON";
export const PREPOSITION_TYPE_CONNECTION = "PREPOSITION_TYPE_CONNECTION";
export const PREPOSITION_TYPE_ORIGIN = "PREPOSITION_TYPE_ORIGIN";


// // Different types of context. 
// export const CONTEXT_TYPE_INTERNAL_STATE = "CONTEXT_TYPE_INTERNAL_STATE";
// export const CONTEXT_TYPE_TIME = "CONTEXT_TYPE_TIME";
// export const CONTEXT_TYPE_QUANTITY = "CONTEXT_TYPE_QUANTITY";
// export const CONTEXT_TYPE_TOPIC_RELATIVE_DESTINATION = "CONTEXT_TYPE_TOPIC_RELATIVE_DESTINATION";
// export const CONTEXT_TYPE_DIRECTION = "CONTEXT_TYPE_DIRECTION";
// export const CONTEXT_TYPE_DISTANCE = "CONTEXT_TYPE_DISTANCE";

/* STATE */


/* Context Internal State */

export const CONTEXT_INTERNAL_STATE_ON = "CONTEXT_INTERNAL_STATE_ON";
export const CONTEXT_INTERNAL_STATE_OFF = "CONTEXT_INTERNAL_STATE_OFF";
export const CONTEXT_INTERNAL_STATE_DEAD = "CONTEXT_INTERNAL_STATE_DEAD";
export const CONTEXT_INTERNAL_STATE_ALIVE = "CONTEXT_INTERNAL_STATE_ALIVE";
export const CONTEXT_INTERNAL_STATE_WORKING = "CONTEXT_INTERNAL_STATE_WORKING";
export const CONTEXT_INTERNAL_STATE_BROKEN = "CONTEXT_INTERNAL_STATE_BROKEN";




/* Context Time */

export const CONTEXT_TIME_PAST = "CONTEXT_TIME_PAST";
export const CONTEXT_TIME_PRESENT = "CONTEXT_TIME_PRESENT";
export const CONTEXT_TIME_FUTURE = "CONTEXT_TIME_FUTURE";
export const CONTEXT_TIME_PERIOD = "CONTEXT_TIME_PERIOD";
export const CONTEXT_TIME_VARIABLE_POINT_IN_TIME = "CONTEXT_TIME_VARIABLE_POINT_IN_TIME";
export const CONTEXT_TIME_TELLING_TIME = "CONTEXT_TIME_TELLING_TIME";

/* Context Status */
export const CONTEXT_STATUS_WILL_DO = "CONTEXT_STATUS_WILL_DO";
export const CONTEXT_STATUS_CURRENTLY_DOING = "CONTEXT_STATUS_CURRENTLY_DOING";
export const CONTEXT_STATUS_HAS_DONE = "CONTEXT_STATUS_HAS_DONE";


// /* TIME */

// // // Date
// export const CONTEXT_TIME_DATE_ON = "CONTEXT_TIME_DATE_ON";
// export const CONTEXT_TIME_DATE_IN = "CONTEXT_TIME_DATE_IN";
// export const CONTEXT_TIME_DATE_AT = "CONTEXT_TIME_DATE_AT";

// // // Point of time
// export const CONTEXT_TIME_POINT_OF_TIME_SINCE = "CONTEXT_TIME_POINT_OF_TIME_SINCE";
// export const CONTEXT_TIME_POINT_OF_TIME_BEFORE = "CONTEXT_TIME_POINT_OF_TIME_BEFORE";
// export const CONTEXT_TIME_POINT_OF_TIME_AFTER = "CONTEXT_TIME_POINT_OF_TIME_AFTER";
// export const CONTEXT_TIME_TIME_BY = "CONTEXT_TIME_TIME_BY";
// export const CONTEXT_TIME_TIME_AGO = "CONTEXT_TIME_TIME_AGO";

// // // Period of time
// export const CONTEXT_TIME_PERIOD_OF_TIME_FOR = "CONTEXT_TIME_PERIOD_OF_TIME_FOR";
// export const CONTEXT_TIME_PERIOD_OF_TIME_TO = "CONTEXT_TIME_PERIOD_OF_TIME_TO";
// export const CONTEXT_TIME_PERIOD_OF_TIME_TILL = "CONTEXT_TIME_PERIOD_OF_TIME_TILL";
// export const CONTEXT_TIME_PERIOD_OF_TIME_UNTIL = "CONTEXT_TIME_PERIOD_OF_TIME_UNTIL";

// // // Telling the time
// export const CONTEXT_TIME_TELL_TIME_TO = "CONTEXT_TIME_TELL_TIME_TO";
// export const CONTEXT_TIME_TELL_TIME_PAST = "CONTEXT_TIME_TELL_TIME_PAST";



/* Context Quantity */

export const CONTEXT_QUANTITY_SINGLE = "CONTEXT_QUANTITY_SINGLE";
export const CONTEXT_QUANTITY_MULTIPLE = "CONTEXT_QUANTITY_MULTIPLE";

/* Context Distance */

export const CONTEXT_DISTANCE_NEAR = "CONTEXT_DISTANCE_NEAR";
export const CONTEXT_DISTANCE_FAR = "CONTEXT_DISTANCE_FAR";
export const CONTEXT_DISTANCE_AT = "CONTEXT_DISTANCE_AT";


/* Context Destination */

// if topic is object.

export const CONTEXT_Y_DESTINATION_ABOVE = "CONTEXT_Y_DESTINATION_ABOVE";
export const CONTEXT_Y_DESTINATION_BELOW = "CONTEXT_Y_DESTINATION_BELOW";

export const CONTEXT_Y_DESTINATION_BEHIND = "CONTEXT_Y_DESTINATION_BEHIND";
export const CONTEXT_Y_DESTINATION_IN_FRONT = "CONTEXT_Y_DESTINATION_IN_FRONT";

export const CONTEXT_DESTINATION_BESIDE = "CONTEXT_DESTINATION_BESIDE";

// export const CONTEXT_DESTINATION_ALONG = "CONTEXT_DESTINATION_ALONG";

export const CONTEXT_DESTINATION_WITH = "CONTEXT_DESTINATION_WITH";
export const CONTEXT_DESTINATION_BETWEEN = "CONTEXT_DESTINATION_BETWEEN";
export const CONTEXT_DESTINATION_THROUGH = "CONTEXT_DESTINATION_THROUGH";
export const CONTEXT_DESTINATION_INSIDE = "CONTEXT_DESTINATION_INSIDE";
export const CONTEXT_DESTINATION_OUTSIDE = "CONTEXT_DESTINATION_OUTSIDE";


/* Context Direction */

export const CONTEXT_DIRECTION_IDLE = "CONTEXT_DIRECTION_IDLE";

export const CONTEXT_Y_DIRECTION_UP = "CONTEXT_DIRECTION_UP";
export const CONTEXT_Y_DIRECTION_DOWN = "CONTEXT_DIRECTION_DOWN";

export const CONTEXT_X_DIRECTION_ACROSS = "CONTEXT_DIRECTION_ACROSS";
// export const CONTEXT_DIRECTION_THROUGH = "CONTEXT_DIRECTION_THROUGH";

export const CONTEXT_DIRECTION_TOWARD = "CONTEXT_DIRECTION_TOWARD";
export const CONTEXT_DIRECTION_AWAY = "CONTEXT_DIRECTION_AWAY";



/* Context Agency */

export const CONTEXT_AGENCY_BY = "CONTEXT_AGENCY_BY";
export const CONTEXT_AGENCY_WITH = "CONTEXT_AGENCY_WITH";


/* Context Instrument */

export const CONTEXT_INSTRUMENT_BY = "CONTEXT_INSTRUMENT_BY";
export const CONTEXT_INSTRUMENT_WITH = "CONTEXT_INSTRUMENT_WITH";
export const CONTEXT_INSTRUMENT_ON = "CONTEXT_INSTRUMENT_ON";

/* Context Reason  */

// for 
// through
// because of 
// on account of
// from 


// /* Context Connection  */
// of 
// to 
// with 

// /* Context Origin */

// from 
// of 