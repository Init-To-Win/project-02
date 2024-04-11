const router = require("express").Router();

const recordRoutes = require("./recordsRoutes.js");
const forSaleRoutes = require("./forSale");
const reviewsRoutes = require("./reviewsRoutes");

router.use("/", recordRoutes);
router.use("/forSale", forSaleRoutes);
router.use("/reviews", reviewsRoutes);

module.exports = router;
