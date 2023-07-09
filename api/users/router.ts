import * as express from 'express';

const userRouter = express.Router();

const users = [
  {
    id: '1b',
    firstName: 'David',
    lastName: 'Owens',
  },
];

userRouter.get('/', (_req, res) => {
  try {
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

userRouter.get('/:id', (req, res) => {
  try {
    const user = users.find((props) => props.id === req.params.id);

    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

export default userRouter;
