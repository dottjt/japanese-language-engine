import * as React from 'react'

import { Box, Flex, FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
// import { ExternalLink, InternalLink } from '../atoms/ClickableStyles';
import { SidebarItemExternal, SidebarItem, HeadingItem } from '../atoms/ComponentStyles';

import {
  ROUTE_TITLE,
} from '../../util/constants/routeConstants';

import { InternalLink } from '../atoms/ClickableStyles';

class Sidebar extends React.Component<{ user: any, auth: any, route: any }, {}> {
  public render() {
    
    const { auth } = this.props;

    const isAuthenticated = auth.isAuthenticated();
    return (
      <React.Fragment>
      <FlexColumn
        mt={3}
        ml={2}
        css={{
          position: 'fixed',
          top: '0',
          // height: '53px',
          width: '282px',
          minWidth: '282px',
        }}      
        >
        <InternalLink routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>
          <Heading 
            fontSize={4}
            ml={4}
            mb={2}
            mt={4}
            >
            Watashi Engine</Heading>
        </InternalLink>
        <Flex
          // css={{
          //   borderBottom: '1px solid #ececec',
          // }}
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
      </FlexColumn>

      <FlexColumn
        fontSize={5}
        ml={2}
        css={{
          position: 'relative',
          bottom: 0,
          top: '173px',
          height: '100vh',
          width: '282px',
          minWidth: '282px',
        }}
        >
        <Box
          // borderRight={1}
          border={1}
          css={{
            position: 'fixed',
            height: '100%',
            width: '282px',
            minWidth: '282px',  
            boxShadow: '6px 6px grey',
          }}
          >
          <FlexColumn>
            <HeadingItem>Menu</HeadingItem>
            <SidebarItem routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>{ROUTE_TITLE.HOME}</SidebarItem>
            <SidebarItem routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</SidebarItem>
            {/* <SidebarItem routeName={ROUTE_TITLE.GUIDES} routeOptions={{reload: true}}>{ROUTE_TITLE.GUIDES}</SidebarItem> */}
            <SidebarItem routeName={ROUTE_TITLE.EXERCISES} routeOptions={{reload: true}}>{ROUTE_TITLE.EXERCISES}</SidebarItem>
            <SidebarItem routeName={ROUTE_TITLE.ABOUT} routeOptions={{reload: true}}>{ROUTE_TITLE.ABOUT}</SidebarItem>
          </FlexColumn>
        </Box>
      </FlexColumn>
      </React.Fragment>
    );
  };
};

export default Sidebar;