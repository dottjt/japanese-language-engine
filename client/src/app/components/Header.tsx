import * as React from 'react';

import { HeaderWrapper } from '../atoms/Layout';
import { Link } from '../atoms/Clickables';

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
