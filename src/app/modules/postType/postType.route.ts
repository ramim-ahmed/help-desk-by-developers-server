import express from 'express';
import { PostTypeController } from './postType.controller';
const router = express.Router();
router.get('/', PostTypeController.getAllPostTypes);
router.post('/create-postType', PostTypeController.createPostType);

export const PostTypeRoutes = router;
