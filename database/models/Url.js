const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  long: String,
  short: String,
  code: String
});

module.exports = mongoose.model("Url", urlSchema);
