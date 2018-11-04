import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Text } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class Logout extends React.Component<PropTypes.ILoginProps, {}> {
  public render() {
    const { auth } = this.props;
    auth.logout();

    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.LOGOUT}
          description={ROUTE_DESCRIPTION.LOGOUT}
        />
        <PageHeading>{ROUTE_TITLE.LOGIN}</PageHeading>

        <Text>Logging out of application...</Text>

      </PageWrapper> 
    );
  };
};

export default Logout;
