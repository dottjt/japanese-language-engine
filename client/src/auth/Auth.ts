import * as auth0 from 'auth0-js';

import {
  LESSON_TITLE
} from '../util/constants/lessonConstants';

import router from '../router';

export default class Auth {

  private auth0 = new auth0.WebAuth({
    domain: 'grammarsensei.auth0.com',
    clientID: 'RmOt6CxT4a0OFKgnECeHqhFWhPHtFmOX',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
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
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        router.navigate(LESSON_TITLE.HOME);
      } else if (err) {
        router.navigate(LESSON_TITLE.HOME);
        console.log(err);
      }
    });
  }

  public setSession(authResult: any) {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    router.navigate(LESSON_TITLE.HOME);
  }

  public logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    router.navigate(LESSON_TITLE.HOME);
  }

  public isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') as string);
    return new Date().getTime() < expiresAt;
  }
}

