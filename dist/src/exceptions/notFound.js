"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const roots_1 = __importDefault(require("./roots"));
class NotFoundException extends roots_1.default {
    constructor(message, errorCode) {
        super(message, errorCode, 404, null);
    }
}
exports.NotFoundException = NotFoundException;
