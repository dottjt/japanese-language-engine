import * as React from 'react';

import { Flex } from './atoms/LayoutStyles';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends React.Component<PropTypes.IAppProps, {}> {

  public render() {
    return (
      <Flex>
        <Sidebar/>
        <Main 
          auth={this.props.auth} 
          route={this.props.route} 
        />
      </Flex> 
    );
  };
};

export default App;
