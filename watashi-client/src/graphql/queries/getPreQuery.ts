import gql from 'graphql-tag';

const GET_PRE_QUERY = gql`{
  preOptions @client {
    politenessArray
    variationArray
    polarityArray
    
    genderArray
    questionArray
    themesArray
  }

  preModifiers @client {
    topicAdjectiveArray
    topicAdverbArray
    subjectAdjectiveArray
    subjectAdverbArray
  }

  preSentenceContext @client {
    topicIntentArray

    topicProximityArray
    topicDestinationArray
    eventDirectionArray

    eventOccuranceArray
    eventDurationArray
    eventPOVArray

    subjectConnectionArray
    subjectRoleArray
    subjectQuantityArray
  }
}`

export default GET_PRE_QUERY;
