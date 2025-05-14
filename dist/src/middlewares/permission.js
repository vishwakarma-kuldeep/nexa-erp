"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermission = exports.rolePermissions = void 0;
const unauthorized_1 = require("../exceptions/unauthorized");
const roots_1 = require("../exceptions/roots");
// This is for the permission middleware
// This middleware checks if the user has the required permission to perform an action
// It checks the user's role and permissions and compares them with the required permissions
// If the user has the required permission, the request is allowed to pass
// Role-to-Permission Mappingexportimport { Request, Response, NextFunction } from "express";
exports.rolePermissions = {
    SUPER_ADMIN: new Set(["ALL", "READ", "CREATE", "UPDATE", "DELETE"]),
    ADMIN: new Set(["CREATE", "READ", "UPDATE", "DELETE"]),
    USER: new Set(["READ"]),
    SALES: new Set(["READ", "CREATE"]),
    SUPPORT: new Set(["READ", "CREATE", "UPDATE"]),
    HR: new Set(["READ", "CREATE", "UPDATE", "DELETE"]),
    VERIFIER: new Set(["READ", "CREATE", "UPDATE", "DELETE"]),
    ACCOUNTANT: new Set(["READ", "CREATE", "UPDATE", "DELETE"]),
    MANAGER: new Set(["READ", "CREATE", "UPDATE", "DELETE"]),
    DELIVERY: new Set(["READ", "CREATE", "UPDATE", "DELETE"]),
    DISPATCH: new Set(["READ", "CREATE", "UPDATE", "DELETE"]),
    DISPATCHER: new Set(["READ", "CREATE", "UPDATE", "DELETE"]),
    DISPATCH_MANAGER: new Set(["READ", "CREATE", "UPDATE", "DELETE"]),
};
/**
 *
 *        ======================================================
 *        Middleware to check if the user has the required permission based on their roles.

  *        ======================================================

*/
const checkPermission = (requiredPermissions) => (req, res, next) => {
    var _a;
    try {
        const userRole = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role; // User has only one role
        if (!userRole) {
            return next(new unauthorized_1.UnautherizedUserError("User role is missing", roots_1.ErrorCodes.PERMISSION_DENIED));
        }
        const rolePerms = exports.rolePermissions[userRole];
        if (!rolePerms) {
            return next(new unauthorized_1.UnautherizedUserError("Invalid role", roots_1.ErrorCodes.PERMISSION_DENIED));
        }
        // Check if role has all required permissions
        const isAuthorized = requiredPermissions.every((perm) => rolePerms.has(perm) || rolePerms.has("ALL"));
        if (!isAuthorized) {
            return next(new unauthorized_1.UnautherizedUserError("You are not authorized to perform this action", roots_1.ErrorCodes.PERMISSION_DENIED));
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.checkPermission = checkPermission;
// Admin Permi
