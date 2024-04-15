const router = require("express").Router();
const { User } = require("../../models");

//http://localhost:3001/api/users
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_name = req.body.user_name;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/users/login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });

    if (!userData) {
      res.status(400).json({
        userData,
        message: "Incorrect username or password. Please try again!",
      });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      res.session.loggedIn = true;
      //   res.session.user_name = req.body.user_name;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/users/logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    res.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
