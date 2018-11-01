import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class Tools extends React.Component {
  public render() {
    return (
      <FlexColumn ml={4} mt={4}>
        <Helmet
          title={ROUTE_TITLE.TOOLS}
          description={ROUTE_DESCRIPTION.TOOLS}
        />
        
      </FlexColumn>
    );
  }
}

export default Tools;
