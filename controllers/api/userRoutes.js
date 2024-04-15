const router = require("express").Router();
const { User } = require("../../models");

//http://localhost:3001/api/users
router.post("/", (req, res) => {
  //create new user once created add req.session.loggedIn
});

//http://localhost:3001/api/users/login
router.post("/login", (req, res) => {
  //login add req.session.loggedIn
});

//http://localhost:3001/api/users/logout
router.post("/logout", (req, res) => {
  //logout destroy req.session.loggedIn
});

module.exports = router;
