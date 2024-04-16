const router = require("express").Router();
const { Artist, Record } = require("../../../models");

//http://localhost:3001/api/artists

router.get("/", (req, res) => {
  //direct to page with all artists available
});

//http://localhost:3001/api/artists/:id

router.get("/:id", async (req, res) => {
  try {
    const artistData = await Artist.findByPk(req.params.id, {
      include: [
        {
          model: Record,
        },
      ],
    });
    if (!artistData) {
      res.status(404).json({ message: "No artist found with that" });
      return;
    }
    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
