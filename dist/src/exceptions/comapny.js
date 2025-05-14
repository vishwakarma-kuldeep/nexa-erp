"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyError = void 0;
const roots_1 = __importDefault(require("./roots"));
class CompanyError extends roots_1.default {
    constructor(message, errorCode) {
        super(message, errorCode, 400, null);
    }
}
exports.CompanyError = CompanyError;
