
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teamLeadStudents').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teamLeadStudents').insert([
        { student_id: 6, teamLead_id: 1 },
        { student_id: 8, teamLead_id: 1 },
        { student_id: 29, teamLead_id: 1 },
        { student_id: 34, teamLead_id: 1 },
        { student_id: 5, teamLead_id: 2 },
        { student_id: 7, teamLead_id: 2 },
        { student_id: 9, teamLead_id: 2 },
        { student_id: 27, teamLead_id: 2 },
        { student_id: 35, teamLead_id: 3 },
        { student_id: 36, teamLead_id: 3 },
        { student_id: 37, teamLead_id: 3 },
        { student_id: 38, teamLead_id: 3 },
        { student_id: 11, teamLead_id: 4 },
        { student_id: 13, teamLead_id: 4 },
        { student_id: 16, teamLead_id: 4 },
        { student_id: 33, teamLead_id: 4 },
        { student_id: 10, teamLead_id: 14 },
        { student_id: 12, teamLead_id: 14 },
        { student_id: 21, teamLead_id: 14 },
        { student_id: 23, teamLead_id: 14 },
        { student_id: 22, teamLead_id: 15 },
        { student_id: 28, teamLead_id: 15 },
        { student_id: 31, teamLead_id: 15 },
        { student_id: 32, teamLead_id: 15 },
        { student_id: 24, teamLead_id: 19 },
        { student_id: 25, teamLead_id: 19 },
        { student_id: 26, teamLead_id: 19 },
        { student_id: 30, teamLead_id: 19 },
      ]);
    });
};
