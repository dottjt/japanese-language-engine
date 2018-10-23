import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Text } from '../atoms/TextStyles';

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
