const db = require("../../config/dbConfig");

module.exports = {
  getQuizzesByTeamLeadID: function(id) {
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
  }
};

