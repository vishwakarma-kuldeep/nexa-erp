"use strict";
/**
 *   ==============================================  API LOG  ==============================================
 *   This middleware is used to log the API request (WHICH API IS HITTING BY WHOM)
 *
 *
 *   This middleware logs the API request, the user who hit the API, and the time the API was hit.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// export const apiLog = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const id = req?.user?.id;
//     if (!id) {
//       return next(new Error("User ID is missing"));
//     }
//     const { method, url } = req;
//     const apiLog = await prismaClient.userApiLogs.create({
//       data: {
//         user: {
//           connect: {
//             id,
//           },
//         },
//         method,
//         url,
//       },
//     });
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
