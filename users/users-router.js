const router = require("express").Router();
const Users = require("../users/users-model.js");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});

module.exports = router;
