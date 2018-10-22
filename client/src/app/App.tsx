import * as React from 'react';

import { AppWrapper } from './atoms/Layout';

import Main from './Main';
import Navbar from './Navbar';

class App extends React.Component<PropTypes.IAppProps, {}> {

  public render() {
    return (
      <AppWrapper>
        <Navbar/>
        <Main auth={this.props.auth} route={this.props.route}/>
      </AppWrapper> 
    );
  };
};

export default App;
