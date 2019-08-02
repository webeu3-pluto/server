const CreateQuiz = require('./model');

module.exports = {
  getQuizAndQsByUUID: async function(uuid) {
    const quiz = await CreateQuiz.getQuizByUUID(uuid);
    const questions = await CreateQuiz.getQuestionsByUUID(uuid);
    return {...quiz, questions}
  }
}