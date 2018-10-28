import * as React from 'react';

import { NavbarWrapper, NavbarLinks } from '../atoms/NavbarStyles';
import { Heading } from '../atoms/TextStyles';
import { Link } from 'react-router5';

import { ROUTE_TITLE } from '../../util/constants/generalConstants';

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <NavbarWrapper>
        <Heading>
          Watashi Engine
        </Heading>

        <NavbarLinks>
          <Link routeName={ROUTE_TITLE.APP} routeOptions={{reload: true}}>{ROUTE_TITLE.APP}</Link>
          <Link routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</Link>
          <Link routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>{ROUTE_TITLE.SIGN_UP}</Link>
          <Link routeName={ROUTE_TITLE.LOGIN} routeOptions={{reload: true}}>{ROUTE_TITLE.LOGIN}</Link>
        </NavbarLinks>
      </NavbarWrapper>
    )
  };
};


export default Navbar;
