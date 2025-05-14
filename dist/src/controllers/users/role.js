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
exports.getRoles = exports.addRole = void 0;
const notFound_1 = require("../../exceptions/notFound");
const roots_1 = require("../../exceptions/roots"); // Removed as the module does not exist
const client_1 = require("@prisma/client");
const bad_request_1 = require("../../exceptions/bad-request");
const users_1 = require("../../schemas/users");
const addRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    users_1.roleSchema.parse(req.body);
    const { name, description } = req.body;
    const prisma = new client_1.PrismaClient();
    const existingRole = yield prisma.roles.findUnique({
        where: {
            name: name,
        },
    });
    if (existingRole) {
        throw new bad_request_1.BadRequestException("Role already exists", roots_1.ErrorCodes.ROLE_ALREADY_EXISTS);
    }
    const role = yield prisma.roles.create({
        data: {
            name,
            description,
        },
    });
    res.json(role);
});
exports.addRole = addRole;
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const role = yield prisma.roles.findMany();
    if (!role) {
        throw new notFound_1.NotFoundException("Role not found", roots_1.ErrorCodes.ROLE_NOT_FOUND);
    }
    if (role.length === 0) {
        throw new notFound_1.NotFoundException("No roles found", roots_1.ErrorCodes.NOT_FOUND);
    }
    res.json(role);
});
exports.getRoles = getRoles;
