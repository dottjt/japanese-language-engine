import * as React from 'react'

import { Box, Flex, FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
// import { ExternalLink, InternalLink } from '../atoms/ClickableStyles';
import { SidebarItemExternal, SidebarItem, HeadingItem } from '../atoms/ComponentStyles';

import {
  ROUTE_TITLE,
} from '../../util/constants/routeConstants';

import {
  LESSON_TITLE,
  LESSON_SECTIONS,
  LESSON_SECTIONS_PREMIUM,
} from '../../util/constants/lessonConstants';

class Sidebar extends React.Component<{ user: any, auth: any, route: any }, {}> {
  public render() {
    
    const { auth } = this.props;

    const isAuthenticated = auth.isAuthenticated();
    return (
      <FlexColumn
        fontSize={5}
        css={{
          position: 'relative',
          bottom: 0,
          top: '53px',
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
          <Heading 
            fontSize={4} 
            fontFamily='Vidaloka'
            ml={3}
            mb={3}
            >
            WATAShi Engine</Heading>
          <Flex
            css={{
              borderBottom: '1px solid grey',
            }}
            >
            {!isAuthenticated && 
              <SidebarItemExternal onClick={auth.login}>{ROUTE_TITLE.LOGIN} / {ROUTE_TITLE.SIGN_UP}</SidebarItemExternal>
            }
            {/* first need to get this from the 'database', I think. */}
            {/* if authenticated, then need to go to database and get the user information :) */}
            {/* <img src={user.thumbUrl}/> */}
            {isAuthenticated && 
              <SidebarItem routeName={ROUTE_TITLE.PROFILE} routeOptions={{reload: true}}>{ROUTE_TITLE.PROFILE}</SidebarItem>                
            }
          </Flex>

          <FlexColumn>
            <SidebarItem routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>{ROUTE_TITLE.HOME}</SidebarItem>
            <SidebarItem routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</SidebarItem>
            <SidebarItem routeName={ROUTE_TITLE.GUIDES} routeOptions={{reload: true}}>{ROUTE_TITLE.GUIDES}</SidebarItem>
            <SidebarItem routeName={ROUTE_TITLE.APP} routeOptions={{reload: true}}>{ROUTE_TITLE.APP}</SidebarItem>
            <SidebarItem routeName={ROUTE_TITLE.ABOUT} routeOptions={{reload: true}}>{ROUTE_TITLE.ABOUT}</SidebarItem>
          </FlexColumn>

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

export default Sidebar;