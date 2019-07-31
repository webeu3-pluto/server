
exports.up = function (knex) {
   return knex.schema.createTable('categories', cat => {
      cat.increments();
      cat.string('name', 128).notNullable().unique();
   });
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('categories');
};
