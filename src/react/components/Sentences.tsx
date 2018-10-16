import * as React from 'react'
import { Flex } from 'rebass';

import Sentence from '../atoms/Sentence';

class Sentences extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>
        <Sentence
          sentence={this.props.englishSentence}
        />
        <Sentence
          sentence={this.props.japaneseSentence}
        />
      </Flex>
    );
  };
};

export default Sentences;
