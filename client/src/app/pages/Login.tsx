import * as React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

const Button = styled.button``;

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
      <Flex>
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
      </Flex> 
    );
  };
};

export default Login;


