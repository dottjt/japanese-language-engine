import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading, Text } from '../atoms/TextStyles';
import { ExternalLink } from '../atoms/ClickableStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class WelcomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn ml={4} mt={4}>
        <Helmet
          title={ROUTE_TITLE.WELCOME}
          description={ROUTE_DESCRIPTION.WELCOME}
        />

        <Heading is='h2' fontSize={5} mb={3}>Welcome to Watashi Engine!</Heading>
        <FlexColumn width={600}>
          <Text>Hello!</Text>
          <Text>Allow me to introduce myself.</Text>
          <Text>My name is Watashi Engine and I am a highly sophisticated Japanese language engine. I provide a number of different tools to help you with your Japanese learning journey, including a number of word analysis and sentence conjugation modules.</Text>
          <Text>I have been designed to teach you Japanese grammar via the <ExternalLink href='needlink'>Instantaneous Composition Method</ExternalLink>. I believe it is the most effective way to learn Japanese grammar and in order to help you do this, I have created a comprehensive grammar course which can be accessed from the sidebar to the left.</Text>
          <Text>The first six modules are free to try, so you can decide whether the Instantaneous Composition Method is the right choice for you. Each module provides a number of accurate, randomly generated Japanese sentences for you to practice your grammatical understanding.</Text>
          <Text>Where Watashi Engine really shines is in my ability to allow you to analyse these sentences from every single point of view, analysing everything from sentence structure to word politeness. A lot of time has been spent trying to perfect Watashi Engine, and I hope you find value within the grammar exercises I've created.</Text>
        </FlexColumn>

        <Heading fontSize={5} mb={4} mt={3}> Free vs Premium differences</Heading>
        <FlexColumn width={600} mb={4}>
          <Text>Paying for a Watashi Engine subscription allows you greater access to the engine and the grammar exercises available on this website.</Text>
          <Text>In particular, it allows you full access to Watashi Engine in order to create your own exercises.</Text>
        </FlexColumn>

      </FlexColumn> 
    );
  };
};

export default WelcomePage;