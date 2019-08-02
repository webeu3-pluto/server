const router = require("express").Router();
const Controllers = require("./controllers");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "functions" });
});

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
