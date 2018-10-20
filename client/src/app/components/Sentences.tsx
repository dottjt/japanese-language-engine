import * as React from 'react'
import { Flex } from 'rebass';

import Sentence from '../atoms/Sentence';
import SentenceHints from '../atoms/SentenceHints';

class Sentences extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {    
    return (
      <Flex flexDirection='column'>
        <SentenceHints
          options={this.props.options}
        />
        <Sentence
          options={this.props.options}
          sentence={this.props.englishSentence}
        />
        <Sentence
          options={this.props.options}
          sentence={this.props.japaneseSentence}
        />
      </Flex>
    );
  };
};

export default Sentences;
