"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntity = void 0;
const roots_1 = __importDefault(require("./roots"));
class UnprocessableEntity extends roots_1.default {
    constructor(message, errorCode, errors) { super(message, errorCode, 422, errors); }
}
exports.UnprocessableEntity = UnprocessableEntity;
