const router = require("express").Router();

const recordRoutes = require("./records/recordsRoutes.js");

router.use("/records", recordRoutes);

module.exports = router;
