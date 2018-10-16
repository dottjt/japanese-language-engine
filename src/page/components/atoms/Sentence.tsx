import * as React from 'react'

import { 
  QUESTION_BASIC,
  STATEMENT_BASIC,
} from '../../../util/constants';

class Sentence extends React.Component<PropTypes.ISentenceProps, {}> {
  public render() {
    switch(this.props.sentence.type) {
      case(STATEMENT_BASIC):
        return (
          <div className='sentence'>
            <BasicStatementTemplate
              statement={this.props.sentence.statement}
            />
          </div>
        );

      case(QUESTION_BASIC):
        return (
          <div className='sentence'>
            <BasicQuestionTemplate
              question={this.props.sentence.question}
              answer={this.props.sentence.answer}
            />
          </div>
        );
        
      default: 
        return (
          <div>No type selected.</div>
        );
    }
  };
};

const BasicStatementTemplate: React.SFC<PropTypes.ISentenceBasicStatementProps> = ({ statement }) => (
  <div className='basic__statement'>
    <div className='basic__question--question'>
      {statement}
    </div>
  </div>
);

const BasicQuestionTemplate: React.SFC<PropTypes.ISentenceBasicQuestionProps> = ({ question, answer }) => (
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