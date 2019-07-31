const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const authRouter = require('./authentication/authRouter');
const mainRouter = require('./main/mainRouter');
const { validateUser, restrict } = require('./helpers/middlware');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', validateUser, authRouter);
server.use('/api/restricted', restrict, mainRouter);

server.get('/', (req, res) => {
   try {
      res.status(200).send(`<h2>Welcome to Pluto API!!</h2>`)
   } catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together')
   }
});

module.exports = server;