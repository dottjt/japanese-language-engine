import * as React from 'react'
import { Card, Flex, Text } from 'rebass';

import {
  TOPIC_PREDICATE,
} from '../../util/constants/constants';

class Sentence extends React.Component<PropTypes.ISentenceProps, {}> {
  public render() {
    switch(this.props.sentence.type) {
      case(TOPIC_PREDICATE):
        return (
          <Card>
            <BasicStatementTemplate
              statement={this.props.sentence.statement}
            />
          </Card>
        );

      case(TOPIC_PREDICATE):
        return (
          <Card>
            <BasicQuestionTemplate
              question={this.props.sentence.question}
              answer={this.props.sentence.answer}
            />
          </Card>
        );
        
      default: 
        return (
          <Card>No type selected.</Card>
        );
    }
  };
};

const BasicStatementTemplate: React.SFC<PropTypes.ISentenceBasicStatementProps> = ({ statement }) => (
  <Flex>
    {statement}
  </Flex>
);

const BasicQuestionTemplate: React.SFC<PropTypes.ISentenceBasicQuestionProps> = ({ question, answer }) => (
  <Flex>
    <Text mr={3}>
      {question}
    </Text>
    <Text mr={3}>
      {answer}
    </Text>
  </Flex>
);

export default Sentence;