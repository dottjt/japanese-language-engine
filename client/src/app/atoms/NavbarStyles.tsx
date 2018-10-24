import styled from 'styled-components';
import { Flex } from './LayoutStyles';
import { H3 } from './TextStyles';

export const NavbarWrapper = styled(Flex)`
  height: 4rem;
  width: 100%;
  z-index: 10;

  background: white;
  position: fixed;
  top: 0;
  right: 0;

  border-bottom: 1px solid grey; 
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLinks = styled(Flex)`
  width: 300px;
  justify-content: space-around;
`;

export const NavbarLogo = styled(H3)`
  margin-left: 2rem;
`;
