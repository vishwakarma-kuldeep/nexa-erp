import { NextFunction, Request, Response } from "express";
import HttpException, { ErrorCodes } from "./exceptions/roots";
import { InternalServerError } from "./exceptions/internalError";
import { ZodError } from "zod";
import { BadRequestException } from "./exceptions/bad-request";


export const errorHandler = (method:Function)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
         await   method(req,res,next)
        } catch (error:any) {
            let exceptions:HttpException;
            if(error instanceof HttpException){
                
                exceptions = error;
            }
            else{
               if(error instanceof ZodError)
               {
                exceptions = new BadRequestException('Unprocessable Entity!',ErrorCodes.UNPROCESSABLE_ENTITY,error)
               }
               else
                exceptions = new InternalServerError('Something went wrong!',ErrorCodes.INTERNAL_SERVER_ERROR,error)
            }
           
            next (exceptions)
        }
    }
    
}