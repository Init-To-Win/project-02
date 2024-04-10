const { User } = require("../models");

const userData = [
  {
    user_name: "GeraldineW",
    email: "GW@abc.com",
    password: "password01",
  },
  {
    user_name: "MorrisL",
    email: "ML@abc.com",
    password: "password02",
  },
  {
    user_name: "AChase",
    email: "AC@abc.com",
    password: "password03",
  },
  {
    user_name: "MBentley",
    email: "MB@abc.com",
    password: "password04",
  },
  {
    user_name: "LeonMcM",
    email: "LM@abc.com",
    password: "password05",
  },
  {
    user_name: "HughSZ",
    email: "HS@abc.com",
    password: "password06",
  },
  {
    user_name: "IGardner",
    email: "IG@abc.com",
    password: "password07",
  },
  {
    user_name: "ConstanceG",
    email: "CG@abc.com",
    password: "password08",
  },
  {
    user_name: "LeoSilva",
    email: "LS@abc.com",
    password: "password09",
  },
  {
    user_name: "MMarshall",
    email: "MM@abc.com",
    password: "password10",
  },
  {
    user_name: "BonnieD",
    email: "BD@abc.com",
    password: "password11",
  },
  {
    user_name: "JuanH",
    email: "JH@abc.com",
    password: "password12",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
