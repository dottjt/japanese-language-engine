import styled from 'styled-components';

export const Sentence = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid purple;
`;

export const Phrase = styled.div`
  display: flex;
`;

export const JapaneseWord = styled.div<{ hoverColour?: string }>`
  display: flex;
  background: ${props => props.hoverColour || 'white'};
`;

export const EnglishWord = styled.div<{ hoverColour?: string }>`
  display: flex;
  margin-right: 0.2rem;
  background: ${props => props.hoverColour || 'white'};
`;

// Sentence Stats

export const SentenceStat = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Stat = styled.p`
  /* border: 1px solid purple; */
  border-radius: 1px;
  padding: 0.3rem;

  margin-left: 1rem;

  /* background: orange; */
  color: lightgreen;
`;

