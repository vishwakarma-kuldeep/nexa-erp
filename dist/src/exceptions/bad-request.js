"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const roots_1 = __importDefault(require("./roots"));
class BadRequestException extends roots_1.default {
    constructor(message, errorCode, error) {
        super(message, errorCode, 400, error);
    }
}
exports.BadRequestException = BadRequestException;
