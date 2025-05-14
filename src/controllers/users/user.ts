import e, { Request, Response } from "express";
import { NotFoundException } from "../../exceptions/notFound";
import { ErrorCodes } from "../../exceptions/roots"; // Removed as the module does not exist
// import { PrismaClient } from "@prisma/client";
import { BadRequestException } from "../../exceptions/bad-request";
import { User } from "@prisma/client";
import { signupSchema, findSchema, roleSchema } from "../../schemas/users";
import { prismaClient } from "../..";

export const signup = async(req: Request, res: Response) => {
    signupSchema.parse(req.body);
    const { email, password, name,  role } = req.body;
    const user = await prismaClient.user.create({
        data: {
            email,
            password,
            name,
            roleId: role,
        },
    });
    res.json(user);

}
