import * as React from 'react'

import { Sentence, Phrase, JapaneseWord } from '../../atoms/SentenceStyles';

import {
  createError,
  // startOfSentence,
  endOfSentence,
} from '../../../util/functions';

import {
  HAS_QUESTION,
  POLITENESS_CASUAL,
  CONJUGATION_TYPE_NOUN_JAPANESE,
  CONJUGATION_TYPE_VERB_JAPANESE,
} from '../../../util/constants/optionsConstants';


const wordArrayOptionsJapanese = (character: string, japaneseSentenceLength: number, options: Util.Options, index: number, phraseLength: number, phraseIndex: number): string => {
  const japaneseQuestionEnding = options.politeness !== POLITENESS_CASUAL ? 'か？' : '？';

  if (endOfSentence(japaneseSentenceLength, index) && endOfSentence(phraseLength, phraseIndex)) {
    return options.question === HAS_QUESTION ? `${character}${japaneseQuestionEnding}` : `${character}。`
  };
  return character;
};

const phraseOptionsJapanese = (phraseArray: string[], options: Util.Options, index: number): string[] => {
  return phraseArray;
};

const sentenceOptionsJapanese = (sentenceArray: Util.ConjugatedJapaneseArray, options: Util.Options): Util.ConjugatedJapaneseArray => {
  return sentenceArray;
};

class JapaneseSentence extends React.Component<PropTypes.IJapaneseSentenceProps, {}> {
  public render() {
    const { sentence, options } = this.props;
    const sentenceArrayComplete = sentenceOptionsJapanese(sentence, options);

    return (
      <Sentence>
        {sentenceArrayComplete.map((phrase, phraseIndex: number) => {
          const nounPhrase = phrase as Util.ConjugatedJapaneseNoun;
          const verbPhrase = phrase as Util.ConjugatedJapaneseVerb;
          
          switch(phrase.type) {
            case CONJUGATION_TYPE_NOUN_JAPANESE: 
              const nounWordArray = [nounPhrase.noun.japanese.kanji].concat(nounPhrase.nounCategoryEnding.wordArray).concat(nounPhrase.nounEnding.wordArray).concat(nounPhrase.nounTopicParticle.wordArray);
              const nounWordArrayComplete = phraseOptionsJapanese(nounWordArray, options, phraseIndex);

              return (
                <Phrase key={phraseIndex}>
                  {nounWordArrayComplete.map((word: string, nounIndex: number) => (
                    <JapaneseWord key={nounIndex}>{wordArrayOptionsJapanese(word, nounWordArrayComplete.length, options, nounIndex, sentenceArrayComplete.length, phraseIndex)}</JapaneseWord>
                  ))}
                </Phrase>
              );
            
            case CONJUGATION_TYPE_VERB_JAPANESE: 
              const verbWordArray = verbPhrase.conjugatedVerb.wordArray;
              const verbWordArrayComplete = phraseOptionsJapanese(verbWordArray, options, phraseIndex);
              
              return (
                <Phrase key={phraseIndex}>
                  {verbWordArrayComplete.map((word: string, verbIndex: number) => (
                    <JapaneseWord key={verbIndex}>{wordArrayOptionsJapanese(word, verbWordArrayComplete.length, options, verbIndex, sentenceArrayComplete.length, phraseIndex)}</JapaneseWord>
                  ))}
                </Phrase>
              );
          }
          throw new Error(createError('SentenceModule.tsx', 'EnglishSentence', `${phrase.type} does not exist.`));
        })
        }
      </Sentence>
    );
  };
};

export default JapaneseSentence;
