exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
    users.string("phoneNumber", 128);
    users.integer("avatar_id").defaultTo(null);
    users.boolean("useTwilio").defaultTo(false);
    users.string("timezone").defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
