const router = require("express").Router();
const { Record, UserRecord, Artist } = require("../../../../models");

//http://localhost:3001/api/artists/records
router.get("/", async (req, res) => {
  try {
    const recordData = await Record.findAll({
      include: [
        {
          model: Artist,
        },
      ],
    });
    res.status(200).json(recordData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  //direct to page with all records
});

//http://localhost:3001/api/artists/records/:id
router.get("/:id", async (req, res) => {
  try {
    const recordData = await Record.findByPk(req.params.id, {
      include: [
        {
          model: Artist,
        },
      ],
    });
    if (!recordData) {
      res.status(404).json({ message: "No record found with that id!" });
    }
    res.status(200).json(recordData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/artists/records
router.post("/", (req, res) => {
  Record.create(req.body)
    .then((record) => {
      if (req.body.userIds.length) {
        const recordUserIdArr = req.body.userIds.map((user_id) => {
          return {
            record_id: record.id,
            user_id,
          };
        });
        return UserRecord.bulkCreate(recordUserIdArr);
      }
      res.status(200).json(record);
    })
    .then((recordUserIds) => res.status(200).json(recordUserIds))
    .catch((err) => {
      res.status(400).json(err);
    });
});

//http://localhost:3001/api/artists/records/:id
router.put("/:id", (req, res) => {
  Record.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((record) => {
      if (req.body.userIds && req.body.userIds.length) {
        UserRecord.findAll({
          where: { record_id: req.params.id },
        }).then((userRecords) => {
          const recordUserIds = userRecords.map(({ user_id }) => user_id);
          const newUserRecord = req.body.userIds
            .filter((user_id) => !recordUserIds.includes(user_id))
            .map((user_id) => {
              return {
                record_id: req.params.id,
                user_id,
              };
            });

          const recordUsersToRemove = userRecords
            .filter(({ user_id }) => !req.body.userIds.includes(user_id))
            .map(({ id }) => id);
          return Promise.all([
            UserRecord.destroy({ where: { id: recordUsersToRemove } }),
            UserRecord.bulkCreate(newUserRecord),
          ]);
        });
      }
      return res.json(record);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//http://localhost:3001/api/artists/records/:id
router.delete("/:id", async (req, res) => {
  try {
    const recordData = await Record.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!recordData) {
      res.status(404).json({ message: "No record found with that id!" });
      return;
    }
    res.status(200).json(recordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
