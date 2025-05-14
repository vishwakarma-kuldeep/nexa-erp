"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDef_1 = require("../docs/swaggerDef");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const router = (0, express_1.Router)();
// console.log(swaggerDef)
const specs = (0, swagger_jsdoc_1.default)({
    swaggerDefinition: swaggerDef_1.swaggerDef,
    apis: [
        'src/docs/*yml', 'src/routes/*ts'
    ]
});
router.use('/', swagger_ui_express_1.default.serve);
router.get('/', swagger_ui_express_1.default.setup(specs, {
    explorer: true
}));
exports.default = router;
