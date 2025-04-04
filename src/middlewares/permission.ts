import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../errorHandler";
import { UnautherizedUserError } from "../exceptions/unauthorized";
import { ErrorCodes } from "../exceptions/roots";
import { prismaClient } from "..";

// This is for the permission middleware
// This middleware checks if the user has the required permission to perform an action
// It checks the user's role and permissions and compares them with the required permissions
// If the user has the required permission, the request is allowed to pass

// Role-to-Permission Mappingexportimport { Request, Response, NextFunction } from "express";

export const rolePermissions: Record<string, Set<string>> = {
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
export const checkPermission =
  (requiredPermissions: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const userRole = req.user?.role; // User has only one role

      if (!userRole) {
        return next(
          new UnautherizedUserError(
            "User role is missing",
            ErrorCodes.PERMISSION_DENIED
          )
        );
      }

      const rolePerms = rolePermissions[userRole];

      if (!rolePerms) {
        return next(
          new UnautherizedUserError(
            "Invalid role",
            ErrorCodes.PERMISSION_DENIED
          )
        );
      }

      // Check if role has all required permissions
      const isAuthorized = requiredPermissions.every(
        (perm) => rolePerms.has(perm) || rolePerms.has("ALL")
      );

      if (!isAuthorized) {
        return next(
          new UnautherizedUserError(
            "You are not authorized to perform this action",
            ErrorCodes.PERMISSION_DENIED
          )
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };

// Admin Permi
