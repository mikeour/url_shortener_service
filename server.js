const dotenv = require("dotenv").config();
const db = require("./database/").init();

const express = require("express");
const parser = require("body-parser");
const apiRouter = require("./routes");
const { urls } = require("./controllers/");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.get("/:code", async (req, res) => {
  const { fullUrl } = await urls.get(req.params.code);

  res.redirect(fullUrl);
});

const PORT = process.env.PORT || 3070;

app.listen(PORT, () => console.log(`Connected on Port ${PORT}.`));
