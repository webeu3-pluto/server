const CreateQuiz = require('./model');

module.exports = {
  getQuizAndQsByUUID: async function(uuid) {
    return await CreateQuiz.getQuizByUUID(uuid);
  }
}