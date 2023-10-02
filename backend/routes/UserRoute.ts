import express, { Request, Response, NextFunction } from 'express';
import { CreateUser, GetUsers, GetUserById } from '../controllers';


const router = express.Router();

router.post('/newuser', CreateUser);

router.get('/users', GetUsers);

router.get('/user/:id', GetUserById);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Hello from user route"});
})

export {router as UserRoute};