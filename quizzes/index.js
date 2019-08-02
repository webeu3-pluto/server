const router = require('express').Router();

const createQuizService = require('./create-quiz');
const quizzesService = require('./quizzes');

// export quiz related routers
router.use('/', quizzesService);
router.use('/create', createQuizService);

module.exports = router;