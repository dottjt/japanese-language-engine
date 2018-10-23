import * as React from 'react';

import { AppWrapper } from './atoms/LayoutStyles';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends React.Component<PropTypes.IAppProps, {}> {

  public render() {
    return (
      <AppWrapper>
        <Sidebar/>
        <Main auth={this.props.auth} route={this.props.route}/>
      </AppWrapper> 
    );
  };
};

export default App;
