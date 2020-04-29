const db = require("../database/dbConfig.js");

module.exports = {
  findAll,
  findBy,
  remove,
};

function findAll() {
  return db("favorites");
}

function findBy(filter) {
  return db("favorites").where(filter);
}

function remove(id) {
  return db("favorites").where("id", id).del();
}
