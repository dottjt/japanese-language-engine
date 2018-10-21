
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

import {
  LESSON_TITLE,
  LESSON_PATH,
} from './util/constants/lessonConstants';

const routes = [
  { name: LESSON_TITLE.CALLBACK, path: LESSON_PATH.CALLBACK },
  { name: LESSON_TITLE.LOGIN, path: LESSON_PATH.LOGIN },

  { name: LESSON_TITLE.HOME, path: LESSON_PATH.HOME },
  { name: LESSON_TITLE.CONTENTS, path: LESSON_PATH.CONTENTS },
  { name: LESSON_TITLE.PREREQ, path: LESSON_PATH.PREREQ },
  
  // Noun - Basic
  { name: LESSON_TITLE.L001, path: LESSON_PATH.L001 },
  { name: LESSON_TITLE.L002, path: LESSON_PATH.L002 },
  { name: LESSON_TITLE.L003, path: LESSON_PATH.L003 },
  { name: LESSON_TITLE.L004, path: LESSON_PATH.L004 },

  // Verb - Basic
  { name: LESSON_TITLE.L005, path: LESSON_PATH.L005 },
  { name: LESSON_TITLE.L006, path: LESSON_PATH.L006 },
  { name: LESSON_TITLE.L007, path: LESSON_PATH.L007 },
  { name: LESSON_TITLE.L008, path: LESSON_PATH.L008 },
  { name: LESSON_TITLE.L009, path: LESSON_PATH.L009 },

  // Adjectives - Basic

  // { name: LESSON_TITLE.L010, path: LESSON_PATH.L010 },
  // { name: LESSON_TITLE.L011, path: LESSON_PATH.L011 },
  // { name: LESSON_TITLE.L012, path: LESSON_PATH.L012 },
  // { name: LESSON_TITLE.L013, path: LESSON_PATH.L013 },

];

const router = createRouter(routes).usePlugin(browserPlugin());

export default router;
