import * as React from 'react';
import styled from 'styled-components';

import { Flex } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';
import { Link } from '../atoms/ClickableStyles';

import { ROUTE_TITLE } from '../../util/constants/generalConstants';

const Dropdown = styled(Flex)<any>`
  position: absolute;
  margin-top: 6px;
  width: 300px;
  justify-content: space-between;
  margin-right: 1rem;
  visibility: ${props => props.togglevisibility ? 'visible' : 'hidden'};
`;

class LogoDropdown extends React.Component<{}, { dropdownOpenState: boolean }> {
  constructor() {
    super({});
    this.state = {
      dropdownOpenState: false,
    }
  }

  public render() {
    return (
      <Flex position='relative'>
        <Heading 
          fontSize={4} 
          ml={4} 
          onClick={this.clickDropdown}
          >
          Watashi Engine</Heading>
        <Dropdown
          ml={7}
          togglevisibility={this.state.dropdownOpenState}
          >
          <Link onClick={this.clickDropdown} routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>{ROUTE_TITLE.HOME}</Link>
          <Link onClick={this.clickDropdown} routeName={ROUTE_TITLE.BLOG} routeOptions={{reload: true}}>{ROUTE_TITLE.BLOG}</Link>
          <Link onClick={this.clickDropdown} routeName={ROUTE_TITLE.APP} routeOptions={{reload: true}}>{ROUTE_TITLE.APP}</Link>
          <Link onClick={this.clickDropdown} routeName={ROUTE_TITLE.ABOUT} routeOptions={{reload: true}}>{ROUTE_TITLE.ABOUT}</Link>
        </Dropdown>
      </Flex>
    );
  };

  private clickDropdown = () => {
    this.setState({
      dropdownOpenState: !this.state.dropdownOpenState,
    });
  }
};


class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <Flex
        justifyContent='space-between'
        alignItems='center'
        zIndex={10}
        bg='white'
        // position='fixed'
        // top={0}
        // right={0}
        borderBottom={1}
        height={64}
        width={[1]}
        >

        <LogoDropdown/>

        <Flex width={200} justifyContent='space-around'>
          <Link routeName={ROUTE_TITLE.SIGN_UP} routeOptions={{reload: true}}>{ROUTE_TITLE.SIGN_UP}</Link>
          <Link routeName={ROUTE_TITLE.LOGIN} routeOptions={{reload: true}}>{ROUTE_TITLE.LOGIN}</Link>
        </Flex>
      </Flex>
    )
  };
};


export default Navbar;
