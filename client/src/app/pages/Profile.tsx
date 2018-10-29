import * as React from 'react';

import { FlexColumn } from '../atoms/LayoutStyles';
import { Text } from '../atoms/TextStyles';

class Profile extends React.Component {
  public render() {
    return (
      <FlexColumn>
        <Text>My Profile</Text>

        <Text>Change Password</Text>
        <Text>Update Subscription</Text>

      </FlexColumn>
    );
  }
}

export default Profile;
