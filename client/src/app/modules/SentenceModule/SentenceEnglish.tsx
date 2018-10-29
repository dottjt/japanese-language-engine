import * as React from 'react'

import { Flex } from '../../atoms/LayoutStyles';
import { Text } from '../../atoms/TextStyles';
import {
  // capitalise,
  startOfSentence,
  endOfSentence,
  capitalise,
} from '../../../util/functions';

import {
  createTaggedArrayEnglish,
} from './sentenceUtil';

import {
  HAS_QUESTION,

  // VERB_ENGLISH_CONJUGATION,
  // NOUN_ENGLISH,
  // NOUN_ENGLISH_CONJUGATION,
  NOUN_ENGLISH_POLARITY,
  // NOUN_ENGLISH_INDEFINITE_ARTICLE,
} from '../../../util/constants/optionsConstants';

const wordOptionsEnglish = (wordArrayElement: Util.WordArrayElement, englishSentenceLength: number, options: Util.Options, index: number, phraseLength: number, phraseIndex: number): string => {

  if(startOfSentence(englishSentenceLength, index) && startOfSentence(phraseLength, phraseIndex)) {
    return capitalise(wordArrayElement.word);
  };

  if (endOfSentence(englishSentenceLength, index) && endOfSentence(phraseLength, phraseIndex)) {
    return options.question === HAS_QUESTION ? `${wordArrayElement.word}?` : `${wordArrayElement.word}.`
  };

  return wordArrayElement.word;
};

const phraseOptionsEnglish = (phraseArray: Util.WordArrayElement[], options: Util.Options, phraseIndex: number): Util.WordArrayElement[] => {
  const filteredArray: Util.WordArrayElement[] = phraseArray.filter((wordArrayElement: Util.WordArrayElement): boolean => wordArrayElement.word !== '');
  return filteredArray;
};

const sentenceOptionsEnglish = (sentenceArray: Util.ConjugatedEnglishWord[], options: Util.Options): Util.ConjugatedEnglishWord[] => {
  return sentenceArray;
};

const convertSentenceStatsEnglish = (sentenceStats: Util.SentenceStats, exerciseIndex: number, tag: string): string => {
  if (sentenceStats && exerciseIndex === sentenceStats.selectedExerciseNumber) {
    if (sentenceStats.polarityHover && tag === NOUN_ENGLISH_POLARITY) {
      return 'red';
    }

    // switch(`{tag}`) {
    //   case VERB_ENGLISH: return 'blue';
    //   case VERB_ENGLISH_CONJUGATION: return 'green';
    //   case NOUN_ENGLISH: return 'red';
    //   case NOUN_ENGLISH_CONJUGATION: return 'orange';
    //   case NOUN_ENGLISH_POLARITY: return 'purple';
    //   case NOUN_ENGLISH_INDEFINITE_ARTICLE: return 'yellow';
    // }  
  }
  return '';  
};

class SentenceEnglish extends React.Component<PropTypes.IEnglishSentenceProps, {}> {
  public render() {
    const { sentenceStats, sentence, options, exerciseIndex } = this.props;
    const sentenceArrayComplete = sentenceOptionsEnglish(sentence, options);

    return (
      <Flex m={2} p={2} border={2}>
        {sentenceArrayComplete.map((phrase, phraseIndex: number) => {
          const phraseArray = createTaggedArrayEnglish(phrase);
          const phraseArrayComplete = phraseOptionsEnglish(phraseArray, options, phraseIndex);
          
          return (
            <Flex border={2} key={phraseIndex}>
              {phraseArrayComplete.map((word: Util.WordArrayElement, nounIndex: number) => {
                const hoverColour = convertSentenceStatsEnglish(sentenceStats, exerciseIndex, word.tag);
                return (
                  <Text m={1} hoverColour={hoverColour} key={nounIndex}>{wordOptionsEnglish(word, phraseArray.length, options, nounIndex, phraseArrayComplete.length, phraseIndex)}</Text>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    );
  };
};

export default SentenceEnglish;
