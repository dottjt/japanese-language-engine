import * as React from 'react'

import { Sentence, Phrase, EnglishWord } from '../../atoms/SentenceStyles';

import {
  createError,
  capitalise,
  startOfSentence,
  endOfSentence,
} from '../../../util/functions';

import {
  HAS_QUESTION,

  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../../util/constants/optionsConstants';

const wordOptions = (word: string, englishSentence: Util.ConjugatedEnglishArray, options: Util.Options, index: number): string => {
  if (startOfSentence(englishSentence.length, index)) {
    return capitalise(word);
  }
  if (endOfSentence(englishSentence.length, index)) {
    return options.question === HAS_QUESTION ? `${word}?` : `${word}.`
  };
  return word;
};

class EnglishSentence extends React.Component<PropTypes.IEnglishSentenceProps, {}> {
  public render() {
    const { sentence, options } = this.props;
    return (
      <Sentence>
          {sentence.map((conjugatedPhrase, index: number) => {
            
            switch(conjugatedPhrase.type) {
              case CONJUGATION_TYPE_NOUN_ENGLISH:
                const nounPhrase = conjugatedPhrase as Util.ConjugatedEnglishNoun;
                const nounArray = nounPhrase.nounTense.wordArray.concat(nounPhrase.nounPolarity.wordArray).concat(nounPhrase.nounIndefiniteArticle.wordArray).concat(nounPhrase.noun.english.present);
                return (
                  <Phrase key={index}>
                    {nounArray.map((word: string, nounIndex: number) => (
                      <EnglishWord key={nounIndex}>{wordOptions(word, sentence, options, nounIndex)}</EnglishWord>
                    ))}
                  </Phrase>
                );
              
              case CONJUGATION_TYPE_VERB_ENGLISH: 
                const verbPhrase = conjugatedPhrase as Util.ConjugatedEnglishVerb;
                const verbArray = verbPhrase.verbPolarity.wordArray.concat(verbPhrase.verb.english.present);
                return (
                  <Phrase key={index}>
                    {verbArray.map((word: string, verbIndex: number) => (
                      <EnglishWord key={verbIndex}>{wordOptions(word, sentence, options, verbIndex)}</EnglishWord>
                    ))};
                  </Phrase>
                );
            }
            throw new Error(createError('SentenceModule.tsx', 'EnglishSentence', `${conjugatedPhrase.type} does not exist.`));
          })
          }
      </Sentence>
    );
  };
};

export default EnglishSentence;
