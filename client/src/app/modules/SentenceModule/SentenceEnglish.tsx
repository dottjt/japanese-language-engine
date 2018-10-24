import * as React from 'react'

import { Sentence, Phrase, EnglishWord } from '../../atoms/SentenceStyles';

import {
  createError,
  capitalise,
  beginningOfPhrase,
} from '../../../util/functions';

import {
  HAS_QUESTION,

  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../../util/constants/optionsConstants';

const nounPresentOptions = (word: string, englishSentence: Util.ConjugatedEnglishArray, options: Util.Options, index: number): string => {
  return beginningOfPhrase(englishSentence.length, index) ? ( 
      options.question === HAS_QUESTION ? `${word}?` : `${word}.`
    ) : ( 
      `${word} `
    );
};

const nounIndefiniteArticleOptions = (word: string, englishSentence: Util.ConjugatedEnglishArray, options: Util.Options, index: number): string => {
  return beginningOfPhrase(englishSentence.length, index) ? capitalise(word) + ' ' : word + ' ';
};

const nounPolarityOptions = (word: string, englishSentence: Util.ConjugatedEnglishArray, options: Util.Options, index: number): string => {
  return word + ' ';
};

const nounTenseOptions = (word: string, englishSentence: Util.ConjugatedEnglishArray, options: Util.Options, index: number): string => {
  return word + ' ';  
};

const verbPolarityOptions = (word: string, englishSentence: Util.ConjugatedEnglishArray, options: Util.Options, index: number): string => {
  return beginningOfPhrase(englishSentence.length, index) ? capitalise(word) + ' ' : word + ' ';
};


class EnglishSentence extends React.Component<PropTypes.IEnglishSentenceProps, {}> {
  public render() {
    const { sentence, options } = this.props;
    return (
      <Sentence>
        <Phrase key={index}>
          {sentence.map((element, index) => {
            const nounEnglishElement = element as Util.ConjugatedEnglishNoun;
            const verbEnglishElement = element as Util.ConjugatedEnglishVerb;
            
            // const { sentenceEnding } = nounPresentOptions(this.props.sentence, this.props.options, index);
            
            switch(element.type) {
              case CONJUGATION_TYPE_NOUN_ENGLISH:
                return (
                  <EnglishWord>{nounTenseOptions(nounEnglishElement.nounTense, sentence, options, index)}</EnglishWord> 
                  // <EnglishWord>{nounPolarityOptions(nounEnglishElement.nounPolarity, sentence, options, index)}</EnglishWord>
                  // <EnglishWord>{nounIndefiniteArticleOptions(nounEnglishElement.nounIndefiniteArticle, sentence, options, index)}</EnglishWord>
                  // <EnglishWord>{nounPresentOptions(nounEnglishElement.noun.english.present, sentence, options, index)}</EnglishWord>
                );
              case CONJUGATION_TYPE_VERB_ENGLISH: 
                return (
                  <Phrase key={index}>
                    <EnglishWord>{verbPolarityOptions(verbEnglishElement.verbPolarity, sentence, options, index)}</EnglishWord>
                    {/* <EnglishWord>{nounPresentOptions(verbEnglishElement.verb.english.present, sentence, options, index)}</EnglishWord> */}
                  </Phrase>
                );
            }
            throw new Error(createError('SentenceModule.tsx', 'EnglishSentence', `${element.type} does not exist.`));
          })
          }
        </Phrase>
      </Sentence>
    );
  };
};

export default EnglishSentence;
