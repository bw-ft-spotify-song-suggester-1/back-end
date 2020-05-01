const router = require("express").Router();
const Favs = require("../favorites/favorites-model");

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Favs.remove(id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({
          id,
          message: "Favorite deleted",
        });
      } else {
        res
          .status(200)
          .json({ message: "Couldn't find a favorite with this id" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error deleting favorite" });
    });
});

router.get("/", (req, res) => {
  Favs.findAll()
    .then((favs) => {
      res.status(200).json(favs);
    })
    .catch((err) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
