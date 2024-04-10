const sequelize = require("../config/connection");
const seedArtists = require("./artistData");
const seedForSales = require("./forSaleData");
const seedRecords = require("./recordData");
const seedReviews = require("./reviewData");
const seedUsers = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedArtists();
  await seedForSales();
  await seedRecords();
  await seedReviews();
  await seedUsers();
  process.exit(0);
};

seedAll();
