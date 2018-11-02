import * as React from 'react';
import { Flex as RebassFlex, Box as RebassBox } from 'rebass';
import { borders, minWidth, space, width, height, position, zIndex, color, overflow, bottom, left, right, top } from 'styled-system';

import styled from 'styled-components';
import system from 'system-components';

export const Box = styled(RebassBox)`
  ${space}
  ${borders}
  ${width}
  ${height}
  ${position}
  ${zIndex}
  ${color}
  ${overflow}
  ${bottom}
  ${left}
  ${right}
  ${top}
`;

export const Flex = styled(RebassFlex)`
  display: flex;
  ${space}
  ${borders}
  ${width}
  ${height}
  ${position}
  ${zIndex}
  ${color}
  ${overflow}
  ${bottom}
  ${left}
  ${right}
  ${top}
`;

export const FlexColumn = styled(RebassFlex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${space}
  ${borders}
  ${width}
  ${minWidth}
  ${height}
  ${position}
  ${zIndex}
  ${color}
  ${overflow}
  ${bottom}
  ${left}
  ${right}
  ${top}
`;


export const PageWrapper = (props) => (
  <FlexColumn ml={5} mt={5} mb={5} mr={5}
    position='relative' 
    top={60}
    >
    {props.children}
  </FlexColumn>
);

export const List = system(
  {
    is: 'ul',
  },
  'space',
  'width',
);

export const ListItem = system(
  {
    is: 'li',
    lineHeight: 2,
  },
  'space',
  'width',
);


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