import Home from '~/pages/Home';
import CreatePin from '~/pages/CreatePin';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/pin-creation-tool', component: CreatePin, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
