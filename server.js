const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const authRouter = require('./authentication/authRouter');
const profileRouter = require('./profile/profileRouter');
const cohortRouter = require('./cohort/cohortRouter');
const teamleadRouter = require('./teamlead/teamleadRouter');
const studentRouter = require('./student/studentRouter');
const quizzesRouter = require('./quizzes');
const { validateUser, restrict } = require('./helpers/middlware');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', validateUser, authRouter);
server.use('/api/profile', restrict, profileRouter);
server.use('/api/cohort', restrict, cohortRouter);
server.use('/api/teamlead', restrict, teamleadRouter);
server.use('/api/student', restrict, studentRouter);
server.use('/api/quizzes', restrict, quizzesRouter);

server.get('/', (req, res) => {
   try {
      res.status(200).send(`<h2>Welcome to Pluto API!!</h2>`);
   } catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together');
   }
});

module.exports = server;