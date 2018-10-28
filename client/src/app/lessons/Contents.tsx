import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';

import Sidebar from '../components/Sidebar';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn width={[1]} ml={4}>
        <Sidebar/>
      </FlexColumn> 
    );
  };
};

export default ContentsPage;
