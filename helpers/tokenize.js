const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

module.exports = {
   generateToken: function (user) {
      const payload = {
         sub: user.id,
         role: user.role,
         cohort: user.cohort
         // You can add more keys and useful pieces of info beyond this line
      };
      const options = {
         expiresIn: '30d'
      };
      return jwt.sign(payload, secret.jwtSecret, options);
   }
}