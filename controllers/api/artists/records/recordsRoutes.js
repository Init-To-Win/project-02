const router = require("express").Router();
const { Record } = require("../../models");

//http://localhost:3001/api/artist/records
router.get("/", (req, res) => {
  //direct to page with all records
});

router.post("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
