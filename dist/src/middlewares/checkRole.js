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
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
const unauthorized_1 = require("../exceptions/unauthorized");
const roots_1 = require("../exceptions/roots");
// import {User} from "@prisma/client";
const __1 = require("..");
const checkRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const role = req.body.role;
    console.log(role);
    if (role === 'SUPER_ADMIN') {
        const user = yield __1.prismaClient.user.findMany({
            where: {
                role: role
            }
        });
        console.log(user);
        if (user.length > 1) {
            next(new unauthorized_1.UnautherizedUserError("Can't create more than one super admin!", roots_1.ErrorCodes.USER_CREATION_LIMIT_EXCEEDED));
        }
    }
    next();
});
exports.checkRole = checkRole;
