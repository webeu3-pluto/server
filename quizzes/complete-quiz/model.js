const db = require("../../config/dbConfig");

module.exports = {
  completeQuiz: function(studentQuiz) {
    return db("studentQuiz").insert(studentQuiz)
  }
}