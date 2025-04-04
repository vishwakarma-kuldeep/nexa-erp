import  { Router } from "express";
import { changePassword, login, me, signup } from "../controllers/auth";
import { errorHandler } from "../errorHandler";
import { authMiddleware } from "../middlewares/authMiddleware";
import { checkRole } from "../middlewares/checkRole";

const authRoute:Router = Router();

authRoute.post('/login',errorHandler(login));
authRoute.post('/signup',[checkRole],errorHandler(signup))
authRoute.get('/me',[authMiddleware],errorHandler(me))

authRoute.put('/change-password',[authMiddleware],errorHandler(changePassword))


export default authRoute;

// Swagger


/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     description: Login into the website.
 *     tags: [User] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number,  one letter,One UpperCase and One special charector  
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: Password@123
 *     responses:
 *       "200":
 *         description: Login
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger  
 * /auth/register:
 *   post:
 *     summary: Register new user
 *     description: Register into the system
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description:  At least one number,  one letter,One UpperCase and One special charector  
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: Password@123
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */