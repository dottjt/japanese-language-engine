import * as React from 'react'

import { Flex, FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { Link } from '../atoms/ClickableStyles';

import {
  ROUTE_TITLE,
} from '../../util/constants/generalConstants';

import {
  LESSON_TITLE,
} from '../../util/constants/lessonConstants';

const Item = (props) => <Flex alignItems='center' width={[1]} height='3rem' borderBottom={1}>{props.children}</Flex>

const SidebarItem = (props) => (
  <Item>
    <Link ml={3} routeName={props.routeName} routeOptions={props.routeOptions}>{props.children}</Link>
  </Item>
);

const HeadingItem = (props) => (
  <Item>
    <Heading is='h3' ml={3} fontSize={2}>{props.children}</Heading>
  </Item>
);

class Sidebar extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn 
        width={282}
        minWidth={282}
        borderRight={1} 
        fontSize={5}
        >
        <FlexColumn>
          <HeadingItem>00 - Introduction</HeadingItem>
          <SidebarItem routeName={ROUTE_TITLE.WELCOME} routeOptions={{reload: true}}>{ROUTE_TITLE.WELCOME}</SidebarItem>
          <SidebarItem routeName={ROUTE_TITLE.CONTENTS} routeOptions={{reload: true}}>{ROUTE_TITLE.CONTENTS}</SidebarItem>
          <SidebarItem routeName={ROUTE_TITLE.PREREQ} routeOptions={{reload: true}}>{ROUTE_TITLE.PREREQ}</SidebarItem>
        </FlexColumn>

        <FlexColumn>
          <HeadingItem>01 - Noun Conjugation Basics</HeadingItem>
          <SidebarItem routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>{LESSON_TITLE.L001}</SidebarItem>
        </FlexColumn>

        <FlexColumn>
          <HeadingItem>02 - Noun Basics</HeadingItem>
          <SidebarItem routeName={LESSON_TITLE.L002} routeOptions={{reload: true}}>{LESSON_TITLE.L002}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L003} routeOptions={{reload: true}}>{LESSON_TITLE.L003}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L004} routeOptions={{reload: true}}>{LESSON_TITLE.L004}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L005} routeOptions={{reload: true}}>{LESSON_TITLE.L005}</SidebarItem>
        </FlexColumn>

        <FlexColumn>
          <HeadingItem>03 - Verb Conjugation Basics</HeadingItem>
          <SidebarItem routeName={LESSON_TITLE.L006} routeOptions={{reload: true}}>{LESSON_TITLE.L006}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L007} routeOptions={{reload: true}}>{LESSON_TITLE.L007}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L008} routeOptions={{reload: true}}>{LESSON_TITLE.L008}</SidebarItem>
        </FlexColumn>

        <FlexColumn>
          <HeadingItem>04 - Verb Basics</HeadingItem>
          <SidebarItem routeName={LESSON_TITLE.L009} routeOptions={{reload: true}}>{LESSON_TITLE.L009}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L010} routeOptions={{reload: true}}>{LESSON_TITLE.L010}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L011} routeOptions={{reload: true}}>{LESSON_TITLE.L011}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L012} routeOptions={{reload: true}}>{LESSON_TITLE.L012}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L013} routeOptions={{reload: true}}>{LESSON_TITLE.L013}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L014} routeOptions={{reload: true}}>{LESSON_TITLE.L014}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L015} routeOptions={{reload: true}}>{LESSON_TITLE.L015}</SidebarItem>
        </FlexColumn>

        <FlexColumn>
          <HeadingItem>05 - From / Until statements</HeadingItem>
          <SidebarItem routeName={LESSON_TITLE.L016} routeOptions={{reload: true}}>{LESSON_TITLE.L016}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L017} routeOptions={{reload: true}}>{LESSON_TITLE.L017}</SidebarItem>
        </FlexColumn>

        <FlexColumn>
          <HeadingItem>06 - Modifier Basics</HeadingItem>
          <SidebarItem routeName={LESSON_TITLE.L018} routeOptions={{reload: true}}>{LESSON_TITLE.L018}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L019} routeOptions={{reload: true}}>{LESSON_TITLE.L019}</SidebarItem>
          <SidebarItem routeName={LESSON_TITLE.L020} routeOptions={{reload: true}}>{LESSON_TITLE.L020}</SidebarItem>
        </FlexColumn>
      </FlexColumn>
    );
  };
};

export default Sidebar;