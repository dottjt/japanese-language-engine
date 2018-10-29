import { Flex } from './LayoutStyles';
import { Text } from './TextStyles';
// import { borders, minWidth } from 'styled-system';

import styled from 'styled-components';
// import system from 'system-components';

export const ToggleSentenceStats = styled(Flex)<any>`
  visibility: ${props => props.togglevisibility};
`;

ToggleSentenceStats.defaultProps = {
  togglevisibility: 'visible',
};


export const TextHover = styled(Text)<any>`
  background: ${props => props.hovercolour};
`;

TextHover.defaultProps = {
  hovercolour: 'white',
};


export const ToggleSentenceOrder = styled(Flex)<any>`
  flex-direction: ${props => props.sentenceorder};
`;

ToggleSentenceOrder.defaultProps = {
  sentenceorder: 'column',
};

