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
  createQuiz: function(quiz) {
    return db('quiz').insert(quiz).then(() => this.getQuizByUUID(quiz.uuid));
  }

  /*
    INSERT INTO quiz (uuid, cat_id, subcat_id, teamlead_id, published)
    VALUES ('5ea5fc67-c4aa-4f4a-94ee-7af6a65f69da', 1, 1, 1, 0);
  */
};
