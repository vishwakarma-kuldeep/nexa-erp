import { Request, Response,NextFunction } from "express";
import { NotFoundException } from "../exceptions/notFound";
import { ErrorCodes } from "../exceptions/roots";import { prismaClient } from "..";
;

export const checkRole = async (req:Request,res:Response, next:NextFunction) => {
    if (!req.body.role ){
       next (new NotFoundException("Role not found",ErrorCodes.ROLE_NOT_FOUND));
    }
    const role = await prismaClient.roles.findUnique({
        where:{
            id: req.body.role,
        }
    })
    if (!role){
        next( new NotFoundException("Role not found",ErrorCodes.ROLE_NOT_FOUND));
    }
    next();
}