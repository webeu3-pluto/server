const router = require("express").Router();
const Controllers = require("./controllers");

router.post('/:id', async (req, res) => {
  try {
    const completedQuiz = await Controllers.completeNewQuiz(req.body, req.body.student_id);
    res.status(201).json(completedQuiz);
  } catch (err) {
    res.json(err.message)
  }
})

module.exports = router;

