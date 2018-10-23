import * as React from 'react'

import { Sentence, Phrase, JapaneseWord } from '../../atoms/SentenceStyles';

import {
  createError,
} from '../../../util/functions';

import {
  HAS_QUESTION,
  POLITENESS_CASUAL,
  CONJUGATION_TYPE_NOUN_JAPANESE,
  CONJUGATION_TYPE_VERB_JAPANESE,
} from '../../../util/constants/optionsConstants';


const japaneseSentenceOptions = (japaneseSentence: Util.ConjugatedJapaneseArray, options: Util.Options, index: number) => {
  const japaneseQuestionEnding = options.politeness !== POLITENESS_CASUAL ? 'か？' : '？';
  
  const sentenceEndingMarker = options.question === HAS_QUESTION ? japaneseQuestionEnding : '。';
  if (japaneseSentence.length - 1 === index) {
    return { sentenceEnding: sentenceEndingMarker, }
  }
  return { sentenceEnding: '', }
};

class JapaneseSentence extends React.Component<PropTypes.IJapaneseSentenceProps, {}> {
  public render() {
    return (
      <Sentence>
        {this.props.sentence.map((element, index) => {
          const nounJapaneseElement = element as Util.ConjugatedJapaneseNoun;
          const verbJapaneseElement = element as Util.ConjugatedJapaneseVerb;
          const { sentenceEnding } = japaneseSentenceOptions(this.props.sentence, this.props.options, index);

          switch(element.type) {
            case CONJUGATION_TYPE_NOUN_JAPANESE: 
              return (
                <Phrase key={index}>
                  <JapaneseWord>{nounJapaneseElement.noun.japanese.kanji}</JapaneseWord>
                  <JapaneseWord>{nounJapaneseElement.nounCategoryEnding}</JapaneseWord>
                  <JapaneseWord>{nounJapaneseElement.nounEnding}</JapaneseWord>
                  <JapaneseWord>{nounJapaneseElement.nounTopicParticle}</JapaneseWord>
                  <JapaneseWord>{sentenceEnding}</JapaneseWord>
                </Phrase>
              );
            case CONJUGATION_TYPE_VERB_JAPANESE: 
              return (
                <Phrase key={index}>
                  <JapaneseWord>{verbJapaneseElement.conjugatedVerb}</JapaneseWord>
                  <JapaneseWord>{sentenceEnding}</JapaneseWord>
                </Phrase>
              );
          }
          throw new Error(createError('SentenceModule.tsx', 'JapaneseSentence', `${element.type} does not exist.`));
        })
        }
      </Sentence>
    );
  };
};

export default JapaneseSentence;