import * as React from 'react';

import { HeaderWrapper } from '../atoms/HeaderStyles';
import { Link } from '../atoms/ClickableStyles';

class Header extends React.Component<{}, {}> {

  public render() {
    return (
      <HeaderWrapper>
        <Link>About</Link>
        <Link>Login</Link>
      </HeaderWrapper>
    )
  };
};

export default Header;
