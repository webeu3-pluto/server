const db = require("../../config/dbConfig");

module.exports = {
  getQuizByUUID: function(uuid) {
    return db
      .from("quiz")
      .join("categories", "categories.id", "quiz.cat_id")
      .join("subcategories", "subcategories.id", "quiz.subcat_id")
      .where({uuid})
      .select(
        "categories.name AS category",
        "subcategories.name as subCategory",
        "published as status"
      )
      .first();
  },
  getQuestionsByUUID: function(uuid) {}
};
