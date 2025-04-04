import dotenv from 'dotenv';
dotenv.config({
    path:'./.env',
   
});

if (!process.env.PORT) {
 throw new Error('PORT is not defined in the environment variables');
}



export const PORT = process.env.PORT ; 
export const JWT_SECRET = process.env.JWT_SECRET! ;