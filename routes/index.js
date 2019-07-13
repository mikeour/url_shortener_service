const router = require("express").Router();
const { urls } = require("../controllers");

// router.get("/:code", async (req, res) => {
//   const { code } = req.params;
//   const { fullUrl } = await urls.get(code);

//   res.redirect(fullUrl);
// });

router.get("/all", async (req, res) => {
  const allUrls = await urls.all();

  res.json(allUrls);
});

router.post("/add", async (req, res) => {
  const { fullUrl } = req.body;
  const url = await urls.add(fullUrl);

  res.json(url);
});

module.exports = router;
