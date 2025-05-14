// import { Request, Response } from "express";
// import { NotFoundException } from "../exceptions/notFound";
// import { ErrorCodes } from "../exceptions/roots";
// import { prismaClient } from "..";
// import { BadRequestException } from "../exceptions/bad-request";
// // import { Address, User } from "@prisma/client";
// import { addressSchema, UpdateUserSchema } from "../schemas/users";

// /**
//  * 
//  * @param req 
//  * @param res 
//  * 
//  * 
//  *   ================================== ADDING A NEW USER BY ADMIN  ==================================
//  * 
//  * 
//  */

// export const addUser = async (req: Request, res: Response) => {
//   const { email, password, name, username, role } = req.body;
//   const user = await prismaClient.user.create({
//     data: {
//       email,
//       password,
//       name,
//       username,
//       role,
//     },
//   });
//   res.json(user);
// }


// /**
//  * 
//  * @param req 
//  * @param res 
//  * 
//  * 
//  *   ================================== CHANGE THE USER ROLE BASED ON THE USER ID  ==================================
//  * 
//  * 
//  */
// export const changeUserRole = async (req: Request, res: Response) => {
//   const id = +req.params.id;
//   const role = req.body.role;
//   let user;
//   if (role == "SUPER_ADMIN") {
//     user = await prismaClient.user.update({
//       where: {
//         id: id,
//       },
//       data: {
//         role: role,
//         permissions: {
//           set: ["ALL", "CREATE", "READ", "UPDATE", "DELETE"],
//         },
//       },
//     });
//   } else if (role == "ADMIN") {
//     user = await prismaClient.user.update({
//       where: {
//         id: id,
//       },
//       data: {
//         role: role,
//         permissions: {
//           set: ["CREATE", "READ", "UPDATE", "DELETE"],
//         },
//       },
//     });
//   } else {
//     user = await prismaClient.user.update({
//       where: {
//         id: id,
//       },
//       data: {
//         role: role,
//       },
//     });
//   }
//   res.json(user);
// };

// /**
//  * 
//  * @param req 
//  * @param res 
//  * 
//  * 
//  *   ================================== CHANGE THE USER PERMISSIONS BASED ON THE USER ID ==================================
//  * 
//  * 
//  */



// export const changeUserPermission = async (req: Request, res: Response) => {
//   const id = +req.params.id;
//   const permissions = req.body.permissions; // array of permissions
//   const user = await prismaClient.user.update({
//     where: {
//       id: id,
//     },
//     data: {
//       permissions: permissions,
//     },
//   });
//   res.json(user);
// };

// /**
//  * 
//  * @param req 
//  * @param res 
//  * 
//  * 
//  *     ================================== ADD A NEW ADDRESS BASED ON THE USER ID ==================================
//  * 
//  * 
//  */


// export const addAddress = async (req: Request, res: Response) => {
//   addressSchema.parse(req.body);
//   let user: User;
//   let userId = req.params.id;
  
//   // creating the address data and store it

//   const address = await prismaClient.address.create({
//     data: { ...req.body, userId: userId },
//   });

//   res.json(address);
// };


// /**
//  * 
//  * @param req 
//  * @param res 
//  * 
//  * 
//  *      ================================== DELETE THE ADDRESS BASED ON THE ADDRESS ID ==================================
//  * 
//  * 
//  */


// export const deleteAddress = async (req: Request, res: Response) => {
//   try {
//     await prismaClient.address.delete({
//       where: {
//         id: +req.params.id,
//       },
//     });
//     res.sendStatus(200);
//   } catch (error) {
//     throw new NotFoundException(
//       "Address not found!",
//       ErrorCodes.USER_NOT_FOUND
//     );
//   }
// };


// /**
//  * 
//  * @param req 
//  * @param res 
//  * 
//  *    =========================== FIND ALL THE ADDRESSES BASED ON THE USER ID ===========================
//  * 
//  * 
// */

// export const listAddress = async (req: Request, res: Response) => {
//   const data = await prismaClient.address.findMany({
//     where: {
//       userId: +req.params.id,
//     },
//   });
//   res.json(data);
// };

// /**
//  * 
//  * @param req 
//  * @param res 
//  * 
//  * 
//  *   =========================== UPDATE THE ADDRESS BASED ON THE ADDRESS ID ===========================
//  */

// export const updateUserAddress = async (req: Request, res: Response) => {
//   const validateData = UpdateUserSchema.parse(req.body);
//   let id = req.user?.id;
//   let shippingAddress: Address;
//   let billingAddress: Address;
//   if (validateData.defaultShippingAddress) {
//     try {
//       shippingAddress = await prismaClient.address.findFirstOrThrow({
//         where: {
//           id: validateData.defaultShippingAddress,
//         },
//       });
//       if (shippingAddress.userId !== id) {
//         throw new BadRequestException(
//           "Address not found!",
//           ErrorCodes.ADDRESS_DOES_NOT_BELONG
//         );
//       }
//     } catch (error) {
//       throw new NotFoundException(
//         "Address not found!",
//         ErrorCodes.ADDRESS_NOT_FOUND
//       );
//     }
//   }
//   if (validateData.defaultBillingAddress) {
//     try {
//       billingAddress = await prismaClient.address.findFirstOrThrow({
//         where: {
//           id: validateData.defaultBillingAddress,
//         },
//       });
//       if (billingAddress.userId !== id) {
//         throw new BadRequestException(
//           "Address not found!",
//           ErrorCodes.ADDRESS_DOES_NOT_BELONG
//         );
//       }
//     } catch (error) {
//       throw new NotFoundException(
//         "Address not found!",
//         ErrorCodes.ADDRESS_NOT_FOUND
//       );
//     }
//   }

//   const updateUser = await prismaClient.user.update({
//     where: {
//       id: id,
//     },
//     data: {
//       defaultBillingAddr: validateData.defaultBillingAddress,
//       defaultShippingAddr: validateData.defaultShippingAddress,
//     },
//   });
//   res.json(updateUser);
// };
