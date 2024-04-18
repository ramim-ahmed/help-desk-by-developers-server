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
exports.PostTypeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const posType_service_1 = require("./posType.service");
const createPostType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield posType_service_1.PostTypeService.createPostType(data);
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'PostType is created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'PostType is created failed!',
            error,
        });
    }
});
const getAllPostTypes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield posType_service_1.PostTypeService.getAllPostTypes();
        res.status(http_status_1.default.OK).json({
            success: true,
            message: 'PostTypes is fetch successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: 'PostTypes is fetch failed!',
            error,
        });
    }
});
exports.PostTypeController = {
    createPostType,
    getAllPostTypes,
};
