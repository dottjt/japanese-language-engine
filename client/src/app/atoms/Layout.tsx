import { Flex } from 'rebass';
import styled from 'styled-components';

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;


// WRAPPERS

export const AppWrapper = styled.div`
  display: flex; 
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  border-right: 1px solid black;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: 20px;
`;

export const ModuleWrapper = styled.div`
    display: flex;
  flex-direction: column;

  margin-top: 20px;
`;