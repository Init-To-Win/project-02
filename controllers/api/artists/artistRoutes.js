const router = require("express").Router();
const { Artist, Record } = require("../../../models");

//http://localhost:3001/api/artists

router.get("/", async (req, res) => {
  try {
    const artistData = await Artist.findAll({
      include: [
        {
          model: Record,
        },
      ],
    });

    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
  //direct to page with all artists available
});

//http://localhost:3001/api/artists/:id
router.get("/:id", async (req, res) => {
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
    // res.status(200).json(artistData);

    const artists = artistData.map((artist) => artist.get({ plain: true }));
    console.log(artists[0]);
    res.render("artist", {
      artists,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/artists
router.post("/", async (req, res) => {
  try {
    console.log("HELLO WORLD");
    const artistCheck = await Artist.findOne({
      where: { name: req.body.name },
    });
    if (artistCheck) {
      res.status(200).json({ message: "Artist already in database." });
      return;
    }
    const artistData = await Artist.create({
      name: req.body.name,
      bio: req.body.bio,
    });
    res.status(200).json(artistData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/artists/:id
router.put("/:id", async (req, res) => {
  try {
    const artistData = await Artist.update(
      {
        name: req.body.name,
        image: req.body.image,
        bio: req.body.bio,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!artistData) {
      res.status(404).json({ message: "No artist found with that id!" });
      return;
    }
    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/artists/:id
router.delete("/:id", async (req, res) => {
  try {
    const artistData = await Artist.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!artistData) {
      res.status(404).json({ message: "No artist found with that id!" });
      return;
    }
    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
