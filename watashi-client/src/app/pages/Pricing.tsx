import * as React from 'react';

import { ROUTE_TITLE } from '../../util/constants/routeConstants';

import { Flex, FlexColumn, PageWrapper, List, ListItem, 
  Card,
  PricingButtonStyles,
 } from '../atoms/LayoutStyles';
 import { Heading } from '../atoms/TextStyles';
 import { Link } from '../atoms/ClickableStyles';

class Pricing extends React.Component<{}, {}> {

  public render() {
    return (
      <PageWrapper>
        <FlexColumn width={600} mb={5}>

        </FlexColumn>

        <PricingModule />

      </PageWrapper>
    );
  }
}


class PricingModule extends React.Component<{}, {}> {

  public render() {
    return (
      <Flex justifyContent='space-around' mb={4}>

        <Card borderColor="blacks.3">
          <Heading is='h3'>Free</Heading>
          <Heading>$0</Heading>
          <List>
            <ListItem mb={2}>Limited access to basic grammar exercises.</ListItem>
          </List>
          <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try me</Link>                      
        </Card>

        <Card borderColor="blacks.3">
          <Heading is='h3'>Monthly</Heading>
          <Heading>$7.95</Heading>
          <List>
            <ListItem mb={2}>Full access to the Watashi Engine.</ListItem>
            <ListItem mb={2}>Full access to all 100+ grammar exercises.</ListItem>
          </List>
          <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try me</Link>                      
        </Card>

        <Card borderColor="blacks.3">
          <Heading is='h3'>Yearly</Heading>
          <Heading>$59.95</Heading>
          <List>
            <ListItem mb={2}>Full access to the Watashi Engine at a discounted Heading.</ListItem>
            <ListItem mb={2}>Full access to all 100+ grammar exercises.</ListItem>
          </List>
          <Link style={PricingButtonStyles} routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>Try Me</Link>
        </Card>

      </Flex>
    );
  }
}


export default Pricing;
