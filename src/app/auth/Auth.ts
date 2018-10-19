import auth0 from 'auth0-js';

export default class Auth {
  private auth0 = new auth0.WebAuth({
    domain: 'grammarsensei.auth0.com',
    clientID: 'RmOt6CxT4a0OFKgnECeHqhFWhPHtFmOX',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  public login() {
    this.auth0.authorize();
  }
}
