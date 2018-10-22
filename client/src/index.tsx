import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RouteProvider, Route } from 'react-router5';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
// import { Normalize } from 'styled-normalize';

import client from './graphql/client';
import theme from './theme';
import router from './router';
import Auth from './auth/Auth';

import registerServiceWorker from './registerServiceWorker';

import App from './app/App';

router.start()

const auth = new Auth();

if (process.env.DISABLE_AUTH) {
  auth.login();  
}

ReactDOM.render(
  <ThemeProvider theme={theme}> 
    <ApolloProvider client={client}>
      <RouteProvider router={router}>
        <Route>{({ route }) => (
          <React.Fragment>
            {/* <Normalize/> */}
            <App route={route} auth={auth}/>
          </React.Fragment>
        )}</Route>
      </RouteProvider>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
