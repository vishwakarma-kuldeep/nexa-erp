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
exports.changePassword = exports.me = exports.signup = exports.login = void 0;
const __1 = require("..");
const roots_1 = require("../exceptions/roots");
const bad_request_1 = require("../exceptions/bad-request");
const users_1 = require("../schemas/users");
const notFound_1 = require("../exceptions/notFound");
const hasher_1 = require("../helpers/hasher");
const token_1 = require("../helpers/token");
// console.log(bloom.has('foo')); // true
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    users_1.findSchema.parse(req.body);
    const { email, password, username } = req.body;
    let user;
    if (email.includes("@")) {
        // implement bloom filter here with redis
        user = yield __1.prismaClient.user.findUnique({
            where: {
                email: email,
            },
        });
    }
    if (!user) {
        throw new notFound_1.NotFoundException("User does not exist!", roots_1.ErrorCodes.USER_NOT_FOUND);
    }
    const comparePass = (user === null || user === void 0 ? void 0 : user.password) ? (0, hasher_1.comparePassword)(password, user.password) : false;
    if (!comparePass) {
        throw new bad_request_1.BadRequestException("Invalid credentials", roots_1.ErrorCodes.INCORRECT_PASSWORD);
    }
    const payload = {
        id: user.id,
        role: user.role,
    };
    const token = (0, token_1.jwtGenerator)(payload);
    res.json({ message: "User Logged in successfully!", token });
});
exports.login = login;
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    users_1.signupSchema.parse(req.body);
    const { email, password, name, role } = req.body;
    if (role === "admin" || role === "superadmin") {
        throw new bad_request_1.BadRequestException("Invalid role", roots_1.ErrorCodes.INVALID_ROLE);
    }
    const user = yield __1.prismaClient.user.findFirst({
        where: {
            email,
        },
    });
    if (user) {
        throw new bad_request_1.BadRequestException("User already exists", roots_1.ErrorCodes.USER_ALREADY_EXIST);
    }
    const hash = yield (0, hasher_1.hashPassword)(password);
    yield __1.prismaClient.user.create({
        data: {
            email,
            password: hash,
            name,
            role,
        },
    });
    res.status(201).json({ message: "User created successfully" });
});
exports.signup = signup;
const me = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = yield __1.prismaClient.user.findUnique({
        where: {
            id: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id,
        },
    });
    res.json(user);
});
exports.me = me;
const changePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    users_1.changePasswordSchema.parse(req.body);
    const { oldPassword, newPassword } = req.body;
    const userData = yield __1.prismaClient.user.findUnique({
        where: {
            id: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id
        }
    });
    // console.log(userData)
    if (!userData) {
        throw new bad_request_1.BadRequestException("No Record Found!", roots_1.ErrorCodes.NOT_FOUND);
    }
    const comparePass = (userData === null || userData === void 0 ? void 0 : userData.password) ? yield (0, hasher_1.comparePassword)(oldPassword, userData.password) : false;
    // console.log(comparePass)
    if (!comparePass) {
        throw new bad_request_1.BadRequestException("Invalid old password", roots_1.ErrorCodes.INCORRECT_OLD_PASSWORD);
    }
    const hash = yield (0, hasher_1.hashPassword)(newPassword);
    yield __1.prismaClient.user.update({
        where: {
            id: (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.id
        },
        data: {
            password: hash
        }
    });
    res.json({ message: "Password changed successfully!" });
});
exports.changePassword = changePassword;
