import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Heading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class SignUp extends React.Component<PropTypes.ILoginProps, {}> {
  public render() {
    return (
      <FlexColumn>
        <Helmet
          title={ROUTE_TITLE.SIGN_UP}
          description={ROUTE_DESCRIPTION.SIGN_UP}
        />
        <Heading is='h2' fontSize={5}>{ROUTE_TITLE.SIGN_UP}</Heading>

      </FlexColumn> 
    );
  };
};

export default SignUp;
