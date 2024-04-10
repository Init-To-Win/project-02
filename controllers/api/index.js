const router = require("express").Router();

const artistRoutes = require("./artistRoutes");
const forSaleRoutes = require("./forSaleRoutes");
const recordRoutes = require("./recordsRoutes");
const reviewsRoutes = require("./reviewsRoutes");
const userRoutes = require("userRoutes");

router.use("/artists", artistRoutes);
router.use("/forSale", forSaleRoutes);
router.use("/records", recordRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/users", userRoutes);

module.exports = router;
