const { Record } = require("../models");

const recordData = [
  {
    cover_art: "",
    name: "",
    artist_id: "",
  },
];

const seedRecords = () => Record.bulkCreate(recordData);

module.exports = seedRecords;
