import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
// import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class Page404 extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet title={'404'} description={'404'} />
      </PageWrapper> 
    );
  };
};

export default Page404;
