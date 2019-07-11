const dotenv = require("dotenv").config();
const db = require("./database/").init();

const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const { urls } = require("./controllers");

const app = express();

app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/:code", async (req, res) => {
  const { code } = req.params;
  const { fullUrl } = await urls.get(code);

  res.redirect(fullUrl);
});

const PORT = process.env.PORT || 3070;

app.listen(PORT, () => console.log(`Connected on Port ${PORT}.`));
