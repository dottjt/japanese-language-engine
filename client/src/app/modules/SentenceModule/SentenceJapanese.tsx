import * as React from 'react'

import { Flex, FlexColumn } from '../../atoms/LayoutStyles';
import { Heading } from '../../atoms/TextStyles';
import { TextHover, SentenceCover } from '../../atoms/CustomStyles';

import {
  // startOfSentence,
  endOfSentence,
  determineSentenceCover,
} from '../../../util/functions';

import {
  createTaggedArrayJapanese
} from './sentenceUtil';

import {
  HAS_QUESTION,
  POLITENESS_CASUAL,

  // VERB_JAPANESE,
  // VERB_JAPANESE_CONJUGATION,
  // NOUN_JAPANESE,
  NOUN_JAPANESE_CONJUGATION,
  NOUN_JAPANESE_TOPIC_PARTICLE,
  // NOUN_JAPANESE_CATEGORY_ENDING,
} from '../../../util/constants/optionsConstants';

const wordArrayOptionsJapanese = (character: Util.WordArrayElement, japaneseSentenceLength: number, options: Util.Options, index: number, phraseLength: number, phraseIndex: number): string => {
  const japaneseQuestionEnding = options.politeness !== POLITENESS_CASUAL ? 'か？' : '？';

  if (endOfSentence(japaneseSentenceLength, index) && endOfSentence(phraseLength, phraseIndex)) {
    return options.question === HAS_QUESTION ? `${character.word}${japaneseQuestionEnding}` : `${character.word}。`
  };
  return character.word;
};

const phraseOptionsJapanese = (phraseArray: Util.WordArrayElement[], options: Util.Options, index: number): Util.WordArrayElement[] => {
  return phraseArray;
};

const sentenceOptionsJapanese = (sentenceArray: Util.ConjugatedJapaneseWord[], options: Util.Options): Util.ConjugatedJapaneseWord[] => {
  return sentenceArray;
};

const convertSentenceStatsJapanese = (sentenceStats: Util.SentenceStats, exerciseIndex: number, tag: string): string | undefined => {
  if (sentenceStats && exerciseIndex === sentenceStats.selectedExerciseNumber) {
    if (sentenceStats.polarityTenseHover && 
        tag === NOUN_JAPANESE_TOPIC_PARTICLE) {
          return 'red';
    }
    if (sentenceStats.politenessHover && 
        tag === NOUN_JAPANESE_CONJUGATION) {
          return 'green';
    }
    if (sentenceStats.questionHover && 
        tag === NOUN_JAPANESE_CONJUGATION) {
          return 'blue';
    }
    // VERB_JAPANESE, VERB_JAPANESE_CONJUGATION, NOUN_JAPANESE, NOUN_JAPANESE_CONJUGATION, NOUN_JAPANESE_TOPIC_PARTICLE, NOUN_JAPANESE_CATEGORY_ENDING

  }
  return undefined;
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
                  const wordComplete = wordArrayOptionsJapanese(word, phraseArray.length, options, nounIndex, sentenceArrayComplete.length, phraseIndex);

                  console.log(hoverColour);
                  return (
                    <TextHover hovercolour={hoverColour} key={nounIndex}>
                      {wordComplete}
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
