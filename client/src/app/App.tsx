import * as React from 'react';

import { Flex } from './atoms/LayoutStyles';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends React.Component<PropTypes.IAppProps, {}> {

  public render() {
    const { auth, route } = this.props;
    return (
      <Flex>
        <Sidebar/>
        <Main 
          auth={auth} 
          route={route} 
        />
      </Flex> 
    );
  };
};

export default App;
