const db = require("../database/dbConfig.js");

module.exports = {
  add,
  findAll,
  findBy,
  findById,
  remove,
};

function findAll() {
  return db("favorites");
}

function findBy(filter) {
  return db("favorites").where(filter);
}

async function add(fav) {
  const [id] = await db("favorites").insert(fav, "id");
  return findById(id);
}

function findById(id) {
  return db("favorites").join("users", "users.id", "favorites.user_id").where({ id }).first();
}

function remove(id) {
  return db("favorites").where("id", id).del();
}
