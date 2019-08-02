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
  }

  /*
    SELECT questionAnswers.id, question, p_answer1, p_answer2, p_answer3, answer
    FROM quiz
    JOIN questionAnswers
    ON questionAnswers.quiz_id = quiz.id
    WHERE uuid="5245ed69-a51c-4bf0-91c4-5a08c914fd08"
  */
};
