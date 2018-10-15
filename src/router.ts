
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';

const routes = [
  { name: 'home', path: '/' },
  { name: 'lesson-01', path: '/lesson-01' },
  { name: 'lesson-02', path: '/lesson-02' },
];

const router = createRouter(routes).usePlugin(browserPlugin());

export default router;
