"use strict";
// import { NextFunction, Request, Response } from "express";
// import { prismaClient } from "..";
// import { CompanyError } from "../exceptions/comapny";
// import { ErrorCodes } from "../exceptions/roots";
// export const checkCompany = async(req:Request,res:Response,next:NextFunction)=>{
//     const {email} = req.body;
//     const company =  await prismaClient.company.findMany({
//         where:{
//             email:email
//         }
//     })
//     if(company.length>1){
//         next(new CompanyError("Company already exists!",ErrorCodes.COMPANY_ALREADY_EXIST))
//     }
//     next();
// }
