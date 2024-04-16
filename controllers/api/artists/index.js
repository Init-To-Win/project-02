const router = require("express").Router();
const artistRoutes = require("./artistRoutes");
const recordRoutes = require("./records");

//http://localhost:3001/api/artists/records
router.use("/records", recordRoutes);
router.use("/", artistRoutes);

module.exports = router;
