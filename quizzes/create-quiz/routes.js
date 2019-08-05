const router = require("express").Router();
const Controllers = require("./controllers");

router.get('/categories', async (req, res) => {
  try {
    const categories = await Controllers.getCategories();
    res.status(200).json(categories);
  } catch (err) {

  }
})

router.get('/subcategories/:id', async (req, res) => {
  try {
    const subcategories = await Controllers.getSubCategories(req.params.id);
    res.status(200).json(subcategories);
  } catch (err) {

  }
})

router.get("/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    const quizAndQs = await Controllers.getQuizAndQsByUUID(uuid);
    res.status(200).json(quizAndQs);
  } catch (err) {
    res.send(err);
  }
});

router.post("/:uuid", async (req, res) => {
  try {
    const { uuid, teamLeadId } = req.body;
    const createdQuiz = await Controllers.createQuizAndQsByUUID(teamLeadId, uuid);
    res.status(201).json(createdQuiz)
  } catch(err) {
    res.send(err.message);
  }
});

module.exports = router;
