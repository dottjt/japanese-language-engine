import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Text } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class Profile extends React.Component {
  public render() {
    return (
      <FlexColumn>
        <Helmet
          title={ROUTE_TITLE.PROFILE}
          description={ROUTE_DESCRIPTION.PROFILE}
        />

        <Text>My Profile</Text>

        <Text>Change Password</Text>
        <Text>Update Subscription</Text>

      </FlexColumn>
    );
  }
}

export default Profile;
