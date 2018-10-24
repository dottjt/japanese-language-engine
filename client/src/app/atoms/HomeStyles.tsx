import { Card } from 'rebass';
import { Flex, FlexColumn } from './LayoutStyles';
import { H2 } from './TextStyles';

import styled from 'styled-components';


// Homepage 

export const HomepageWrapper = styled(FlexColumn)`

`;

export const MainWrapper = styled(FlexColumn)`
  margin-top: 10rem;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 10rem;
`;

export const HomepageSection = styled(FlexColumn)`
  width: 600px;
`;

export const List = styled.ul`

`;

export const Item = styled.li`
  line-height: 1.5rem;
  margin-bottom: 0.8rem;
`;


// Pricing

export const PricingWrapper = styled(Flex)`
  justify-content: space-around;
  margin-bottom: 4rem;
`;

export const PricingCard = styled(Card)`
  position: relative;
  flex: 1;
  border: 1px solid lightgrey;
  border-radius: 0;
  padding: 2rem;
  padding-bottom: 6rem;

  flex-wrap: wrap;
  max-width: 300px;
`;

export const Price = styled(H2)`
  font-size: 2rem;
`;

export const PricingList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PricingListItem = styled.li`
  margin-bottom: 1rem;
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