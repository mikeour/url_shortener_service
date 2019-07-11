const dotenv = require("dotenv").config();
const db = require("./database/").init();

const express = require("express");
const parser = require("body-parser");
const apiRouter = require("./routes");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3070;

app.listen(PORT, () => console.log(`Connected on Port ${PORT}.`));
