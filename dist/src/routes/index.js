"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootRoutes = (0, express_1.Router)();
const role_1 = __importDefault(require("./users/role"));
const user_1 = __importDefault(require("./users/user"));
rootRoutes.use('/users/role', role_1.default);
rootRoutes.use('/users', user_1.default);
exports.default = rootRoutes;
// import auth from "./auth";
// import docsRoute from './docs'
// // import usersRoute from "./users";
// import companyRoute from "./company";
// import { authMiddleware } from "../middlewares/authMiddleware";
// import { apiLog } from "../middlewares/apiLog";
// // rootRoutes.use('/auth',auth);
// // rootRoutes.use('/docs',docsRoute)
// // rootRoutes.use(authMiddleware)
// // rootRoutes.use(apiLog)
// // rootRoutes.use('/company',companyRoute)
// // rootRoutes.use('/users',usersRoute
