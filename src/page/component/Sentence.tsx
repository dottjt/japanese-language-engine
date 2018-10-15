import * as React from 'react'

import { 
  ISentenceProps, 
  ISentenceBasicQuestionProps,
} from 'propTypes';

class Sentence extends React.Component<ISentenceProps, {}> {
  public render() {
    if (this.props.sentence.type === 'basic-wa-question') {
      return (
        <div className="sentence">
          <BasicQuestionTemplate
            question={this.props.sentence.question}
            answer={this.props.sentence.answer}
          />
        </div>
      );  
    };

    return (
      <div>No type selected.</div>
    );
  };
};

const BasicQuestionTemplate: React.SFC<ISentenceBasicQuestionProps> = ({ question, answer }) => (
  <div className='basic__question'>
    <div className='basic__question--question'>
      {question}
    </div>
    <div className='basic__question--answer'>
      {answer}
    </div>
  </div>
);

export default Sentence;