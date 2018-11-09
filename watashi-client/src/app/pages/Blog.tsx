import * as React from 'react';

import { PageWrapper, FlexColumn } from '../atoms/LayoutStyles';
import { PageHeading, SecondaryPageHeading, Text } from '../atoms/TextStyles';
import { InternalLink } from '../atoms/ClickableStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';
import { BLOG_TITLE, BLOG_DESCRIPTION, BLOG_PATH } from '../../util/constants/blogConstants';

import Helmet from '../components/Helmet';

// import example from '../../blog/example.md';

// using MDX. Oh man, there really is a world of content that is required to build this thing. 

class Blog extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet title={ROUTE_TITLE.BLOG} description={ROUTE_DESCRIPTION.BLOG}/>
        
        <PageHeading>{ROUTE_TITLE.BLOG}</PageHeading>
        
        <ArticleLink title={BLOG_TITLE.B01} description={BLOG_DESCRIPTION.B01} path={BLOG_PATH.B01}/>
        <ArticleLink title={BLOG_TITLE.B02} description={BLOG_DESCRIPTION.B02} path={BLOG_PATH.B02}/>
      </PageWrapper>
    );
  }
}

class ArticleLink extends React.Component<{ title: string, description: string, path: string }, {}> {
  public render() {
    const { title, description } = this.props;

    console.log(`${ROUTE_TITLE.BLOG}${title}`)
    return (
      <FlexColumn>
        <SecondaryPageHeading>{title}</SecondaryPageHeading>
        <Text>{description}</Text>
        <InternalLink routeName={title} routeOptions={{reload: true}}>read more...</InternalLink>                
      </FlexColumn>
    );
  }
}

export default Blog;
