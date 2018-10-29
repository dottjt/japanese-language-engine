import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading, Text } from '../atoms/TextStyles';

class WelcomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <FlexColumn ml={4} mt={4}>
        <Heading is='h2' fontSize={3}>Welcome</Heading>

        <Text>Welcome to the Watashi Engine Course!</Text>
        <Text>Thank you for giving it a try and I hope you find value within the grammar exercises I've created.</Text>
      </FlexColumn> 
    );
  };
};

export default WelcomePage;
