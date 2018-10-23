import { Card } from 'rebass';
import { Flex, FlexColumn } from './LayoutStyles';
import { H3 } from './TextStyles';

import styled from 'styled-components';


// Homepage 

export const HomepageWrapper = styled(FlexColumn)`

`;

export const MainWrapper = styled(FlexColumn)`
  margin-top: 7rem;
  margin-left: 5rem;
  margin-bottom: 10rem;
  width: 600px;
`;

export const HomepageSection = styled(FlexColumn)`

`;

export const List = styled.ul`

`;

export const Item = styled.li`
  margin-bottom: 0.8rem;
`;


// Pricing

export const PricingWrapper = styled(Flex)`
  justify-content: space-around;
`;

export const PricingCard = styled(Card)`
  flex: 1;
  border: 1px solid black;
`;

export const Price = styled(H3)`

`;

export const PricingList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PricingListItem = styled.li`
  margin-bottom: 1rem;
`;