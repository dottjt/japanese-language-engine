import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
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
      <FlexColumn>
        <Helmet
          title={ROUTE_TITLE.LOGIN}
          description={ROUTE_DESCRIPTION.LOGIN}
        />

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
      </FlexColumn> 
    );
  };
};

export default Login;
