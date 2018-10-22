import * as React from 'react';

import { FlexColumn } from '../atoms/Layout';
import { Text } from '../atoms/Text';

class Explanation extends React.Component<PropTypes.IExplanationProps, {}> {
  public render() {
    return (
      <FlexColumn>
        {this.props.explanation.map((text, index) => (
          <Text key={index}>
            {text}
          </Text>
        ))}
      </FlexColumn>
    );
  };
};

export default Explanation;
