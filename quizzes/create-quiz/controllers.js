const CreateQuiz = require('./model');

module.exports = {
  getQuizAndQsByUUID: async function(uuid) {
    const quiz = await CreateQuiz.getQuizByUUID(uuid);
    const questions = await CreateQuiz.getQuestionsByUUID(uuid);
    return {...quiz, questions}
  },
  createQuizAndQsByUUID: async function(teamLeadId, uuid) {
    const quiz = {
      uuid: uuid,
      teamlead_id: teamLeadId,
      cat_id: 1,
      subcat_id: 1,
      published: 0
    }
    return await CreateQuiz.createQuiz(quiz)
  }
}