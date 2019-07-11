const router = require("express").Router();
const { urls } = require("../controllers");

router.post("/add", async (req, res) => {
  const { fullUrl } = req.body;
  const url = await urls.add(fullUrl);

  res.json(url);
});

module.exports = router;
