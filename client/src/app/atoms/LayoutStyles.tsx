import { Flex as RebassFlex } from 'rebass';
import styled from 'styled-components';
import system from 'system-components';

export const Flex = styled(RebassFlex)`
  display: flex;
`;

export const FlexColumn = styled(RebassFlex)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const List = system(
  {
    is: 'ul',
  },
  'space',
  'width',
);

export const ListItem = system(
  {
    is: 'li',
  },
  'space',
  'width',
);
