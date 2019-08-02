const router = require('express').Router();

const createQuizService = require('./create-quiz');

// export quiz related routers
router.use('/create', createQuizService);

module.exports = router;