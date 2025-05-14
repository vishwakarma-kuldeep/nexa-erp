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
const notFound_1 = require("../exceptions/notFound");
const roots_1 = require("../exceptions/roots");
const __1 = require("..");
;
const checkRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.role) {
        next(new notFound_1.NotFoundException("Role not found", roots_1.ErrorCodes.ROLE_NOT_FOUND));
    }
    const role = yield __1.prismaClient.roles.findUnique({
        where: {
            id: req.body.role,
        }
    });
    if (!role) {
        next(new notFound_1.NotFoundException("Role not found", roots_1.ErrorCodes.ROLE_NOT_FOUND));
    }
    next();
});
exports.checkRole = checkRole;
