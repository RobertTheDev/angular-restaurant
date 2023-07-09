import { usersCollection } from 'db/mongodb';
import * as express from 'express';
import { ObjectId } from 'mongodb';

const updateUserById: express.Handler = async (req, res) => {
  try {
    const data = await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(req.params['id']) },
      { $set: req.body },
    );

    if (!data) {
      res.send(null);
    }
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

export default updateUserById;
