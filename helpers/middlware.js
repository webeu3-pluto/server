const Users = require('../helpers/dbModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

module.exports = {
   validateUser: async function (req, res, next) {
      if (Object.keys(req.body).length !== 0 && req.body.constructor === Object) {
         const { firstName, lastName, email, password, role, cohort } = req.body;
         if (firstName && lastName && email && password && role && cohort && req.path === "/register") {
            const user = await Users.getBy({ email })
            if (user.length != 0) {
               res.status(403).json({ message: 'Email already in use' })
            }
            else {
               next();
            }
         } else if (email && password && req.path === "/login") {
            next();
         } else {
            res.status(400).json({ message: 'You are missing some required fields!' })
         }
      } else {
         res.status(400).json({ message: 'Please supply user data!' })
      };
   },
   validateLogin: function (req, res, next) {
      let { email, password } = req.body
      Users.getBy({ email })
         .first()
         .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
               const token = generateToken(user);
               req.user = user;
               req.token = token;
               next();
            } else {
               res.status(401).json({ message: 'Oops! Invalid Credentials' });
            }
         })
         .catch((error) => {
            res.status(401).json({ message: 'Oops! Invalid Credentials' });
         });
   },
   restrict: function (req, rex, next) {
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
      }
   }
};

function generateToken(user) {
   const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      cohort: user.cohort
      // You can add more keys and useful pieces of info beyond this line
   }
   const options = {
      expiresIn: '1d'
   }
   return jwt.sign(payload, secret.jwtSecret, options);
};