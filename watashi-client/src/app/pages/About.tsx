import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading, Text } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';
import { ExternalLink } from '../atoms/ClickableStyles';

class About extends React.Component {
  public render() {
    return (
      <FlexColumn ml={4} mt={5}>
        <Helmet
          title={ROUTE_TITLE.ABOUT}
          description={ROUTE_DESCRIPTION.ABOUT}
        />
        <Heading is='h2' fontSize={5}>About Watashi Engine</Heading>
        <FlexColumn width={600} mt={3}>
          <Text>Watashi Engine is a (rediculously over-engineered) Japanese language engine. It can do all sorts of stuff like compose randomly generated Japanese sentences with English mappings, provide accurate word analysis, along with conjugate a variety Japanese words and phrases.</Text>
          <Text>I decided to create the Watashi Engine because I felt like there were no tools out there to effectively practice the Instanteous Composition Method.</Text>
          <Text>The Instanteous Composition Method is the most effective way to learn Japanese Grammar. It utilises active practice in order to consolidate our understanding.</Text>
          <Text>In order to make full use of the Watashi Engine, I have designed a grammar course which runs through all the different grammar and conjugation variances of the Japanese language.</Text>
          <Text>The first six modules (20+ exercises) are free, with more of the advanced material requiring a <ExternalLink href='/sign-up'>premium subscription</ExternalLink>.</Text>
          <Text>In addition to access to the grammar course, with a premium subscription you are also able to have full access to the Watashi Engine so you are able to create your own sentences and exercises.</Text>
          <Text>Before signing up for a premium subscription however, we recommend trying the first six modules (20+ exercises)</Text>
          <Text>The </Text>
        </FlexColumn>
      </FlexColumn>
    );
  }
}

export default About;
