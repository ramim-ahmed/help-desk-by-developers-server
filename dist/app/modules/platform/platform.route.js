"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformRoutes = void 0;
const express_1 = __importDefault(require("express"));
const platform_controller_1 = require("./platform.controller");
const router = (0, express_1.default)();
router.get('/', platform_controller_1.PlatformController.getAllPlatforms);
router.post('/create-platform', platform_controller_1.PlatformController.createPlatform);
exports.PlatformRoutes = router;
