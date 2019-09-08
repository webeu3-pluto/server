const db = require("../../../config/dbConfig");

module.exports = {
  getQuizzesByTeamLeadID: function (id) {
    return db.raw(`
    SELECT 
      uuid,
      quiz.id,
      subcategories.name AS quiz,
      AVG(studentQuiz.completed) AS completionRate,
      AVG(studentQuiz.result) as score,
      quiz.published as status
    FROM quiz
    LEFT JOIN subcategories
    ON subcategories.id = subcat_id
    LEFT JOIN studentQuiz
    ON studentQuiz.quiz_id = quiz.id
    WHERE teamlead_id = ${id}
    GROUP BY uuid
    `);
  },
  findQuizzesByStudentId: function (id) {
    return db.raw(`
    SELECT
      uuid,
      quiz.id,
      quiz.published,
      subcategories.name as quiz,
      firstName,
      lastName,
      studentQuiz.result as score,
      studentQuiz.completed as status
    FROM teamleadStudents
    JOIN quiz
    ON quiz.teamlead_id = teamleadStudents.teamlead_id
    LEFT JOIN studentQuiz
    ON studentQuiz.student_id = teamleadStudents.student_id 
    AND studentQuiz.quiz_id = quiz.id
    JOIN subcategories
    ON subcategories.id = subcat_id
    JOIN users
    ON users.id = teamleadStudents.teamlead_id
    WHERE teamleadStudents.student_id = ${id}
`)
  },
};