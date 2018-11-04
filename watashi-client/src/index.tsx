import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RouteProvider, Route } from 'react-router5';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import client from './graphql/client';
import theme from './theme';
import router from './router';
import Auth from './auth/Auth';

import * as serviceWorker from './serviceWorker';

import App from './app/App';
import Page404 from './app/pages/Page404';

const auth = new Auth();

const Index = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <RouteProvider router={router}>
        <Route>{({ route }) => {
          console.log('isAuthenticated', auth.isAuthenticated());

          if (route !== null) {
            return <App client={client} route={route} auth={auth}/>
          } else {
            return <Page404/>
          }
        }}</Route>
      </RouteProvider>
    </ApolloProvider>
  </ThemeProvider>
);

const rootElement: HTMLElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Index />, rootElement);
} else {
  ReactDOM.render(<Index />, rootElement);
}

serviceWorker.unregister();
