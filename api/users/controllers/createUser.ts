import { usersCollection } from 'db/mongodb';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';

const createUser: express.Handler = async (req, res) => {
  try {
    const data = await usersCollection.insertOne(req.body);

    res.status(StatusCodes.CREATED).send(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default createUser;
