
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

import {
  L00_CONTENTS,
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
} from './util/constants';

const routes = [
  { name: L00_CONTENTS, path: '/' },
  { name: L01_LESSON_TITLE, path: `/basic-japanese-statements` },
  { name: L02_LESSON_TITLE, path: `/basic-japanese-questions` },
];

const router = createRouter(routes).usePlugin(browserPlugin());

export default router;
