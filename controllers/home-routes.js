const router = require("express").Router();
const { Record, Artist, User, UserRecord } = require("../models");

//http://localhost:3001
router.get("/", async (req, res) => {
  //what do we want displayed on our landing page
  try {
    let randAmt = 6;
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

//http://localhost:3001/addArtist
router.get("/addArtist", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("addArtist");
});

//http://localhost:3001/addRecord
router.get("/addRecord", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("addAlbum", {
    loggedIn: req.session.loggedIn,
    userId: req.session.userId,
  });
});

//http://localhost:3001/login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// http://localhost:3001/artist/:id
router.get("/artist/:id", async (req, res) => {
  try {
    const artistData = [
      await Artist.findByPk(req.params.id, {
        include: [
          {
            model: Record,
          },
        ],
      }),
    ];
    if (!artistData) {
      res.status(404).json({ message: "No artist found with that id!" });
      return;
    }

    const artists = artistData.map((artist) => artist.get({ plain: true }));
    console.log(artists[0]);
    res.render("artist", {
      artists,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
    console.log(artists);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/album/:id
router.get("/album/:id", async (req, res) => {
  try {
    const recordData = [
      await Record.findByPk(req.params.id, {
        include: [
          {
            model: Artist,
          },
        ],
      }),
    ];
    if (!recordData) {
      res.status(404).json({ message: "No record found with that id!" });
    }

    const records = recordData.map((record) => record.get({ plain: true }));
    console.log(records[0]);
    res.render("album", {
      records,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
    console.log(records);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/userpage
router.get("/userpage", async (req, res) => {
  try {
    const userData = [
      await User.findByPk(req.session.userId, {
        include: [
          {
            model: Record,
            through: UserRecord,
            as: "user_records",
            include: [{ model: Artist }],
          },
        ],
      }),
    ];
    console.log(`*************${req.session.userId}****************`);
    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    const users = userData.map((user) => user.get({ plain: true }));
    console.log(users[0].user_records);
    res.render("userpage", {
      users,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
    // res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// //http://localhost:3001/search
// router.post("/search", async (req, res) => {
//   //page to display search results
// });

module.exports = router;
