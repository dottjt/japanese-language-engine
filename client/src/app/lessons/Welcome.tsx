import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';

class WelcomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn width={[1]} ml={4}>
        <p>helli</p>
      </FlexColumn> 
    );
  };
};

export default WelcomePage;
