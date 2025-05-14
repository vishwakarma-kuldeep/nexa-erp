"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDef = void 0;
const package_json_1 = require("../../package.json");
const secrets_1 = require("../secrets");
exports.swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: 'node-js app with typescript for ecommerce app',
        version: package_json_1.version,
        license: {
            name: 'MIT',
            url: 'The licence is missing till now',
        },
    },
    servers: [
        {
            url: `http://localhost:${secrets_1.PORT}/api/`,
        },
    ],
};
