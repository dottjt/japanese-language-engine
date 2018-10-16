import * as React from 'react'

import Sentence from '../atoms/Sentence';

class Sentences extends React.Component<PropTypes.ISentencesProps, {}> {
  public render() {
    return (
      <div className='sentences'>
        <Sentence
          sentence={this.props.englishSentence}
        />
        <Sentence
          sentence={this.props.japaneseSentence}
        />
      </div>
    );
  };
};

export default Sentences;
