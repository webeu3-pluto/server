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

module.exports = router;
