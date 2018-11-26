import * as React from 'react';

import { Text, SecondaryPageHeading } from '../atoms/TextStyles';

class Explanation extends React.Component<PropTypes.IExplanationProps, {}> {
  public render() {
    // In future users will basically post their own comments on what helps them. 

    const { explanation } = this.props;
    return (
      <React.Fragment>
        {explanation.map((text: string, index: number): any => {
          if (text[0] === '#') {
            return (
              <SecondaryPageHeading key={index}>
                {text.slice(1)}
              </SecondaryPageHeading>
            )
          }

          return (
            <Text key={index}>
              {text}
            </Text>
          )
        }
        )}
      </React.Fragment>
    );
  };
};

export default Explanation;
