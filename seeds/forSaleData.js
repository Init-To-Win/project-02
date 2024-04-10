const { ForSale } = require("../models");

const forSaleData = [
  {
    amount: "",
    record_id: "",
    user_id: "",
  },
];

const seedForSales = () => ForSale.bulkCreate(forSaleData);

module.exports = seedForSales;
