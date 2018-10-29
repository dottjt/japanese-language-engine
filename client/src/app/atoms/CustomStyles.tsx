import { Flex } from './LayoutStyles';
import { Text } from './TextStyles';
// import { borders, minWidth } from 'styled-system';

import styled from 'styled-components';
// import system from 'system-components';

export const SentenceStatsWrapper = styled(Flex)<any>`
  visibility: ${props => props.togglevisibility};
`;

SentenceStatsWrapper.defaultProps = {
  togglevisibility: 'visible',
};

export const Word = styled(Text)<any>`
  background: ${props => props.hovercolour};
`;

Word.defaultProps = {
  hovercolour: 'white',
};