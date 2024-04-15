import express from 'express';
const router = express.Router();
import { UserRoutes } from '../modules/user/user.route';
import { PlatformRoutes } from '../modules/platform/platform.route';
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/platforms',
    route: PlatformRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export const ApplicationRoutes = router;
