import * as React from 'react'
import { Card, Flex, Text } from 'rebass';

class Sentence extends React.Component<PropTypes.ISentenceProps, {}> {
  public render() { 
    if (this.props.options.variation.includes("QUESTION")) {
      return (
        <Card>
          <BasicQuestionTemplate
            question={this.props.sentence.question}
            answer={this.props.sentence.answer}
          />
        </Card>
      );
    };
    
    return (
      <Card>
        <BasicStatementTemplate
          statement={this.props.sentence.statement}
        />
      </Card>
    );
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