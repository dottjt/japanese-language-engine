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

export const SidebarWrapper = styled(FlexColumn)`
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

