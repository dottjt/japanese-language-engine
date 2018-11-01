import * as React from 'react'

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { Link } from '../atoms/ClickableStyles';

import {
  ROUTE_TITLE,
} from '../../util/constants/generalConstants';

import CourseList from './CourseList';

class Sidebar extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn 
        width={282}
        minWidth={4}
        borderRight={1} 
        fontSize={5}
        >
        <FlexColumn
          pl={3}
          pr={3}
          >
          <FlexColumn mt={4}>
            <Heading is='h3' mb={2} fontSize={2}>Sitemap</Heading>
            <Link routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>{ROUTE_TITLE.HOME}</Link>
            <Link routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</Link>
            <Link routeName={ROUTE_TITLE.ABOUT} routeOptions={{reload: true}}>{ROUTE_TITLE.ABOUT}</Link>
            <Link routeName={ROUTE_TITLE.LOGIN} routeOptions={{reload: true}}>{ROUTE_TITLE.LOGIN}</Link>
            <Link routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>{ROUTE_TITLE.SIGN_UP}</Link>
          </FlexColumn>

          <FlexColumn mt={4}>
            <Heading is='h3' mb={2} fontSize={2}>00 - Introduction</Heading>
            <Link routeName={ROUTE_TITLE.WELCOME} routeOptions={{reload: true}}>{ROUTE_TITLE.WELCOME}</Link>
            <Link routeName={ROUTE_TITLE.CONTENTS} routeOptions={{reload: true}}>{ROUTE_TITLE.CONTENTS}</Link>
            <Link routeName={ROUTE_TITLE.PREREQ} routeOptions={{reload: true}}>{ROUTE_TITLE.PREREQ}</Link>
          </FlexColumn>
          
          <CourseList/>
        </FlexColumn>
        
      </FlexColumn>
    );
  };
};

export default Sidebar;


        {/* <Flex 
          alignItems='center' 
          justifyContent='space-around' 
          borderBottom={1} 
          mb={4}
        >
          <Flex pt={2} pb={2} width={[1]} justifyContent='center' alignItems='center' borderRight={1}>
            <Link routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>{ROUTE_TITLE.HOME}</Link>
          </Flex>
          <Flex pt={2} pb={2} width={[1]} justifyContent='center' alignItems='center'>
            <Link routeName={ROUTE_TITLE.PROFILE} routeOptions={{reload: true}}>{ROUTE_TITLE.PROFILE}</Link>
          </Flex>
        </Flex> */}