import * as auth0 from 'auth0-js';
import client from '../graphql/client';
import router from '../router';

// import { CREATE_USER } from '../graphql/mutations/userMutations';

import { ROUTE_TITLE } from '../util/constants/routeConstants';

import { __TYPENAME_USER } from '../util/constants/typeNameConstants';


export default class Auth {

  private auth0 = new auth0.WebAuth({
    domain: 'watashiengine.auth0.com',
    clientID: 'V0hH273tSo7Ci3qdtU0l0eSEyOaiAf2U',
    redirectUri: 'http://localhost:3000/redirect',
    responseType: 'token id_token', 
    scope: 'openid profile email user_metadata',
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  public login() {
    this.auth0.authorize();
  }

  public handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);

      // set accessToken, idToken and expiresAt fields.
      if (authResult && authResult.accessToken && authResult.idToken) {        
        this.setSession(authResult);
        router.navigate(ROUTE_TITLE.HOME);
      } else if (err) {
        router.navigate(ROUTE_TITLE.HOME);
        console.log(err);
      }
    });
  }

  public async setSession(authResult: any) {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    await client.writeData({ data: { 
      user: {        
        accessToken: authResult.accessToken,
        idToken: authResult.idToken,
        expiresAt,
        __typename: __TYPENAME_USER,
      } 
    }});

    // check to see if user exists, if not, create user or return existing user.
    // await client.mutate({
    //   mutation: CREATE_USER,
    //   variables: {
    //     username: authResult.idTokenPayload.nickname,
    //     email: authResult.idTokenPayload.email,
    //     thumbUrl: authResult.idTokenPayload.picture,
    //     accessToken: authResult.accessToken,
    //     idToken: authResult.idToken,
    //     expiresAt,
    //     __typename: __TYPENAME_USER,
    //   },
    // });
    
    // navigate to the home route
    router.navigate(ROUTE_TITLE.HOME);
  }

  public logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    client.writeData({ data: { 
      user: null,
    }});

    // navigate to the home route
    router.navigate(ROUTE_TITLE.HOME);
  }

  public isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') as string);
    return new Date().getTime() < expiresAt;
  }
}
