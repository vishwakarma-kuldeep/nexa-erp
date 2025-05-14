import { Router } from "express";
import { errorHandler } from "../../errorHandler";
import { signup } from "../../controllers/users/user";
import { checkRole } from "../../middlewares/role";


const userRoute:Router = Router()
userRoute.post('/signup',[checkRole],errorHandler(signup))
// userRoute.get('/get',errorHandler(getRoles))

export default userRoute;