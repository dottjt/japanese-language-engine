
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

import {
  L00_HOME,
  L00_CONTENTS,
  L00_PREREQUISITES,
  L01_LESSON_TITLE,
  L02_LESSON_TITLE,
  L03_LESSON_TITLE,
  L04_LESSON_TITLE,
  L05_LESSON_TITLE,
  L06_LESSON_TITLE,
} from './util/constants/lessonConstants';

const routes = [
  { name: L00_HOME, path: '/' },
  { name: L00_CONTENTS, path: '/contents' },
  { name: L00_PREREQUISITES, path: '/prerequisites' },
  { name: L01_LESSON_TITLE, path: '/basic-japanese-wa-statements' },
  { name: L02_LESSON_TITLE, path: '/basic-japanese-wa-questions' },
  { name: L03_LESSON_TITLE, path: '/basic-japanese-mo-statements' },
  { name: L04_LESSON_TITLE, path: '/basic-japanese-mo-questions' },
  { name: L05_LESSON_TITLE, path: '/basic-japanese-ga-statements' },
  { name: L06_LESSON_TITLE, path: '/basic-japanese-ga-questions' },
];

const router = createRouter(routes).usePlugin(browserPlugin());

export default router;
