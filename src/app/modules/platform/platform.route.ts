import express from 'express';
import { PlatformController } from './platform.controller';
const router = express();

router.get('/', PlatformController.getAllPlatforms);
router.post('/create-platform', PlatformController.createPlatform);

export const PlatformRoutes = router;
