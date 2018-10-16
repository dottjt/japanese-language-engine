
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

import {
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
} from './util/constants';

const routes = [
  { name: 'home', path: '/' },
  { name: L01_LESSON_TITLE, path: `/lesson-01` },
  { name: L02_LESSON_TITLE, path: `/lesson-02` },
];

const router = createRouter(routes).usePlugin(browserPlugin());

export default router;
