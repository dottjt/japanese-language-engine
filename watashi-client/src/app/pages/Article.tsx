import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

// import example from '../../blog/example.md';

// NOTE: Maybe the idea is to load all the markdownfiles here (at least the names) and then load the appropiate one based on the route. 

class Article extends React.Component<{ path: string }, { Component: any, path: string }> {

  constructor(props){
    super(props);

    this.state = {
      Component: '',
      path: this.props.path
    }
  }

  async addComponent(name){
    import(`../../blog${name}.mdx`)
      .then(component =>
        this.setState({
          Component: component.default
        })
      )
      .catch(() => {
        this.setState({
          Component: ''
        })
      });
  }

  async componentDidMount() {
    await this.addComponent(this.state.path);
  }

  async componentDidUpdate(prevProps, prevState) {
    if(prevState.path !== this.state.path) {
       await this.addComponent(this.state.path);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.path !== prevState.path) {
      return {
        path: nextProps.path
      }
    }

    else return null;
  }

  public render() {
    const { Component } = this.state;

    // const { mdx } = this.props;
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.BLOG}
          description={ROUTE_DESCRIPTION.BLOG}
        />
        <PageHeading>{ROUTE_TITLE.BLOG}</PageHeading>
        
        <div className="content">
            { Component ? <Component /> : null }
        </div>

        
      </PageWrapper>
    );
  }


}

export default Article;
