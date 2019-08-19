const db = require("../../../config/dbConfig");

module.exports = {
  completeQuiz: function(studentQuiz) {
    return db("studentQuiz").insert(studentQuiz);
  },
  getCompleteQuiz: function(quiz_id, student_id) {
    return db.raw(`
      SELECT 
        *
      FROM studentQuiz
      WHERE student_id = ${student_id} AND quiz_id = ${quiz_id}
  `);
  }
};
