
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

import {
  LESSON_TITLE,
} from './util/constants/lessonConstants';

const routes = [
  
  { name: LESSON_TITLE.HOME, path: '/' },
  { name: LESSON_TITLE.CONTENTS, path: '/contents' },
  { name: LESSON_TITLE.PREREQ, path: '/prerequisites' },

  { name: LESSON_TITLE.L001, path: '/japanese-wa-noun-statements' },
  { name: LESSON_TITLE.L002, path: '/japanese-wa-noun-questions' },
  { name: LESSON_TITLE.L003, path: '/japanese-mo-noun-statements' },
  { name: LESSON_TITLE.L004, path: '/japanese-mo-noun-questions' },
  { name: LESSON_TITLE.L005, path: '/japanese-ga-noun-statements' },
  { name: LESSON_TITLE.L006, path: '/japanese-ga-noun-questions' },
  { name: LESSON_TITLE.L007, path: '/japanese-wo-verb-statements' },
  { name: LESSON_TITLE.L008, path: '/japanese-wo-verb-questions' },
  { name: LESSON_TITLE.L009, path: '/japanese-ni-verb-statements' },
  { name: LESSON_TITLE.L010, path: '/japanese-ni-verb-questions' },
  { name: LESSON_TITLE.L011, path: '/japanese-de-verb-statements' },
  { name: LESSON_TITLE.L012, path: '/japanese-de-verb-questions' },

];

const router = createRouter(routes).usePlugin(browserPlugin());

export default router;
