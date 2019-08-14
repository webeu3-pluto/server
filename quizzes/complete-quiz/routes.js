const router = require("express").Router();
const Controllers = require("./controllers");

router.post('/:id', async (req, res) => {
  try {
    const quizzes = await Controllers.completeNewQuiz(req.body, req.body.student_id);
    res.status(201).json(quizzes);
  } catch (err) {
    res.json(err.message)
  }
});

router.get('/:quiz_id/:student_id', async (req, res) => {
  try {
    const { quiz_id, student_id } = req.params;
    const completedQuiz = await Controllers.fetchCompleteQuiz(student_id, quiz_id);
    res.status(200).json(completedQuiz);
  } catch (err) {
    res.json(err.message);
  }
})

module.exports = router;

