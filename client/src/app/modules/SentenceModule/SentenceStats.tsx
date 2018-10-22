import * as React from 'react'

import { Card } from 'rebass';
import { Flex } from '../../atoms/Layout';
import { Text } from '../../atoms/Text';

import {
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../../util/functions';

class SentenceStats extends React.Component<PropTypes.ISentenceStatsProps, {}> {
  public render() {
    const { politeness, polarity, /* primaryType, variation */ } = this.props.options;
    return (
      <Card>
        {this.props.sentenceDisplayOptions.showSentenceStats &&
          <Flex>
            <Text>
              {convertPolitenessIntoValue(politeness)}
            </Text>
            <Text>
              {convertPolarityIntoValue(polarity)}
            </Text>
          </Flex>
        }
      </Card>    
    );
  }
};

export default SentenceStats;
