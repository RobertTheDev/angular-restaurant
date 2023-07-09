import { usersCollection } from 'db/mongodb';
import * as express from 'express';

const createUser: express.Handler = async (req, res) => {
  try {
    const data = await usersCollection.insertOne(req.body);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

export default createUser;
