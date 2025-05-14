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
exports.signup = void 0;
const users_1 = require("../../schemas/users");
const __1 = require("../..");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    users_1.signupSchema.parse(req.body);
    const { email, password, name, role } = req.body;
    const user = yield __1.prismaClient.user.create({
        data: {
            email,
            password,
            name,
            roleId: role,
        },
    });
    res.json(user);
});
exports.signup = signup;
