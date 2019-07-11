const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  code: String,
  fullUrl: String,
  shortenedUrl: String
});

module.exports = mongoose.model("Url", urlSchema);
