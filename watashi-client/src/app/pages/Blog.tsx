import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

// import example from '../../blog/example.md';

class Blog extends React.Component {
  public render() {
    return (
      <FlexColumn ml={4} mt={5}>
        <Helmet
          title={ROUTE_TITLE.BLOG}
          description={ROUTE_DESCRIPTION.BLOG}
        />
        <Heading is='h2' fontSize={5}>{ROUTE_TITLE.BLOG}</Heading>
        
      </FlexColumn>
    );
  }
}

export default Blog;
