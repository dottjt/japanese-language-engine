import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

// NOTE: Maybe the idea is to load all the markdownfiles here (at least the names) and then load the appropiate one based on the route. 

class Article extends React.Component<{}, {}> {

  constructor(props){
    super(props);

    this.state = {
      Component: '',
      page: this.props.match.params.page
    }
  }

  public render() {
    // const { mdx } = this.props;
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

export default Article;
