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

import {
  topicNoArray,
  subjectNoArray,
  topicAdjectiveArray,
  topicAdverbArray,
  subjectAdjectiveArray,
  subjectAdverbArray,  
} from '../../util/constants/modifiersConstants';

import {
  contextIntentArray,
  contextProximityArray,
  contextTopicDestinationArray,
  contextDirectionArray,
  contextEventOccuranceArray,
  contextDurationArray,
  contextEventPOVArray,
  contextSubjectConnectionArray,
  contextSubjectRoleArray,
  contextSubjectQuantityArray,  
} from '../../util/constants/contextConstants';

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

const MODIFY_PLAYGROUND_OPTIONS = gql`
  mutation ModifyPlaygroundOptions($currentArray: [String], $arrayValue: PlaygroundArrayValue, $type: String, $arrayType: String, $typename: String) {
    modifyPlaygroundOptions(arrayValue: $arrayValue, currentArray: $currentArray, type: $type, arrayType: $arrayType, typename: $typename) @client
  }
`;

class KeySet extends React.Component<{ currentArray: string[], arrayType: string, arrayValue: { selected: boolean, value: string }, type: string }, {}> {

  public render() {
    const { currentArray, arrayValue, type, arrayType } = this.props;
    const typename = this.getTypename(type);

    return (
      <Mutation mutation={MODIFY_PLAYGROUND_OPTIONS}>
        {modifyPreOptions => {
          return (
            <FlexColumn css={{ display: 'inline-block' }}>
              <Item 
                onClick={() => modifyPreOptions({ variables: { arrayValue: arrayValue, currentArray, type, arrayType, typename } })} 
                css={{ display: 'inline-block' }}
                color={arrayValue.selected ? 'red' : null}>{arrayValue.value}</Item>
            </FlexColumn>  
          )      
        }}
      </Mutation>
    )
  }

  private getTypename = (type) => {
    switch(type) {
      case 'preOptions': return __TYPENAME_PRE_OPTIONS;
      case 'preModifiers': return __TYPENAME_PRE_MODIFIERS;
      case 'preSentenceContext': return __TYPENAME_PRE_SENTENCE_CONTEXT;
    }
    throw Error('eh')
  }
};

class OptionsSet extends React.Component<{ preOptions: Util.PreOptions, preModifiers: Util.PreModifiers, preSentenceContext: Util.PreSentenceContext }, {}> {

  public render() {
    const {
      preOptions,
      preModifiers,
      preSentenceContext,
    } = this.props;

    delete preOptions.__typename;
    delete preModifiers.__typename;
    delete preSentenceContext.__typename;

    const optionsKeys = Object.keys(preOptions);
    const modifiersKeys = Object.keys(preModifiers);
    const sentenceContextKeys = Object.keys(preSentenceContext);

    return (
      <FlexColumn>
        {optionsKeys.map((optionsField, index) => {

          const currentArrayOfValues = preOptions[optionsField];
          const completeArrayOfValues = selectOptionsArray(optionsField)
          const selectedArray = this.selectedArray(completeArrayOfValues, currentArrayOfValues);

          return (
            <FlexColumn 
              key={`${index}${optionsField}`}
              >
              <Heading>{optionsField}</Heading>
              {selectedArray.map((selectedOptionsField, index) => (
                <KeySet
                  key={`${index}`}
                  type='preOptions'
                  arrayType={optionsField}
                  arrayValue={selectedOptionsField}
                  currentArray={preOptions[optionsField]}
                />
              ))}
            </FlexColumn>
          )
        })}

        {modifiersKeys.map((modifiersField, index) => {

          const currentArrayOfValues = preModifiers[modifiersField];
          const completeArrayOfValues = selectModifiersArray(modifiersField)

          const selectedArray = this.selectedArray(completeArrayOfValues, currentArrayOfValues);

          return (
            <FlexColumn 
              key={`${index}${modifiersField}`}
              >
              <Heading>{modifiersField}</Heading>
              {selectedArray.map((selectedModifiersField, index) => (
                <KeySet
                  key={`${index}`}
                  type='preModifiers'
                  arrayType={modifiersField}
                  arrayValue={selectedModifiersField}
                  currentArray={preModifiers[modifiersField]}
                />
              ))}
            </FlexColumn>
          )
        })}

        {sentenceContextKeys.map((sentenceContextField, index) => {

          const currentArrayOfValues = preSentenceContext[sentenceContextField];
          const completeArrayOfValues = selectSentenceContextArray(sentenceContextField);

          const selectedArray = this.selectedArray(completeArrayOfValues, currentArrayOfValues);
          
          return (
            <FlexColumn 
              key={`${index}${sentenceContextField}`}
              >
              <Heading>{sentenceContextField}</Heading>
              {selectedArray.map((selectedSentenceContextField, index) => (
                <KeySet
                  key={`${index}`}
                  type='preSentenceContext'
                  arrayType={sentenceContextField}
                  arrayValue={selectedSentenceContextField}
                  currentArray={preSentenceContext[sentenceContextField]}
                />
              ))}
            </FlexColumn>
          )
        })}

      </FlexColumn>
    )
  }

  private selectedArray = (completeArrayOfValues: string[], currentArrayOfValues: string[]): { selected: boolean, value: string }[] => (
    completeArrayOfValues.map(completeValue => {
      if (currentArrayOfValues.includes(completeValue)) {
        return { selected: true, value: completeValue }
      } else {
        return { selected: false, value: completeValue }
      }
    })
  )
}

class Playground extends React.Component<{ preOptions: Util.PreOptions, preModifiers: Util.PreModifiers, preSentenceContext: Util.PreSentenceContext, client: any }, {}> {
  public render() {
    const {
      // client,
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
            preOptions={preOptions}
            preModifiers={preModifiers}
            preSentenceContext={preSentenceContext}
          />
        </FlexColumn>

      </PageWrapper> 
    );
  };
};

export default Playground;


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

const selectModifiersArray = (modifiersField) => {
  switch(modifiersField) {
    case 'topicNoArray': return topicNoArray;
    case 'subjectNoArray': return subjectNoArray;
    case 'topicAdjectiveArray': return topicAdjectiveArray;
    case 'topicAdverbArray': return topicAdverbArray;
    case 'subjectAdjectiveArray': return subjectAdjectiveArray;
    case 'subjectAdverbArray': return subjectAdverbArray;
    // case '__typename': return null; 
  }  
  throw new Error(`${modifiersField} doesn't exist`);
}

const selectSentenceContextArray = (sentenceContextField) => {
  switch(sentenceContextField) {
    case 'topicIntentArray': return contextIntentArray;
    case 'topicProximityArray': return contextProximityArray;
    case 'topicDestinationArray': return contextTopicDestinationArray;
    case 'eventDirectionArray': return contextDirectionArray;
    case 'eventOccuranceArray': return contextEventOccuranceArray;
    case 'eventDurationArray': return contextDurationArray;
    case 'eventPOVArray': return contextEventPOVArray;
    case 'subjectConnectionArray': return contextSubjectConnectionArray;
    case 'subjectRoleArray': return contextSubjectRoleArray;
    case 'subjectQuantityArray': return contextSubjectQuantityArray;
    case '__typename': return null;
  }  
  throw new Error(`${sentenceContextField} doesn't exist`);
}
