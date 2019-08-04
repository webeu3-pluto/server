const Quizzes = require("./model");

module.exports = {
  getQuizByTeamLead: async function(id) {
    const quizzes = await Quizzes.getQuizzesByTeamLeadID(id);
    const formattedQuizzes = quizzes.map(quiz => {
      if (quiz.score === null) quiz.score = 0;
      if (quiz.completionRate === null) {
        quiz.completionRate = 0;
      } else {
        quiz.completionRate *= 100;
      }
      if (quiz.status === 1) {
        quiz.status = 'Active'
      } else {
        quiz.status = 'Draft'
      }
      return quiz;
    });
    return formattedQuizzes;
  },
  getQuizzesByStudentId: async function(id) {
    const quizzes = await Quizzes.findQuizzesByStudentId(id);
    const formattedQuizzes = quizzes.map(quiz => {
      if (quiz.score === null) quiz.score = 0;
      if (quiz.status === 1) {
        quiz.status = 'Complete'
      } else {
        quiz.status = 'Incomplete'
      }
      quiz.teamLead = `${quiz.firstName} ${quiz.lastName}`
      return quiz;
    })
    const filteredQuizzes = quizzes.filter(quiz => quiz.published === 1)
    return filteredQuizzes;
  }
};
