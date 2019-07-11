const router = require("express").Router();
const { urls } = require("../controllers");

router.get("/:code", async (req, res) => {
  const url = await urls.get(req.params.code);

  res.redirect("http://" + url.long);
});

router.post("/add", async (req, res) => {
  const { long } = req.body;
  const url = await urls.add(long);

  res.json(url);
});

module.exports = router;
