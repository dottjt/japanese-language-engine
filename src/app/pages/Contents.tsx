import * as React from 'react';
import { Flex } from 'rebass';
import Navbar from '../Navbar';

class Contents extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Flex>
        <Navbar/>
      </Flex> 
    );
  };
};

export default Contents;
