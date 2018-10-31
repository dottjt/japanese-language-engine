import * as React from 'react'

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Heading } from '../../atoms/TextStyles';
import { TextHover, SentenceCover } from '../../atoms/CustomStyles';
import {
  // capitalise,
  // startOfArray,
  // endOfArray,
  capitalise,
  determineSentenceCover,
} from '../../../util/functions';

import {
  createTaggedArrayEnglish,
  convertSentenceStatsEnglish,
} from './utilSentence';

import {
  HAS_QUESTION,
} from '../../../util/constants/optionsConstants';

// const wordOptionsEnglish = (wordArrayElement: Util.WordArrayElement, englishSentenceLength: number, options: Util.Options, index: number, phraseLength: number, phraseIndex: number): string => {

//   // if (startOfArray(englishSentenceLength, index) && startOfArray(phraseLength, phraseIndex)) {
//   //   return capitalise(wordArrayElement.word);
//   // };

//   // if (endOfArray(englishSentenceLength, index) && endOfArray(phraseLength, phraseIndex)) {
//   //   return options.question === HAS_QUESTION ? `${wordArrayElement.word}?` : `${wordArrayElement.word}.`
//   // };

//   return wordArrayElement.word;
// };

const phraseOptionsEnglish = (phraseArray: Util.WordArrayElement[], options: Util.Options, phraseIndex: number): Util.WordArrayElement[] => {

  phraseArray[0].word = capitalise(phraseArray[0].word);

  options.question === HAS_QUESTION ? 
    phraseArray[phraseArray.length - 1].word = `${phraseArray[phraseArray.length - 1].word}?` : 
    phraseArray[phraseArray.length - 1].word = `${phraseArray[phraseArray.length - 1].word}.`

  const filteredArray: Util.WordArrayElement[] = phraseArray.filter((wordArrayElement: Util.WordArrayElement): boolean => wordArrayElement.word !== '');

  return filteredArray;
};

const sentenceOptionsEnglish = (sentenceArray: Util.ConjugatedEnglishWord[], options: Util.Options): Util.ConjugatedEnglishWord[] => {
  return sentenceArray;
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
    const sentenceArrayComplete = sentenceOptionsEnglish(sentence, options);

    return (
      <FlexColumn>
        <Heading is='h5' fontSize={2}>English</Heading>
        <SentenceCover
          background={determineSentenceCover(!toggleSentenceOrder, hoverState, toggleSentenceHide)}
          onMouseEnter={this.onHoverEnter}
          onMouseLeave={this.onHoverExit}
          m={2} ml={0} p={3} pl={3} border={1}
          >
          {sentenceArrayComplete.map((phrase, phraseIndex: number) => {
            const phraseArray = createTaggedArrayEnglish(phrase);
            const phraseArrayComplete = phraseOptionsEnglish(phraseArray, options, phraseIndex);

            return (
              <Flex key={phraseIndex}>
                {phraseArrayComplete.map((word: Util.WordArrayElement, nounIndex: number) => {
                  const hoverColour = convertSentenceStatsEnglish(sentenceStats, exerciseIndex, word.tag);
                  // const wordComplete = wordOptionsEnglish(word, phraseArray.length, options, nounIndex, phraseArrayComplete.length, phraseIndex);
                  return (
                    <TextHover mr={1} hovercolour={hoverColour} key={nounIndex}>
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

export default SentenceEnglish;
