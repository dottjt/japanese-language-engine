import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

import {
  LESSON_TITLE,
  LESSON_PATH,
} from './util/constants/lessonConstants';

import {
  ROUTE_TITLE,
  ROUTE_PATH,
} from './util/constants/routeConstants';

const routes = [
  // Main pages
  { name: ROUTE_TITLE.REDIRECT, path: ROUTE_PATH.REDIRECT },
  { name: ROUTE_TITLE.PROFILE, path: ROUTE_PATH.PROFILE },
  { name: ROUTE_TITLE.LOGIN, path: ROUTE_PATH.LOGIN },
  { name: ROUTE_TITLE.SIGN_UP, path: ROUTE_PATH.SIGN_UP },
  { name: ROUTE_TITLE.HOME, path: ROUTE_PATH.HOME },
  { name: ROUTE_TITLE.APP, path: ROUTE_PATH.APP },
  { name: ROUTE_TITLE.BLOG, path: ROUTE_PATH.BLOG },
  { name: ROUTE_TITLE.ABOUT, path: ROUTE_PATH.ABOUT },

  // Other lesson pages
  { name: ROUTE_TITLE.WELCOME, path: `${ROUTE_PATH.WELCOME}` },
  { name: ROUTE_TITLE.CONTENTS, path: `${ROUTE_PATH.CONTENTS}` },
  { name: ROUTE_TITLE.PREREQ, path: `${ROUTE_PATH.PREREQ}` },
  
  // Noun - Basic
  { name: LESSON_TITLE.L001, path: `${ROUTE_PATH.APP}${LESSON_PATH.L001}` },
  { name: LESSON_TITLE.L002, path: `${ROUTE_PATH.APP}${LESSON_PATH.L002}` },
  { name: LESSON_TITLE.L003, path: `${ROUTE_PATH.APP}${LESSON_PATH.L003}` },
  { name: LESSON_TITLE.L004, path: `${ROUTE_PATH.APP}${LESSON_PATH.L004}` },
  { name: LESSON_TITLE.L005, path: `${ROUTE_PATH.APP}${LESSON_PATH.L005}` },

  // Verb - Basic
  { name: LESSON_TITLE.L006, path: `${ROUTE_PATH.APP}${LESSON_PATH.L006}` },
  { name: LESSON_TITLE.L007, path: `${ROUTE_PATH.APP}${LESSON_PATH.L007}` },
  { name: LESSON_TITLE.L008, path: `${ROUTE_PATH.APP}${LESSON_PATH.L008}` },
  { name: LESSON_TITLE.L009, path: `${ROUTE_PATH.APP}${LESSON_PATH.L009}` },
  { name: LESSON_TITLE.L010, path: `${ROUTE_PATH.APP}${LESSON_PATH.L010}` },
  { name: LESSON_TITLE.L011, path: `${ROUTE_PATH.APP}${LESSON_PATH.L011}` },
  { name: LESSON_TITLE.L012, path: `${ROUTE_PATH.APP}${LESSON_PATH.L012}` },
  { name: LESSON_TITLE.L013, path: `${ROUTE_PATH.APP}${LESSON_PATH.L013}` },

  // From / Until statements
  { name: LESSON_TITLE.L014, path: `${ROUTE_PATH.APP}${LESSON_PATH.L014}` },
  { name: LESSON_TITLE.L015, path: `${ROUTE_PATH.APP}${LESSON_PATH.L015}` },

  // modifier statements
  { name: LESSON_TITLE.L016, path: `${ROUTE_PATH.APP}${LESSON_PATH.L016}` },
  { name: LESSON_TITLE.L017, path: `${ROUTE_PATH.APP}${LESSON_PATH.L017}` },
  { name: LESSON_TITLE.L018, path: `${ROUTE_PATH.APP}${LESSON_PATH.L018}` },
  { name: LESSON_TITLE.L019, path: `${ROUTE_PATH.APP}${LESSON_PATH.L019}` },
  { name: LESSON_TITLE.L020, path: `${ROUTE_PATH.APP}${LESSON_PATH.L020}` },
];

const moveToTopOfThePagePlugin = (router: any, dependencies: any) => ({
  onTransitionStart: (toState: any, fromState: any) => {
    window.scroll(0,0);
    window.scrollTo(0, 0);
  }
});

moveToTopOfThePagePlugin.pluginName = 'MOVE_TO_THE_TOP_OF_THE_PAGE';
  
const router = createRouter(routes)
  .usePlugin(browserPlugin())
  .usePlugin(moveToTopOfThePagePlugin);;

router.start()

export default router;
