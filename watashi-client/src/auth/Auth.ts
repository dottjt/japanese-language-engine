import * as auth0 from 'auth0-js';
import client from '../graphql/client';
import router from '../router';

import { GET_USER, GET_USER_VIA_ACCESS_TOKEN, DOES_USER_EXIST } from '../graphql/queries/userQueries';
import { CREATE_USER } from '../graphql/mutations/userMutations';

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
    this.auth0.parseHash(async (err, authResult) => {
      console.log('handleAuthentication', authResult);

      // set accessToken, idToken and expiresAt fields.
      if (authResult && authResult.accessToken && authResult.idToken) {        
        this.setSession(authResult);
        router.navigate(ROUTE_TITLE.HOME);
      } 

      if (this.isAuthenticated()) {
        try {
          const { data } = await client.query({
            query: GET_USER_VIA_ACCESS_TOKEN,
            variables: {
              accessToken: localStorage.getItem('access_token'),
            }
          });
  
          client.writeData({ data: { user: data['getUserViaAccessToken'] } });  
        } catch(err) {
          throw new Error(err);
        }
      }
      
      if (err) {
        console.log(err);
        router.navigate(ROUTE_TITLE.HOME);
      }
    });
  }

  public async setSession(authResult: any) {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    // set tokens. 
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    try {
      await client.writeData({ data: { 
        user: {        
          accessToken: authResult.accessToken,
          idToken: authResult.idToken,
          expiresAt,
          __typename: __TYPENAME_USER,
        } 
      }});  
    } catch(err) {
      throw new Error(err);
    }

    const { data } = await client.query({
      query: DOES_USER_EXIST,
      variables: {
        email: authResult.idTokenPayload.email,
      },
    });

    if (data && data['doesUserExist']) {
      console.log('User exists inside database. Fetch data from database');
      try {
        const { data } = await client.query({
          query: GET_USER,
          variables: {
            accessToken: localStorage.getItem('access_token'),
          },
        });
  
        console.log('Fetched user from database. Writing user to cache.');
        client.writeData({ data: { user: data['getUserViaAccessToken'] } });  
      } catch(err) {
        throw new Error(err);
      }
    } else {
      console.log('User does not exist inside database. Creating user.');
      try {
        await client.mutate({
          mutation: CREATE_USER,
          variables: {
            username: authResult.idTokenPayload.nickname,
            email: authResult.idTokenPayload.email,
            thumbUrl: authResult.idTokenPayload.picture,
            accessToken: authResult.accessToken,
            idToken: authResult.idToken,
            expiresAt,
            __typename: __TYPENAME_USER,
          },
          update: (cache, { data: { createUser } }) => {
            if (createUser) {
              console.log('New user created. Now writing user to cache.');
              cache.writeData({ data: { user: createUser } });
            }
          },
        });  
      } catch(err) {
        throw new Error(err);
      }
    }
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
