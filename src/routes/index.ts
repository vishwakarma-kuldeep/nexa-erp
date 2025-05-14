import { Router } from "express";
const rootRoutes:Router = Router();

import usersRoleRoute from "./users/role";
import usersRoute from "./users/user";
rootRoutes.use('/users/role',usersRoleRoute)
rootRoutes.use('/users',usersRoute)

export default rootRoutes;


// import auth from "./auth";
// import docsRoute from './docs'
// // import usersRoute from "./users";
// import companyRoute from "./company";
// import { authMiddleware } from "../middlewares/authMiddleware";
// import { apiLog } from "../middlewares/apiLog";

// // rootRoutes.use('/auth',auth);
// // rootRoutes.use('/docs',docsRoute)
// // rootRoutes.use(authMiddleware)
// // rootRoutes.use(apiLog)
// // rootRoutes.use('/company',companyRoute)
// // rootRoutes.use('/users',usersRoute