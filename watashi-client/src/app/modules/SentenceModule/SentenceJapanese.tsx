import * as React from 'react'

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Heading } from '../../atoms/TextStyles';
import { TextHover, ToggleBackground } from '../../atoms/CustomStyles';

import {
  // startOfArray,
  endOfArray,
  determineToggleBackground,
} from '../../../util/functions';

import {
  createTaggedArrayJapanese,
  convertSentenceStatsJapanese,
} from './utilSentence';

import {
  HAS_QUESTION,
  POLITENESS_CASUAL,
} from '../../../util/constants/optionsConstants';

const phraseOptionsJapanese = (phraseArray: Util.WordArrayElement[], options: Util.Options, index: number): Util.WordArrayElement[] => {
  // const japaneseQuestionEnding = options.politeness !== POLITENESS_CASUAL ? 'か？' : '？';

  // options.question === HAS_QUESTION ? 
  //   phraseArray[phraseArray.length - 1].word = `${phraseArray[phraseArray.length - 1].word}${japaneseQuestionEnding}` : 
  //   phraseArray[phraseArray.length - 1].word = `${phraseArray[phraseArray.length - 1].word}。`

  return phraseArray;
};

const sentenceOptionsJapanese = (sentenceArray: Util.ConjugatedJapaneseWord[], options: Util.Options): Util.ConjugatedJapaneseWord[] => {
  return sentenceArray;
};

const wordArrayOptionsJapanese = (character: Util.WordArrayElement, options: Util.Options, wordArrayLength: number, wordIndex: number, sentenceLength: number, sentencePartIndex: number): string => {
  const japaneseQuestionEnding = options.politeness !== POLITENESS_CASUAL ? 'か？' : '？';

  if (endOfArray(wordArrayLength, wordIndex) && endOfArray(sentenceLength, sentencePartIndex)) {
    return options.question === HAS_QUESTION ? `${character.word}${japaneseQuestionEnding}` : `${character.word}。`
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
            {sentenceComplete.map((sentencePart, sentencePartIndex: number) => {
              const sentencePartWordArray = createTaggedArrayJapanese(sentencePart);
              const sentencePartWordArrayComplete = phraseOptionsJapanese(sentencePartWordArray, options, sentencePartIndex);

              return (
                <Flex key={sentencePartIndex}>
                  {sentencePartWordArrayComplete.map((word: Util.WordArrayElement, wordIndex: number) => {
                    const hoverColour = convertSentenceStatsJapanese(sentenceStats, exerciseIndex, word.tag);                    
                    const wordComplete = wordArrayOptionsJapanese(word, options, sentencePartWordArrayComplete.length, wordIndex, sentenceComplete.length, sentencePartIndex);
                    return (
                      <TextHover hovercolour={hoverColour} key={wordIndex}>
                        {wordComplete}
                      </TextHover>
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

export default JapaneseSentence;
