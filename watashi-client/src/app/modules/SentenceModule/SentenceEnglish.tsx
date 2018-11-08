import * as React from 'react'

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Heading, Text } from '../../atoms/TextStyles';
import { ToggleBackground } from '../../atoms/CustomStyles';
import {
  capitalise,
  startOfArray,
  endOfArray,
  determineToggleBackground,
} from '../../../util/functions';

import {
  createTaggedArrayEnglish,
  convertSentenceStatsEnglish,
} from './utilSentence';

import {
  HAS_QUESTION,
} from '../../../util/constants/optionsConstants';

const phraseOptionsEnglish = (phraseArray: Util.WordArrayElement[], options: Util.Options, phraseIndex: number): Util.WordArrayElement[] => {
  const filteredArray: Util.WordArrayElement[] = phraseArray.filter((wordArrayElement: Util.WordArrayElement): boolean => wordArrayElement.word !== '');

  return filteredArray;
};

const sentenceOptionsEnglish = (sentenceArray: Util.ConjugatedEnglishWord[], options: Util.Options): Util.ConjugatedEnglishWord[] => {
  return sentenceArray;
};

const wordOptionsEnglish = (wordArrayElement: Util.WordArrayElement, options: Util.Options, wordArrayLength: number, wordIndex: number, sentenceLength: number, sentencePartIndex: number): string => {

  if (startOfArray(wordArrayLength, wordIndex) && startOfArray(sentenceLength, sentencePartIndex)) {
    return capitalise(wordArrayElement.word);
  };

  if (endOfArray(wordArrayLength, wordIndex) && endOfArray(sentenceLength, sentencePartIndex)) {
    return options.question === HAS_QUESTION ? `${wordArrayElement.word}?` : `${wordArrayElement.word}.`
  };

  return wordArrayElement.word;
};

class SentenceEnglish extends React.PureComponent<PropTypes.IEnglishSentenceProps, { hoverState: boolean }> {
  constructor(props: PropTypes.IEnglishSentenceProps) {
    super(props);
    this.state = { hoverState: false }
  }

  public render() {
    const { sentence, sentenceStats, sentenceDisplayOptions, options, exerciseIndex } = this.props;
    const { toggleSentenceOrder, toggleSentenceHide } = sentenceDisplayOptions;
    const { hoverState } = this.state;
    
    const sentenceComplete = sentenceOptionsEnglish(sentence, options);

    return (
      <FlexColumn>
        <Heading mt={3} mb={2} is='h5' fontSize={2}>English</Heading>
        <ToggleBackground
          background={determineToggleBackground(!toggleSentenceOrder, hoverState, toggleSentenceHide)}
          onMouseEnter={this.onHoverEnter}
          onMouseLeave={this.onHoverExit}
          >
          <Flex p={3} pl={3} border={1}>
            {sentenceComplete.map((sentencePart: Util.ConjugatedEnglishWord, sentencePartIndex: number) => {
              const sentencePartWordArray = createTaggedArrayEnglish(sentencePart);
              const sentencePartWordArrayComplete = phraseOptionsEnglish(sentencePartWordArray, options, sentencePartIndex);

              return (
                <Flex key={sentencePartIndex}>
                  {sentencePartWordArrayComplete.map((word: Util.WordArrayElement, wordIndex: number) => {
                    const hoverColour = convertSentenceStatsEnglish(sentenceStats, exerciseIndex, word.tag);
                    const wordComplete = wordOptionsEnglish(word, options, sentencePartWordArrayComplete.length, wordIndex, sentenceComplete.length, sentencePartIndex);
                    return (
                      <Text mr={1} mb={0} hovercolour={hoverColour} key={wordIndex}>
                        {wordComplete}
                      </Text>
                    );
                  })}
                </Flex>
              );
            })}
          </Flex>
        </ToggleBackground>
      </FlexColumn>
    );
  };
  private onHoverEnter = (): void => {
    this.setState({ hoverState: true });
  }
  private onHoverExit = (): void => {
    this.setState({ hoverState: false });
  }
};

export default SentenceEnglish;
