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
        width={256}
        minWidth={4}
        borderRight={1} 
        fontSize={5}
      >
        <Flex 
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
        </Flex>

        <FlexColumn
          pl={3}
          pr={3}
        >
          <Heading mb={3} fontSize={5}>Watashi Engine</Heading>
          <CourseList/>
        </FlexColumn>
        
      </FlexColumn>
    );
  };
};

export default Sidebar;
