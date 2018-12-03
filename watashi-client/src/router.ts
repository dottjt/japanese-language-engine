import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

// import {
//   LESSON_TITLE,
//   LESSON_PATH,
// } from './util/config/lessonConfig';

import {
  ROUTE_TITLE,
  ROUTE_PATH,
} from './util/constants/routeConstants';

import {
  PLAYGROUND_TITLE,
  PLAYGROUND_PATH,
} from './util/constants/playgroundConstants';

import {
  BLOG_TITLE,
  BLOG_PATH,
} from './util/constants/blogConstants';

const routes = [
  // Main pages
  { name: ROUTE_TITLE.REDIRECT, path: ROUTE_PATH.REDIRECT },
  { name: ROUTE_TITLE.PROFILE, path: ROUTE_PATH.PROFILE },
  { name: ROUTE_TITLE.HOME, path: ROUTE_PATH.HOME },
  { name: ROUTE_TITLE.EXERCISES, path: ROUTE_PATH.EXERCISES },

  // { name: ROUTE_TITLE.SIGN_UP, path: ROUTE_PATH.SIGN_UP },
  // { name: ROUTE_TITLE.LOGIN, path: ROUTE_PATH.LOGIN },
  // { name: ROUTE_TITLE.GUIDES, path: ROUTE_PATH.GUIDES },
  // { name: ROUTE_TITLE.TOOLS, path: ROUTE_PATH.TOOLS },
  { name: ROUTE_TITLE.ABOUT, path: ROUTE_PATH.ABOUT },

  // blog pages
  { name: ROUTE_TITLE.BLOG, path: ROUTE_PATH.BLOG },
  { name: BLOG_TITLE.B01, path: `${ROUTE_PATH.BLOG}${BLOG_PATH.B01}` },
  { name: BLOG_TITLE.B02, path: `${ROUTE_PATH.BLOG}${BLOG_PATH.B02}` },
  { name: BLOG_TITLE.B03, path: `${ROUTE_PATH.BLOG}${BLOG_PATH.B03}` },

  // Other lesson pages
  { name: ROUTE_TITLE.WELCOME, path: `${ROUTE_PATH.WELCOME}` },
  { name: ROUTE_TITLE.CONTENTS, path: `${ROUTE_PATH.CONTENTS}` },
  { name: ROUTE_TITLE.PHILOSOPHY, path: `${ROUTE_PATH.PHILOSOPHY}` },
  { name: ROUTE_TITLE.PREREQ, path: `${ROUTE_PATH.PREREQ}` },
  
  // Playground
  { name: ROUTE_TITLE.PLAYGROUND, path: ROUTE_PATH.PLAYGROUND },
  { name: PLAYGROUND_TITLE.uTop, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop}` },
  { name: PLAYGROUND_TITLE.top, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top}` },
  { name: PLAYGROUND_TITLE.adjTop, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.adjTop}` },
  { name: PLAYGROUND_TITLE.uTop_uSub, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_uSub}` },
  { name: PLAYGROUND_TITLE.uTop_Sub, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_Sub}` },
  { name: PLAYGROUND_TITLE.uTop_adjSub, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.uTop_adjSub}` },
  { name: PLAYGROUND_TITLE.top_Sub, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_Sub}` },
  { name: PLAYGROUND_TITLE.top_adjSub, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.top_adjSub}` },
  { name: PLAYGROUND_TITLE.verb, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb}` },
  { name: PLAYGROUND_TITLE.verbAdv, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verbAdv}` },
  { name: PLAYGROUND_TITLE.verb_Sub, path: `${ROUTE_PATH.PLAYGROUND}${PLAYGROUND_PATH.verb_Sub}` },

  // { name: LESSON_TITLE.L001, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L001}` },
  // { name: LESSON_TITLE.L002, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L002}` },
  // { name: LESSON_TITLE.L003, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L003}` },
  // { name: LESSON_TITLE.L004, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L004}` },
  // { name: LESSON_TITLE.L005, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L005}` },
  // { name: LESSON_TITLE.L006, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L006}` },
  // { name: LESSON_TITLE.L007, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L007}` },
  // { name: LESSON_TITLE.L008, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L008}` },
  // { name: LESSON_TITLE.L009, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L009}` },
  // { name: LESSON_TITLE.L010, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L010}` },
  // { name: LESSON_TITLE.L011, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L011}` },
  // { name: LESSON_TITLE.L012, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L012}` },
  // { name: LESSON_TITLE.L013, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L013}` },
  // { name: LESSON_TITLE.L014, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L014}` },
  // { name: LESSON_TITLE.L015, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L015}` },
  // { name: LESSON_TITLE.L016, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L016}` },
  // { name: LESSON_TITLE.L017, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L017}` },
  // { name: LESSON_TITLE.L018, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L018}` },
  // { name: LESSON_TITLE.L019, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L019}` },
  // { name: LESSON_TITLE.L020, path: `${ROUTE_PATH.EXERCISES}${LESSON_PATH.L020}` },
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
