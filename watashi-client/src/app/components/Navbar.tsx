import * as React from 'react';
// import styled from 'styled-components';

import { Flex } from '../atoms/LayoutStyles';
// import { Heading } from '../atoms/TextStyles';
import { Link } from '../atoms/ClickableStyles';

import { ROUTE_TITLE } from '../../util/constants/routeConstants';

class Navbar extends React.Component<{ auth: any, user: any }, {}> {
  public render() {
    const { auth } = this.props;
    const isAuthenticated = auth.isAuthenticated();
    
    return (
      <Flex
        bg='white'
        borderBottom={1}
        css={{
          boxShadow: '4px 6px grey',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
          position: 'fixed',
          top: 0,
          right: 0,
          height:'64px',
        }}
        >
        <Flex width={200} justifyContent='space-around'>
          {isAuthenticated && (
            <React.Fragment>
              <Link is='a' onClick={auth.login}>{ROUTE_TITLE.LOGIN}</Link>
            </React.Fragment>
          )}
          {auth.isAuthenticated() && (
            <React.Fragment>
              <Flex>
                {/* first need to get this from the 'database', I think. */}
                {/* if authenticated, then need to go to database and get the user information :) */}
                {/* <img src={user.thumbUrl}/> */}
                <Link routeName={ROUTE_TITLE.PROFILE} routeOptions={{reload: true}}>{ROUTE_TITLE.PROFILE}</Link>                
              </Flex>
            </React.Fragment>
          )}
        </Flex>
      </Flex>
    )
  };
};


export default Navbar;
