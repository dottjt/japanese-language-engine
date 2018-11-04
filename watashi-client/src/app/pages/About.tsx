import * as React from 'react';

import { FlexColumn, PageWrapper, List, ListItem } from '../atoms/LayoutStyles';
import { PageHeading, Text } from '../atoms/TextStyles'
import { ExternalLink, Link } from '../atoms/ClickableStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class About extends React.Component {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.ABOUT}
          description={ROUTE_DESCRIPTION.ABOUT}
        />
        <PageHeading>About Watashi Engine</PageHeading>
        <FlexColumn width={600} mt={3}>
          <Text>Watashi Engine is an online Japanese language engine. It can do all sorts of stuff like compose randomly generated Japanese sentences with English mappings, provide accurate word analysis, along with conjugate a variety Japanese words and phrases.</Text>
          <Text>I decided to create the Watashi Engine because I felt like there were no tools out there to effectively practice the <Link routeName={`${ROUTE_TITLE.BLOG}/`}  routeOptions={{reload: true}}>Instanteous Composition Method</Link>.</Text>
          <Text>The Instanteous Composition Method is the most effective way to learn Japanese Grammar. It utilises active practice in order to consolidate our understanding.</Text>
          <Text>In order to make full use of the Watashi Engine, I have designed a grammar course which runs through all the different grammar and conjugation variances of the Japanese language.</Text>
          <Text>The first six modules (20+ exercises) are free, with more of the advanced material requiring a <ExternalLink href='/sign-up'>premium subscription</ExternalLink>.</Text>
          <Text>In addition to access to the grammar course, with a premium subscription you are also able to have full access to the Watashi Engine so you are able to create your own sentences and exercises.</Text>
          <Text>Before signing up for a premium subscription however, we recommend trying the first six modules (20+ exercises)</Text>
        </FlexColumn>

        <PageHeading>Technical Details</PageHeading>
        <FlexColumn width={600} mt={3}>
          <Text>If you're interested in the technical details of the application, I've written a blog post <Link routeName={`${ROUTE_TITLE.BLOG}/`}  routeOptions={{reload: true}}>here</Link> detailing some of those decisions. However, here is a quick overview of all the tech involved:</Text>
          <List>
            <ListItem>Frontend: create-react-app, typescript, react, apollo, react-router5</ListItem>
            <ListItem>SSR: react-snap</ListItem>
            <ListItem>CSS: styled-components, styled-system, rebass</ListItem>
            <ListItem>Testing: jest</ListItem>
            <ListItem>Backend: node.js, graphql, graphql-yoga, typeorm</ListItem>
            <ListItem>Database: postgres</ListItem>
            <ListItem>Authentication: auth0</ListItem>
            <ListItem>CI: buildkite</ListItem>
            <ListItem>Infrastructure: terraform, docker, AWS</ListItem>
          </List>
        </FlexColumn>

      </PageWrapper>
    );
  }
}

export default About;
