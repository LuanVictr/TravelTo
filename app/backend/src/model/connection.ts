import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017/travelto';

const connection = (
  mongoDatabaseURI = process.env.MONGO_DB_URI
    || MONGO_DB_URL, // process.env.MONGO_URI on docker-compose
) => mongoose.connect(mongoDatabaseURI);

export default connection;