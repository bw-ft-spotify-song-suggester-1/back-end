const db = require("../database/dbConfig.js");

module.exports = {
  add,
  addFav,
  find,
  findBy,
  findById,
  update,
  remove,
  findUserFavs,
};

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function update(id, changes) {
  return db("users").where({ id }).update(changes);
}

function remove(id) {
  return db("users").where("id", id).del();
}

function findById(id) {
  return db("users").where({ id }).first();
}

function findFavById(id) {
  return db("favorites").where({ id }).first();
}

function addFav(favorite) {
  return db("favorites")
    .insert(favorite, "id")
    .then((ids) => {
      console.log(ids);
      const [id] = ids;
      return findFavById(id);
    });
}

function findUserFavs(id) {
  return db("favorites").where({ user_id: id });
}
