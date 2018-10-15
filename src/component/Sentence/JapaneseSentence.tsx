import * as React from 'react'

import { IJapaneseSentenceProps } from 'propTypes';

class JapaneseSentence extends React.Component<IJapaneseSentenceProps, {}> {
  
  public render() {
    if (this.props.sentence.type === 'basic-wa-question') {
      return (
        <div>
          <div>
            <div className='sentence__question'>
              {this.props.sentence.question}
            </div>
            <div className='sentence__answer'>
              {this.props.sentence.answer}
            </div>

          </div>
        </div>
      );  
    };

    return (
      <div>No type selected.</div>
    )
  }
}

export default JapaneseSentence;