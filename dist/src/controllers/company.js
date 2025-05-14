"use strict";
// import { Request, Response } from "express";
// import { NotFoundException } from "../exceptions/notFound";
// import { ErrorCodes } from "../exceptions/roots";
// import { prismaClient } from "..";
// import { BadRequestException } from "../exceptions/bad-request";
// import { CreateCompanySchema } from "../schemas/company";
// /**
//  *
//  * @param req
//  * @param res
//  *
//  *  ================================== ADDING A NEW COMPANY BY ADMIN OR SUPER ADMIN ==================================
//  */
// export const createCompany = async (req: Request, res: Response) => {
//   CreateCompanySchema.parse(req.body);
//   const { name, email, phone, address } = req.body;
//   const company = await prismaClient.company.create({
//     data: {
//       name,
//       email,
//       phone,
//       createdBy: {
//         connect: {
//           id: req?.user?.id,
//         },
//       },
//       User: {
//         connect: {
//           id: req?.user?.id,
//         },
//       },
//       address: address || null,
//     },
//   });
//   res.json(company);
// };
// /**
//  *
//  * @param req
//  * @param res
//  *
//  *
//  *  ===========================================================================
//  *           CHANGE THE COMPANY TYPE FROM  TRIAL TO DESIRED ONE
//  *            BASED ON THE EXISTED ENUM DATA IN PRISMA FILE
//  *  ====================================================================
//  *
//  *
//  */
// export const changeCompanyType = async (req: Request, res: Response) => {
//   const id = +req.params.id;
//   const type = req.body.type;
//   const company = await prismaClient.company.update({
//     where: {
//       id,
//     },
//     data: {
//       type,
//     },
//   });
//   res.json(company);
// };
