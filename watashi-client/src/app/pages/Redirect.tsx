import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { Text } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class Redirect extends React.Component<{ client: any, auth: any }, {}> {
  public render() {
    const { auth } = this.props;

    auth.handleAuthentication();

    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.REDIRECT}
          description={ROUTE_DESCRIPTION.REDIRECT}
        />
        <Text>Loading</Text>
      </PageWrapper>
    );
  }
}

export default Redirect;
