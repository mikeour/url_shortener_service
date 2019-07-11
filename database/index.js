const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

module.exports = {
  init: async () => {
    await mongoose.connect(uri, { useNewUrlParser: true });

    console.log("Connected to MongoDB");
  },
  teardown: async () => {
    await mongoose.disconnect();

    console.log("Disconnected from MongoDB");
  }
};
