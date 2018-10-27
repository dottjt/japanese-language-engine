import * as React from 'react'

import { SentenceStat, Stat } from '../../atoms/SentenceStyles';

import {
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../../util/functions';

// import {
//   // VERB_ENGLISH,
//   // VERB_ENGLISH_CONJUGATION,
//   // VERB_JAPANESE,
//   // VERB_JAPANESE_CONJUGATION,
//   // NOUN_ENGLISH,
//   // NOUN_ENGLISH_CONJUGATION,
//   // NOUN_ENGLISH_POLARITY,
//   // NOUN_ENGLISH_INDEFINITE_ARTICLE,
//   // NOUN_JAPANESE,
//   // NOUN_JAPANESE_CONJUGATION,
//   // NOUN_JAPANESE_TOPIC_PARTICLE,
//   // NOUN_JAPANESE_CATEGORY_ENDING,

// } from '../../../util/constants/optionsConstants';

import {
  __TYPENAME_SENTENCE_STATS,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
} from "../../../util/constants/typeNameConstants";



const sentenceStatsObject = (sentenceStatsFields: any): any => ({
  data: { sentenceStats: { __typename: __TYPENAME_SENTENCE_STATS, ...sentenceStatsFields }, __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS }
})

class SentenceStats extends React.Component<PropTypes.ISentenceStatsProps, {}> {
  public render() {
    const { exerciseIndex } = this.props;
    const { politeness, polarity, /* primaryType, variation */ } = this.props.options;
    return (
      this.props.sentenceDisplayOptions.showSentenceStats &&
        <SentenceStat>
          <Stat 
            onMouseEnter={() => this.onPolarityEnter(exerciseIndex)}
            onMouseLeave={this.onPolarityExit}
          >
            {convertPolitenessIntoValue(politeness)}
          </Stat>
          <Stat 
            onMouseEnter={() => this.onPolitenessEnter(exerciseIndex)}
            onMouseLeave={this.onPolitenessExit}
          >
            {convertPolarityIntoValue(polarity)}
          </Stat>
        </SentenceStat>
    );
  }

  private onPolarityEnter = (exerciseIndex: number) => {
    this.props.client.writeData(sentenceStatsObject({ nounPolarityHover: true, exerciseNumber: exerciseIndex }));
  }
  private onPolarityExit = () => {
    this.props.client.writeData(sentenceStatsObject({ nounPolarityHover: false }));
  }
  
  private onPolitenessEnter = (exerciseIndex: number) => {
    this.props.client.writeData(sentenceStatsObject({ nounPolitenessHover: true, exerciseNumber: exerciseIndex }));
  }
  private onPolitenessExit = () => {
    this.props.client.writeData(sentenceStatsObject({ nounPolitenessHover: false }));
  }

};

export default SentenceStats;
