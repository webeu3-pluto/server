const CreateQuiz = require("./model");

module.exports = {
  getQuizAndQsByUUID: async function(uuid) {
    const quiz = await CreateQuiz.getQuizByUUID(uuid);
    const questions = await CreateQuiz.getQuestionsByUUID(uuid);
    return { ...quiz, questions };
  },
  createQuizAndQsByUUID: async function(teamLeadId, uuidSent) {
    const quiz = {
      uuid: uuidSent,
      teamlead_id: teamLeadId,
      cat_id: 1,
      subcat_id: 1,
      published: 0
    };

    const quizId = await CreateQuiz.createQuiz(quiz);
    const createdQuiz = await CreateQuiz.getQuizByUUID(uuidSent);

    const sampleQuestion = {
      question: "This is your very first question! Try changing it.",
      p_answer1: "This is an incorrect answer!",
      p_answer2: "This is an incorrect answer!",
      p_answer3: "This is an incorrect answer!",
      answer:
        "This is the correct answer! The order that this will be shown to students will be randomised.",
      quiz_id: quizId
    };

    const questions = await CreateQuiz.createQuestion(sampleQuestion);
    return { ...createdQuiz, questions };
  },
  getCategories: async function() {
    return await CreateQuiz.getCategories();
  },
  getSubCategories: async function(id) {
    return await CreateQuiz.getSubcatsByCategory(id);
  },
  updateQuizByCatandSubcat: async function(cat_id, subcat_id, uuid) {
    return await CreateQuiz.updateCatAndSubcatForQuiz(cat_id, subcat_id, uuid);
  },
  updateStatusOfQuiz: async function(published, uuid) {
    return await CreateQuiz.updateStatusOfQuiz(published, uuid);
  },
  deleteQuestionOnQuiz: async function(id, uuid) {
    return await CreateQuiz.deleteQuizQuestion(id, uuid);
  },
  deleteQuiz: async function(uuid) {
    return await CreateQuiz.deleteQuizByUUID(uuid);
  }
};
