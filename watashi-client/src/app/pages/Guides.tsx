import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

// import example from '../../blog/example.md';

// using MDX. Oh man, there really is a world of content that is required to build this thing. 

class Guides extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.BLOG}
          description={ROUTE_DESCRIPTION.BLOG}
        />
        <PageHeading>{ROUTE_TITLE.BLOG}</PageHeading>
        
        <Guide title='How to use Watashi Engine' description='How to use Watashi Engine'/>
        <Guide title='' description=''/>

      </PageWrapper>
    );
  }
}

class Guide extends React.Component<{ title: string, description: string }, {}> {
  public render() {
    const { title, description } = this.props;
    return (
      <PageWrapper>
        <Helmet
          title={title}
          description={description}
        />
        <PageHeading>{title}</PageHeading>
        
      </PageWrapper>
    );
  }
}

export default Guides;
