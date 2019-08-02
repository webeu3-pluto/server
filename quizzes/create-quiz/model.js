const db = require("../../config/dbConfig");

module.exports = {
  getQuizByUUID: function(uuid) {
    return db
      .from("quiz")
      .join("categories", "categories.id", "quiz.cat_id")
      .join("subcategories", "subcategories.id", "quiz.subcat_id")
      .where({ uuid })
      .select(
        "uuid",
        "categories.name AS category",
        "subcategories.name as subCategory",
        "published as status"
      )
      .first();
  },
  getQuestionsByUUID: function(uuid) {
    return db
      .from("quiz")
      .join("questionAnswers", "questionAnswers.quiz_id", "quiz.id")
      .select(
        "questionAnswers.id",
        "question",
        "p_answer1",
        "p_answer2",
        "p_answer3",
        "answer"
      )
      .where({ uuid });
  },
  getQuestionByID: function(id) {
    return db("questionAnswers").where({ id });
  },
  createQuiz: function(quiz) {
    return db("quiz")
      .insert(quiz)
      .then(([id]) => id);
  },
  createQuestion: function(question) {
    return db("questionAnswers")
      .insert(question)
      .then(([id]) => this.getQuestionByID(id));
  }

  /*
    INSERT INTO questionAnswers (question, p_answer1, p_answer2, p_answer3, answer, quiz_id)
    VALUES ('This is your first question', 'This is an incorrect answer', 'This is an incorrect answer', 'This is an incorrect answer', 'This is an correct answer', 1);

  */
};
