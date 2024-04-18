"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to help-desk-by-developers-server',
    });
});
// application routes || apis
app.use('/api/v1', routes_1.ApplicationRoutes);
// handl not found route
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'NOT FOUND!',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'Api not found!!',
            },
        ],
    });
    next();
});
exports.default = app;
