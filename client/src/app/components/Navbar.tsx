import * as React from 'react';

import { Flex } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { Link } from '../atoms/ClickableStyles';

import { ROUTE_TITLE } from '../../util/constants/generalConstants';

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        justifyContent='space-between'
        alignItems='center'
        zIndex={10}
        bg='white'
        position='fixed'
        top={0}
        right={0}
        borderBottom={1}
      >
        <Heading fontSize={4}>Watashi Engine</Heading>

        <Flex width='300px' justifyContent='space-around'>
          <Link routeName={ROUTE_TITLE.APP} routeOptions={{reload: true}}>{ROUTE_TITLE.APP}</Link>
          <Link routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</Link>
          <Link routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>{ROUTE_TITLE.SIGN_UP}</Link>
          <Link routeName={ROUTE_TITLE.LOGIN} routeOptions={{reload: true}}>{ROUTE_TITLE.LOGIN}</Link>
        </Flex>
      </Flex>
    )
  };
};


export default Navbar;
