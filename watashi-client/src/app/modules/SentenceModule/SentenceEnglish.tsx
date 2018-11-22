import * as React from 'react'

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Heading, Text } from '../../atoms/TextStyles';
import { ToggleBackground } from '../../atoms/CustomStyles';
import {
  capitalise,
  // startOfArray,
  // endOfArray,
  determineToggleBackground,
} from '../../../util/functions';

import {
  convertSentenceStatsEnglish,
} from './utilSentence';

import {
  HAS_QUESTION,
} from '../../../util/constants/optionsConstants';

const sentenceOptionsEnglish = (sentenceArray: Util.WordArrayElement[], options: Util.Options): Util.WordArrayElement[] => {
  return sentenceArray;
};

const wordOptionsEnglish = (wordArrayElement: Util.WordArrayElement, wordIndex: number, options: Util.Options, sentenceLength: number): string => {

  if (wordIndex === 0) { //   startOfArray(sentenceLength, sentencePartIndex)
    if (sentenceLength === 1) {
      return `${capitalise(wordArrayElement.word)}.`;
    };
    return capitalise(wordArrayElement.word);
  };

  if (wordIndex === sentenceLength - 1) { // endOfArray(sentenceLength, sentencePartIndex)
    return options.selectedQuestion === HAS_QUESTION ? `${wordArrayElement.word}?` : `${wordArrayElement.word}.`
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
            {sentenceComplete.map((wordArrayElement: Util.WordArrayElement, wordArrayElementIndex: number) => {
              const wordComplete = wordOptionsEnglish(wordArrayElement, wordArrayElementIndex, options, sentenceComplete.length);
              const hoverColour = convertSentenceStatsEnglish(sentenceStats, exerciseIndex, wordArrayElement.tag);

              return (
                <Flex key={wordArrayElementIndex}>
                  <Text mr={1} mb={0} hovercolour={hoverColour} key={wordArrayElementIndex}>
                    {wordComplete}
                  </Text>
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
