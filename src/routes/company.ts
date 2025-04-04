import Router from "express";
import { createCompany } from "../controllers/company";
import { errorHandler } from "../errorHandler";
import { authMiddleware } from "../middlewares/authMiddleware";
import { checkPermission } from "../middlewares/permission";
import { checkCompany } from "../middlewares/checkCompany";
const companyRoute = Router();

companyRoute.post('/',[checkPermission(['CREATE','READ']),checkCompany],errorHandler(createCompany));



export default companyRoute;