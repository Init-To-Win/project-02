const router = require("express").Router();
const artistRoutes = require("./artists");
const userRoutes = require("./userRoutes.js");

//http://localhost:3001/api/artists
router.use("/artists", artistRoutes);

//http://localhost:3001/api/users
router.use("/users", userRoutes);

module.exports = router;
