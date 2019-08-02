
exports.up = function (knex) {
   return knex.schema.createTable('quiz', quiz => {
      quiz.increments();
      quiz
         .integer('cat_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('categories')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      quiz
         .integer('subcat_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('subcategories')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      quiz
         .integer('teamlead_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      quiz.boolean('published').defaultTo(false).notNullable();

   })
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('quiz');
};
