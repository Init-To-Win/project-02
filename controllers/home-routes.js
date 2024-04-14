const router = require("express").Router();
const { Record,Artist } = require("../models");

//http://localhost:3001
router.get("/", async (req, res) => {
  //what do we want displayed on our landing page
  try {
    let randAmt = 12;
    const dbRecordData = await Record.findAll({
      include: [{ model: Artist, attributes: ["name"] }],
    });
    const records = dbRecordData.map((record) => record.get({ plain: true }));
    const randomRecords = [];
    const prevIdx = [];
    // pick randAmt of records but do not display the same record twice
    // ensures that when asked for last record it is not missed (12 is shown without repeats)
    for (let i = 0; i < randAmt; i++) {
      let idx = Math.floor(Math.random() * records.length);
      if (!prevIdx.includes(idx)) {
        prevIdx.push(idx);
        randomRecords.push(records[idx]);
      } else i--;
    }
    res.render("homepage", {
      randomRecords,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// //http://localhost:3001/login
// router.get("/login", (req, res) => {
//   //direct to login/register page
// });

// //http://localhost:3001/search
// router.post("/search", async (req, res) => {
//   //page to display search results
// });

module.exports = router;
