const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const authRouter = require('./routers/authentication/authRouter');
const profileRouter = require('./routers/profile/profileRouter');
const cohortRouter = require('./routers/cohort/cohortRouter');
const teamleadRouter = require('./routers/teamlead/teamleadRouter');
const studentRouter = require('./routers/student/studentRouter');
const quizzesRouter = require('./routers/quizzes');
const { validateUser, restrict } = require('./helpers/middlware');
const { welcomeMessage, errorMessage } = require('./helpers/variables');

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
      res.status(200).send(welcomeMessage);
   } catch (error) {
      res.status(500).json(errorMessage);
   }
});

module.exports = server;