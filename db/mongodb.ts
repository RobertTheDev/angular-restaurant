import { environment } from 'environments/environment';
import { MongoClient } from 'mongodb';

// // Connection URL
const url = environment.mongoDBUrl;
const client = new MongoClient(url);

// // Database Name
const dbName = 'Restaurant';

const db = client.db(dbName);

export default db;
