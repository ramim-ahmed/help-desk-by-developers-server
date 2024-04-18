"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformController = void 0;
const platform_service_1 = require("./platform.service");
const http_status_1 = __importDefault(require("http-status"));
const createPlatform = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield platform_service_1.PlatformService.createPlatform(data);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'platform is created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'platform is created failed!',
            error,
        });
    }
});
const getAllPlatforms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield platform_service_1.PlatformService.getAllPlatforms();
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'Platform is fetch successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'Platform is fetch failed!',
            error,
        });
    }
});
exports.PlatformController = {
    createPlatform,
    getAllPlatforms,
};
