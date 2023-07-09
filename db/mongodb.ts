import { MongoClient } from 'mongodb';

const connectionString = 'mongodb://localhost:27017/';
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
  process.exit(1); // Terminate the script if the connection fails
}

const db = conn.db('Restaurant');

export default db;
