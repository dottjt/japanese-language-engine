import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class Tools extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.TOOLS}
          description={ROUTE_DESCRIPTION.TOOLS}
        />
        <PageHeading>{ROUTE_TITLE.BLOG}</PageHeading>
        
      </PageWrapper>
    );
  }
}

export default Tools;
