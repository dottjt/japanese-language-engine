import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { createError } from '../../util/functions';
import { BLOG_TITLE, BLOG_PATH, BLOG_DESCRIPTION } from '../../util/constants/blogConstants';
import { ROUTE_PATH } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';
import B01 from '../../blog/01-the-perfect-watashi-engine-workout.mdx';
import B02 from '../../blog/02-what-is-the-instantaneous-composition-method.mdx';
import B03 from '../../blog/03-the-strengths-and-weaknesses-of-watashi-engine.mdx';

class Article extends React.Component<{ path: string }, { Component: any }> {

  public render() {
    // console.log(ROUTE_PATH.BLOG + BLOG_PATH.B02)
    const { title, description, Component } = this.getArticleParameters(this.props.path);

    return (
      <PageWrapper>
        <Helmet
          title={title}
          description={description}
        />
        <PageHeading>{title}</PageHeading>
        
        <div className="content">
          <Component/>
        </div>
        
      </PageWrapper>
    );
  }

  private getArticleParameters = (path: string): { title: string, description: string, Component: any } => {
    switch(path) {
      case `${ROUTE_PATH.BLOG}${BLOG_PATH.B01}`: return { title: BLOG_TITLE.B01, description: BLOG_DESCRIPTION.B01, Component: B01 }
      case `${ROUTE_PATH.BLOG}${BLOG_PATH.B02}`: return { title: BLOG_TITLE.B02, description: BLOG_DESCRIPTION.B02, Component: B02 }
      case `${ROUTE_PATH.BLOG}${BLOG_PATH.B03}`: return { title: BLOG_TITLE.B03, description: BLOG_DESCRIPTION.B03, Component: B03 }
    }
    throw new Error(createError('Article.tsx', 'getArticleParameters', `${path} not recognised.`));
  }

}

export default Article;
