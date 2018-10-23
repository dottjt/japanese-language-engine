import * as React from 'react'

import { FlexColumn } from '../../atoms/LayoutStyles';

import SentenceStats from './SentenceStats';
import EnglishSentence from './SentenceEnglish';
import JapaneseSentence from './SentenceJapanese';

class SentenceModule extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {    
    return (
      <FlexColumn>
        <SentenceStats
          sentenceDisplayOptions={this.props.sentenceDisplayOptions}
          options={this.props.options}
        />
        <EnglishSentence 
          sentence={this.props.englishSentence}
          options={this.props.options}
        />
        <JapaneseSentence 
          sentence={this.props.japaneseSentence}
          options={this.props.options}
        />
      </FlexColumn>
    );
  };
};

export default SentenceModule;
