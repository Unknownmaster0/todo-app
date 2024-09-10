require("dotenv").config();
const mongoose = require("mongoose");

async function connectionDB() {
  try {
    const connectionObj = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log(
      `Connection with database is successful ${connectionObj.connection.host}`
    );
  } catch (err) {
    console.log(`error while connection with database`);
    console.error(err);
    throw err;
  }
}

module.exports = {
  connectionDB,
};
