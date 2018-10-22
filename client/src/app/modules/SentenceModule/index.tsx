import * as React from 'react'

import { FlexColumn } from '../../atoms/Layout';

import SentenceStats from './SentenceStats';
import SentenceEnglish from './SentenceEnglish';
import SentenceJapanese from './SentenceJapanese';

class SentenceModule extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {    
    return (
      <FlexColumn>
        <SentenceStats
          sentenceDisplayOptions={this.props.sentenceDisplayOptions}
          options={this.props.options}
        />
        <SentenceEnglish 
          sentence={this.props.englishSentence}
          options={this.props.options}
        />
        <SentenceJapanese 
          sentence={this.props.japaneseSentence}
          options={this.props.options}
        />
      </FlexColumn>
    );
  };
};

export default SentenceModule;
