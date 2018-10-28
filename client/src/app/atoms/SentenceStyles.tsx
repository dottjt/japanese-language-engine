import styled from 'styled-components';
import { Flex } from './LayoutStyles';
import { Text } from './TextStyles';

export const Sentence = styled(Flex)`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid purple;
`;

export const Phrase = styled(Flex)`
`;

export const JapaneseWord = styled(Flex)<{ hoverColour?: string }>`
  background: ${props => props.hoverColour || 'white'};
`;

export const EnglishWord = styled(Flex)<{ hoverColour?: string }>`
  margin-right: 0.2rem;
  background: ${props => props.hoverColour || 'white'};
`;

// Sentence Stats

export const SentenceStat = styled(Flex)`
  justify-content: flex-end;
`;

export const Stat = styled(Text)`
  /* border: 1px solid purple; */
  border-radius: 1px;
  padding: 0.3rem;

  margin-left: 1rem;

  /* background: orange; */
  color: lightgreen;
`;

