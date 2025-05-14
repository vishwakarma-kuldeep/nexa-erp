"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errorHandler_1 = require("../../errorHandler");
const user_1 = require("../../controllers/users/user");
const role_1 = require("../../middlewares/role");
const userRoute = (0, express_1.Router)();
userRoute.post('/signup', [role_1.checkRole], (0, errorHandler_1.errorHandler)(user_1.signup));
// userRoute.get('/get',errorHandler(getRoles))
exports.default = userRoute;
