import * as React from 'react';

import { Text } from '../atoms/TextStyles';

class Explanation extends React.Component<PropTypes.IExplanationProps, {}> {
  public render() {
    const { explanation } = this.props;
    return (
      <React.Fragment>
        {explanation.map((text: string, index: number): any => (
          <Text key={index}>
            {text}
          </Text>
        ))}
      </React.Fragment>
    );
  };
};

export default Explanation;
