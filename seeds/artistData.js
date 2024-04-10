const { Artist } = require("../models");

const artistData = [
  {
    name: "",
  },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
