const router = require("express").Router();
const Controllers = require("./controllers");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const quizzes = await Controllers.getQuizByTeamLead(id);
    res.status(200).json(quizzes);
  } catch (err) {
    res.send(err.message);
  }
});


module.exports = router;
