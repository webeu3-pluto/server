
exports.up = function (knex) {
   return knex.schema.createTable('studentQuiz', sq => {
      sq.primary(['quiz_id', 'student_id']);
      sq
         .integer('quiz_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('quiz')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      sq
         .integer('student_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      sq.integer('result');
      sq.boolean('completed').defaultTo(false).notNullable();
   })
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('studentQuiz');
};
