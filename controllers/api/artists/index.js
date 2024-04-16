const router = require("express").Router();
const artistRoutes = require("./artistRoutes.js");
const recordRoutes = require("./records");

//http://localhost:3001/api/artists/records
router.use("/records", recordRoutes);
//http://localhost:3001/api/artists
router.use("/", artistRoutes);

module.exports = router;
