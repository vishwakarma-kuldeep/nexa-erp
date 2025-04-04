import express,{Express,Request,Response} from 'express';

import rootRoutes from './routes';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';



import { PORT } from './secrets';
import { errorMiddleware } from './middlewares/errors';
const app:Express = express();


app.use(express.json());
app.use(morgan('dev'));

// Initializing the prisma client
export const prismaClient = new PrismaClient({
    log: ['warn', 'error'],
    
})

console.log('Prisma client initialized');

// Initialize routes
app.use('/api/',rootRoutes)


 
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World');
});




app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log('Server is running on PORT ',PORT);
});