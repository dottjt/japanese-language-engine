import * as React from 'react';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';

import { FlexColumn, PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import Helmet from '../components/Helmet';

// import {
//   variationArray,
//   questionArray,
//   polarityArray,
//   tenseArray,
//   politenessArray,
//   genderArray,
//   sentenceEndingArray,
//   themesArray,
// } from '../../util/constants/optionsConstants';

// import {
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

class PlaygroundSingle extends React.Component<{ preOptions: Util.PreOptions, preModifiers: Util.PreModifiers, preSentenceContext: Util.PreSentenceContext, title: string }, {}> {
  public render() {
    const {
      // client,
      title,
      // preOptions,
      // preModifiers,
      // preSentenceContext,
    } = this.props;
    return (
      <PageWrapper> 
        <Helmet title={title} description={title /* NOTE: Will need a proper description*/}/> 
        <PageHeading>{title}</PageHeading>

        <FlexColumn>

        </FlexColumn>

      </PageWrapper> 
    );
  };
};

export default PlaygroundSingle;