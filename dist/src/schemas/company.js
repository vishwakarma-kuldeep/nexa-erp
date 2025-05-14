"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanySchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.CreateCompanySchema = zod_1.default.object({
    name: zod_1.default.string().nonempty(),
    email: zod_1.default.string().email(),
    phone: zod_1.default.string().min(10),
    address: zod_1.default.string().nullable(),
});
