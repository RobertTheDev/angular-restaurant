import { usersCollection } from 'db/mongodb';
import * as express from 'express';

const getUsers: express.Handler = async (_req, res) => {
  try {
    const results = await usersCollection.find({}).toArray();
    res.send(results);
  } catch (error) {
    res.send(error);
  }
};

export default getUsers;
