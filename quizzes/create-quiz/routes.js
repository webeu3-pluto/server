const router = require("express").Router();
const Controllers = require("./controllers");

router.get("/categories", async (req, res) => {
  try {
    const categories = await Controllers.getCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/subcategories/:id", async (req, res) => {
  try {
    const subcategories = await Controllers.getSubCategories(req.params.id);
    res.status(200).json(subcategories);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const quizAndQs = await Controllers.getQuizAndQsByUUID(uuid);
    res.status(200).json(quizAndQs);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/:uuid", async (req, res) => {
  try {
    const { uuid, teamLeadId } = req.body;
    const createdQuiz = await Controllers.createQuizAndQsByUUID(
      teamLeadId,
      uuid
    );
    res.status(201).json(createdQuiz);
  } catch (err) {
    res.send(err.message);
  }
});

router.put("/:uuid/categories", async (req, res) => {
  try {
    const { uuid, cat_id, subcat_id } = req.body;
    const updatedQuiz = await Controllers.updateQuizByCatandSubcat(
      cat_id,
      subcat_id,
      uuid
    );
    res.status(200).json(updatedQuiz);
  } catch (err) {
    res.send(err.message);
  }
});

router.put("/:uuid/published", async (req, res) => {
  try {
    const { published, uuid } = req.body;
    const updatedQuiz = await Controllers.updateStatusOfQuiz(published, uuid);
    res.status(200).json(updatedQuiz);
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/question/:id", async (req, res) => {
  try {
    const { id, uuid } = req.body;
    const updatedQuiz = await Controllers.deleteQuestionOnQuiz(id, uuid);
    res.status(200).json(updatedQuiz);
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    const { uuid } = req.body;
    await Controllers.deleteQuiz(uuid);
    res.status(200).json({ message: "Quiz deleted" });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
