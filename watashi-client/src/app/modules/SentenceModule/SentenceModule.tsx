import * as React from 'react'

import { FlexColumn } from '../../atoms/LayoutStyles';
import { ToggleSentenceOrder } from '../../atoms/CustomStyles';

import SentenceStats from './SentenceStats';
import SentenceEnglish from './SentenceEnglish';
import SentenceJapanese from './SentenceJapanese';

const toggleSentenceOrder = (value: boolean): string => value ? 'column-reverse' : 'column';

class SentenceModule extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {
    const { client, sentenceDisplayOptions, sentenceStats, options, exerciseIndex, englishSentence, japaneseSentence } = this.props;

    return (
      <FlexColumn mb={2}>
        <SentenceStats
          client={client}
          sentenceDisplayOptions={sentenceDisplayOptions}
          sentenceStats={sentenceStats}          
          options={options}
          exerciseIndex={exerciseIndex}
        />
        <ToggleSentenceOrder sentenceorder={toggleSentenceOrder(sentenceDisplayOptions.toggleSentenceOrder)}>
          <SentenceEnglish 
            client={client}
            sentenceDisplayOptions={sentenceDisplayOptions}
            sentenceStats={sentenceStats}
            sentence={englishSentence}
            options={options}
            exerciseIndex={exerciseIndex}
          />
          <SentenceJapanese 
            client={client}
            sentenceDisplayOptions={sentenceDisplayOptions}
            sentenceStats={sentenceStats}
            sentence={japaneseSentence}
            options={options}
            exerciseIndex={exerciseIndex}
          />
        </ToggleSentenceOrder>
      </FlexColumn>
    );
  };
};

export default SentenceModule;
