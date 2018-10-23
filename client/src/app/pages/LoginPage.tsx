import * as React from 'react';

import { PageWrapper } from '../atoms/Layout';
import { Button } from '../atoms/Clickables';

class LoginPage extends React.Component<PropTypes.ILoginProps, {}> {

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
        {!isAuthenticated() && (
          <Button
            className="btn-margin"
            onClick={this.login}
          >
            Log In
          </Button>
        )}
        {
          isAuthenticated() && (
              <Button
                className="btn-margin"
                onClick={this.logout}
              >
                Log Out
              </Button>
            )
        }
      </PageWrapper> 
    );
  };
};

export default LoginPage;
