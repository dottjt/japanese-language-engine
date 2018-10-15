import * as React from 'react';
import { ApolloProvider } from "react-apollo";

import client from '../graphql/client';
import Main from './Main';
import Navbar from './Navbar';

import { IAppProps } from 'propTypes';

import './styles/reset.scss';
import './styles/app.scss';
import './styles/common.scss';
import './styles/lessons.scss';

class App extends React.PureComponent<IAppProps, {}> {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar/>
          <Main route={this.props.route}/>
        </div> 
      </ApolloProvider>
    );
  };
};

export default App;
