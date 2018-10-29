import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RouteProvider, Route } from 'react-router5';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { 
  ROUTE_TITLE,
} from './util/constants/generalConstants';

import client from './graphql/client';
import theme from './theme';
import router from './router';
import Auth from './auth/Auth';

import registerServiceWorker from './registerServiceWorker';

import App from './app/App';
import Blog from './app/pages/Blog';
import Home from './app/pages/Home';
import Callback from './app/pages/Callback';
import Login from './app/pages/Login';
import Page404 from './app/pages/Page404';

const auth = new Auth();

if (process.env.DISABLE_AUTH) {
  auth.login();
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <RouteProvider router={router}>
        <Route>{({ route }) => {
          if (route !== null) {
            switch(route.name) {
              case ROUTE_TITLE.HOME: 
                return <Home client={client} route={route}/>
              case ROUTE_TITLE.BLOG: 
                return <Blog/>
              case ROUTE_TITLE.CALLBACK:
                return <Callback/>
              case ROUTE_TITLE.LOGIN:
                return <Login auth={auth}/>
              default:
                return <App client={client} route={route} auth={auth}/>
            }
          } else {
            return <Page404/>
          }
        }}</Route>
      </RouteProvider>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
