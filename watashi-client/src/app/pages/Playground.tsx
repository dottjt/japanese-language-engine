import * as React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { Flex, FlexColumn, PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Heading } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

import {
  variationArray,
  questionArray,
  polarityArray,
  tenseArray,
  politenessArray,
  genderArray,
  sentenceEndingArray,
  themesArray,
} from '../../util/constants/optionsConstants';

// import {
//   topicNoArray,
//   subjectNoArray,
//   topicAdjectiveArray,
//   topicAdverbArray,
//   subjectAdjectiveArray,
//   subjectAdverbArray,  
// } from '../../util/constants/modifiersConstants';

// import {
//   contextIntentArray,
//   contextProximityArray,
//   contextTopicDestinationArray,
//   contextDirectionArray,
//   contextEventOccuranceArray,
//   contextDurationArray,
//   contextEventPOVArray,
//   contextSubjectConnectionArray,
//   contextSubjectRoleArray,
//   contextSubjectQuantityArray,  
// } from '../../util/constants/contextConstants';

import { 
  __TYPENAME_PRE_OPTIONS,
  __TYPENAME_PRE_MODIFIERS,
  __TYPENAME_PRE_SENTENCE_CONTEXT,
} from '../../util/constants/typeNameConstants';

import system from '@rebass/components';

const Item = system({
  extend: Flex,
  is: 'div',
  padding: 3,
  border: 1,
  props: (props) => ({
    color: props.color,
  }),
});

const MODIFY_PRE_OPTIONS = gql`
  mutation ModifyPreOptions($arrayValue: String!, $currentArray: [String]!, $valuesArray: [String]!) {
    modifyPreOptions(arrayValue: $arrayValue, currentArray: $currentArray, valuesArray: $valuesArray) @client
  }
`

class KeySet extends React.Component<{ currentArray: string[], valuesArray: string[], arrayType: string, setValue: string, client: any, type: string }, {}> {

  public render() {
    const {  currentArray, valuesArray, setValue } = this.props;
    
    return (
      <Mutation mutation={MODIFY_PRE_OPTIONS}>
        {modifyPreOptions => {
          return (
            valuesArray !== null &&
              valuesArray.map((value, index) => (
                <FlexColumn key={`${value}${index}`} css={{ display: 'inline-block' }}>
                  <Item 
                    onClick={() => modifyPreOptions({ variables: { arrayValue: value, currentArray, valuesArray } })} 
                    css={{display: 'inline-block'}}
                    color={setValue === value ? 'red' : null}>{value}</Item>
                </FlexColumn>  
              ))
          )      
        }}
      </Mutation>
    )
  }

  // public clickItem = (arrayValue, currentArray, hasAlreadySelected) => {
  //   if (hasAlreadySelected) {
  //     this.props.client.writeData({
  //       data: {
  //         [this.props.type]: { // preOptions 
  //           [this.props.arrayType]: currentArray.filter(value => value !== arrayValue), // politenessArray
  //           __typename: selectOptionsArrayTypename(this.props.arrayType)
  //         },
  //         __typename: this.getTypename(this.props.type), // NOTE: This should probably be something more official.
  //       },
  //     });

  //   } else {
  //     this.props.client.writeData({
  //       data: {
  //         [this.props.type]: {
  //           [this.props.arrayType]: [ ...currentArray, arrayValue ],
  //           __typename: selectOptionsArrayTypename(this.props.arrayType)
  //         },
  //         __typename: this.getTypename(this.props.type),
  //       },
  //     }); 
  //   }
  // }

  public getTypename = (type) => {
    switch(type) {
      case 'preOptions': return __TYPENAME_PRE_OPTIONS;
      case 'preModifiers': return __TYPENAME_PRE_MODIFIERS;
      case 'preSentenceContext': return __TYPENAME_PRE_SENTENCE_CONTEXT;
    }
    throw Error('eh')
  }
};

class OptionsSet extends React.Component<{ preOptions: Util.PreOptions, preModifiers: Util.PreModifiers, preSentenceContext: Util.PreSentenceContext, client: string }, {}> {

  // private clickItem = (arrayValue, currentArray, hasAlreadySelected) => {
  //   if (hasAlreadySelected) {
  //     this.props.client.writeData({
  //       data: {
  //         [this.props.type]: { // preOptions 
  //           [this.props.arrayType]: currentArray.filter(value => value !== arrayValue), // politenessArray
  //           __typename: this.getTypename(this.props.type), // NOTE: This should probably be something more official.
  //         },
  //       },
  //     });
  //   } else {
  //     this.props.client.writeData({
  //       data: {
  //         [this.props.type]: {
  //           [this.props.arrayType]: [ ...currentArray, arrayValue ],
  //           __typename: this.getTypename(this.props.type),
  //         },
  //       },
  //     }); 
  //   }
  // }

  // private getTypename = (type) => {
  //   switch(type) {
  //     case 'preOptions': return __TYPENAME_OPTIONS;
  //     case 'preModifiers': return __TYPENAME_MODIFIERS;
  //     case 'preSentenceContext': return __TYPENAME_SENTENCE_CONTEXT;
  //   }
  //   throw Error('eh')
  // }

  public render() {
    const {
      client,
      preOptions,
      preModifiers,
      preSentenceContext,
    } = this.props;

    delete preOptions.__typename;
    delete preModifiers.__typename;
    delete preSentenceContext.__typename;

    const optionsKeys = ['politenessArray'];
    // const optionsKeys = Object.keys(preOptions);
    // const modifiersKeys = Object.keys(preModifiers);
    // const sentenceContextKeys = Object.keys(preSentenceContext);

    return (
      <FlexColumn>
        {optionsKeys.map((optionsField, index) => (
          <FlexColumn key={`${index}${optionsField}`}>
            <Heading>{optionsField}</Heading>
            {preOptions[optionsField].map((selectedOptionsField, index) => (
              <KeySet
                key={`${index}${selectedOptionsField}`}
                client={client}
                type='preOptions'
                arrayType={optionsField}
                setValue={selectedOptionsField}
                valuesArray={selectOptionsArray(optionsField)}
                currentArray={preOptions[optionsField]}
              />
            ))}
          </FlexColumn>
        ))}

        {/* {optionsKeys.map((optionsField, index) => (
          <FlexColumn key={`${index}${optionsField}`}>
            <Heading>{optionsField}</Heading>
            {preOptions[optionsField].map((selectedOptionsField, index) => (
              <KeySet
                key={`${index}${selectedOptionsField}`}
                client={client}
                type='preOptions'
                arrayType={optionsField}
                setValue={selectedOptionsField}
                valuesArray={selectOptionsArray(optionsField)}
                currentArray={preOptions[optionsField]}
              />
            ))}
          </FlexColumn>
        ))} */}
        {/* {modifiersKeys.map((modifiersField, index) => (
          <FlexColumn key={index}>
            <Heading>{modifiersField}</Heading>
            {preModifiers[modifiersField].map((selectedModifiersField, index) => (
              <KeySet
                key={index}
                client={client}
                type='preModifiers'
                arrayType={modifiersField}
                setValue={selectedModifiersField}
                valuesArray={selectModifiersArray(modifiersField)}
                currentArray={preModifiers[modifiersField]}
              />
            ))}
          </FlexColumn>
        ))}
        {sentenceContextKeys.map((sentenceContextField, index) => (
          <FlexColumn key={index}>
            <Heading>{sentenceContextField}</Heading>
            {preSentenceContext[sentenceContextField].map((selectedSentenceContextField, index) => (
              <KeySet
                key={index}
                client={client}
                type='preSentenceContext'
                arrayType={sentenceContextField}
                setValue={selectedSentenceContextField}
                valuesArray={selectSentenceContextArray(sentenceContextField)}
                currentArray={preSentenceContext[sentenceContextField]}
              />
            ))}
          </FlexColumn>
        ))} */}
      </FlexColumn>
    )
  }
}

class Prerequistes extends React.Component<{ preOptions: Util.PreOptions, preModifiers: Util.PreModifiers, preSentenceContext: Util.PreSentenceContext, client: string }, {}> {
  public render() {
    const {
      client,
      preOptions,
      preModifiers,
      preSentenceContext,
    } = this.props;
    return (
      <PageWrapper>
        <Helmet title={ROUTE_TITLE.PLAYGROUND} description={ROUTE_DESCRIPTION.PLAYGROUND}/>
        <PageHeading>{ROUTE_TITLE.PLAYGROUND}</PageHeading>

        <FlexColumn>
          <OptionsSet
            client={client}
            preOptions={preOptions}
            preModifiers={preModifiers}
            preSentenceContext={preSentenceContext}
          />
        </FlexColumn>

      </PageWrapper> 
    );
  };
};

export default Prerequistes;



const selectOptionsArray = (optionsField) => {
  switch(optionsField) {
    case 'variationArray': return variationArray;
    case 'questionArray': return questionArray;
    case 'polarityArray': return polarityArray;
    case 'tenseArray': return tenseArray;
    case 'politenessArray': return politenessArray;
    case 'genderArray': return genderArray;
    case 'sentenceEndingArray': return sentenceEndingArray;
    case 'themesArray': return themesArray;
    // case '__typename': return null; 
  }  
  throw new Error(`${optionsField} doesn't exist`);
}


// const selectOptionsArrayTypename = (optionsField) => {
//   switch(optionsField) {
//     case 'variationArray': return '__TYPENAME_VARIATION_ARRAY';
//     case 'questionArray': return '__TYPENAME_QUESTION_ARRAY';
//     case 'polarityArray': return '__TYPENAME_POLARITY_ARRAY';
//     case 'tenseArray': return '__TYPENAME_TENSE_ARRAY';
//     case 'politenessArray': return '__TYPENAME_POLITENESS_ARRAY';
//     case 'genderArray': return '__TYPENAME_GENDER_ARRAY';
//     case 'sentenceEndingArray': return '__TYPENAME_SENTENCEENDING_ARRAY';
//     case 'themesArray': return '__TYPENAME_THEMES_ARRAY';
//     // case '__typename': return null; 
//   }  
//   throw new Error(`${optionsField} doesn't exist`);
// }

// const selectModifiersArray = (modifiersField) => {
//   switch(modifiersField) {
//     case 'topicNoArray': return topicNoArray;
//     case 'subjectNoArray': return subjectNoArray;
//     case 'topicAdjectiveArray': return topicAdjectiveArray;
//     case 'topicAdverbArray': return topicAdverbArray;
//     case 'subjectAdjectiveArray': return subjectAdjectiveArray;
//     case 'subjectAdverbArray': return subjectAdverbArray;
//     // case '__typename': return null; 
//   }  
//   throw new Error(`${modifiersField} doesn't exist`);
// }

// const selectSentenceContextArray = (sentenceContextField) => {
//   switch(sentenceContextField) {
//     case 'topicIntentArray': return contextIntentArray;
//     case 'topicProximityArray': return contextProximityArray;
//     case 'topicDestinationArray': return contextTopicDestinationArray;
//     case 'eventDirectionArray': return contextDirectionArray;
//     case 'eventOccuranceArray': return contextEventOccuranceArray;
//     case 'eventDurationArray': return contextDurationArray;
//     case 'eventPOVArray': return contextEventPOVArray;
//     case 'subjectConnectionArray': return contextSubjectConnectionArray;
//     case 'subjectRoleArray': return contextSubjectRoleArray;
//     case 'subjectQuantityArray': return contextSubjectQuantityArray;
//     case '__typename': return null;
//   }  
//   throw new Error(`${sentenceContextField} doesn't exist`);
// }
