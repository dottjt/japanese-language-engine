import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { Text } from '../atoms/TextStyles';
// import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class Page404 extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet title={'404'} description={'404'} />
        <Text>The route doesn't exist!</Text>
      </PageWrapper> 
    );
  };
};

export default Page404;
