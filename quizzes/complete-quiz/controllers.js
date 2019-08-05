const CompleteQuiz = require("./model");
const QuizzesController = require("../quizzes/controllers");

module.exports = {
  completeNewQuiz: async function(studentQuiz, studentId) {
    await CompleteQuiz.completeQuiz(studentQuiz);
    return await QuizzesController.getQuizzesByStudentId(studentId);
  }
}