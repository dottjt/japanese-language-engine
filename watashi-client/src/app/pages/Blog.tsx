import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

// import example from '../../blog/example.md';

class Blog extends React.Component {
  public render() {
    return (
      <FlexColumn ml={4} mt={4}>
        <Helmet
          title={ROUTE_TITLE.BLOG}
          description={ROUTE_DESCRIPTION.BLOG}
        />
        
      </FlexColumn>
    );
  }
}

export default Blog;
