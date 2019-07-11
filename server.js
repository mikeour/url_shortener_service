const dotenv = require("dotenv").config();
const db = require("./database/").init();

const express = require("express");
const URL = require("./database/models/Url");
const parser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3070;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.post("/add", async (req, res) => {
  const { long, short } = req.body;
  const url = await URL.create({ long, short });

  res.json(url);
});

app.listen(PORT, () => console.log(`Connected on Port ${PORT}.`));
