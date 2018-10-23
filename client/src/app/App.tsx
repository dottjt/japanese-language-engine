import * as React from 'react';

import { AppWrapper } from './atoms/LayoutStyles';

import Navbar from './components/Navbar';
import Main from './components/Main';

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
