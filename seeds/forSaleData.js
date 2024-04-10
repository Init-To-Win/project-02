const { ForSale } = require("../models");

const forSaleData = [
  {
    amount: 1.99,
    record_id: 1,
    user_id: 1,
  },
  {
    amount: 7.49,
    record_id: 1,
    user_id: 2,
  },
  {
    amount: 3.99,
    record_id: 1,
    user_id: 3,
  },
  {
    amount: 5.99,
    record_id: 2,
    user_id: 4,
  },
  {
    amount: 2.49,
    record_id: 2,
    user_id: 5,
  },
  {
    amount: 5.49,
    record_id: 2,
    user_id: 6,
  },
  {
    amount: 7.39,
    record_id: 3,
    user_id: 7,
  },
  {
    amount: 5.99,
    record_id: 3,
    user_id: 8,
  },
  {
    amount: 6.49,
    record_id: 3,
    user_id: 9,
  },
  {
    amount: 1.99,
    record_id: 4,
    user_id: 10,
  },
  {
    amount: 2.49,
    record_id: 4,
    user_id: 11,
  },
  {
    amount: 47.5,
    record_id: 4,
    user_id: 12,
  },
  {
    amount: 5.99,
    record_id: 5,
    user_id: 1,
  },
  {
    amount: 17.39,
    record_id: 5,
    user_id: 2,
  },
  {
    amount: 2.99,
    record_id: 5,
    user_id: 3,
  },
  {
    amount: 5.99,
    record_id: 6,
    user_id: 4,
  },
  {
    amount: 9.99,
    record_id: 6,
    user_id: 5,
  },
  {
    amount: 7.99,
    record_id: 6,
    user_id: 6,
  },
  {
    amount: 14.39,
    record_id: 7,
    user_id: 7,
  },
  {
    amount: 9.99,
    record_id: 7,
    user_id: 8,
  },
  {
    amount: 6.69,
    record_id: 7,
    user_id: 9,
  },
  {
    amount: 7.49,
    record_id: 8,
    user_id: 10,
  },
  {
    amount: 9.99,
    record_id: 8,
    user_id: 11,
  },
  {
    amount: 11.39,
    record_id: 8,
    user_id: 12,
  },
  {
    amount: 5.99,
    record_id: 9,
    user_id: 1,
  },
  {
    amount: 6.69,
    record_id: 9,
    user_id: 2,
  },
  {
    amount: 9.99,
    record_id: 9,
    user_id: 3,
  },
  {
    amount: 7.49,
    record_id: 10,
    user_id: 4,
  },
  {
    amount: 1.99,
    record_id: 10,
    user_id: 5,
  },
  {
    amount: 5.99,
    record_id: 10,
    user_id: 6,
  },
  {
    amount: 9.99,
    record_id: 11,
    user_id: 7,
  },
  {
    amount: 7.49,
    record_id: 11,
    user_id: 8,
  },
  {
    amount: 6.69,
    record_id: 11,
    user_id: 9,
  },
  {
    amount: 13.69,
    record_id: 12,
    user_id: 10,
  },
  {
    amount: 9.99,
    record_id: 12,
    user_id: 11,
  },
  {
    amount: 5.99,
    record_id: 12,
    user_id: 12,
  },
  {
    amount: 7.49,
    record_id: 13,
    user_id: 1,
  },
  {
    amount: 6.69,
    record_id: 13,
    user_id: 2,
  },
  {
    amount: 4.2,
    record_id: 13,
    user_id: 3,
  },
  {
    amount: 9.99,
    record_id: 14,
    user_id: 4,
  },
  {
    amount: 5.99,
    record_id: 14,
    user_id: 5,
  },
  {
    amount: 7.49,
    record_id: 14,
    user_id: 6,
  },
  {
    amount: 6.69,
    record_id: 15,
    user_id: 7,
  },
  {
    amount: 11.49,
    record_id: 15,
    user_id: 8,
  },
  {
    amount: 9.99,
    record_id: 15,
    user_id: 9,
  },
  {
    amount: 5.99,
    record_id: 16,
    user_id: 10,
  },
  {
    amount: 7.49,
    record_id: 16,
    user_id: 11,
  },
  {
    amount: 6.69,
    record_id: 16,
    user_id: 12,
  },
  {
    amount: 7.69,
    record_id: 17,
    user_id: 1,
  },
  {
    amount: 9.99,
    record_id: 17,
    user_id: 2,
  },
  {
    amount: 5.99,
    record_id: 17,
    user_id: 3,
  },
  {
    amount: 7.49,
    record_id: 18,
    user_id: 4,
  },
  {
    amount: 6.69,
    record_id: 18,
    user_id: 5,
  },
  {
    amount: 4.2,
    record_id: 18,
    user_id: 6,
  },
  {
    amount: 9.99,
    record_id: 19,
    user_id: 7,
  },
  {
    amount: 5.99,
    record_id: 19,
    user_id: 8,
  },
  {
    amount: 7.49,
    record_id: 19,
    user_id: 9,
  },
  {
    amount: 6.69,
    record_id: 20,
    user_id: 10,
  },
  {
    amount: 7.39,
    record_id: 20,
    user_id: 11,
  },
  {
    amount: 9.99,
    record_id: 20,
    user_id: 12,
  },
  {
    amount: 7.49,
    record_id: 21,
    user_id: 1,
  },
  {
    amount: 5.99,
    record_id: 21,
    user_id: 2,
  },
  {
    amount: 6.69,
    record_id: 21,
    user_id: 3,
  },
  {
    amount: 9.99,
    record_id: 22,
    user_id: 4,
  },
  {
    amount: 4.2,
    record_id: 22,
    user_id: 5,
  },
  {
    amount: 7.49,
    record_id: 22,
    user_id: 6,
  },
  {
    amount: 5.99,
    record_id: 23,
    user_id: 7,
  },
  {
    amount: 11.39,
    record_id: 23,
    user_id: 8,
  },
  {
    amount: 6.69,
    record_id: 23,
    user_id: 9,
  },
  {
    amount: 9.99,
    record_id: 24,
    user_id: 10,
  },
  {
    amount: 5.99,
    record_id: 24,
    user_id: 11,
  },
  {
    amount: 7.49,
    record_id: 24,
    user_id: 12,
  },
];

const seedForSales = () => ForSale.bulkCreate(forSaleData);

module.exports = seedForSales;
