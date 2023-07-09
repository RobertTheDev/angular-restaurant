import { usersCollection } from 'db/mongodb';
import * as express from 'express';
import { ObjectId } from 'mongodb';

const getUserById: express.Handler = async (req, res) => {
  try {
    const data = await usersCollection.findOne({
      _id: new ObjectId(req.params['id']),
    });
    if (!data) {
      res.send(null);
    }
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

export default getUserById;
