import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { errorHandler } from "../errorHandler";
// import { addAddress, deleteAddress, listAddress, updateUserAddress } from "../controllers/users";

// const usersRoute:Router = Router()
// usersRoute.post('/add',errorHandler(addAddress))
// usersRoute.delete('/:id',errorHandler(deleteAddress))
// usersRoute.get('/:id',errorHandler(listAddress))
// usersRoute.put('/:id',errorHandler(updateUserAddress))


// export default usersRoute;