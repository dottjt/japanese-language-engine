import * as React from 'react'

import { Sentence, Phrase, EnglishWord } from '../../atoms/SentenceStyles';

import {
  createError,
  // capitalise,
  startOfSentence,
  endOfSentence,
  capitalise,
} from '../../../util/functions';

import {
  HAS_QUESTION,

  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../../util/constants/optionsConstants';

const wordOptionsEnglish = (word: string, englishSentenceLength: number, options: Util.Options, index: number, phraseLength: number, phraseIndex: number): string => {

  if(startOfSentence(englishSentenceLength, index) && startOfSentence(phraseLength, phraseIndex)) {
    return capitalise(word);
  };

  if (endOfSentence(englishSentenceLength, index) && endOfSentence(phraseLength, phraseIndex)) {
    return options.question === HAS_QUESTION ? `${word}?` : `${word}.`
  };

  return word;
};

const phraseOptionsEnglish = (phraseArray: string[], options: Util.Options, phraseIndex: number): string[] => {
  const filteredArray: string[] = phraseArray.filter((word: string): boolean => word !== '');
  return filteredArray;
};

const sentenceOptionsEnglish = (sentenceArray: Util.ConjugatedEnglishArray, options: Util.Options): Util.ConjugatedEnglishArray => {
  return sentenceArray;
};

class EnglishSentence extends React.Component<PropTypes.IEnglishSentenceProps, {}> {
  public render() {
    const { sentence, options } = this.props;
    const phraseArrayComplete = sentenceOptionsEnglish(sentence, options);

    return (
      <Sentence>
          {phraseArrayComplete.map((phraseArray, phraseIndex: number) => {
            switch(phraseArray.type) {
              case CONJUGATION_TYPE_NOUN_ENGLISH:
                const nounPhrase = phraseArray as Util.ConjugatedEnglishNoun;
                const nounPhraseArray = nounPhrase.nounTense.wordArray.concat(nounPhrase.nounPolarity.wordArray).concat(nounPhrase.nounIndefiniteArticle.wordArray).concat(nounPhrase.noun.english.present);
                const nounPhraseArrayComplete = phraseOptionsEnglish(nounPhraseArray, options, phraseIndex);
                // nounTense, nounPolarity, nounIndefiniteArticle, noun

                return (
                  <Phrase key={phraseIndex}>
                    {nounPhraseArrayComplete.map((word: string, nounIndex: number) => (
                      <EnglishWord key={nounIndex}>{wordOptionsEnglish(word, nounPhraseArrayComplete.length, options, nounIndex, phraseArrayComplete.length, phraseIndex)}</EnglishWord>
                    ))}
                  </Phrase>
                );
              
              case CONJUGATION_TYPE_VERB_ENGLISH: 
                const verbPhrase = phraseArray as Util.ConjugatedEnglishVerb;
                const verbPhraseArray = verbPhrase.verbPolarity.wordArray.concat(verbPhrase.verb.english.present);
                const verbPhraseArrayComplete = phraseOptionsEnglish(verbPhraseArray, options, phraseIndex);
                // verbPolarity
                
                return (
                  <Phrase key={phraseIndex}>
                    {verbPhraseArrayComplete.map((word: string, verbIndex: number) => (
                      <EnglishWord key={verbIndex}>{wordOptionsEnglish(word, verbPhraseArrayComplete.length, options, verbIndex, phraseArrayComplete.length, phraseIndex)}</EnglishWord>
                    ))}
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

export default EnglishSentence;
