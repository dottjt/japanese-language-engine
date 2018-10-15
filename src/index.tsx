import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouteProvider, Route } from 'react-router5'
import registerServiceWorker from './registerServiceWorker';
import router from './router';

import App from './App';

router.start()

ReactDOM.render(
  <RouteProvider router={router}>
    <Route>{({ route }) => <App route={route}/>}</Route>
  </RouteProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
