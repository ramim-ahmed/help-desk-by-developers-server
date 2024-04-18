"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_route_1 = require("../modules/user/user.route");
const platform_route_1 = require("../modules/platform/platform.route");
const postType_route_1 = require("../modules/postType/postType.route");
const post_route_1 = require("../modules/post/post.route");
const comment_route_1 = require("../modules/comment/comment.route");
const like_route_1 = require("../modules/like/like.route");
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/platforms',
        route: platform_route_1.PlatformRoutes,
    },
    {
        path: '/postTypes',
        route: postType_route_1.PostTypeRoutes,
    },
    {
        path: '/posts',
        route: post_route_1.PostRoutes,
    },
    {
        path: '/comments',
        route: comment_route_1.CommentRoutes,
    },
    {
        path: '/likes',
        route: like_route_1.LikeRoutes,
    },
];
moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
});
exports.ApplicationRoutes = router;
