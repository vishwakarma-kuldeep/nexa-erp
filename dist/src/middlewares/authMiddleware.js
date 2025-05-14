"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.authMiddleware = void 0;
const unauthorized_1 = require("../exceptions/unauthorized");
const roots_1 = require("../exceptions/roots");
const jwt = __importStar(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
const __1 = require("..");
const bad_request_1 = require("../exceptions/bad-request");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return next(new unauthorized_1.UnautherizedUserError("Unautherized User!", roots_1.ErrorCodes.UNAUTHERIZED_USER));
    }
    // let token ;
    // if(authHeader.includes(" ")){
    //   token = authHeader.split(" ")[1];
    // }
    // else{
    //   token = authHeader
    // }
    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, secrets_1.JWT_SECRET); // Verify the token
        const user = yield __1.prismaClient.user.findUnique({
            where: {
                id: payload.id
            },
            select: {
                id: true,
                role: true,
                email: true,
            }
        });
        // Finding Role from the Role Table
        if (!user) {
            return next(new unauthorized_1.UnautherizedUserError("Unautherized User!", roots_1.ErrorCodes.UNAUTHERIZED_USER));
        }
        if ((payload === null || payload === void 0 ? void 0 : payload.role) !== (user === null || user === void 0 ? void 0 : user.role)) {
            return next(new bad_request_1.BadRequestException("The user role is mismatched", roots_1.ErrorCodes.MISMATCHED_ROLE));
        }
        req.user = {
            id: user.id,
            role: user.role,
            email: (_a = user.email) !== null && _a !== void 0 ? _a : "",
        };
        next();
    }
    catch (error) {
        return next(new unauthorized_1.UnautherizedUserError("Unautherized User!", roots_1.ErrorCodes.UNAUTHERIZED_USER));
    }
});
exports.authMiddleware = authMiddleware;
