import * as React from 'react';
import { Flex } from './LayoutStyles';
import { Heading, Text } from './TextStyles';
import { InternalLink } from './ClickableStyles';

import system from '@rebass/components';

const Item = system({
  extend: Flex,
  width: 1,
  height: '3rem',
  borderBottom: 1,
  alignItems: 'center',
});

export const SidebarItem = (props) => (
  <Item>
    <InternalLink 
      ml={3}
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
        {props.isPremium && (
          <Text fontSize={1} m={1}>Premium</Text>
        )}
  </Item>
);

export const HeadingItem = (props) => (
  <Item>
    <Heading 
      is='h3' 
      ml={3} 
      fontSize={3}>
        {props.children}
      </Heading>
  </Item>
);

