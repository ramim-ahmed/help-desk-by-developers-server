import express from 'express';
const router = express.Router();
import { UserRoutes } from '../modules/user/user.route';
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export const ApplicationRoutes = router;
