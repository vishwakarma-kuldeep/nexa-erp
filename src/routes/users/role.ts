import { Router } from "express";
import { errorHandler } from "../../errorHandler";
import { addRole, getRoles } from "../../controllers/users/role";


const usersRoute:Router = Router()
usersRoute.post('/add',errorHandler(addRole))
usersRoute.get('/all',errorHandler(getRoles))

export default usersRoute;
