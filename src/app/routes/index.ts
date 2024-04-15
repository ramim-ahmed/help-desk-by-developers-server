import express from 'express';
const router = express.Router();
import { UserRoutes } from '../modules/user/user.route';
import { PlatformRoutes } from '../modules/platform/platform.route';
import { PostTypeRoutes } from '../modules/postType/postType.route';
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/platforms',
    route: PlatformRoutes,
  },
  {
    path: '/postTypes',
    route: PostTypeRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export const ApplicationRoutes = router;
