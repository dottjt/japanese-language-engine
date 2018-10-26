import * as React from 'react'

import { FlexColumn } from '../../atoms/LayoutStyles';

import SentenceStats from './SentenceStats';
import SentenceEnglish from './SentenceEnglish';
import SentenceJapanese from './SentenceJapanese';

class SentenceModule extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {    
    return (
      <FlexColumn>
        <SentenceStats
          client={this.props.client}
          sentenceDisplayOptions={this.props.sentenceDisplayOptions}
          sentenceStats={this.props.sentenceStats}          
          options={this.props.options}
          exerciseIndex={this.props.exerciseIndex}
        />
        <SentenceEnglish 
          client={this.props.client}
          sentenceStats={this.props.sentenceStats}
          sentence={this.props.englishSentence}
          options={this.props.options}
          exerciseIndex={this.props.exerciseIndex}
        />
        <SentenceJapanese 
          client={this.props.client}
          sentenceStats={this.props.sentenceStats}
          sentence={this.props.japaneseSentence}
          options={this.props.options}
          exerciseIndex={this.props.exerciseIndex}
        />
      </FlexColumn>
    );
  };
};

export default SentenceModule;
