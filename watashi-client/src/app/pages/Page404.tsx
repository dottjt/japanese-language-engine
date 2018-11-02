import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
// import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class Page404 extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn>
        <Helmet
          title={'404'}
          description={'404'}
        />
      </FlexColumn> 
    );
  };
};

export default Page404;