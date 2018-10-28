import * as React from 'react'

import { Sentence, Phrase, JapaneseWord } from '../../atoms/SentenceStyles';

import {
  createError,
  // startOfSentence,
  endOfSentence,
  tagArray,
} from '../../../util/functions';

import {
  HAS_QUESTION,
  POLITENESS_CASUAL,
  CONJUGATION_TYPE_NOUN_JAPANESE,
  CONJUGATION_TYPE_VERB_JAPANESE,

  VERB_JAPANESE,
  // VERB_JAPANESE_CONJUGATION,
  NOUN_JAPANESE,
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
      <Sentence>
        {sentenceArrayComplete.map((phrase, phraseIndex: number) => {
          const nounPhrase = phrase as Util.ConjugatedJapaneseWord;
          const verbPhrase = phrase as Util.ConjugatedJapaneseWord;
          
          switch(phrase.type) {
            case CONJUGATION_TYPE_NOUN_JAPANESE: 

              const noun = tagArray([nounPhrase.word.japanese.kanji], NOUN_JAPANESE);
              const nounCategoryEnding = tagArray(nounPhrase.nounCategoryEnding.wordArray, nounPhrase.nounCategoryEnding.wordType);
              const nounEnding = tagArray(nounPhrase.nounEnding.wordArray, nounPhrase.nounEnding.wordType);
              const nounTopicParticle = tagArray(nounPhrase.nounTopicParticle.wordArray, nounPhrase.nounTopicParticle.wordType);

              const nounWordArray = noun.concat(nounCategoryEnding).concat(nounEnding).concat(nounTopicParticle);
              const nounWordArrayComplete = phraseOptionsJapanese(nounWordArray, options, phraseIndex);

              return (
                <Phrase key={phraseIndex}>
                  {nounWordArrayComplete.map((word: Util.WordArrayElement, nounIndex: number) => {
                    const hoverColour = convertSentenceStatsJapanese(this.props.sentenceStats, exerciseIndex, word.tag);                    
                    return (
                      <JapaneseWord hoverColour={hoverColour} key={nounIndex}>{wordArrayOptionsJapanese(word, nounWordArrayComplete.length, options, nounIndex, sentenceArrayComplete.length, phraseIndex)}</JapaneseWord>
                    );
                  })}
                </Phrase>
              );
            
            case CONJUGATION_TYPE_VERB_JAPANESE: 
              
              const verb = tagArray(verbPhrase.conjugatedVerb.wordArray, VERB_JAPANESE);

              const verbWordArray = verb;
              const verbWordArrayComplete = phraseOptionsJapanese(verbWordArray, options, phraseIndex);
              
              return (
                <Phrase key={phraseIndex}>
                  {verbWordArrayComplete.map((word: Util.WordArrayElement, verbIndex: number) => {
                    const hoverColour = convertSentenceStatsJapanese(this.props.sentenceStats, exerciseIndex, word.tag);
                    console.log(hoverColour)
                    return (
                      <JapaneseWord hoverColour={hoverColour} key={verbIndex}>{wordArrayOptionsJapanese(word, verbWordArrayComplete.length, options, verbIndex, sentenceArrayComplete.length, phraseIndex)}</JapaneseWord>
                    );
                  })}
                </Phrase>
              );
          }
          throw new Error(createError('SentenceModule.tsx', 'JapaneseSentence', `${phrase.type} does not exist.`));
        })
        }
      </Sentence>
    );
  };
};

export default JapaneseSentence;
