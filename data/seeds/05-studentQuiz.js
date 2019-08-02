
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('studentQuiz').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('studentQuiz').insert([
        { quiz_id: 1, student_id: 6, completed: false },
        { quiz_id: 1, student_id: 8, result: 78, completed: true },
        { quiz_id: 1, student_id: 29, completed: false },
        { quiz_id: 1, student_id: 34, result: 82, completed: true },
        { quiz_id: 3, student_id: 5, completed: false },
        { quiz_id: 3, student_id: 7, result: 100, completed: true },
        { quiz_id: 3, student_id: 9, completed: false },
        { quiz_id: 3, student_id: 27, result: 90, completed: true },
        { quiz_id: 5, student_id: 35, completed: false },
        { quiz_id: 5, student_id: 36, result: 76, completed: true },
        { quiz_id: 5, student_id: 37, completed: false },
        { quiz_id: 5, student_id: 38, result: 84, completed: true },
        { quiz_id: 7, student_id: 11, completed: false },
        { quiz_id: 7, student_id: 13, result: 96, completed: true },
        { quiz_id: 7, student_id: 16, completed: false },
        { quiz_id: 7, student_id: 33, result: 98, completed: true },
        { quiz_id: 9, student_id: 10, completed: false },
        { quiz_id: 9, student_id: 12, result: 74, completed: true },
        { quiz_id: 9, student_id: 21, completed: false },
        { quiz_id: 9, student_id: 23, result: 86, completed: true },
        { quiz_id: 11, student_id: 22, completed: false },
        { quiz_id: 11, student_id: 28, result: 90, completed: true },
        { quiz_id: 11, student_id: 31, completed: false },
        { quiz_id: 11, student_id: 32, result: 70, completed: true },
        { quiz_id: 13, student_id: 24, completed: false },
        { quiz_id: 13, student_id: 25, result: 92, completed: true },
        { quiz_id: 13, student_id: 26, completed: false },
        { quiz_id: 13, student_id: 30, result: 82, completed: true },
      ]);
    });
};
