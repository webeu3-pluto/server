const Users = require('../helpers/dbModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

module.exports = {
   validateUser: async function (req, res, next) {
      if (Object.keys(req.body).length !== 0 && req.body.constructor === Object) {
         const { firstName, lastName, email, password, role, cohort } = req.body;
         // this ternary operator is added as a fallback in case login req body is supplied without an email
         const user = email !== undefined ? await Users.getBy({ email }).first() : undefined;
         if (firstName && lastName && email && password && role && cohort && req.path === "/register") {
            if (user === undefined) {
               const token = generateToken(req.body);
               req.token = token;
               next();
            }
            else {
               res.status(403).json({ message: 'Email already in use' });
            };
         } else if (email && password && req.path === "/login") {
            if (user && bcrypt.compareSync(password, user.password)) {
               const token = generateToken(user);
               req.user = user;
               req.token = token;
               next();
            } else {
               res.status(401).json({ message: 'Oops! Invalid Credentials' });
            };
         } else {
            res.status(400).json({ message: 'You are missing some required fields!' })
         };
      } else {
         res.status(400).json({ message: 'Please supply user data!' })
      };
   },
   restrict: function (req, res, next) {
      const token = req.headers.authorization;
      if (token) {
         jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
               res.status(401).json({ message: 'Token validation failed!' })
            } else {
               req.decodedToken = decodedToken;
               next();
            }
         })
      } else {
         res.status(400).json({ message: 'Please supply token!' })
      };
   }
};

function generateToken(user) {
   const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      cohort: user.cohort
      // You can add more keys and useful pieces of info beyond this line
   };
   const options = {
      expiresIn: '30d'
   };
   return jwt.sign(payload, secret.jwtSecret, options);
};