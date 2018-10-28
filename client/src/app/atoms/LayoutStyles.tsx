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

export const ModuleWrapper = styled(FlexColumn)`
  margin-top: 20px;
`;

