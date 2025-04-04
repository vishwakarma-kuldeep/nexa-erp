import { NextFunction, Request, Response } from "express";
import { UnautherizedUserError } from "../exceptions/unauthorized";
import { ErrorCodes } from "../exceptions/roots";

export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  // console.log("ji")
  if (user?.role === "ADMIN") next();
  else
    next(
      new UnautherizedUserError(
        "Unautorized User",
        ErrorCodes.UNAUTHERIZED_USER
      )
    );
};

export const superAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user?.role === "SUPER_ADMIN") next();
  else
    next(
      new UnautherizedUserError(
        "Unautorized User",
        ErrorCodes.UNAUTHERIZED_USER
      )
    );
};

// generalized role middleware
export const roleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  const role = user?.role;

  switch (role) {
    case "SUPER_ADMIN":
      next();
      break;
    case "ADMIN":
      next();
      break;
    case "USER":
      next();
      break;
    case "SALES":
      next();
      break;
    case "SUPPORT":
      next();
      break;
    case "HR":
      next();
      break;
    case "VERIFIER":
      next();
      break;
    case "ACCOUNTANT":
      next();
      break;
    case "MANAGER":
      next();
      break;
    case "DELIVERY":
      next();
      break;
    case "DISPATCH":
      next();
      break;
    case "DISPATCHER":
      next();
      break;
    case "DISPATCH_MANAGER":
      next();
      break;

    default:
      next(
        new UnautherizedUserError(
          "Unautorized User",
          ErrorCodes.UNAUTHERIZED_USER
        )
      );
      break;
  }
};
