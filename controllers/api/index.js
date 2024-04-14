const router = require("express").Router();
const artistRoutes = require("./artists/artistRoutes");
const userRoutes = require("./userRoutes");

//http://localhost:3001/api/artists

router.use("/artists", artistRoutes);

//http://localhost:3001/api/users

router.use("/users", userRoutes);

module.exports = router;
