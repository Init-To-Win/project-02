const { User } = require("../models");

const userData = [
  {
    user_name: "",
    email: "",
    password: "",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
