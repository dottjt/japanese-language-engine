import * as React from 'react';
import { Flex } from 'rebass';

import Main from './Main';
import Navbar from './Navbar';

class App extends React.Component<PropTypes.IAppProps, {}> {

  public render() {
    return (
      <Flex>
        <Navbar/>
        <Main auth={this.props.auth} route={this.props.route}/>
      </Flex> 
    );
  };
};

export default App;
