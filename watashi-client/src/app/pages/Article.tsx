import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class Article extends React.Component<{}, {}> {
  public render() {
    // const { mdx } = this.props;
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.BLOG}
          description={ROUTE_DESCRIPTION.BLOG}
        />
        <PageHeading>{ROUTE_TITLE.BLOG}</PageHeading>
        
        <Article title='How to use Watashi Engine' description='How to use Watashi Engine'/>
        <Article title='' description=''/>

      </PageWrapper>
    );
  }
}

export default Article;
