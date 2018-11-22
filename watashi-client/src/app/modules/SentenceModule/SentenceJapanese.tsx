import * as React from 'react'

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Heading } from '../../atoms/TextStyles';
import { TextHover, ToggleBackground } from '../../atoms/CustomStyles';

import {
  // startOfArray,
  // endOfArray,
  determineToggleBackground,
} from '../../../util/functions';

import {
  convertSentenceStatsJapanese,
} from './utilSentence';

import {
  HAS_QUESTION,
  POLITENESS_CASUAL,
} from '../../../util/constants/optionsConstants';

// const phraseOptionsJapanese = (phraseArray: Util.WordArrayElement[], options: Util.Options, index: number): Util.WordArrayElement[] => {
//   // const japaneseQuestionEnding = options.selectedPoliteness !== POLITENESS_CASUAL ? 'か？' : '？';

//   // options.question === HAS_QUESTION ? 
//   //   phraseArray[phraseArray.length - 1].word = `${phraseArray[phraseArray.length - 1].word}${japaneseQuestionEnding}` : 
//   //   phraseArray[phraseArray.length - 1].word = `${phraseArray[phraseArray.length - 1].word}。`

//   return phraseArray;
// };

const sentenceOptionsJapanese = (sentenceArray: Util.WordArrayElement[], options: Util.Options): Util.WordArrayElement[] => {
  return sentenceArray;
};

const wordOptionsJapanese = (character: Util.WordArrayElement, wordIndex: number, options: Util.Options, sentenceLength: number): string => {
  const japaneseQuestionEnding = options.selectedPoliteness !== POLITENESS_CASUAL ? 'か？' : '？';

  if (wordIndex === sentenceLength - 1) {
    return options.selectedQuestion === HAS_QUESTION ? `${character.word}${japaneseQuestionEnding}` : `${character.word}。`
  };
  return character.word;
};

class JapaneseSentence extends React.Component<PropTypes.IJapaneseSentenceProps, { hoverState: boolean }> {
  constructor(props: PropTypes.IJapaneseSentenceProps) {
    super(props);
    this.state = { hoverState: false }
  }

  public render() {
    const { sentence, sentenceStats, sentenceDisplayOptions, options, exerciseIndex } = this.props;
    const { toggleSentenceOrder, toggleSentenceHide } = sentenceDisplayOptions;
    const { hoverState } = this.state;
    const sentenceComplete = sentenceOptionsJapanese(sentence, options);

    return (
      <FlexColumn>
        <Heading mt={3} mb={2} is='h5' fontSize={2}>Japanese</Heading>
        <ToggleBackground
          background={determineToggleBackground(toggleSentenceOrder, hoverState, toggleSentenceHide)}
          onMouseEnter={this.onHoverEnter}
          onMouseLeave={this.onHoverExit}
          >
          <Flex p={3} pl={3} border={1}>
            {sentenceComplete.map((wordArrayElement: Util.WordArrayElement, wordArrayElementIndex: number) => {
              const wordComplete = wordOptionsJapanese(wordArrayElement, wordArrayElementIndex, options, sentenceComplete.length);
              const hoverColour = convertSentenceStatsJapanese(sentenceStats, exerciseIndex, wordArrayElement.tag);                    

              return (
                <Flex key={wordArrayElementIndex}>
                  <TextHover hovercolour={hoverColour} key={wordArrayElementIndex}>
                    {wordComplete}
                  </TextHover>
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

export default JapaneseSentence;
