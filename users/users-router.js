const bcrypt = require("bcryptjs");
const router = require("express").Router();
const Users = require("../users/users-model.js");

// get all users
router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});

// get specific user by id
router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});

// update specific user by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  if (changes.password) {
    const hash = bcrypt.hashSync(changes.password, 8);
    changes.password = hash;
  }
  Users.update(id, changes)
    .then((count) => {
      res.status(200).json({ "accounts updated": count });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error updating user" });
    });
});

// remove specific user by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Users.remove(id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ "Accounts Deleted": count });
      } else {
        res.status(200).json({ message: "Account not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error deleting user" });
    });
});

module.exports = router;
