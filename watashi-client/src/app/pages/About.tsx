import * as React from 'react';

import { FlexColumn, PageWrapper, List, ListItem } from '../atoms/LayoutStyles';
import { PageHeading, Text } from '../atoms/TextStyles'
import { ExternalLink, InternalLink } from '../atoms/ClickableStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';
import { BLOG_PATH } from '../../util/constants/blogConstants';

import Helmet from '../components/Helmet';

class About extends React.Component {
  public render() {
    return (
      <PageWrapper>
        
        <Helmet title={ROUTE_TITLE.ABOUT} description={ROUTE_DESCRIPTION.ABOUT}/>

        <PageHeading>About Watashi Engine</PageHeading>

        <FlexColumn width={600} mt={3}>
          <Text>Watashi Engine is an online Japanese language engine. It can do all sorts of stuff like compose randomly generated Japanese sentences with English mappings, provide accurate word analysis, along with conjugate a variety Japanese words and phrases.</Text>
          <Text>I decided to create the Watashi Engine because I felt like there were no tools out there to effectively practice the <InternalLink routeName={`${ROUTE_TITLE.BLOG}${BLOG_PATH.B02}`} routeOptions={{reload: true}}>Instanteous Composition Method</InternalLink>.</Text>
          <Text>The Instanteous Composition Method is the most effective way to learn Japanese Grammar. It utilises active practice in order to consolidate our understanding.</Text>
          <Text>In order to make full use of the Watashi Engine, I have designed a grammar course which runs through all the different grammar and conjugation variances of the Japanese language.</Text>
          <Text>The first six modules (20+ exercises) are free, with more of the advanced material requiring a <ExternalLink href='/sign-up'>premium subscription</ExternalLink>.</Text>
          <Text>In addition to access to the grammar course, with a premium subscription you are also able to have full access to the Watashi Engine so you are able to create your own sentences and exercises.</Text>
          <Text>Before signing up for a premium subscription however, we recommend trying the first six modules (20+ exercises)</Text>
        </FlexColumn>

        <PageHeading>Our Philosophy</PageHeading>

        <FlexColumn width={600} mt={3}>
          <Text>Watashi Engine was designed around one very simple philosophy: <b>Do one thing and do it well</b>.</Text>
          <Text>As a result, we rely on <ExternalLink href='/sign-up'>Kim Tae Japanese Grammar Guide</ExternalLink> and <ExternalLink href='/sign-up'>Watashi</ExternalLink> as excellent grammar guides. There's no point us trying to rewrite what others have already said quite well.</Text>
          <Text>What Watashi Engine provides instead, is a sorely needed platform to be able to actually practice your Japanese grammar with.</Text>
        </FlexColumn>

        <PageHeading>Technical Details</PageHeading>
        <FlexColumn width={600} mt={3}>
          <Text>If you're interested in the technical details of the application, I've written a blog post <InternalLink routeName={`${ROUTE_TITLE.BLOG}/`}  routeOptions={{reload: true}}>here</InternalLink> detailing some of those decisions. However, here is a quick overview of all the tech involved:</Text>
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
