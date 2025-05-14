"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtValidator = exports.jwtGenerator = void 0;
const secrets_1 = require("../secrets");
const jsonwebtoken_1 = require("jsonwebtoken");
const jwtGenerator = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, secrets_1.JWT_SECRET, { expiresIn: '1d' });
};
exports.jwtGenerator = jwtGenerator;
const jwtValidator = (token) => {
    return (0, jsonwebtoken_1.verify)(token, secrets_1.JWT_SECRET);
};
exports.jwtValidator = jwtValidator;
