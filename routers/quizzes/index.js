const router = require('express').Router();

const createQuizService = require('./create-quiz');
const quizzesService = require('./quizzes');
const completeQuizService = require('./complete-quiz');

// export quiz related routers
router.use('/', quizzesService);
router.use('/create', createQuizService);
router.use('/complete', completeQuizService)

module.exports = router;