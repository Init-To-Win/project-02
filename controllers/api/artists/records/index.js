const router = require("express").Router();

const recordRoutes = require("./recordsRoutes.js");
// const forSaleRoutes = require("./forSale.js");
// const reviewsRoutes = require("./reviewsRoutes.js");

//http://localhost:3001/api/artists/records
router.use("/", recordRoutes);
//http://localhost:3001/api/artists/records/forSale
// router.use("/forSale", forSaleRoutes);
//http://localhost:3001/api/artists/records/reviews
// router.use("/reviews", reviewsRoutes);

module.exports = router;
