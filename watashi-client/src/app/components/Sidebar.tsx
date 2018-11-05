import * as React from 'react'
import styled from 'styled-components';

import { Box, Flex, FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { InternalLink } from '../atoms/ClickableStyles';
import { SidebarItem, HeadingItem } from '../atoms/ComponentStyles';

import {
  ROUTE_TITLE,
} from '../../util/constants/routeConstants';

import {
  LESSON_TITLE,
  LESSON_SECTIONS,
  LESSON_SECTIONS_PREMIUM,
} from '../../util/constants/lessonConstants';

class Sidebar extends React.Component<{ route: any }, {}> {
  public render() {
    return (
      <FlexColumn
        fontSize={5}
        css={{
          position: 'relative',
          bottom: 0,
          top: 0,
          height: '100vh',
          width: '282px',
          minWidth: '282px',
        }}
        >
        <Box
          borderRight={1}
          css={{
            position: 'fixed',
            height: '100%',
            width: '282px',
            minWidth: '282px',  
            overflowY: 'scroll',
            boxShadow: '4px 6px grey',
          }}
          >
          <LogoDropdown/>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S00}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S00} routeName={ROUTE_TITLE.WELCOME} routeOptions={{reload: true}}>{ROUTE_TITLE.WELCOME}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S00} routeName={ROUTE_TITLE.CONTENTS} routeOptions={{reload: true}}>{ROUTE_TITLE.CONTENTS}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S00} routeName={ROUTE_TITLE.PREREQ} routeOptions={{reload: true}}>{ROUTE_TITLE.PREREQ}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S01}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S01} routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>{LESSON_TITLE.L001}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S02}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S02} routeName={LESSON_TITLE.L002} routeOptions={{reload: true}}>{LESSON_TITLE.L002}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S02} routeName={LESSON_TITLE.L003} routeOptions={{reload: true}}>{LESSON_TITLE.L003}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S02} routeName={LESSON_TITLE.L004} routeOptions={{reload: true}}>{LESSON_TITLE.L004}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S02} routeName={LESSON_TITLE.L005} routeOptions={{reload: true}}>{LESSON_TITLE.L005}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S03}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S03} routeName={LESSON_TITLE.L006} routeOptions={{reload: true}}>{LESSON_TITLE.L006}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S03} routeName={LESSON_TITLE.L007} routeOptions={{reload: true}}>{LESSON_TITLE.L007}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S03} routeName={LESSON_TITLE.L008} routeOptions={{reload: true}}>{LESSON_TITLE.L008}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S04}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L009} routeOptions={{reload: true}}>{LESSON_TITLE.L009}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L010} routeOptions={{reload: true}}>{LESSON_TITLE.L010}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L011} routeOptions={{reload: true}}>{LESSON_TITLE.L011}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L012} routeOptions={{reload: true}}>{LESSON_TITLE.L012}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L013} routeOptions={{reload: true}}>{LESSON_TITLE.L013}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L014} routeOptions={{reload: true}}>{LESSON_TITLE.L014}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S04} routeName={LESSON_TITLE.L015} routeOptions={{reload: true}}>{LESSON_TITLE.L015}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S05}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S05} routeName={LESSON_TITLE.L016} routeOptions={{reload: true}}>{LESSON_TITLE.L016}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S05} routeName={LESSON_TITLE.L017} routeOptions={{reload: true}}>{LESSON_TITLE.L017}</SidebarItem>
          </FlexColumn>

          <FlexColumn>
            <HeadingItem>{LESSON_SECTIONS.S06}</HeadingItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S06} routeName={LESSON_TITLE.L018} routeOptions={{reload: true}}>{LESSON_TITLE.L018}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S06} routeName={LESSON_TITLE.L019} routeOptions={{reload: true}}>{LESSON_TITLE.L019}</SidebarItem>
            <SidebarItem isPremium={LESSON_SECTIONS_PREMIUM.S06} routeName={LESSON_TITLE.L020} routeOptions={{reload: true}}>{LESSON_TITLE.L020}</SidebarItem>
          </FlexColumn>
        </Box>
      </FlexColumn>
    );
  };
};


const Dropdown = styled(Flex)<any>`
  visibility: ${props => props.togglevisibility};
`;

Dropdown.defaultProps = {
  togglevisibility: 'hidden',
};

class LogoDropdown extends React.Component<{}, { dropdownOpenState: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      dropdownOpenState: 'hidden',
    }
  }

  public render() {
    return (
      <Flex 
        css={{          
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '64px',
          width: '260px',
          minWidth: '260px', 
        }}
        >
        <Heading 
          fontSize={4} 
          ml={3} 
          onClick={this.clickDropdown}
          >
          Watashi Engine</Heading>
        <Dropdown
          ml={7}
          togglevisibility={this.state.dropdownOpenState}
          css={{
            position: 'absolute',
            marginTop: '2px',
            width: '300px',
            justifyContent: 'space-between',
            marginRight: '1rem',          
          }}
          >
          <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>{ROUTE_TITLE.HOME}</InternalLink>
          <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</InternalLink>
          <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.GUIDES} routeOptions={{reload: true}}>{ROUTE_TITLE.GUIDES}</InternalLink>
          <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.APP} routeOptions={{reload: true}}>{ROUTE_TITLE.APP}</InternalLink>
          <InternalLink onClick={this.clickDropdown} routeName={ROUTE_TITLE.ABOUT} routeOptions={{reload: true}}>{ROUTE_TITLE.ABOUT}</InternalLink>
        </Dropdown>
      </Flex>
    );
  };

  private clickDropdown = () => {
    this.setState({
      dropdownOpenState: this.state.dropdownOpenState === 'hidden' ? 'visible' : 'hidden',
    });
  }
};



export default Sidebar;