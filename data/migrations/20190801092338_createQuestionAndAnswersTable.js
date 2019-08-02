
exports.up = function (knex) {
   return knex.schema.createTable('questionAnswers', qa => {
      qa.increments();
      qa.string('question', 128).notNullable();
      qa.string('p_answer1', 128).notNullable();
      qa.string('p_answer2', 128).notNullable();
      qa.string('p_answer3', 128).notNullable();
      qa.string('answer', 128).notNullable();
      qa
         .integer('quiz_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('quiz')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
   })
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('questionAnswers');
};
