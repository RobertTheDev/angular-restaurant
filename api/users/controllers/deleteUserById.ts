import { usersCollection } from 'db/mongodb';
import * as express from 'express';
import { ObjectId } from 'mongodb';

const deleteUserById: express.Handler = async (req, res) => {
  try {
    const data = await usersCollection.findOneAndDelete({
      _id: new ObjectId(req.params['id']),
    });

    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

export default deleteUserById;
