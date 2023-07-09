import { usersCollection } from 'db/mongodb';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import { ObjectId } from 'mongodb';

const updateUserById: express.Handler = async (req, res) => {
  try {
    const data = await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(req.params['id']) },
      { $set: req.body },
    );

    if (!data) {
      res.status(StatusCodes.NOT_FOUND).send(null);
    }
    res.status(StatusCodes.OK).send(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default updateUserById;
