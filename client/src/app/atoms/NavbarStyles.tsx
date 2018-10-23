import styled from 'styled-components';
import { Flex } from './LayoutStyles';

export const NavbarWrapper = styled(Flex)`
  border: 1px solid black; 
  justify-content: flex-end;
`;

export const NavbarLinks = styled(Flex)`
  width: 300px;
  justify-content: space-around;
`;
