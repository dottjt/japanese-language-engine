import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Heading, Text } from '../atoms/TextStyles';
import { InternalLink, Button } from '../atoms/ClickableStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

class Profile extends React.Component<{ client: any, auth: any, user: Util.User }, { usernameInput: string, passwordInput: string }> {
  constructor(props) {
    super(props);
    console.log('profile', props);
    this.state = {
      usernameInput: '',
      passwordInput: '',
    };
  }

  public render() {
    const { auth } = this.props;
    
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.PROFILE}
          description={ROUTE_DESCRIPTION.PROFILE}
        />
        <PageHeading>Profile</PageHeading>

        <Heading>Username:</Heading>
        {/* <input value={user.username} onChange={this.changeUsernameField}/> */}

        <Text>Change Password</Text>
        <Heading>Password:</Heading>
        {/* <input value={this.state.passwordInput} onChange={this.changePasswordField}/> */}

        <Text>Update Subscription</Text>

        <Button onClick={this.saveProfileChanges}> </Button>
       
        <InternalLink onClick={auth.logout}routeName={ROUTE_TITLE.HOME} routeOptions={{reload: true}}>Logout</InternalLink>

      </PageWrapper>
    );
  }

  private saveProfileChanges  = () => {
    this.props.client.writeData({
      data: {
        user: {
          username: this.state.usernameInput,
        }
      }
    })
  }
  
  // private changePasswordField = (event) => {
  //   this.setState({
  //     passwordInput: event.target.value,
  //   });
  // }

  // private changeUsernameField = (event) => {
  //   this.setState({
  //     usernameInput: event.target.value,
  //   });
  // }
}

export default Profile;
