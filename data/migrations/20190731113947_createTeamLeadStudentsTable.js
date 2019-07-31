
exports.up = function (knex) {
   return knex.schema.createTable('teamleadStudents', tls => {
      // this makes sure that any given pair of entry is not duplicated on the table.
      tls.primary(['student_id', 'teamlead_id']);
      tls
         .integer('student_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      tls
         .integer('teamlead_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
   });
};

exports.down = function (knex) {
   return knex.schema.dropTableIfExists('teamLeadStudents');
};
