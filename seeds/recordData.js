const { Record } = require("../models");

const recordData = [
  {
    cover_art: "Cody_Fry_Flying.jpg",
    name: "Flying",
    year: "2017",
    artist_id: 1,
  },
  {
    cover_art: "Cody_Fry_The_End.jpg",
    name: "The End",
    year: "2023",
    artist_id: 1,
  },
  {
    cover_art: "d4vd_Petals_to_Thorns.jpg",
    name: "Petals To Thorns",
    year: "2023",
    artist_id: 2,
  },
  {
    cover_art: "d4vd_The_Lost_Petals.jpg",
    name: "The Lost Petals",
    year: "2023",
    artist_id: 2,
  },
  {
    cover_art: "Peach_Tree_Rascals_Mariposa.jpg",
    name: "Mariposa",
    year: "2019",
    artist_id: 3,
  },
  {
    cover_art: "Peach_Tree_Rascals_Mango.jpg",
    name: "Mango",
    year: "2019",
    artist_id: 3,
  },
  {
    cover_art: "Billy_Joel_The_Stranger.jpg",
    name: "The Stranger",
    year: "1977",
    artist_id: 4,
  },
  {
    cover_art: "Billy_Joel_The_Nylon_Curtain.jpg",
    name: "The Nylon Curtain",
    year: "1982",
    artist_id: 4,
  },
  {
    cover_art: "Queen_Greatest_Hits_Red.jpg",
    name: "Greatest Hits (Red)",
    year: "1981",
    artist_id: 5,
  },
  {
    cover_art: "Queen_Queen_II.jpg",
    name: "Queen II",
    year: "1974",
    artist_id: 5,
  },
  {
    cover_art: "Bowling_For_Soup_Drunk_Enough_to_Dance.jpg",
    name: "Drunk Enough to Dance",
    year: "2002",
    artist_id: 6,
  },
  {
    cover_art: "Bowling_For_Soup_A_Hangover_You_Dont_Deserve.jpg",
    name: "A Hangover You Don't Deserve",
    year: "2004",
    artist_id: 6,
  },
  {
    cover_art: "ABBA_Gold.jpg",
    name: "Gold",
    year: "1992",
    artist_id: 7,
  },
  {
    cover_art: "ABBA_Waterloo.jpg",
    name: "Waterloo",
    year: "1974",
    artist_id: 7,
  },
  {
    cover_art: "Lizzo_Special.jpg",
    name: "Special",
    year: "2022",
    artist_id: 8,
  },
  {
    cover_art: "Lizzo_Lizzobangers.jpg",
    name: "Lizzobangers",
    year: "2013",
    artist_id: 8,
  },
  {
    cover_art: "Beyonce_Lemonade.jpg",
    name: "Lemonade",
    year: "2016",
    artist_id: 9,
  },
  {
    cover_art: "Beyonce_Beyonce.jpg",
    name: "Beyonce",
    year: "2013",
    artist_id: 9,
  },
  {
    cover_art: "Joan_Jett_Album.jpg",
    name: "Album",
    year: "1983",
    artist_id: 10,
  },
  {
    cover_art: "Joan_Jett_I_Love_Rock_n_Roll.jpg",
    name: "I Love Rock 'n Roll",
    year: "1981",
    artist_id: 10,
  },
  {
    cover_art: "Backstreet_Boys_Backstreet_Boys.jpg",
    name: "Backstreet Boys",
    year: "1996",
    artist_id: 11,
  },
  {
    cover_art: "Backstreet_Boys_Millennium.jpg",
    name: "Millennium",
    year: "1999",
    artist_id: 11,
  },
  {
    cover_art: "Dido_Life_For_Rent.jpg",
    name: "Life for Rent",
    year: "2003",
    artist_id: 12,
  },
  {
    cover_art: "Dido_Still_on_My_Mind.jpg",
    name: "Still on My Mind",
    year: "2019",
    artist_id: 12,
  },
];

const seedRecords = () => Record.bulkCreate(recordData);

module.exports = seedRecords;
