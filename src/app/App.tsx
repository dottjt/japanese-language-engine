import * as React from 'react';
import { Flex } from 'rebass';

import Main from './Main';
import Navbar from './Navbar';

class App extends React.PureComponent<PropTypes.IAppProps, {}> {
  public render() {
    return (
      <Flex>
        <Navbar/>
        <Main route={this.props.route}/>
      </Flex> 
    );
  };
};

export default App;
