import { Flex as RebassFlex } from 'rebass';
import styled from 'styled-components';


export const Flex = styled(RebassFlex)`
  display: flex;
`;

export const FlexColumn = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;


// WRAPPERS

export const AppWrapper = styled.div`
  display: flex; 
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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



// HOMEPAGE 

export const HomepageWrapper = styled(RebassFlex)`
  display: flex;
`;

export const HomepageSection = styled(RebassFlex)`
  display: flex;
`;