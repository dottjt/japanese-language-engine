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


const wordOptionsJapanese = (character: string, japaneseSentenceLength: number, options: Util.Options, index: number, phraseLength: number, phraseIndex: number): string => {
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
    const phraseArrayComplete = sentenceOptionsJapanese(sentence, options);

    return (
      <Sentence>
          {phraseArrayComplete.map((phraseArray, phraseIndex: number) => {
            switch(phraseArray.type) {
              case CONJUGATION_TYPE_NOUN_JAPANESE:
                const nounPhrase = phraseArray as Util.ConjugatedJapaneseNoun;
                const nounPhraseArray = [nounPhrase.noun.japanese.kanji].concat(nounPhrase.nounCategoryEnding.wordArray).concat(nounPhrase.nounEnding.wordArray).concat(nounPhrase.nounTopicParticle.wordArray);
                const nounPhraseArrayComplete = phraseOptionsJapanese(nounPhraseArray, options, phraseIndex);

                return (
                  <Phrase key={phraseIndex}>
                    {nounPhraseArrayComplete.map((word: string, nounIndex: number) => (
                      <JapaneseWord key={nounIndex}>{wordOptionsJapanese(word, nounPhraseArrayComplete.length, options, nounIndex, phraseArrayComplete.length, phraseIndex)}</JapaneseWord>
                    ))}
                  </Phrase>
                );
              
              case CONJUGATION_TYPE_VERB_JAPANESE: 
                const verbPhrase = phraseArray as Util.ConjugatedJapaneseVerb;
                const verbPhraseArray = verbPhrase.conjugatedVerb.wordArray.concat(verbPhrase.verb.japanese.kanji);
                const verbPhraseArrayComplete = phraseOptionsJapanese(verbPhraseArray, options, phraseIndex);
                
                return (
                  <Phrase key={phraseIndex}>
                    {verbPhraseArrayComplete.map((word: string, verbIndex: number) => (
                      <JapaneseWord key={verbIndex}>{wordOptionsJapanese(word, verbPhraseArrayComplete.length, options, verbIndex, phraseArrayComplete.length, phraseIndex)}</JapaneseWord>
                    ))};
                  </Phrase>
                );
            }
            throw new Error(createError('SentenceModule.tsx', 'EnglishSentence', `${phraseArray.type} does not exist.`));
          })
          }
      </Sentence>
    );
  };
};

export default JapaneseSentence;
