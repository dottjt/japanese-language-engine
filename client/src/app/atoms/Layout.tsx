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
  width: 250px;
  max-width: 250px;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

export const ModuleWrapper = styled.div`
    display: flex;
  flex-direction: column;

  margin-top: 20px;
`;