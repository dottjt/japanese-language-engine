import * as React from 'react';
import { ApolloProvider } from "react-apollo";

import client from './graphql/client';
import Main from './page/Main';
import Navbar from './page/Navbar';

import { IAppProps } from 'propTypes';

import './css/app.css';
import './css/options.css';

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
