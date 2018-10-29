import * as React from 'react'

import { FlexColumn } from '../../atoms/LayoutStyles';

import SentenceStats from './SentenceStats';
import SentenceEnglish from './SentenceEnglish';
import SentenceJapanese from './SentenceJapanese';

class SentenceModule extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {    
    const { client, sentenceDisplayOptions, sentenceStats, options, exerciseIndex, englishSentence, japaneseSentence } = this.props;

    return (
      <FlexColumn>
        <SentenceStats
          client={client}
          sentenceDisplayOptions={sentenceDisplayOptions}
          sentenceStats={sentenceStats}          
          options={options}
          exerciseIndex={exerciseIndex}
        />
        {/* <FlexColumn> */}
          <SentenceEnglish 
            client={client}
            sentenceStats={sentenceStats}
            sentence={englishSentence}
            options={options}
            exerciseIndex={exerciseIndex}
          />
          <SentenceJapanese 
            client={client}
            sentenceStats={sentenceStats}
            sentence={japaneseSentence}
            options={options}
            exerciseIndex={exerciseIndex}
          />
        {/* </FlexColumn> */}
      </FlexColumn>
    );
  };
};

export default SentenceModule;
