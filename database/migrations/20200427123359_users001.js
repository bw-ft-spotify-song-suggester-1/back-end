exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments();
    users.string("username", 128).notNullable().index().unique();
    users.string("password", 128).notNullable();
    users.integer("age", 128).index().defaultTo(18);
    users.string("gender", 128).index().defaultTo('unknown');
    users.string("location", 128).index().defaultTo('unknown');
    users.string("genre", 128).index().defaultTo('unknown');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
