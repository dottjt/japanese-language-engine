import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';

import Sidebar from '../components/Sidebar';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Sidebar/>
      </PageWrapper> 
    );
  };
};

export default ContentsPage;
