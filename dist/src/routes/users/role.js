"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errorHandler_1 = require("../../errorHandler");
const role_1 = require("../../controllers/users/role");
const usersRoute = (0, express_1.Router)();
usersRoute.post('/add', (0, errorHandler_1.errorHandler)(role_1.addRole));
usersRoute.get('/all', (0, errorHandler_1.errorHandler)(role_1.getRoles));
exports.default = usersRoute;
