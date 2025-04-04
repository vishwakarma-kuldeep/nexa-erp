import { Request, Response, NextFunction } from "express";
import { UnautherizedUserError } from "../exceptions/unauthorized";
import { ErrorCodes } from "../exceptions/roots";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "..";
import { BadRequestException } from "../exceptions/bad-request";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(
      new UnautherizedUserError(
        "Unautherized User!",
        ErrorCodes.UNAUTHERIZED_USER
      )
    );
  }
  // let token ;
  // if(authHeader.includes(" ")){
  //   token = authHeader.split(" ")[1];
  // }
  // else{
  //   token = authHeader
  // }
  const token = authHeader.split(" ")[1]; 
 

  try {
    const payload = jwt.verify(token, JWT_SECRET) as any; // Verify the token
 
    const user = await prismaClient.user.findUnique({
      where:{ 
        id:payload.id
      },
      select:{
        id:true,
        role:true,
        email:true,
        username:true
      }
    })
  
    if(!user){
        return next(
            new UnautherizedUserError(
              "Unautherized User!",
              ErrorCodes.UNAUTHERIZED_USER
            )
          );
    }
    if(payload?.role !== user?.role){
      return next( new BadRequestException("The user role is mismatched",ErrorCodes.MISMATCHED_ROLE))
    }
    req.user = user ;
    
    next()
  } catch (error) {
    return next(
      new UnautherizedUserError(
        "Unautherized User!",
        ErrorCodes.UNAUTHERIZED_USER
      )
    );
  }
};
