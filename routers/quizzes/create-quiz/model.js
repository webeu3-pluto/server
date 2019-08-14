const db = require("../../../config/dbConfig");

module.exports = {
  getQuizByUUID: function(uuid) {
    return db
      .from("quiz")
      .join("categories", "categories.id", "quiz.cat_id")
      .join("subcategories", "subcategories.id", "quiz.subcat_id")
      .where({ uuid })
      .select(
        "quiz.id",
        "uuid",
        "categories.name AS category",
        "categories.id as categoryId",
        "subcategories.name as subCategory",
        "subcategories.id as subCategoryId",
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
  },
  getCategories: function() {
    return db("categories").select("id as categoryId", "name as category");
  },
  getSubcatsByCategory: function(id) {
    return db("subcategories")
      .where({ cat_id: id })
      .select("id as subCategoryId", "name as subCategoryName");
  },
  updateCatAndSubcatForQuiz: function(cat_id, subcat_id, uuid) {
    return db("quiz")
      .where({ uuid })
      .update({ cat_id, subcat_id })
      .then(() => this.getQuizByUUID(uuid));
  },
  updateStatusOfQuiz: function(published, uuid) {
    return db("quiz")
      .where({ uuid })
      .update({ published })
      .then(() => this.getQuizByUUID(uuid));
  },
  deleteQuizQuestion: function(id, uuid) {
    return db("questionAnswers")
      .where({ id })
      .del()
      .then(() => this.getQuestionsByUUID(uuid));
  },
  updateQuizQuestion: function(question, id, uuid) {
    return db("questionAnswers")
      .where({ id })
      .update(question)
      .then(() => this.getQuestionsByUUID(uuid));
  },
  deleteQuizByUUID: function(uuid) {
    return db("quiz")
      .where({ uuid })
      .del();
  }
};