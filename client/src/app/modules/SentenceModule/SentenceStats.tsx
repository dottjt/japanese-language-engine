import * as React from 'react'

import { SentenceStat, Stat } from '../../atoms/SentenceStyles';

import {
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../../util/functions';

class SentenceStats extends React.Component<PropTypes.ISentenceStatsProps, {}> {
  public render() {
    const { politeness, polarity, /* primaryType, variation */ } = this.props.options;
    return (
      this.props.sentenceDisplayOptions.showSentenceStats &&
        <SentenceStat>
          <Stat>
            {convertPolitenessIntoValue(politeness)}
          </Stat>
          <Stat>
            {convertPolarityIntoValue(polarity)}
          </Stat>
        </SentenceStat>
    );
  }
};

export default SentenceStats;
