import * as React from 'react';
// import styled from 'styled-components';

import { Flex } from '../atoms/LayoutStyles';
import { InternalLink, ExternalLink } from '../atoms/ClickableStyles';

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
          position: 'fixed',
          top: 0,
          right: 0,
          height:'64px',

          boxShadow: '4px 6px grey',
          
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
        }}
        >
        <Flex
          css={{
            width: '200px',
            justifyContent: 'space-around',
          }}
          >
          {!isAuthenticated && 
            <ExternalLink onClick={auth.login}>{ROUTE_TITLE.LOGIN}</ExternalLink>
          }
          {isAuthenticated && 
            <Flex>
              {/* first need to get this from the 'database', I think. */}
              {/* if authenticated, then need to go to database and get the user information :) */}
              {/* <img src={user.thumbUrl}/> */}
              <InternalLink routeName={ROUTE_TITLE.PROFILE} routeOptions={{reload: true}}>{ROUTE_TITLE.PROFILE}</InternalLink>                
            </Flex>
          }
        </Flex>
      </Flex>
    )
  };
};


export default Navbar;
