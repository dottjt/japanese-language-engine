
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

import {
  L000_HOME,
  L000_CONTENTS,
  L000_PREREQUISITES,

  L001_LESSON_TITLE,
  L002_LESSON_TITLE,
  L003_LESSON_TITLE,
  L004_LESSON_TITLE,
  L005_LESSON_TITLE,
  L006_LESSON_TITLE,

  L007_LESSON_TITLE,
  L008_LESSON_TITLE,
  L009_LESSON_TITLE,
  L010_LESSON_TITLE,
  L011_LESSON_TITLE,
  L012_LESSON_TITLE,
} from './util/constants/lessonConstants';

const routes = [
  
  { name: L000_HOME, path: '/' },
  { name: L000_CONTENTS, path: '/contents' },
  { name: L000_PREREQUISITES, path: '/prerequisites' },

  { name: L001_LESSON_TITLE, path: '/basic-japanese-wa-noun-statements' },
  { name: L002_LESSON_TITLE, path: '/basic-japanese-wa-noun-questions' },
  { name: L003_LESSON_TITLE, path: '/basic-japanese-mo-noun-statements' },
  { name: L004_LESSON_TITLE, path: '/basic-japanese-mo-noun-questions' },
  { name: L005_LESSON_TITLE, path: '/basic-japanese-ga-noun-statements' },
  { name: L006_LESSON_TITLE, path: '/basic-japanese-ga-noun-questions' },

  { name: L007_LESSON_TITLE, path: '/basic-japanese-wo-verb-statements' },
  { name: L008_LESSON_TITLE, path: '/basic-japanese-wo-verb-questions' },
  { name: L009_LESSON_TITLE, path: '/basic-japanese-ni-verb-statements' },
  { name: L010_LESSON_TITLE, path: '/basic-japanese-ni-verb-questions' },
  { name: L011_LESSON_TITLE, path: '/basic-japanese-de-verb-statements' },
  { name: L012_LESSON_TITLE, path: '/basic-japanese-de-verb-questions' },

];

const router = createRouter(routes).usePlugin(browserPlugin());

export default router;
