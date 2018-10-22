import * as React from 'react'

import { Sentence, Phrase, EnglishWord } from '../../atoms/Sentence';

import {
  createError,
  capitalise,
} from '../../../util/functions';

import {
  HAS_QUESTION,

  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../../util/constants/optionsConstants';

const englishSentenceOptions = (englishSentence: Util.ConjugatedEnglishArray, options: Util.Options, index: number) => {
  const sentenceEndingMarker = options.question === HAS_QUESTION ? '?' : '.';
  if (englishSentence.length - 1 === index) {
    return {
      sentenceEnding: sentenceEndingMarker,
    }
  }
  return {
    sentenceEnding: ' ',
  }
};

// const englishSentenceSpace = () => {

// };

class EnglishSentence extends React.Component<PropTypes.IEnglishSentenceProps, {}> {
  public render() {
    return (
      <Sentence>
        {this.props.sentence.map((element, index) => {
          const nounEnglishElement = element as Util.ConjugatedEnglishNoun;
          const verbEnglishElement = element as Util.ConjugatedEnglishVerb;
          
          const { sentenceEnding } = englishSentenceOptions(this.props.sentence, this.props.options, index);

          switch(element.type) {
            case CONJUGATION_TYPE_NOUN_ENGLISH:
              return (
                <Phrase key={index}>
                  <EnglishWord>{nounEnglishElement.nounTense}</EnglishWord> 
                  <EnglishWord>{nounEnglishElement.nounPolarity}</EnglishWord>
                  <EnglishWord>{nounEnglishElement.nounIndefiniteArticle}</EnglishWord>
                  <EnglishWord>{nounEnglishElement.noun.english.present}</EnglishWord>
                  <EnglishWord>{sentenceEnding}</EnglishWord>
                </Phrase>
              );
            case CONJUGATION_TYPE_VERB_ENGLISH: 
              return (
                <Phrase key={index}>
                  <EnglishWord>{capitalise(verbEnglishElement.verbPolarity)}</EnglishWord>
                  <EnglishWord>{verbEnglishElement.verb.english.present}</EnglishWord>
                </Phrase>
              );
          }
          throw new Error(createError('SentenceModule.tsx', 'EnglishSentence', `${element.type} does not exist.`));
        })
        }
      </Sentence>
    );
  };
};

export default EnglishSentence;
