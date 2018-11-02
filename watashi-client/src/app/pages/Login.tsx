import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';
import { Button } from '../atoms/ClickableStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class Login extends React.Component<PropTypes.ILoginProps, {}> {

  public login() {
    this.props.auth.login();
  }

  public logout() {
    this.props.auth.logout();
  }

  public render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.LOGIN}
          description={ROUTE_DESCRIPTION.LOGIN}
        />
        <PageHeading>{ROUTE_TITLE.LOGIN}</PageHeading>


        {!isAuthenticated() && (
          <Button
            className="btn-margin"
            onClick={this.login}
          >
            Log In
          </Button>
        )}
        {isAuthenticated() && (
          <Button
            className="btn-margin"
            onClick={this.logout}
          >
            Log Out
          </Button>
        )}
      </PageWrapper> 
    );
  };
};

export default Login;
