import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RouteProvider, Route } from 'react-router5';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { 
  createError,
} from './util/functions';

import { 
  ROUTE_TITLE,
  ROUTE_PATH,
} from './util/constants/generalConstants';

import {
  GET_NOUNS,
} from './graphql/queries';

import {
  LESSON_PATH,
  LESSON_OPTIONS,
} from './util/constants/lessonConstants';

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

// import allWords from './util/words/collection';
import generateExercises from 'src/util/conjugations/generateExercises';

const determineGetExercise = (nouns: Util.Word[], path: string): Util.EnglishJapaneseOptionsSentence[] => {
  switch(path) {
    case `${ROUTE_PATH.APP}${LESSON_PATH.L001}`: return generateExercises(nouns, LESSON_OPTIONS.L001, 10);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L002}`: return generateExercises(nouns, LESSON_OPTIONS.L002, 10);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L003}`: return generateExercises(nouns, LESSON_OPTIONS.L003, 10);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L004}`: return generateExercises(nouns, LESSON_OPTIONS.L004, 10);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L005}`: return generateExercises(nouns, LESSON_OPTIONS.L005, 10);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L006}`: return generateExercises(nouns, LESSON_OPTIONS.L006, 10);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L007}`: return generateExercises(nouns, LESSON_OPTIONS.L007, 10);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L008}`: return generateExercises(nouns, LESSON_OPTIONS.L008, 10);
    case `${ROUTE_PATH.APP}${LESSON_PATH.L009}`: return generateExercises(nouns, LESSON_OPTIONS.L009, 10);
    default: return generateExercises(nouns, LESSON_OPTIONS.L001, 10);
  };
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <RouteProvider router={router}>
        <Route>{({ route }) => {
          if (route !== null ) {
            try {
              const data = client.readQuery({ query: GET_NOUNS }) as any;
              client.writeData({ data: { exercises: determineGetExercise(data.nouns, route.path) } });
            } catch(error) {
              throw new Error(createError('index.tsx', '<Route>', `Unable to access graphql and pull down nouns.`));
            }
          
            switch(route.name) {
              case ROUTE_TITLE.HOME: 
                return <Home/>
              case ROUTE_TITLE.BLOG: 
                return <Blog/>
              case ROUTE_TITLE.CALLBACK:
                return <Callback/>
              case ROUTE_TITLE.LOGIN:
                return <Login auth={auth}/>
              default:
                return <App route={route} auth={auth}/>
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
