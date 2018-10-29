import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Text } from '../atoms/TextStyles';

class Explanation extends React.Component<PropTypes.IExplanationProps, {}> {
  public render() {
    const { explanation } = this.props;
    return (
      <FlexColumn>
        {explanation.map((text: string, index: number): any => (
          <Text key={index}>
            {text}
          </Text>
        ))}
      </FlexColumn>
    );
  };
};

export default Explanation;
