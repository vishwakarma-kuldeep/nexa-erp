// import { User } from "@prisma/client"
import express from 'express'


// declare global {
//     namespace Express {
//       interface Request {
//         user?: User
//       }
//     }
//   }


  import { Role } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        username: string;
        role: Role;
      };
    }
  }
}