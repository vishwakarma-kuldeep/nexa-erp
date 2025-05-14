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
exports.roleMiddleware = exports.superAdminMiddleware = exports.adminMiddleware = void 0;
const unauthorized_1 = require("../exceptions/unauthorized");
const roots_1 = require("../exceptions/roots");
const adminMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    // console.log("ji")
    if ((user === null || user === void 0 ? void 0 : user.role) === "ADMIN")
        next();
    else
        next(new unauthorized_1.UnautherizedUserError("Unautorized User", roots_1.ErrorCodes.UNAUTHERIZED_USER));
});
exports.adminMiddleware = adminMiddleware;
const superAdminMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if ((user === null || user === void 0 ? void 0 : user.role) === "SUPER_ADMIN")
        next();
    else
        next(new unauthorized_1.UnautherizedUserError("Unautorized User", roots_1.ErrorCodes.UNAUTHERIZED_USER));
});
exports.superAdminMiddleware = superAdminMiddleware;
// generalized role middleware
const roleMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const role = user === null || user === void 0 ? void 0 : user.role;
    switch (role) {
        case "SUPER_ADMIN":
            next();
            break;
        case "ADMIN":
            next();
            break;
        case "USER":
            next();
            break;
        case "SALES":
            next();
            break;
        case "SUPPORT":
            next();
            break;
        case "HR":
            next();
            break;
        case "VERIFIER":
            next();
            break;
        case "ACCOUNTANT":
            next();
            break;
        case "MANAGER":
            next();
            break;
        case "DELIVERY":
            next();
            break;
        case "DISPATCH":
            next();
            break;
        case "DISPATCHER":
            next();
            break;
        case "DISPATCH_MANAGER":
            next();
            break;
        default:
            next(new unauthorized_1.UnautherizedUserError("Unautorized User", roots_1.ErrorCodes.UNAUTHERIZED_USER));
            break;
    }
});
exports.roleMiddleware = roleMiddleware;
