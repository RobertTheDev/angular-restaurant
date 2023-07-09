import { usersCollection } from 'db/mongodb';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';

const getUsers: express.Handler = async (_req, res) => {
  try {
    const data = await usersCollection.find({}).toArray();
    res.status(StatusCodes.OK).send(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default getUsers;
