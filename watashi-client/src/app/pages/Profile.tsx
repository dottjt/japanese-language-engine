import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Text } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class Profile extends React.Component {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.PROFILE}
          description={ROUTE_DESCRIPTION.PROFILE}
        />
        <PageHeading>Profile</PageHeading>

        <Text>My Profile</Text>

        <Text>Change Password</Text>
        <Text>Update Subscription</Text>

      </PageWrapper>
    );
  }
}

export default Profile;
