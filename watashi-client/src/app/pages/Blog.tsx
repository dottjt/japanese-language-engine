import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

// import example from '../../blog/example.md';

// using MDX. Oh man, there really is a world of content that is required to build this thing. 

class Blog extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.BLOG}
          description={ROUTE_DESCRIPTION.BLOG}
        />
        <PageHeading>{ROUTE_TITLE.BLOG}</PageHeading>
        
        <ArticleLink title='How to use Watashi Engine' description='How to use Watashi Engine'/>
        <ArticleLink title='' description=''/>

      </PageWrapper>
    );
  }
}

class ArticleLink extends React.Component<{ title: string, description: string }, {}> {
  public render() {
    // const { title, description } = this.props;
    return (
      <div></div>
    );
  }
}

export default Blog;
