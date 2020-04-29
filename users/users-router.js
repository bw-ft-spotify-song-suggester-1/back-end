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
      res.status(200).json({ message: "Account successfully updated" });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// remove specific user by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Users.remove(id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "Account successfully deleted" });
      } else {
        res.status(200).json({ message: "Account not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// add favorite by user id
router.post("/:id/favs", (req, res) => {
  const id = req.params.id;
  req.body.user_id = id;
  const favorite = req.body;

  Users.addFav(favorite)
    .then((fav) => {
      res.status(201).json(fav);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// get favorites by user id
router.get("/:id/favs", (req, res) => {
  const id = req.params.id;
  Users.findUserFavs(id)
    .then((favs) => {
      res.status(200).json(favs);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
