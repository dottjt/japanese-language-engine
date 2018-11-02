import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';

import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class SignUp extends React.Component<PropTypes.ILoginProps, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.SIGN_UP}
          description={ROUTE_DESCRIPTION.SIGN_UP}
        />
        <PageHeading>{ROUTE_TITLE.SIGN_UP}</PageHeading>

      </PageWrapper> 
    );
  };
};

export default SignUp;
