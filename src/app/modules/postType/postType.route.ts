import express from 'express';
import { PostTypeController } from './postType.controller';
const router = express.Router();

router.post('/create-postType', PostTypeController.createPostType);

export const PostTypeRoutes = router;
