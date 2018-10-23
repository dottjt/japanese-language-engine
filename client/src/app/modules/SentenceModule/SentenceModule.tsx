import * as React from 'react'

import { Card, Flex } from 'rebass';
import { FlexColumn } from '../../atoms/Layout';
// import { Button } from '../atoms/Button';
import { Text } from '../../atoms/Text';

import {
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../../util/functions';

import EnglishSentence from './SentenceEnglish';
import JapaneseSentence from './SentenceJapanese';

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
