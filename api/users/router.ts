import db from 'db/mongodb';
import * as express from 'express';
import { ObjectId } from 'mongodb';

const userRouter = express.Router();

const userCollection = db.collection('users');

userRouter.get('/', async (_req, res) => {
  try {
    const results = await userCollection.find({}).toArray();
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

userRouter.get('/:id', async (req, res) => {
  try {
    const data = await userCollection.findOne({
      _id: new ObjectId(req.params.id),
    });
    if (!data) {
      res.send(null);
    }
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

export default userRouter;
