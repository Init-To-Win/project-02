const { Artist } = require("../models");

const artistData = [
  {
    name: "Cody Fry",
  },
  {
    name: "d4vd",
  },
  {
    name: "Peach Tree Rascals",
  },
  {
    name: "Billy Joel",
  },
  {
    name: "Queen",
  },
  {
    name: "Bowling For Soup",
  },
  {
    name: "ABBA",
  },
  {
    name: "Lizzo",
  },
  {
    name: "Beyonce",
  },
  {
    name: "Joan Jett",
  },
  {
    name: "Backstreet Boys",
  },
  {
    name: "Dido",
  },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
