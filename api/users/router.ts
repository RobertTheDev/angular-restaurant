import * as express from 'express';
import getUsers from './controllers/getUsers';
import getUserById from './controllers/getUserById';
import updateUserById from './controllers/updateUserById';
import deleteUserById from './controllers/deleteUserById';
import createUser from './controllers/createUser';

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUserById);

userRouter.post('/', createUser);

userRouter.put('/:id', updateUserById);

userRouter.delete('/:id', deleteUserById);

export default userRouter;
