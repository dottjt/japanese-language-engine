import { Flex } from './LayoutStyles';
import { Text } from './TextStyles';

import styled from 'styled-components';

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
  hovercolour: 'initial',
};


export const ToggleSentenceOrder = styled(Flex)<any>`
  flex-direction: ${props => props.sentenceorder};
`;

ToggleSentenceOrder.defaultProps = {
  sentenceorder: 'column',
};


export const SentenceCover = styled(Flex)<any>`
  background: ${props => props.background};
`;

SentenceCover.defaultProps = {
  background: 'white',
};
