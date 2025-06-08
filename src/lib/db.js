// src/lib/db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db;

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db('deinDatenbankname'); // <--- ändere diesen Namen
  }
  return db;
}