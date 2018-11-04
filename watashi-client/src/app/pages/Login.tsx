import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Text } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class Login extends React.Component<PropTypes.ILoginProps, {}> {
  public render() {
    // const { auth } = this.props;
    // auth.login();

    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.LOGIN}
          description={ROUTE_DESCRIPTION.LOGIN}
        />
        <PageHeading>{ROUTE_TITLE.LOGIN}</PageHeading>

        <Text>Redirecting to secure login platform...</Text>

      </PageWrapper> 
    );
  };
};

export default Login;
