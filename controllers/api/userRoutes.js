const router = require("express").Router();
const { User, Artist, UserRecord, Record } = require("../../models");

//http://localhost:3001/api/users
// router.get("/", async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       include: [
//         {
//           model: Record,
//           through: UserRecord,
//           as: "user_records",
//         },
//       ],
//     });

//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//http://localhost:3001/api/users
router.get("/", async (req, res) => {
  try {
    const userData = [
      await User.findByPk(req.session.userId, {
        include: [
          {
            model: Record,
            through: UserRecord,
            as: "user_records",
            include: [{ model: Artist }],
          },
        ],
      }),
    ];
    console.log(`*************${req.session.userId}****************`);
    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    // const users = userData.map((user) => user.get({ plain: true }));
    // console.log(users[0].user_records);
    // res.render("userpage", {
    //   users,
    //   loggedIn: req.session.loggedIn,
    //   userId: req.session.userId,
    // });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/users
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;

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
        email: req.body.email,
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
      //   res.session.user_name = req.body.user_name;
      req.session.loggedIn = true;
      req.session.userId = userData.id;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/users/logout
router.post("/logout", (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      console.log("destroyed");
      res.status(204).end();
    });
  } else {
    console.log("not destroyed");
    res.status(404).end();
  }
});

module.exports = router;
