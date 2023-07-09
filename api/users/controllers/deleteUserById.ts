import { usersCollection } from 'db/mongodb';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import { ObjectId } from 'mongodb';

const deleteUserById: express.Handler = async (req, res) => {
  try {
    const data = await usersCollection.findOneAndDelete({
      _id: new ObjectId(req.params['id']),
    });
    res.status(StatusCodes.ACCEPTED).send(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default deleteUserById;
