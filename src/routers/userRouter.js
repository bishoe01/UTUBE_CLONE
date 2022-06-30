import express from 'express';
import { edituser , removeuser } from '../controllers/userController';
const userRouter= express.Router();


userRouter.get('/edit', edituser);
userRouter.get('/delete', removeuser);
export default userRouter;