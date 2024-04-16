const router = require("express").Router();

const recordRoutes = require("./records");

router.use("/records", recordRoutes);

module.exports = router;
