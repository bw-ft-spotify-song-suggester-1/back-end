exports.up = function (knex) {
  return knex.schema.createTable("favorites", (favs) => {
    favs.increments();
    favs.string("name", 128).notNullable().index();
    favs.string("artist", 128).index().defaultTo("unknown");
    favs.string("album", 128).index().defaultTo("unknown");
    favs.string("spotify_id", 128).index();
    favs.string("uri", 128).index();
    favs.integer("popularity", 128).unsigned().index();
    favs.string("preview_url", 128).index();
    favs.string("image", 128);
    favs
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("favorites");
};
