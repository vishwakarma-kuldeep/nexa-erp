import { Request, Response, Errback, NextFunction } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { ErrorCodes } from "../exceptions/roots";
import { BadRequestException } from "../exceptions/bad-request";
import { changePasswordSchema, findSchema, signupSchema } from "../schemas/users";
import { NotFoundException } from "../exceptions/notFound";
import { comparePassword, hashPassword } from "../helpers/hasher";
import { jwtGenerator } from "../helpers/token";

// console.log(bloom.has('foo')); // true
export const login: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  findSchema.parse(req.body);
  const { email, password, username } = req.body;
  let user: any;
  if (email.includes("@")) {
    // implement bloom filter here with redis
    user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
  } 
  if (!user) {
    throw new NotFoundException(
      "User does not exist!",
      ErrorCodes.USER_NOT_FOUND
    );
  }
  const comparePass = user?.password ? comparePassword(password, user.password) : false;
  if (!comparePass) {
    throw new BadRequestException(
      "Invalid credentials",
      ErrorCodes.INCORRECT_PASSWORD
    );
  }
  const payload = {
    id: user.id,

    role: user.role,
  };
  const token = jwtGenerator(payload);
  res.json({ message: "User Logged in successfully!", token });
};

export const signup: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  signupSchema.parse(req.body);
  const { email, password, name, role } = req.body;

  if (role === "admin" || role === "superadmin") {
    throw new BadRequestException("Invalid role", ErrorCodes.INVALID_ROLE);
  }
  const user = await prismaClient.user.findFirst({
    where: {
      email,
     
    },
  });
  if (user) {
    throw new BadRequestException(
      "User already exists",
      ErrorCodes.USER_ALREADY_EXIST
    );
  }
  const hash = await hashPassword(password);
  await prismaClient.user.create({
    data: {
      email,
      password: hash,
      name,
     
      role,
    },
  });
  res.status(201).json({ message: "User created successfully" });
};

export const me = async (req: Request, res: Response, next: NextFunction) => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: req?.user?.id,
    },
  });

  res.json(user);
};

export const changePassword = async(req:Request,res:Response,next:NextFunction)=>{

  changePasswordSchema.parse(req.body);
  const {oldPassword,newPassword} = req.body;
  const userData = await prismaClient.user.findUnique({
    where:{
      id:req?.user?.id
    }
  })
  // console.log(userData)
  if(!userData){
    throw new BadRequestException("No Record Found!",ErrorCodes.NOT_FOUND)
  }
  const comparePass = userData?.password ? await comparePassword(oldPassword, userData.password) : false;
  // console.log(comparePass)
  if(!comparePass){
    throw new BadRequestException("Invalid old password",ErrorCodes.INCORRECT_OLD_PASSWORD)
  }
  const hash = await hashPassword(newPassword);
  await prismaClient.user.update({
    where:{
      id:req?.user?.id
    },
    data:{
      password:hash
    }
  })
  res.json({message:"Password changed successfully!"})
}
