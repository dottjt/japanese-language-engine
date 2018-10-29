import { Card as RebassCard } from 'rebass';

import styled from 'styled-components';


// Homepage 

export const PricingList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PricingListItem = styled.li`
  margin-bottom: 1rem;
`;

// Pricing

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