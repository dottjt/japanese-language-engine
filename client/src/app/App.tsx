import * as React from 'react';

import {
  getExercisesApollo,
} from '../util/functions';

import { Flex } from './atoms/LayoutStyles';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends React.Component<PropTypes.IAppProps, {}> {

  public render() {
    const { auth, client, route } = this.props;
    getExercisesApollo(client, route.path, 10);

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
