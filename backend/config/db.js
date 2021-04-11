require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;

const connectToDb = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
