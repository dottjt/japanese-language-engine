import * as React from 'react'

import { Sentence, Phrase, EnglishWord } from '../../atoms/SentenceStyles';

import {
  createError,
  // capitalise,
  // startOfSentence,
  endOfSentence,
} from '../../../util/functions';

import {
  HAS_QUESTION,

  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../../util/constants/optionsConstants';

const wordOptionsEnglish = (word: string, englishSentence: Util.ConjugatedEnglishArray, options: Util.Options, index: number): string => {
  if (endOfSentence(englishSentence.length, index)) {
    return options.question === HAS_QUESTION ? `${word}?` : `${word}.`
  };
  return word;
};

const phraseOptionsEnglish = (phraseArray: string[], options: Util.Options, index: number): string[] => {
  // phraseArray[0] = capitalise(phraseArray[0]);

  // if (endOfSentence(phraseArray.length, index)) {
  //   if (options.question === HAS_QUESTION) {
  //     phraseArray[phraseArray.length - 1] = `${phraseArray[phraseArray.length -1]}?`
  //   } else {
  //     phraseArray[phraseArray.length - 1] = `${phraseArray[phraseArray.length -1]}.`
  //   }
  // };

  return phraseArray;
};

const sentenceOptionsEnglish = (sentenceArray: Util.ConjugatedEnglishArray, options: Util.Options): Util.ConjugatedEnglishArray => {
  return sentenceArray;
  // sentenceArray[0] = capitalise(sentenceArray[0]);

  // if (endOfSentence(sentenceArray.length, index)) {
  //   if (options.question === HAS_QUESTION) {
  //     sentenceArray[sentenceArray.length - 1] = `${sentenceArray[sentenceArray.length -1]}?`
  //   } else {
  //     sentenceArray[sentenceArray.length - 1] = `${sentenceArray[sentenceArray.length -1]}.`
  //   }
  // };

  // return sentenceArray;
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
                
                return (
                  <Phrase key={phraseIndex}>
                    {nounPhraseArrayComplete.map((word: string, nounIndex: number) => (
                      <EnglishWord key={nounIndex}>{wordOptionsEnglish(word, sentence, options, nounIndex)}</EnglishWord>
                    ))}
                  </Phrase>
                );
              
              case CONJUGATION_TYPE_VERB_ENGLISH: 
                const verbPhrase = phraseArray as Util.ConjugatedEnglishVerb;
                const verbArray = verbPhrase.verbPolarity.wordArray.concat(verbPhrase.verb.english.present);
                const verbArrayComplete = phraseOptionsEnglish(verbArray, options, phraseIndex);

                return (
                  <Phrase key={phraseIndex}>
                    {verbArrayComplete.map((word: string, verbIndex: number) => (
                      <EnglishWord key={verbIndex}>{wordOptionsEnglish(word, sentence, options, verbIndex)}</EnglishWord>
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

export default EnglishSentence;
