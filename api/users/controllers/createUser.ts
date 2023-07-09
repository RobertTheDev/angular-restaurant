import { usersCollection } from 'db/mongodb';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import createUserSchema from '../validators/createUserSchema';

const createUser: express.Handler = async (req, res) => {
  try {
    const input = createUserSchema.parse(req.body);
    const data = await usersCollection.insertOne(input);

    res.status(StatusCodes.CREATED).send(data);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default createUser;
