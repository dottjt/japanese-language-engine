import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Text } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class Callback extends React.Component {
  public render() {
    return (
      <FlexColumn>
        <Helmet
          title={ROUTE_TITLE.CALLBACK}
          description={ROUTE_DESCRIPTION.CALLBACK}
        />
        <Text>Loading</Text>
      </FlexColumn>
    );
  }
}

export default Callback;