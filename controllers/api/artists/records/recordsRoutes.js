const router = require("express").Router();
const { Record, Artist } = require("../../../../models");

//http:localhost3001/api/artists/records
router.get("/", async (req, res) => {
  try {
    const recordData = await Record.findAll();
    console.log(recordData);
    res.status(200).json(recordData);
  } catch (err) {
    res.status(500).json(err);
  }
  //direct to page with all records
});

router.post("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
