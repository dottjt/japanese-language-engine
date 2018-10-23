import { Flex as RebassFlex } from 'rebass';
import styled from 'styled-components';


export const Flex = styled(RebassFlex)`
  display: flex;
`;

export const FlexColumn = styled(RebassFlex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;


// WRAPPERS

export const AppWrapper = styled(Flex)`

`;

export const HeaderWrapper = styled(Flex)`
  justify-content: flex-end;
`;

export const NavbarWrapper = styled(FlexColumn)`
  min-width: 250px;
  border-right: 1px solid black;
`;

export const PageWrapper = styled(FlexColumn)`
  width: 100%;
  margin-left: 20px;
`;

export const ModuleWrapper = styled(FlexColumn)`
  margin-top: 20px;
`;



// HOMEPAGE 

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