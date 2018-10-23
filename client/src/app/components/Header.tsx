import * as React from 'react';

import { HeaderWrapper, HeaderLinks } from '../atoms/HeaderStyles';
import { Link } from 'react-router5';

import { ROUTE_TITLE } from '../../util/constants/generalConstants';

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <HeaderWrapper>
        <HeaderLinks>
          <Link routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</Link>
          <Link routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>{ROUTE_TITLE.SIGN_UP}</Link>
          <Link routeName={ROUTE_TITLE.LOGIN} routeOptions={{reload: true}}>{ROUTE_TITLE.LOGIN}</Link>
        </HeaderLinks>
      </HeaderWrapper>
    )
  };
};


export default Header;
