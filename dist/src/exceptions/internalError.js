"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const roots_1 = __importDefault(require("./roots"));
class InternalServerError extends roots_1.default {
    constructor(message, errorCode, errors) {
        super(message, errorCode, 500, errors);
    }
}
exports.InternalServerError = InternalServerError;
