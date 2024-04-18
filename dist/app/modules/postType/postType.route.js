"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTypeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const postType_controller_1 = require("./postType.controller");
const router = express_1.default.Router();
router.get('/', postType_controller_1.PostTypeController.getAllPostTypes);
router.post('/create-postType', postType_controller_1.PostTypeController.createPostType);
exports.PostTypeRoutes = router;
