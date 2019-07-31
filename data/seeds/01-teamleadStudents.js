
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teamLeadStudents').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teamLeadStudents').insert([
        { student_id: 5, teamLead_id: 3 },
        { student_id: 6, teamLead_id: 1 },
        { student_id: 7, teamLead_id: 3 },
        { student_id: 9, teamLead_id: 2 },
        { student_id: 8, teamLead_id: 1 },
        { student_id: 15, teamLead_id: 2 },
        { student_id: 11, teamLead_id: 4 },
        { student_id: 13, teamLead_id: 4 },
        { student_id: 12, teamLead_id: 14 },
        { student_id: 10, teamLead_id: 14 }
      ]);
    });
};
