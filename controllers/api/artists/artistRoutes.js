const router = require("express").Router();
const { Artist } = require("../../../models");

//http://localhost:3001/api/artists

router.get("/", (req, res) => {

    //direct to page with all artists available

  });

  //http://localhost:3001/api/artists/:id

router.get("/:id", (req, res) => {

    //page for specific artist

  });

module.exports = router;
