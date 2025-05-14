import e, { Request, Response } from "express";
import { NotFoundException } from "../../exceptions/notFound";
import { ErrorCodes } from "../../exceptions/roots"; // Removed as the module does not exist
import { PrismaClient } from "@prisma/client";
import { BadRequestException } from "../../exceptions/bad-request";
import { User } from "@prisma/client";
import { signupSchema, findSchema, roleSchema } from "../../schemas/users";

export const addRole = async (req: Request, res: Response) => {
  roleSchema.parse(req.body);
  const { name, description } = req.body;
  const prisma = new PrismaClient();
  const existingRole = await prisma.roles.findUnique({
    where: {
      name: name,
    },
  });
  if (existingRole) {
    throw new BadRequestException(
      "Role already exists",
      ErrorCodes.ROLE_ALREADY_EXISTS
    );
  }
  const role = await prisma.roles.create({
    data: {
      name,
      description,
    },
  });
  res.json(role);
};

export const getRoles = async (req: Request, res: Response) => {
  
  const prisma = new PrismaClient();
  const role = await prisma.roles.findMany();
  if (!role) {
    throw new NotFoundException(
      "Role not found",
      ErrorCodes.ROLE_NOT_FOUND
    );
  }
  if (role.length === 0) {
    throw new NotFoundException(
      "No roles found",
      ErrorCodes.NOT_FOUND
    );
  }

  res.json(role);
};
