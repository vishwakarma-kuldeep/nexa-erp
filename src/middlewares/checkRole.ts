

import { NextFunction, Request, Response } from "express";
import { UnautherizedUserError } from "../exceptions/unauthorized";
import { ErrorCodes } from "../exceptions/roots";
// import {User} from "@prisma/client";
import { prismaClient } from "..";

export const checkRole = async(req:Request,res:Response,next:NextFunction) => {
    const role = req.body.role;
    console.log(role)
    if(role === 'SUPER_ADMIN'){
        const user = await prismaClient.user.findMany({
            where:{
                role:role
            }
        })
        console.log(user)
        if(user.length >1){
           next (new UnautherizedUserError(
                "Can't create more than one super admin!",
                ErrorCodes.USER_CREATION_LIMIT_EXCEEDED
              ))
        }
    }
    next();
}