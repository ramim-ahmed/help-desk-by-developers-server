import express from 'express';
const router = express.Router();
import { UserRoutes } from '../modules/user/user.route';
import { PlatformRoutes } from '../modules/platform/platform.route';
import { PostTypeRoutes } from '../modules/postType/postType.route';
import { PostRoutes } from '../modules/post/post.route';
import { CommentRoutes } from '../modules/comment/comment.route';
import { LikeRoutes } from '../modules/like/like.route';
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
  {
    path: '/posts',
    route: PostRoutes,
  },
  {
    path: '/comments',
    route: CommentRoutes,
  },
  {
    path: '/likes',
    route: LikeRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export const ApplicationRoutes = router;
