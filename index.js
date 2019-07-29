require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 5005;

server.listen(port, () => {
   console.log(`Server locked and loaded on port ${port}!!`)
});