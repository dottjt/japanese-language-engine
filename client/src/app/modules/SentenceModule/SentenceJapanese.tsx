import * as React from 'react'

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Heading } from '../../atoms/TextStyles';
import { TextHover, SentenceCover } from '../../atoms/CustomStyles';

import {
  determineSentenceCover,
} from '../../../util/functions';

import {
  createTaggedArrayJapanese,
  convertSentenceStatsJapanese,
} from './utilSentence';

import {
  HAS_QUESTION,
  POLITENESS_CASUAL,
} from '../../../util/constants/optionsConstants';

// const wordArrayOptionsJapanese = (character: Util.WordArrayElement, japaneseSentenceLength: number, options: Util.Options, index: number, phraseLength: number, phraseIndex: number): string => {
//   // const japaneseQuestionEnding = options.politeness !== POLITENESS_CASUAL ? 'か？' : '？';

//   // if (endOfArray(japaneseSentenceLength, index) && endOfArray(phraseLength, phraseIndex)) {
//   //   return options.question === HAS_QUESTION ? `${character.word}${japaneseQuestionEnding}` : `${character.word}。`
//   // };
//   return character.word;
// };

const phraseOptionsJapanese = (phraseArray: Util.WordArrayElement[], options: Util.Options, index: number): Util.WordArrayElement[] => {
  const japaneseQuestionEnding = options.politeness !== POLITENESS_CASUAL ? 'か？' : '？';

  options.question === HAS_QUESTION ? 
    phraseArray[phraseArray.length - 1].word = `${phraseArray[phraseArray.length - 1].word}${japaneseQuestionEnding}` : 
    phraseArray[phraseArray.length - 1].word = `${phraseArray[phraseArray.length - 1].word}。`

  return phraseArray;
};

const sentenceOptionsJapanese = (sentenceArray: Util.ConjugatedJapaneseWord[], options: Util.Options): Util.ConjugatedJapaneseWord[] => {
  return sentenceArray;
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
    const sentenceArrayComplete = sentenceOptionsJapanese(sentence, options);

    return (
      <FlexColumn>
        <Heading is='h5' fontSize={2}>Japanese</Heading>

        <SentenceCover
          background={determineSentenceCover(toggleSentenceOrder, hoverState, toggleSentenceHide)}
          onMouseEnter={this.onHoverEnter}
          onMouseLeave={this.onHoverExit}
          m={2} ml={0} p={3} pl={3} border={1}
          >
          {sentenceArrayComplete.map((phrase, phraseIndex: number) => {
            const phraseArray = createTaggedArrayJapanese(phrase);
            const phraseArrayComplete = phraseOptionsJapanese(phraseArray, options, phraseIndex);

            return (
              <Flex key={phraseIndex}>
                {phraseArrayComplete.map((word: Util.WordArrayElement, nounIndex: number) => {
                  const hoverColour = convertSentenceStatsJapanese(sentenceStats, exerciseIndex, word.tag);                    
                  // const wordComplete = wordArrayOptionsJapanese(word, phraseArray.length, options, nounIndex, sentenceArrayComplete.length, phraseIndex);

                  return (
                    <TextHover hovercolour={hoverColour} key={nounIndex}>
                      {word.word}
                    </TextHover>
                  );
                })}
              </Flex>
            );
          })}
        </SentenceCover>
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
