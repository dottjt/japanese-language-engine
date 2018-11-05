import * as React from 'react';
import { Flex as FlexBase, Box as BoxBase, Text as TextBase } from 'rebass';

import styled from 'styled-components';
import system from '@rebass/components';


export const Box = system({
    extend: BoxBase
  },
  'borders',
  'minWidth',
  'width',
  'height',
  'lineHeight',
);
Box.displayName = 'Box';


// ---------------------------------------- // 


export const Flex = system({
    extend: FlexBase,
    display: 'flex',
  },
  'borders',
  'minWidth',
  'width',
  'height',
  'lineHeight',
);
Flex.displayName = 'Flex';

export const FlexColumn = system({
  extend: Flex,
  flexDirection: 'column',
  justifyContent: 'flex-start',
});
FlexColumn.displayName = 'FlexColumn';

export const FlexCenter = system({
  extend: Flex,
  justifyContent: 'center',
  alignItems: 'center',
});
FlexCenter.displayName = 'FlexCenter';

export const FlexColumnCenter = system({
  extend: Flex,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
FlexColumnCenter.displayName = 'FlexColumnCenter';


// ---------------------------------------- // 


export const PageWrapper = system({
  extend: FlexColumn,
  
  position: 'relative',
  top: '60px',
  bg: 'background',

  ml: 6,
  mt: 5,
  mb: 5,
  mr: 3,
});
PageWrapper.displayName = 'PageWrapper';


// ---------------------------------------- // 


export const List = system({
  extend: Box,
  is: 'ul',
});
List.displayName = 'List';

export const ListItem = system({
  extend: TextBase,
  is: 'li',
  lineHeight: 2,
  // mb: 2,
});
ListItem.displayName = 'ListItem';


// ---------------------------------------- // 


import { Card as RebassCard } from 'rebass';

export const Card = styled(RebassCard)`
  position: relative;
  flex: 1;
  border-radius: 0;
  padding: 2rem;
  padding-bottom: 6rem;

  flex-wrap: wrap;
  max-width: 300px;
`;
Card.displayName = 'Card';

export const PricingButtonStyles: React.CSSProperties = {
  position: 'absolute', 
  padding: '1.5rem',
  bottom: 0, 
  marginBottom: '2rem',
  background: '#00cc47',
  borderRadius: 2,
  color: 'white',
  textDecoration: 'none',
  boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
};
