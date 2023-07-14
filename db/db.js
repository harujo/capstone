const mongoose = require("mongoose");

const dbUser = process.env.mongodb_user;
const dbPass = process.env.mongodb_pass;
const dbHost = process.env.mongodb_host;
const dbName = process.env.mongo_db_name;

//const mongoURI = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}`;
const mongoURI =
  "mongodb+srv://harujowork:putri819@cluster0.r5s03sx.mongodb.net/tracker2";
const db = async () => {
  console.log(process.env.mongoURI);
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error", error);
  }
};

module.exports = { db };
