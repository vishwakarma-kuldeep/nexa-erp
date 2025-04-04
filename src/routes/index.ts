import { Router } from "express";
import auth from "./auth";
const rootRoutes:Router = Router();
import docsRoute from './docs'
import usersRoute from "./users";
import companyRoute from "./company";
import { authMiddleware } from "../middlewares/authMiddleware";
import { apiLog } from "../middlewares/apiLog";

rootRoutes.use('/auth',auth);
rootRoutes.use('/docs',docsRoute)
rootRoutes.use(authMiddleware)
rootRoutes.use(apiLog)
rootRoutes.use('/company',companyRoute)
rootRoutes.use('/users',usersRoute)
export default rootRoutes;