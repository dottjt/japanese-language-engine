import * as React from 'react'

import { FlexColumn, Flex } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { Link } from '../atoms/ClickableStyles';

import { ROUTE_TITLE } from '../../util/constants/generalConstants';

import CourseList from './CourseList';

class Sidebar extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn 
        pl={3}
        pr={3}
        minWidth={6}
        borderRight={1} 
        fontSize={5}
      >
        <Flex 
          alignItems='center' 
          justifyContent='space-around' 
          borderBottom={1} 
          mb={3}
          pt={2}
          pb={2}
        >
          <Flex>
            <Link routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>{ROUTE_TITLE.HOME}</Link>
          </Flex>
          <Flex>
            <Link routeName={ROUTE_TITLE.PROFILE} routeOptions={{reload: true}}>{ROUTE_TITLE.PROFILE}</Link>
          </Flex>
        </Flex>

        <Heading mb={4} fontSize={5}>Watashi Engine</Heading>
        <CourseList/>
        
      </FlexColumn>
    );
  };
};

export default Sidebar;
