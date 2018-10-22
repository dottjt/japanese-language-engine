import * as React from 'react'

import { Card, Flex } from 'rebass';
import { FlexColumn } from '../atoms/Layout';
// import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

import {
  convertPolitenessIntoValue,
  convertPolarityIntoValue,
} from '../../util/functions';

import {
  CONJUGATION_TYPE_NOUN_ENGLISH,
  CONJUGATION_TYPE_NOUN_JAPANESE,
  CONJUGATION_TYPE_VERB_ENGLISH,
  CONJUGATION_TYPE_VERB_JAPANESE,
} from '../../util/constants/optionsConstants';

class SentenceHints extends React.Component<PropTypes.ISentenceHintsProps, {}> {
  public render() {
    const { politeness, polarity, /* primaryType, variation */ } = this.props.options;
    return (
      <Card>
        {this.props.sentenceDisplayOptions.showSentenceHints &&
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

class Sentence extends React.Component<PropTypes.ISentenceProps, {}> {
  public render() {
    return (
      this.props.sentence.map(word => {
        switch(word.type) {
          case CONJUGATION_TYPE_NOUN_ENGLISH: return <Text>{word.type}</Text>
          case CONJUGATION_TYPE_NOUN_JAPANESE: return <Text>{word.type}</Text>
          case CONJUGATION_TYPE_VERB_ENGLISH: return <Text>{word.type}</Text>
          case CONJUGATION_TYPE_VERB_JAPANESE: return <Text>{word.type}</Text>
          default: <Text>hi</Text>
        }
      });
    );
  };
};


class Sentences extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {    
    return (
      <FlexColumn>
        <SentenceHints
          sentenceDisplayOptions={this.props.sentenceDisplayOptions}
          options={this.props.options}
        />
        <Sentence 
          sentence={this.props.englishSentence}
          options={this.props.options}
        />
        <Sentence 
          sentence={this.props.japaneseSentence}
          options={this.props.options}
        />
      </FlexColumn>
    );
  };
};

export default Sentences;
