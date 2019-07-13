const dotenv = require("dotenv").config();
const db = require("./database/").init();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("client/dist"));

app.use("/api", require("./routes"));

const PORT = process.env.PORT || 3070;

app.listen(PORT, () => console.log(`Connected on Port ${PORT}.`));
