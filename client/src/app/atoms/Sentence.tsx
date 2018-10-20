import * as React from 'react'
import { Card, Flex } from 'rebass';

class Sentence extends React.Component<PropTypes.ISentenceProps, {}> {
  public render() { 
    return (
      <Card>
        <Flex>
          {this.props.sentence}
        </Flex>
      </Card>
    );
  };
};

// const BasicStatementTemplate: React.SFC<PropTypes.ISentenceBasicStatementProps> = ({ statement }) => (
//   <Flex>
//     {statement}
//   </Flex>
// );

// const BasicQuestionTemplate: React.SFC<PropTypes.ISentenceBasicQuestionProps> = ({ question, answer }) => (
//   <Flex>
//     <Text mr={3}>
//       {question}
//     </Text>
//     <Text mr={3}>
//       {answer}
//     </Text>
//   </Flex>
// );

export default Sentence;