const router = require("express").Router();
const artistRoutes = require("./artistRoutes");
const recordRoutes = require("./records");

<<<<<<< HEAD
const recordRoutes = require("./records");

=======
//http://localhost:3001/api/artists/records
>>>>>>> main
router.use("/records", recordRoutes);
router.use("/", artistRoutes);

module.exports = router;
