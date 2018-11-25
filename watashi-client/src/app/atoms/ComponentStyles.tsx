import * as React from 'react';
import { Flex } from './LayoutStyles';
import { Heading } from './TextStyles';
import { ExternalLink, InternalLink } from './ClickableStyles';

import system from '@rebass/components';

const Item = system({
  extend: Flex,
  width: 1,
  height: '3rem',
  alignItems: 'center',
  borderBottom: 1,
});

export const SidebarItemExternal = (props) => (
  <Item
    css={{
      cursor: 'pointer',
      transition: 'background .1s',
      '&:hover': {
        background: 'lightgrey',
      }
    }}
    >
    <ExternalLink 
      ml={3}
      fontSize={1}
      css={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        width: '100%', 
        height: '100%', 
      }}
      onClick={props.onClick}
      >
        {props.children}
      </ExternalLink>  
  </Item>
);

export const SidebarItem = (props) => (
  <Item
    css={{
      cursor: 'pointer',
      transition: 'background .1s',
      '&:hover': {
        background: 'lightgrey',
      }    
    }}
    >
    <InternalLink 
      ml={3}
      fontSize={1}
      css={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        width: '100%', 
        height: '100%', 
      }}
      routeName={props.routeName} 
      routeOptions={props.routeOptions}>
        {props.children}
      </InternalLink> 
  </Item>
);

export const HeadingItem = (props) => (
  <Item>
    <Heading 
      ml={3}
      fontSize={2}>
        {props.children}
      </Heading>
  </Item>
);

