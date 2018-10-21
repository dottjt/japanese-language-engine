import * as React from 'react';
import { Flex, Text } from 'rebass';

class Explanation extends React.Component<PropTypes.IExplanationProps, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>
        {this.props.explanation.map((text, index) => (
          <Text key={index}>{text}</Text>
        ))}
      </Flex>
    );
  };
};

export default Explanation;
