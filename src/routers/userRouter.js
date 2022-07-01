import express from 'express';
import { edituser , removeuser , see , logout} from '../controllers/userController';
const userRouter= express.Router();

userRouter.get('/edit', edituser);
userRouter.get('/remove', removeuser);
userRouter.get('/logout', logout);
userRouter.get('/:id(\\d+)', see);

export default userRouter;