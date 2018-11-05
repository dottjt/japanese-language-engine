import { Flex } from './LayoutStyles';
import { Text } from './TextStyles';

import styled from 'styled-components';

export const ToggleVisibility = styled(Flex)<any>`
  visibility: ${props => props.togglevisibility};
`;

ToggleVisibility.defaultProps = {
  togglevisibility: 'visible',
};


export const TextHover = styled(Text)<any>`
  background: ${props => props.hovercolour};
`;

TextHover.defaultProps = {
  hovercolour: 'initial',
};


export const ToggleSentenceOrder = styled(Flex)<any>`
  flex-direction: ${props => props.sentenceorder};
`;

ToggleSentenceOrder.defaultProps = {
  sentenceorder: 'column',
};

export const ToggleBackground = styled(Flex)<any>`
  background: ${props => props.background};
`;

ToggleBackground.defaultProps = {
  background: 'white',
};
