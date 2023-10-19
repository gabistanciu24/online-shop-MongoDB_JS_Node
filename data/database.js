const mongodb = require("mongodb");
const express = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGO_CONNECTION_STRING;
const MongoClient = mongodb.MongoClient;

const app = express();

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.uri);
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }

  return database;
}

client.connect((err) => {
  if (err) {
    console.error(err);
    return false;
  }
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
