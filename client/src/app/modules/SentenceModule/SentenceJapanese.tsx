import * as React from 'react'

import { Flex } from '../../atoms/LayoutStyles';
import { TextHover } from '../../atoms/CustomStyles';

import {
  // startOfSentence,
  endOfSentence,
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
  // NOUN_JAPANESE_CONJUGATION,
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
    if (sentenceStats.polarityHover && tag === NOUN_JAPANESE_TOPIC_PARTICLE) {
      return 'red';
    }
    // switch(tag) {
    //   case VERB_JAPANESE: return 'blue';
    //   case VERB_JAPANESE_CONJUGATION: return 'green';
    //   case NOUN_JAPANESE: return 'red';
    //   case NOUN_JAPANESE_CONJUGATION: return 'orange';
    //   case NOUN_JAPANESE_TOPIC_PARTICLE: return 'purple';
    //   case NOUN_JAPANESE_CATEGORY_ENDING: return 'yellow';
    // }
  }
  return undefined;
};

class JapaneseSentence extends React.Component<PropTypes.IJapaneseSentenceProps, {}> {
  public render() {
    const { sentence, options, exerciseIndex } = this.props;
    const sentenceArrayComplete = sentenceOptionsJapanese(sentence, options);

    return (
      <Flex m={2} p={2} pl={3} border={1}>
        {sentenceArrayComplete.map((phrase, phraseIndex: number) => {
          const phraseArray = createTaggedArrayJapanese(phrase);
          const phraseArrayComplete = phraseOptionsJapanese(phraseArray, options, phraseIndex);

          return (
            <Flex key={phraseIndex}>
              {phraseArrayComplete.map((word: Util.WordArrayElement, nounIndex: number) => {
                const hoverColour = convertSentenceStatsJapanese(this.props.sentenceStats, exerciseIndex, word.tag);                    
                return (
                  <TextHover hovercolour={hoverColour} key={nounIndex}>{wordArrayOptionsJapanese(word, phraseArray.length, options, nounIndex, sentenceArrayComplete.length, phraseIndex)}</TextHover>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    );
  };
};

export default JapaneseSentence;
