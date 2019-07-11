const router = require("express").Router();
const { urls } = require("../controllers");

router.post("/add", async (req, res) => {
  const { long } = req.body;
  const url = await urls.add(long);

  res.json(url);
});

module.exports = router;
