const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "admin",
          password: bcrypt.hashSync("password", 10),
          phoneNumber: "5555555555"
        },
        {
          id: 2,
          username: "admin2",
          password: bcrypt.hashSync("password2", 10),
          phoneNumber: "5555555555"
        }
      ]);
    });
};
