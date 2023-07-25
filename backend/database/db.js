const mongoose = require("mongoose");

const connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL, {
      dbName: "Books",
    });
    console.log(`Data base connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
