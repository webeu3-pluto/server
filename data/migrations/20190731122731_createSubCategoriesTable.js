
exports.up = function (knex) {
   return knex.schema.createTable('subcategories', sub => {
      sub.increments();
      sub.string('name', 128).notNullable().unique();
      sub
         .integer('cat_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('categories')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
   })
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('subcategories');
};
