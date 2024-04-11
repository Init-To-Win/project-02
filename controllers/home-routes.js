const router = require("express").Router();
const { Record } = require("../models");

//http://localhost:3001
router.get("/", async (req, res) => {
  //what do we want displayed on our landing page
  try {
    const dbRecordData = await Record.findAll({
      include: [{ model: Artist, attributes: ["name"] }],
    });

    const records = dbRecordData.map((artist) => artist.get({ plain: true }));

    const index1 = math.floor(math.random() * (records.length - 1));
    const index2 = math.floor(math.random() * (records.length - 1));
    const index3 = math.floor(math.random() * (records.length - 1));
    const index4 = math.floor(math.random() * (records.length - 1));
    const index5 = math.floor(math.random() * (records.length - 1));
    const index6 = math.floor(math.random() * (records.length - 1));

    const randomRecords = [
      records[index1],
      records[index2],
      records[index3],
      records[index4],
      records[index5],
      records[index6],
    ];

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
