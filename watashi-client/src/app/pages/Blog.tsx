import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

// import example from '../../blog/example.md';

class Blog extends React.Component {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.BLOG}
          description={ROUTE_DESCRIPTION.BLOG}
        />
        <PageHeading>{ROUTE_TITLE.BLOG}</PageHeading>
        
      </PageWrapper>
    );
  }
}

export default Blog;
