const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());


server.get('/', (req, res) => {
   try {
      res.status(200).send(`<h2>Welcome to Pluto API!!</h2>`)
   } catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together')
   }
});

module.exports = server;