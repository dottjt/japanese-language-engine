import * as React from 'react';
import { Flex as FlexBase, Box as BoxBase } from 'rebass';

import styled from 'styled-components';
import system from '@rebass/components';


export const Box = system({
    extend: BoxBase
  },
  'borders',
  'minWidth',
  'width',
);

// ---------------------------------------- // 

export const Flex = system({
    extend: FlexBase,
    display: 'flex',
  },
  'borders',
  'minWidth',
  'width',
);

export const FlexColumn = system({
  extend: Flex,
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const FlexCenter = system({
  extend: Flex,
  justifyContent: 'center',
  alignItems: 'center',
});

// ---------------------------------------- // 

export const PageWrapper = system({
  extend: FlexColumn,
  
  position: 'relative',
  top: '60px',

  ml: 6,
  mt: 5,
  mb: 5,
  mr: 3,
});

// ---------------------------------------- // 

export const List = system({
  extend: Box,
  is: 'ul',
});

export const ListItem = system({
  extend: Box,
  is: 'li',
  lineHeight: 2,
});

// ---------------------------------------- // 



// MISC
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